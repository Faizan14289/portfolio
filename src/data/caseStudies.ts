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