export type Service = {
  slug: string;
  title: string;
  icon: string; // emoji or icon key
  summary: string;
  bullets: string[];
  tech?: string[];
};

export const services: Service[] = [
  {
    slug: 'backend-apis',
    title: 'Backend APIs & Microservices',
    icon: '⚙️',
    summary: 'Design and implement scalable APIs and microservices with robust auth, caching, and observability.',
    bullets: [
      'REST/GraphQL endpoints with clean contracts',
      'Performance tuning and query optimization',
      'Caching layers (Redis/Memcached)',
      'Background jobs and event processing',
      'Multi-tenant provisioning and MySQL sharding',
      'WebSockets/Socket.io real-time collaboration',
    ],
    tech: ['Laravel Octane', 'Node.js', 'TypeScript', 'Redis', 'Docker']
  },
  {
    slug: 'ecommerce',
    title: 'E‑commerce Platforms',
    icon: '🛍️',
    summary: 'Full-stack development for high-performing online stores and custom product experiences.',
    bullets: [
      'Catalog, search, and variants UX',
      'Secure checkout and payments',
      'Order tracking and dashboards',
      'Admin tooling and workflows',
    ],
    tech: ['Laravel', 'MySQL', 'React', 'Redis']
  },
  {
    slug: 'devops',
    title: 'DevOps & Deployments',
    icon: '🚀',
    summary: 'Containerization, CI/CD pipelines, release automation, and environment hardening.',
    bullets: [
      'Dockerized services with health checks',
      'Standardized build and release pipelines',
      'Logging, metrics, and alerting',
      'Rollback strategies and blue‑green deploys',
    ],
    tech: ['Docker', 'CI/CD', 'Linux']
  },
  {
    slug: 'performance',
    title: 'Performance & Optimization',
    icon: '⚡',
    summary: 'Reduce latency, improve throughput, and stabilize under peak load.',
    bullets: [
      'DB indexing and query review',
      'API response time improvements',
      'Cache invalidation and TTL strategy',
      'Frontend bundle and rendering optimizations',
      'Load balancing and Octane tuning',
    ],
    tech: ['MySQL', 'Redis', 'TypeScript']
  },
  {
    slug: 're-ops',
    title: 'Real Estate Ops Automation',
    icon: '🏠',
    summary: 'Integrations, pipelines, and automation to streamline real estate operations.',
    bullets: [
      'CRM and marketing integrations',
      'Lead routing and qualification',
      'Campaign tooling and dashboards',
      'Data sync and job scheduling',
    ],
    tech: ['Angular', 'Laravel', 'Docker']
  }
];