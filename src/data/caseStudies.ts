export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  role: string;
  timeframe?: string;
  metrics?: { label: string; value: string }[];
  demo?: string;
  context?: string;
  approach?: string;
  features?: string[];
  responsibilities?: string[];
  outcomes?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'botsify',
    title: 'Botsify — Agentic AI Platform',
    summary:
      'Built the entire agentic AI layer for a no-code chatbot platform — multi-LLM orchestration, real-time voice AI, RAG pipelines, and MCP integrations.',
    tech: ['Vue 3', 'TypeScript', 'Pinia', 'Node.js', 'Laravel', 'OpenAI', 'Deepgram', 'Twilio', 'Cloudflare Vectorize', 'Fly.io'],
    role: 'Senior Full Stack AI Developer',
    timeframe: '2026–Present',
    metrics: [
      { label: 'Voice Latency', value: '<1s' },
      { label: 'LLM Providers', value: '6+' }
    ],
    demo: 'https://botsify.com/',
    context:
      'Botsify needed a complete agentic AI overhaul — moving from rule-based chatbots to LLM-powered agents with real-time voice, document RAG, and dynamic tool use via MCP.',
    approach:
      'Architected a unified LLMService abstraction supporting 6+ providers, built real-time voice pipelines with Twilio and Deepgram, implemented RAG with Cloudflare Vectorize, and designed an MCP layer for live agent tool connections.',
    features: [
      'Multi-LLM provider engine with dynamic switching',
      'Real-time voice AI calls with interrupt handling',
      'MCP integration for agent tool connections',
      'RAG pipeline with Cloudflare Vectorize',
      'Vue 3 AI management dashboard (20+ views)',
      'AI Skills marketplace with Fly.io isolation',
      'Guardrails system for output compliance',
      'Whitelabel enterprise platform',
    ],
    responsibilities: [
      'Architect multi-LLM provider engine with unified abstraction',
      'Build real-time voice AI with Twilio, Deepgram, and OpenAI',
      'Design MCP integration layer for live tool connections',
      'Implement RAG with Cloudflare Vectorize',
      'Build Vue 3 + TypeScript + Pinia AI dashboard',
      'Develop AI Skills marketplace on Fly.io',
      'Extend Laravel backend with agentic AI layer',
      'Build whitelabel enterprise platform',
    ],
    outcomes: [
      'Sub-1-second voice AI latency',
      '6+ LLM providers supported dynamically',
      'Full MCP tool ecosystem for agents',
      'Document-grounded responses via RAG',
      'Enterprise-ready whitelabel deployments',
    ]
  },
  {
    slug: 'staffviz',
    title: 'StaffViz — Workforce Management SaaS',
    summary:
      'Scaled multi-tenant platform with Laravel Octane microservices, caching, and real-time collaboration.',
    tech: ['Laravel', 'Octane', 'Redis', 'Docker', 'TypeScript'],
    role: 'Senior Full Stack Engineer',
    timeframe: '2021–2024',
    metrics: [
      { label: 'API Latency', value: '-35%' },
      { label: 'Deployment Time', value: '-50%' }
    ],
    demo: 'https://www.staffviz.com/',
    context:
      'Enterprise-grade workforce management across hiring, scheduling, tasks, and performance with multi-tenant needs.',
    approach:
      'Designed microservices with Laravel Octane, added Redis/Memcached caching, Dockerized services, and enabled real-time collaboration.',
    features: [
      'Recruitment & hiring workflows',
      'Shift, break, and attendance scheduling',
      'Project & task management with dashboards',
      'Real-time chat and notifications',
      'Performance tracking and reporting',
      'MySQL database sharding for scale',
      'Automated multi-company provisioning',
      'Responsive frontend with Angular/Bootstrap',
      'Java client integration via Octane APIs'
    ],
    responsibilities: [
      'Microservices design and API contracts',
      'Optimize heavy endpoints and DB queries',
      'Caching strategy with Redis/Memcached',
      'Shard MySQL databases and tenant isolation',
      'Automate multi-tenant account and DB setup',
      'Define SOPs and unit/performance testing',
      'Docker-based deployments and CI/CD',
      'Role-based access and audit logging'
    ],
    outcomes: [
      'Reduced latency and deployment time',
      'Improved uptime and release confidence',
      'Higher user adoption of collaboration features',
      'Scalable data tier via sharding',
      'Faster onboarding through automated provisioning'
    ]
  },
  {
    slug: 'mytailorstore',
    title: 'MyTailorStore — Custom Fashion E‑commerce',
    summary:
      'Modernized backend and caching strategy, improving product browsing and order flow performance.',
    tech: ['Laravel', 'MySQL', 'React', 'Redis'],
    role: 'Full Stack Engineer',
    metrics: [
      { label: 'Page Load', value: '-40%' },
      { label: 'Checkout Errors', value: '-60%' }
    ],
    demo: 'https://www.mytailorstore.com/',
    context:
      'Bespoke garments with thousands of fabric options and customization — performance and reliability were critical.',
    approach:
      'Refactored catalog queries, implemented Redis caching, tuned checkout flow, and added frontend performance improvements.',
    features: [
      'Custom garment designer and measurements',
      'Fabric filters and variant browsing',
      'Secure checkout and order tracking',
      'Admin tools for catalog and orders'
    ],
    responsibilities: [
      'Backend refactors for catalog and checkout',
      'Introduce Redis cache layers',
      'Instrument performance and error tracking',
      'Frontend UX optimizations in React'
    ],
    outcomes: [
      'Faster product browsing and search',
      'Fewer checkout errors and higher conversion',
      'More stable peak-traffic behavior'
    ]
  },
  {
    slug: 'streamlinerei',
    title: 'StreamlineMyREI — Real Estate Ops Platform',
    summary:
      'Delivered integrations, automation, and reliable deployments with Docker and CI/CD pipelines.',
    tech: ['Angular', 'Laravel', 'Docker', 'CI/CD'],
    role: 'Platform Engineer',
    metrics: [
      { label: 'Release Frequency', value: '+2x' },
      { label: 'Rollback Incidents', value: '-70%' }
    ],
    demo: 'https://streamlinerei.com/',
    context:
      'US real estate operations need robust lead generation, pipelines, and automation across multiple tools.',
    approach:
      'Built integrations, automated workflows, containerized services, and standardized CI/CD with observability.',
    features: [
      'CRM and marketing integrations',
      'Lead pipelines and automation rules',
      'Campaign tools and dashboards'
    ],
    responsibilities: [
      'Integration development and maintenance',
      'Automation workflows and job scheduling',
      'Container orchestration and deployments',
      'Monitoring, alerts, and incident response'
    ],
    outcomes: [
      'More frequent, reliable releases',
      'Significant reduction in rollbacks',
      'Improved operational uptime'
    ]
  }
];