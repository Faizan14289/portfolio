"use client";

import { useEffect, useRef, useState } from "react";
import NodeDetailPanel, { NodeData } from "./NodeDetailPanel";

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const NODE_DATA: NodeData[] = [
  {
    type: "project",
    label: "Botsify",
    category: "AI · Agentic Platform",
    description:
      "Multi-LLM agentic AI layer with real-time voice calls, RAG pipelines, MCP integrations, and a Vue 3 management dashboard.",
    tags: ["Laravel", "Vue 3", "OpenAI", "WebSocket", "Redis"],
    link: "https://botsify.com",
    color: 0xf0abfc,
    accent: "#f0abfc",
  },
  {
    type: "project",
    label: "StaffViz",
    category: "SaaS · Workforce Intelligence",
    description:
      "End-to-end platform for recruitment, scheduling, tasks, and real-time analytics with multi-tenant architecture.",
    tags: ["Laravel", "React", "MySQL", "Redis", "Docker"],
    link: "https://www.staffviz.com",
    color: 0x7c3aed,
    accent: "#a78bfa",
  },
  {
    type: "project",
    label: "MyTailorStore",
    category: "E-commerce · Custom Tailoring",
    description:
      "High-conversion bespoke fashion storefront with configurable garments, fabric catalog, and custom order flows.",
    tags: ["Laravel", "Vue 3", "Stripe", "MySQL"],
    link: "https://www.mytailorstore.com",
    color: 0x5eead4,
    accent: "#5eead4",
  },
  {
    type: "skill",
    label: "Multi-LLM Engine",
    category: "AI · Backend",
    description:
      "Routing and orchestrating OpenAI, Claude, Gemini, and Mistral with fallback chains, cost controls, and per-tenant model switching.",
    tags: ["OpenAI", "Claude", "Gemini", "LiteLLM", "Laravel"],
    link: null,
    color: 0xfbbf24,
    accent: "#fbbf24",
  },
  {
    type: "skill",
    label: "RAG Pipelines",
    category: "AI · Retrieval",
    description:
      "Production-grade retrieval-augmented generation with vector search, document chunking, and context injection into LLM prompts.",
    tags: ["Pinecone", "pgvector", "OpenAI Embeddings", "Laravel"],
    link: null,
    color: 0x34d399,
    accent: "#34d399",
  },
  {
    type: "skill",
    label: "Voice AI",
    category: "Real-Time · WebRTC",
    description:
      "Per-utterance voice pipelines with STT, LLM reasoning, TTS, and tool-use — deployed via call-js and Laravel backend split.",
    tags: ["Twilio", "WebRTC", "Node.js", "Laravel", "MCP"],
    link: null,
    color: 0xf472b6,
    accent: "#f472b6",
  },
  {
    type: "skill",
    label: "Laravel SaaS",
    category: "Backend · Architecture",
    description:
      "Multi-tenant SaaS platforms with domain isolation, role-based access, Horizon queues, Sanctum auth, and Docker deployments.",
    tags: ["Laravel", "PHP", "MySQL", "Redis", "Docker"],
    link: null,
    color: 0x818cf8,
    accent: "#818cf8",
  },
  {
    type: "skill",
    label: "Vue 3 + React",
    category: "Frontend · SPA",
    description:
      "Production dashboards and storefronts with Pinia state, composables, Tailwind, real-time socket subscriptions, and Framer Motion.",
    tags: ["Vue 3", "React", "Tailwind", "TypeScript", "Pinia"],
    link: null,
    color: 0x38bdf8,
    accent: "#38bdf8",
  },
];

function fibonacciSphere(count: number, radius = 1) {
  const points: { x: number; y: number; z: number }[] = [];
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = GOLDEN_ANGLE * i;
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return points;
}

export default function HeroOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Three.js refs
  const nodeMeshesRef = useRef<any[]>([]);
  const raycasterRef = useRef<any>(null);
  const mouseRef = useRef<any>(null);
  const autoRotateRef = useRef(true);
  const selectedMeshRef = useRef<any>(null);
  const hoveredMeshRef = useRef<any>(null);
  const ringRef = useRef<any>(null);
  const resumeTimeoutRef = useRef<any>(null);
  const touchStartRef = useRef<{ x: number; y: number; moved: number } | null>(null);
  const glowSpritesRef = useRef<any[]>([]);
  const starParticlesRef = useRef<any>(null);

  const handlePanelClose = () => {
    setIsPanelOpen(false);
    setSelectedNode(null);
    restoreSelectedNodeAppearance();
    autoRotateRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const restoreSelectedNodeAppearance = () => {
    if (selectedMeshRef.current) {
      const data = selectedMeshRef.current.userData as NodeData & {
        originalColor: string;
        baseScale: number;
      };
      selectedMeshRef.current.material.color.set(data.originalColor);
      selectedMeshRef.current = null;
    }
    if (ringRef.current) {
      ringRef.current.geometry.dispose();
      ringRef.current.material.dispose();
      ringRef.current.parent?.remove(ringRef.current);
      ringRef.current = null;
    }
  };

  // Escape key closes panel
  useEffect(() => {
    if (!isPanelOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handlePanelClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPanelOpen]);

  useEffect(() => {
    let disposed = false;
    let renderer: any;
    let scene: any;
    let camera: any;
    let edges: any;
    let rafId = 0;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let nodePoints: { x: number; y: number; z: number }[] = [];
    let reducedMotion = false;
    let THREE_MODULE: typeof import("three") | null = null;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    reducedMotion = prefersReducedMotion.matches;

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 35 : 60;
    nodePoints = fibonacciSphere(nodeCount, 1);

    function init() {
      import("three").then((THREE) => {
        THREE_MODULE = THREE;
        if (disposed) return;

        const width = container!.clientWidth;
        const height = container!.clientHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

        raycasterRef.current = new THREE.Raycaster();
        mouseRef.current = new THREE.Vector2();

        scene = new THREE.Scene();
        scene.background = new THREE.Color("#0D0D0D");

        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 3.1;

        renderer = new THREE.WebGLRenderer({
          canvas: canvas!,
          antialias: !isMobile,
          alpha: false,
          powerPreference: "high-performance",
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(dpr);

        // Core sphere
        const coreGeometry = new THREE.SphereGeometry(0.22, 32, 32);
        const coreMaterial = new THREE.MeshBasicMaterial({
          color: "#c084fc",
          transparent: true,
          opacity: 0.9,
        });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        scene.add(core);

        // Core glow sprite
        const glowCanvas = document.createElement("canvas");
        glowCanvas.width = 128;
        glowCanvas.height = 128;
        const glowCtx = glowCanvas.getContext("2d")!;
        const glowGradient = glowCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
        glowGradient.addColorStop(0, "rgba(192, 132, 252, 0.55)");
        glowGradient.addColorStop(0.5, "rgba(124, 58, 237, 0.15)");
        glowGradient.addColorStop(1, "rgba(10, 10, 15, 0)");
        glowCtx.fillStyle = glowGradient;
        glowCtx.fillRect(0, 0, 128, 128);
        const glowTexture = new THREE.CanvasTexture(glowCanvas);
        const glowMaterial = new THREE.SpriteMaterial({
          map: glowTexture,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const glowSprite = new THREE.Sprite(glowMaterial);
        glowSprite.scale.set(2.4, 2.4, 1);
        scene.add(glowSprite);

        // Wireframe outer sphere
        const wireGeometry = new THREE.SphereGeometry(1.65, 24, 24);
        const wireMaterial = new THREE.MeshBasicMaterial({
          color: "#2e1065",
          wireframe: true,
          transparent: true,
          opacity: 0.1,
        });
        const wireSphere = new THREE.Mesh(wireGeometry, wireMaterial);
        scene.add(wireSphere);

        // Inner wireframe (second layer for depth)
        const innerWireGeometry = new THREE.SphereGeometry(1.25, 16, 16);
        const innerWireMaterial = new THREE.MeshBasicMaterial({
          color: "#4c1d95",
          wireframe: true,
          transparent: true,
          opacity: 0.05,
        });
        const innerWireSphere = new THREE.Mesh(innerWireGeometry, innerWireMaterial);
        scene.add(innerWireSphere);

        // Shared glow texture for nodes
        const nodeGlowCanvas = document.createElement("canvas");
        nodeGlowCanvas.width = 64;
        nodeGlowCanvas.height = 64;
        const nodeGlowCtx = nodeGlowCanvas.getContext("2d")!;
        const nodeGlowGrad = nodeGlowCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
        nodeGlowGrad.addColorStop(0, "rgba(255,255,255,0.9)");
        nodeGlowGrad.addColorStop(0.3, "rgba(255,255,255,0.25)");
        nodeGlowGrad.addColorStop(1, "rgba(255,255,255,0)");
        nodeGlowCtx.fillStyle = nodeGlowGrad;
        nodeGlowCtx.fillRect(0, 0, 64, 64);
        const nodeGlowTexture = new THREE.CanvasTexture(nodeGlowCanvas);

        // Nodes
        const nodeGeometry = new THREE.SphereGeometry(1, 14, 14);

        nodeMeshesRef.current = nodePoints.map((p, i) => {
          const data = NODE_DATA[i % NODE_DATA.length];
          const material = new THREE.MeshBasicMaterial({ color: data.color });
          const mesh = new THREE.Mesh(nodeGeometry, material);
          const baseScale = i % 7 === 0 ? 0.075 : 0.058;
          mesh.scale.setScalar(baseScale);
          mesh.position.set(p.x, p.y, p.z);
          mesh.userData = {
            ...data,
            originalColor: data.color,
            baseScale,
            index: i,
          };
          scene.add(mesh);

          // Glow halo per node
          const glowMaterial = new THREE.SpriteMaterial({
            map: nodeGlowTexture,
            color: data.color,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          });
          const glowSprite = new THREE.Sprite(glowMaterial);
          glowSprite.scale.set(baseScale * 6, baseScale * 6, 1);
          glowSprite.position.copy(mesh.position);
          glowSprite.userData = { parentNode: mesh };
          scene.add(glowSprite);
          glowSpritesRef.current.push(glowSprite);

          return mesh;
        });

        // Background star particles
        const starGeometry = new THREE.BufferGeometry();
        const starPositions: number[] = [];
        const starSizes: number[] = [];
        for (let i = 0; i < 120; i++) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          const r = 2.2 + Math.random() * 1.8;
          starPositions.push(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.sin(phi) * Math.sin(theta),
            r * Math.cos(phi)
          );
          starSizes.push(0.3 + Math.random() * 0.9);
        }
        starGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(starPositions, 3)
        );
        starGeometry.setAttribute(
          "size",
          new THREE.Float32BufferAttribute(starSizes, 1)
        );
        const starMaterial = new THREE.PointsMaterial({
          color: 0xa78bfa,
          size: 0.04,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        });
        starParticlesRef.current = new THREE.Points(starGeometry, starMaterial);
        scene.add(starParticlesRef.current);

        // Edges
        const edgeMaterial = new THREE.LineBasicMaterial({
          color: "#7c3aed",
          transparent: true,
          opacity: 0.35,
        });
        const edgeGeometry = new THREE.BufferGeometry();
        edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
        scene.add(edges);

        setIsLoaded(true);
        animate(0);
      });
    }

    function updateEdges() {
      if (!scene || !nodeMeshesRef.current.length || !THREE_MODULE) return;
      const positions: number[] = [];
      const threshold = 1.5;
      for (let i = 0; i < nodeMeshesRef.current.length; i++) {
        for (let j = i + 1; j < nodeMeshesRef.current.length; j++) {
          const a = nodeMeshesRef.current[i].position;
          const b = nodeMeshesRef.current[j].position;
          const dist = Math.sqrt(
            (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2
          );
          if (dist < threshold) {
            positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
      }
      edges.geometry.setAttribute(
        "position",
        new THREE_MODULE.Float32BufferAttribute(positions, 3)
      );
      edges.geometry.attributes.position.needsUpdate = true;
    }

    function openNodePanel(data: NodeData) {
      setSelectedNode(data);
      setIsPanelOpen(true);
      autoRotateRef.current = false;
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        autoRotateRef.current = true;
      }, 4000);
    }

    function handleNodeSelection(mesh: any) {
      // Restore previous
      restoreSelectedNodeAppearance();

      selectedMeshRef.current = mesh;
      mesh.material.color.set("#ffffff");

      // Create selection ring
      if (THREE_MODULE) {
        const ringGeometry = new THREE_MODULE.RingGeometry(0.12, 0.16, 32);
        const ringMaterial = new THREE_MODULE.MeshBasicMaterial({
          color: "#ffffff",
          transparent: true,
          opacity: 0.9,
          side: THREE_MODULE.DoubleSide,
        });
        ringRef.current = new THREE_MODULE.Mesh(ringGeometry, ringMaterial);
        scene.add(ringRef.current);
      }

      openNodePanel(mesh.userData as NodeData);
    }

    function raycastAt(clientX: number, clientY: number) {
      if (!raycasterRef.current || !mouseRef.current || !camera || !scene || !nodeMeshesRef.current.length) return;
      scene.updateMatrixWorld();
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(
        nodeMeshesRef.current
      );
      if (intersects.length > 0) {
        handleNodeSelection(intersects[0].object);
      }
    }

    function updateHover(clientX: number, clientY: number) {
      if (!raycasterRef.current || !mouseRef.current || !camera || !scene || !nodeMeshesRef.current.length) return;
      scene.updateMatrixWorld();
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(
        nodeMeshesRef.current
      );

      // Reset previous hover
      if (hoveredMeshRef.current && hoveredMeshRef.current !== selectedMeshRef.current) {
        const data = hoveredMeshRef.current.userData;
        hoveredMeshRef.current.material.color.set(data.originalColor);
        hoveredMeshRef.current = null;
      }

      if (intersects.length > 0) {
        const mesh = intersects[0].object;
        canvas!.style.cursor = "pointer";
        if (mesh !== selectedMeshRef.current) {
          hoveredMeshRef.current = mesh;
          mesh.material.color.set("#ffffff");
        }
      } else {
        canvas!.style.cursor = isDragging ? "grabbing" : "grab";
      }
    }

    function animate(time: number) {
      rafId = requestAnimationFrame(animate);
      if (!scene || !renderer || !camera) return;

      const t = time * 0.001;

      if (!reducedMotion && autoRotateRef.current && !isDragging) {
        scene.rotation.y += 0.002 + velocityX;
        scene.rotation.x += 0.001 + velocityY;
        velocityX *= 0.96;
        velocityY *= 0.96;
        if (Math.abs(velocityX) < 0.0001) velocityX = 0;
        if (Math.abs(velocityY) < 0.0001) velocityY = 0;
      } else if (reducedMotion) {
        scene.rotation.y += 0.0003;
        scene.rotation.x += 0.00015;
      }

      for (let i = 0; i < nodeMeshesRef.current.length; i++) {
        const mesh = nodeMeshesRef.current[i];
        const data = mesh.userData as NodeData & {
          originalColor: string;
          baseScale: number;
        };

        if (mesh === selectedMeshRef.current) {
          mesh.scale.setScalar(data.baseScale * 2.2);
        } else if (mesh === hoveredMeshRef.current) {
          mesh.scale.setScalar(data.baseScale * 1.7);
        } else if (!reducedMotion) {
          const pulse = Math.sin(t * 2.5 + i * 0.4) * 0.3 + 1;
          mesh.scale.setScalar(data.baseScale * pulse);
        }

        // Sync glow sprite
        const glow = glowSpritesRef.current[i];
        if (glow) {
          glow.position.copy(mesh.position);
          const glowPulse = mesh === selectedMeshRef.current ? 1.4 : mesh === hoveredMeshRef.current ? 1.25 : 1;
          const baseGlowSize = data.baseScale * 6 * glowPulse;
          glow.scale.set(baseGlowSize, baseGlowSize, 1);
        }
      }

      // Update ring position to follow selected node
      if (ringRef.current && selectedMeshRef.current) {
        const pos = selectedMeshRef.current.position.clone();
        pos.applyMatrix4(scene.matrixWorld);
        ringRef.current.position.copy(pos);
        ringRef.current.lookAt(camera.position);
      }

      // Animate edge opacity
      if (edges?.material) {
        edges.material.opacity = 0.28 + Math.sin(t * 1.5) * 0.1;
      }

      // Twinkle star particles
      if (starParticlesRef.current) {
        starParticlesRef.current.rotation.y += 0.0003;
        const sizes = starParticlesRef.current.geometry.attributes.size.array;
        for (let i = 0; i < sizes.length; i++) {
          sizes[i] += Math.sin(t * 2 + i) * 0.002;
        }
        starParticlesRef.current.geometry.attributes.size.needsUpdate = true;
      }

      updateEdges();
      renderer.render(scene, camera);
    }

    function onPointerDown(e: PointerEvent) {
      isDragging = true;
      autoRotateRef.current = false;
      lastX = e.clientX;
      lastY = e.clientY;
      velocityX = 0;
      velocityY = 0;
      canvas!.style.cursor = "grabbing";
    }

    function onPointerMove(e: PointerEvent) {
      if (isDragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        scene.rotation.y += dx * 0.005;
        scene.rotation.x += dy * 0.005;
        velocityX = dx * 0.00015;
        velocityY = dy * 0.00015;
        lastX = e.clientX;
        lastY = e.clientY;
      } else {
        updateHover(e.clientX, e.clientY);
      }
    }

    function onPointerUp() {
      isDragging = false;
      autoRotateRef.current = true;
      canvas!.style.cursor = "grab";
    }

    function onCanvasClick(e: MouseEvent) {
      if (isDragging) return;
      raycastAt(e.clientX, e.clientY);
    }

    function onTouchStart(e: TouchEvent) {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY, moved: 0 };
    }

    function onTouchMove(e: TouchEvent) {
      if (!touchStartRef.current) return;
      const touch = e.touches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;
      touchStartRef.current.moved = Math.sqrt(dx * dx + dy * dy);
    }

    function onTouchEnd(e: TouchEvent) {
      if (!touchStartRef.current) return;
      if (touchStartRef.current.moved < 5) {
        const touch = e.changedTouches[0];
        raycastAt(touch.clientX, touch.clientY);
      }
      touchStartRef.current = null;
    }

    function onResize() {
      if (!container || !camera || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function onVisibilityChange() {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(animate);
      }
    }

    function onReducedMotionChange(e: MediaQueryListEvent) {
      reducedMotion = e.matches;
    }

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("click", onCanvasClick);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    prefersReducedMotion.addEventListener("change", onReducedMotionChange);

    init();

    return () => {
      disposed = true;
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("click", onCanvasClick);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      prefersReducedMotion.removeEventListener("change", onReducedMotionChange);
      if (rafId) cancelAnimationFrame(rafId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss?.();
      }
      nodeMeshesRef.current.forEach((m) => {
        m.geometry?.dispose();
        m.material?.dispose();
      });
      glowSpritesRef.current.forEach((g) => {
        g.material?.map?.dispose();
        g.material?.dispose();
      });
      starParticlesRef.current?.geometry?.dispose();
      starParticlesRef.current?.material?.dispose();
      edges?.geometry?.dispose();
      edges?.material?.dispose();
      restoreSelectedNodeAppearance();
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative aspect-square w-full max-w-[min(88vw,500px)] rounded-2xl"
        style={{ willChange: "transform" }}
      >
        {/* outer aura glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124,58,237,0.18) 0%, rgba(76,29,149,0.06) 45%, transparent 70%)",
            transform: "scale(1.05)",
          }}
        />
        <canvas
          ref={canvasRef}
          className="block h-full w-full cursor-grab rounded-2xl active:cursor-grabbing"
          aria-label="Interactive 3D neural network orb. Click any node to explore projects and skills."
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-pulse rounded-full bg-[#7c3aed]/30" />
          </div>
        )}
        <NodeDetailPanel
          isOpen={isPanelOpen}
          onClose={handlePanelClose}
          data={selectedNode}
        />
        <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/30 px-3 py-1 text-[11px] text-white/60 backdrop-blur-sm">
          click any node to explore
        </p>
      </div>
      <p className="mt-10 text-center text-xs tracking-wide text-[#9A8B70]">
        Multi-LLM · RAG · Voice AI · MCP
      </p>
    </div>
  );
}
