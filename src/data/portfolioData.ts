import { CaseStudy, Testimonial, Certification, Service, StatItem, PageInfo } from '../types';
import owensProfilePhoto from '../assets/owens_profile.png';

export const PAGES_CONFIG: PageInfo[] = [
  {
    id: 'home',
    index: '01',
    title: 'Overview & Architecture',
    shortTitle: 'Home',
    tagline: 'Engineering operational backbones for high-growth businesses',
    path: '#home',
  },
  {
    id: 'work',
    index: '02',
    title: 'Selected Works & Case Studies',
    shortTitle: 'Works',
    tagline: '06 in-depth client architectures, schemas, and automation workflows',
    path: '#work',
  },
  {
    id: 'services',
    index: '03',
    title: 'Systems & Capabilities',
    shortTitle: 'Services',
    tagline: 'Custom Notion, Make.com, Airtable, and ClickUp implementations',
    path: '#services',
  },
  {
    id: 'process',
    index: '04',
    title: '4-Week Engineering Sprint',
    shortTitle: 'Process',
    tagline: 'Our deterministic 4-phase build, test, and SOP hand-off sprint',
    path: '#process',
  },
  {
    id: 'about',
    index: '05',
    title: 'About Owens & Philosophy',
    shortTitle: 'About',
    tagline: 'Operational systems architect with 100% 5-star verified client track record',
    path: '#about',
  },
  {
    id: 'contact',
    index: '06',
    title: 'Book a Systems Discovery',
    shortTitle: 'Contact',
    tagline: 'Live Cal.com scheduling, ROI calculator, and project intake',
    path: '#contact',
  },
];

export const BRAND_INFO = {
  name: 'Owens Oparaku',
  businessName: 'Oparaku Systems',
  role: 'Business Operations Expert',
  tagline: 'I turn chaotic operations into systems that do not need you to remember everything.',
  taglineOptions: [
    'For the business owner drowning in spreadsheets and sticky notes, I build the system that actually holds.',
    'From scattered sticky notes to a system that runs itself.',
    'I turn chaotic operations into systems that do not need you to remember everything.',
    'Less sticky notes, more systems that actually work.'
  ],
  eyebrows: [
    'Business Operations Expert',
    'Systems Builder for Small Business',
    'I Build the Backend of Your Business'
  ],
  subtexts: [
    'Growth exposes what is broken behind the scenes. I build the systems that catch up to where your company already is, before it costs you another client.',
    'Your business outgrew the way you are currently running it. I build what it actually needs to keep scaling smoothly.',
    'I replace messy spreadsheets and endless WhatsApp threads with simple, reliable systems that your team will actually love using.'
  ],
  bookingLink: 'https://cal.com/owen-oparaku/book-a-call',
  email: 'ifeanyichukwuowens@gmail.com',
  instagram: 'https://www.instagram.com/notion_knight/',
  instagramHandle: '@notion_knight',
  facebook: 'https://web.facebook.com/ifeanyi.oparaku.7/',
  linkedin: 'https://www.linkedin.com/in/ifeanyichukwu-oparaku-88a266246/',
  notionSite: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
  notionMarketplace: 'https://owen-oparaku.notion.site/Donor-Pulse-1fc7f686868a806789ddec17e2686d75',
  profilePhotoDrive: 'https://drive.google.com/file/d/1WD_DujTmlpSi9yzN5B0GxDq2B59Gjr5p/view?usp=sharing',
  profilePhotoUrl: 'src/assets/owens_profile.png',
  profilePhotoFallback: 'src/assets/owens_profile.png',
};

export const STATS: StatItem[] = [
  {
    id: 'hours',
    value: '1,000+',
    label: 'Hours Saved Each Year',
    subtext: 'No more manual copy-pasting or hunting down files across 10 apps',
    iconName: 'Clock'
  },
  {
    id: 'missed-tasks',
    value: '90%+',
    label: 'Fewer Missed Tasks',
    subtext: 'Client follow-ups and deadlines are tracked automatically',
    iconName: 'CheckCircle2'
  },
  {
    id: 'capacity',
    value: 'Up to 10x',
    label: 'More Work Done',
    subtext: 'Your current team gets twice as much done without feeling overwhelmed',
    iconName: 'TrendingUp'
  }
];

export const CORE_PROBLEMS = [
  {
    id: 'tabs',
    title: 'Where is that file again?',
    symptom: 'Lost in 15 open browser tabs',
    description: 'Client info is trapped in random Google Sheets, WhatsApp chats, and paper notes. Every time you need something, you have to go on a scavenger hunt.',
    solution: 'One clean home in Notion where everything is organized and 1 click away.'
  },
  {
    id: 'bottleneck',
    title: 'Hey boss, what should I do next?',
    symptom: 'Everything waits on you',
    description: 'Because the workflow only lives inside your head, your team has to ask you 50 questions a day. You spend your day answering questions instead of growing.',
    solution: 'Simple daily dashboards so every team member knows their exact tasks.'
  },
  {
    id: 'followups',
    title: 'Did anyone reply to that client?',
    symptom: 'Things falling through the cracks',
    description: 'Leads cool off because follow-ups get forgotten, and welcoming new clients feels like a stressful last-minute rush to get ready.',
    solution: 'Automatic reminders and alerts so no client or lead is ever forgotten.'
  },
  {
    id: 'payroll',
    title: 'Copy-pasting data for 3 hours...',
    symptom: 'Wasted hours on busywork',
    description: 'You think you need to hire more staff, but your team is just exhausted from typing the same info over and over across different apps.',
    solution: 'Smart automations that connect your tools so data moves by itself.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'notion-builds',
    title: 'Custom Notion System Builds',
    description: 'End-to-end workspaces engineered from the ground up: centralized client trackers, project command centers, standard operating procedure (SOP) libraries, and executive dashboards that team members actually enjoy using.',
    tools: ['Notion', 'Formulas 2.0', 'Relations & Rollups'],
    deliverables: ['Custom Operations Hub', 'Client & Project Trackers', 'Staff Onboarding Portal', 'Video Walkthrough Guide'],
    bestFor: 'Founders running on fragmented spreadsheets and notes who need one unified business engine.',
    icon: 'LayoutGrid'
  },
  {
    id: 'make-automation',
    title: 'Workflow Automation via Make.com',
    description: 'Silent, dependable backend integrations connecting your forms, CRM, payment processors, and project boards so routine data movement happens instantly without human error.',
    tools: ['Make.com', 'Webhooks', 'REST APIs', 'Zapier'],
    deliverables: ['Multi-Branch Scenarios', 'Error-Handling Routines', 'Instant Lead Hand-Offs', 'Automated Notifications'],
    bestFor: 'Teams spending hours each week manually transferring data between different apps.',
    icon: 'Cpu'
  },
  {
    id: 'crm-architecture',
    title: 'CRM Architecture & Access Structuring',
    description: 'Multi-tiered lead and deal pipelines designed for sales reps, external contractors, and leadership. Strict permission filters keep customer data private while giving reps zero confusion on lead ownership.',
    tools: ['Notion', 'Airtable', 'Make.com'],
    deliverables: ['Multi-Tier Lead Pipelines', 'Rep-Specific Filtered Views', 'Master Revenue Dashboard', 'Lead Intake Webhooks'],
    bestFor: 'Coaching networks, agencies, and sales organizations with multiple reps managing deals.',
    icon: 'Users'
  },
  {
    id: 'multi-tool',
    title: 'Multi-Tool Ecosystems (ClickUp & Airtable)',
    description: 'Tailored implementations for organizations whose workflow requires the custom relational power of Airtable or the sprint tracking depth of ClickUp alongside Notion.',
    tools: ['ClickUp', 'Airtable', 'Notion', 'Make.com'],
    deliverables: ['Custom Relational Bases', 'Sprint & Task Automations', 'Custom Dashboards', 'Cross-Platform Sync'],
    bestFor: 'Growing teams with specialized operational needs across multiple software platforms.',
    icon: 'Layers'
  },
  {
    id: 'audits-consulting',
    title: 'Workflow Audits & Systems Diagnostics',
    description: 'A deep-dive investigation into how your business currently handles inquiries, fulfillment, and team communication. You get an exact blueprint showing where your time leaks and how to fix it.',
    tools: ['Process Mapping', 'Loom Audits', 'Architecture Blueprints'],
    deliverables: ['Bottleneck Analysis Report', 'Recommended Tool Architecture', 'Prioritized 30-Day Action Plan', 'Strategy Call'],
    bestFor: 'Business owners preparing to scale who want to know what will break before it does.',
    icon: 'Search'
  },
  {
    id: 'admin-support',
    title: 'Ongoing Systems & Operations Maintenance',
    description: 'Dedicated operational support to keep your databases clean, adjust automations as your offerings evolve, and troubleshoot new team requests so your backend stays pristine.',
    tools: ['Notion', 'Make.com', 'ClickUp', 'Airtable'],
    deliverables: ['Monthly Database Hygiene', 'Automation Optimization', 'Team Tech Support', 'New Feature Additions'],
    bestFor: 'Fast-moving founders who want an expert on retainer to safeguard their operational engine.',
    icon: 'ShieldCheck'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'vultures-vzw',
    client: 'Vultures VZW (Ventures)',
    title: '8-Database Enterprise Client Management & Operations System',
    industry: 'Creative Agency & Event Management',
    tools: ['Notion', 'Make.com', '8 Relational Databases', 'Automations'],
    badge: 'Agency Operating System',
    problem: 'An expanding creative and event management agency struggled with fragmented client briefs, dislocated financial logs, and scattered project files across loose notes and message threads. As their portfolio scaled, the absence of centralized operational architecture created delivery bottlenecks and strained team bandwidth.',
    solution: 'Engineered a bespoke, unified Client Management System in Notion powered by an 8-relational database architecture. Deeply connected lead pipelines, active client engagements, project milestone queues, budgeting, vendor logistics, and automated Make.com notification webhooks into one central executive cockpit.',
    outcome: 'Eliminated operational silos, cut client onboarding setup time by 75%, and gave founders instant transparency across all active deliverables. The architecture was so robust that the agency closed their expansion deals on the spot during the initial demo.',
    stats: { label: 'System Complexity', value: '8 Connected Databases' },
    link: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    linkText: 'View Notion Workspace Breakdown',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    highlights: [
      '8 interconnected relational databases unifying clients, deliverables, tasks, and budgets',
      'Automated client onboarding pipeline with stage triggers and status notifications',
      'Executive-level resource allocation and project velocity tracking across concurrent campaigns'
    ]
  },
  {
    id: 'donor-pulse',
    client: 'Donor Pulse OS',
    title: 'Donor Relationship & Grant Intelligence Hub',
    industry: 'Nonprofits, Foundations & Mission Teams',
    tools: ['Notion', 'Formulas 2.0', 'Health Scoring', 'Pipeline Logic'],
    badge: 'Donor & Grant OS',
    problem: 'Nonprofits, foundations, and mission-driven teams routinely lose touch with high-value donors and miss crucial grant reporting deadlines due to expensive, overly rigid enterprise CRMs or messy spreadsheets where records quickly grow obsolete.',
    solution: 'Architected Donor Pulse — an intelligent donor and grant management system in Notion featuring automatic donor health status tracking (Active, Due for Check-in, Gone Quiet), gift and pledge pipeline tracking, program performance analytics, and structured touchpoint logs.',
    outcome: 'Automated donor check-in reminders, protected critical funding streams, and eliminated manual spreadsheet maintenance — empowering teams to steward major donors and grant providers with zero dropped follow-ups.',
    stats: { label: 'Donor Retention Focus', value: 'Zero Dropped Follow-ups' },
    link: 'https://owen-oparaku.notion.site/Donor-Pulse-1fc7f686868a806789ddec17e2686d75',
    linkText: 'Explore Donor Pulse on Notion Marketplace',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Donor-Pulse-1fc7f686868a806789ddec17e2686d75',
    highlights: [
      'Dynamic relationship health algorithm calculating cadences and days since last contact',
      'Centralized gift, pledge, and grant pipeline with automated thank-you and milestone alerts',
      'Real-time program fundraising analytics tracking total capital raised and average gift size'
    ]
  },
  {
    id: 'client-management-system',
    client: 'Client Management System',
    title: 'End-to-End Client Production & Operations Hub',
    industry: 'Live Events & Production Operations',
    tools: ['Notion', 'Client Portals', 'Automated Workflows', 'Database Relations'],
    badge: 'Production Systems',
    problem: 'Managing high-stakes event deliverables and client approvals across disconnected spreadsheets, email threads, and group chats led to frequent scope misunderstandings, delayed asset approvals, and stressful last-minute production fire drills.',
    solution: 'Engineered an all-in-one Client Management & Production Workspace featuring structured client intake portals, deliverable review queues, vendor dispatch tracking, and automated workback milestone schedules calculated directly from event dates.',
    outcome: 'Replaced 5 disparate tools with a single source of truth, reduced internal status meetings by 80%, and achieved 100% on-time milestone delivery across live client productions.',
    stats: { label: 'Tools Replaced', value: '5 Tools Unified' },
    link: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    linkText: 'View Production System Breakdown',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    highlights: [
      'Single centralized hub connecting client contracts, production schedules, and budgets',
      'Structured approval checkpoints keeping stakeholders informed without email clutter',
      'Automated workback scheduling engine preventing production compressions'
    ]
  },
  {
    id: 'marcus-system',
    client: "Marcus' System",
    title: 'Retail, Wholesale & Supply Chain Command Center',
    industry: 'Wholesale & Retail Distribution',
    tools: ['Notion', 'Inventory Formulas', 'Procurement Logic', 'Relational Schemas'],
    badge: 'Supply Chain Command',
    problem: 'Scaling a multi-channel retail and wholesale distribution network on disconnected spreadsheets led to frequent inventory discrepancies, delayed supplier purchase orders, and zero real-time visibility into warehouse stock levels and shipment statuses.',
    solution: "Engineered Marcus' System — a centralized operational command center in Notion orchestrating wholesale accounts, real-time inventory balances, automated low-stock reorder thresholds, supplier lead times, and dispatch fulfillment pipelines.",
    outcome: 'Streamlined order fulfillment from procurement to dispatch, eradicated stockouts across core SKUs, and provided instant clarity on supplier unit economics, active purchase orders, and sales margins.',
    stats: { label: 'Inventory Accuracy', value: '100% Real-Time Tracking' },
    link: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    linkText: 'View Supply Chain & Wholesale Engine',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    highlights: [
      'Real-time stock level monitoring with dynamic reorder threshold formulas',
      'Integrated wholesale order and procurement pipeline tracking vendor lead times and invoices',
      'Centralized vendor directory benchmarked by past purchase histories and pricing tiers'
    ]
  },
  {
    id: 'knight-jewelries',
    client: 'Knight Jewelries Studio',
    title: 'Bespoke Atelier Production & Fine Jewelry Inventory OS',
    industry: 'Luxury Jewelry & Custom Manufacturing',
    tools: ['Notion', 'CAD Revision Tracking', 'Gemstone Inventory', 'Formulas 2.0'],
    badge: 'Luxury Studio OS',
    problem: 'Bespoke fine jewelry commissions and studio inventory were difficult to manage across 3D CAD design revisions, gemstone procurement, artisan bench crafting stages, and final valuation certificates, resulting in production delays and lost customer records.',
    solution: 'Designed a bespoke Notion Operating System built specifically for fine jewelry artisans. Engineered dedicated modules for custom client commissions, CAD design approvals, precious metal/gemstone inventory balances, workshop bench workflows, and valuation documentation.',
    outcome: 'Accelerated custom piece turnaround, reduced workshop production cycle friction, and provided artisans and sales staff with instant access to gem specifications, metal weights, ring sizings, and client commission histories.',
    stats: { label: 'Production Cycle', value: 'Streamlined Commission Workflow' },
    link: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    linkText: 'View Jewelry Studio & Vault System',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    highlights: [
      'End-to-end bespoke commission pipeline from 3D CAD modeling to bench crafting and QA',
      'Precious gemstone and precious metal weight inventory tracking with automated pricing formulas',
      'Private client vault storing bespoke piece records, ring sizing, valuations, and repair logs'
    ]
  },
  {
    id: 'louis-lessor',
    client: 'Louis Lessor',
    title: 'Multi-Tier CRM & Coach Pipeline System',
    industry: 'Coaching Network & High-Ticket Sales',
    tools: ['Notion', 'Relational Databases', 'Access Control', 'Sales Pipelines'],
    badge: 'Sales Operations',
    problem: 'Growing a coaching network sounds great until reps start stepping on each other\'s leads and coaches cannot tell what is actually happening in their own pipeline. Leads were duplicated, and reps were confused about who owned which conversation.',
    solution: 'Engineered a multi-tier CRM in Notion with strictly filtered views for each individual coach, tailored guest access for around 20 sales representatives, and one master executive marketing CRM tracking every lead by assigned coach.',
    outcome: 'Eliminated lead overlapping completely. Every coach now has clear visibility into their active pipeline while the founder maintains total oversight across the entire sales team.',
    stats: { label: 'Sales Reps Managed', value: '20+ Active Reps' },
    link: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    linkText: 'View Multi-Tier CRM Structure',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Oparaku-Owens-Project-Manager-Notion-Expert-Virtual-Assistant-1fc7f686868a806789ddec17e2686d75',
    highlights: [
      'Isolated guest permissions preventing unauthorized lead visibility',
      'Unified executive marketing CRM with real-time deal stage tracking',
      'Zero lead collision across twenty remote sales representatives'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'chaiwat-anan',
    author: 'Chaiwat Anan',
    role: 'Business Director',
    content: 'Owen did an excellent job and delivered on time, communication was professional throughout, and the final system exceeded my expectations. Everything was well-structured, easy to use and exactly what I needed. I would definitely recommend and look forward to working together again.',
    rating: 5,
    source: 'Verified Client',
    projectType: 'Notion Operations System'
  },
  {
    id: 'daisy-hugo-1',
    author: 'Daisy Hugo',
    role: 'Agency Founder',
    content: 'Owen was great to work with. He delivered the project on time, caught the details that mattered, and responded fast whenever I had questions. What stood out most was how well he understood what I was going for. This is my second hire, and I am pretty sure it will not be my last.',
    rating: 5,
    source: 'Verified Client',
    projectType: 'Operations Architecture'
  },
  {
    id: 'daisy-hugo-2',
    author: 'Daisy Hugo',
    role: 'Design Services Business',
    company: 'Second Project',
    content: 'Great freelancer to work with. I needed my Notion workspace improved to better support project management for my design services business, and Owen handled it professionally from start to finish. He understood the brief well, communicated clearly, and delivered a well-structured workspace that suits our workflow. Would recommend him to anyone looking for reliable Notion expertise.',
    rating: 5,
    source: 'Verified Client',
    projectType: 'Design Project Management System'
  },
  {
    id: 'matt-carbon',
    author: 'Matt Carbon',
    role: 'Team Lead',
    content: 'Owen did an amazing job, communicative, transparent. He clearly knows Notion inside out. The workspace he built is clean, organised, and mobile-friendly. Perfect for our small team ditching PDFs. Great results. Highly recommend!',
    rating: 5,
    source: 'Verified Client',
    projectType: 'Team Operations Workspace'
  },
  {
    id: 'lucas-vultures',
    author: 'Lucas',
    role: 'Director',
    company: 'Vultures VZW',
    content: 'After working with Owen, I can confirm that the quality greatly exceeds my expectations of a Notion template. After a detailed form, he went straight to work and created a platform that we can use now and after expansion. Amazing!',
    rating: 5,
    source: 'Verified Client',
    projectType: '8-Database Agency Workspace'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'clickup-admin',
    name: 'ClickUp Admin Certification',
    organization: 'ClickUp',
    tier: 'Admin Certified',
    badgeName: 'ADMIN',
    recipientName: 'oparaku ifeanyichukwu owens',
    issued: 'April 14, 2026',
    certificateNo: 'vgdpatawvxxr',
    verificationUrl: 'https://verify.skilljar.com/c/vgdpatawvxxr',
    description: 'Deep governance of Spaces, Folders, Custom Fields, Automations, and Workspace security configurations.',
    color: '#7B68EE',
    category: 'clickup',
    badgeType: 'admin'
  },
  {
    id: 'airtable-admin',
    name: 'Airtable Admin Certification',
    organization: 'Airtable',
    tier: 'Admin Certified',
    badgeName: 'Certified Admin',
    recipientName: 'oparaku ifeanyichukwu owens',
    issued: 'April 10, 2026',
    validity: 'Valid: April 10, 2026 to May 10, 2028',
    certificateNo: 'usznzdd95rqh',
    description: 'Relational data modeling, Interface Designer layouts, synced tables, and native Airtable Automations.',
    color: '#FCB400',
    category: 'airtable',
    badgeType: 'admin'
  },
  {
    id: 'clickup-intermediate',
    name: 'ClickUp Intermediate Badge',
    organization: 'ClickUp',
    tier: 'Intermediate Level',
    badgeName: 'INTERMEDIATE',
    recipientName: 'oparaku ifeanyichukwu owens',
    issued: 'April 14, 2026',
    certificateNo: 'futg9c3sgu6e',
    verificationUrl: 'https://verify.skilljar.com/c/futg9c3sgu6e',
    description: 'Complex status workflows, sprint management, custom reporting dashboards, and workload views.',
    color: '#7B68EE',
    category: 'clickup',
    badgeType: 'intermediate'
  },
  {
    id: 'clickup-novice',
    name: 'ClickUp Novice Badge',
    organization: 'ClickUp',
    tier: 'Practitioner',
    badgeName: 'NOVICE',
    recipientName: 'oparaku ifeanyichukwu owens',
    issued: 'April 11, 2026',
    certificateNo: 't6uaorcitqmc',
    verificationUrl: 'https://verify.skilljar.com/c/t6uaorcitqmc',
    description: 'Core project hierarchies, recurring task engines, and checklist standardizations.',
    color: '#7B68EE',
    category: 'clickup',
    badgeType: 'novice'
  },
  {
    id: 'notion-advanced',
    name: 'Notion Academy: Advanced',
    organization: 'Notion Academy',
    tier: 'Advanced Certified',
    badgeName: 'Advanced Badge',
    recipientName: 'oparaku ifeanyichukwu owens',
    issued: 'Official Credential',
    description: 'Enterprise-grade workspace optimization, Formulas 2.0, granular permission management, and scalable templates.',
    color: '#1B4332',
    category: 'notion',
    badgeType: 'advanced'
  },
  {
    id: 'notion-workflows',
    name: 'Notion Academy: Workflows',
    organization: 'Notion Academy',
    tier: 'Workflows Certified',
    badgeName: 'Workflows Badge',
    recipientName: 'oparaku ifeanyichukwu owens',
    issued: 'Official Credential',
    description: 'Expertise in relational database schema design, two-way rollups, custom formulas, and connected dashboards.',
    color: '#1B4332',
    category: 'notion',
    badgeType: 'workflows'
  },
  {
    id: 'notion-essentials',
    name: 'Notion Academy: Essentials',
    organization: 'Notion Academy',
    tier: 'Essentials Certified',
    badgeName: 'Essentials Badge',
    recipientName: 'oparaku ifeanyichukwu owens',
    issued: 'Official Credential',
    description: 'Mastery of foundational workspace architecture, page hierarchies, blocks, and core sharing security.',
    color: '#1B4332',
    category: 'notion',
    badgeType: 'essentials'
  },
  {
    id: 'make-automation-basics',
    name: 'Make.com Automation Specialist',
    organization: 'Make.com',
    tier: 'Automation Basics',
    badgeName: 'Automation Specialist',
    recipientName: 'oparaku ifeanyichukwu owens',
    issued: 'Specialist Credential',
    description: 'Multi-step scenario creation, Webhook data parsing, REST API routes, and fault-tolerant error routing.',
    color: '#6D28D9',
    category: 'make',
    badgeType: 'automation'
  }
];

export const BIO_PARAGRAPHS = [
  'I am Owens Oparaku, founder of Oparaku Systems. I build the operational backbone that small businesses are usually missing, the client trackers, project systems, and automations that replace scattered spreadsheets and sticky note chaos with something that actually holds.',
  'My main tools are Notion and Make.com, though I work with ClickUp and Airtable too when a client\'s setup calls for it. I hold certifications across all three (Workflow, Essentials, Advanced level for Notion, Admin and Novice through Intermediate for ClickUp, Admin for Airtable) plus Make automation basics, so the systems I build aren\'t guesswork, they\'re built the right way from the start.',
  'I do not just build once and leave. I set up systems that scale with a business, so when things get busier, the operations do not fall apart, they hold steady.',
  'I have built systems for event agencies, coaching businesses, and growing teams across multiple industries, mostly the unseen backend work that lets founders actually run their business instead of constantly patching it together.'
];

export const BADGE_PILLS = [
  'Notion Certified (Essentials, Workflows, Advanced)',
  'ClickUp Certified Admin',
  'Airtable Certified Admin',
  'Make.com Automation Specialist'
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Diagnostic & Workflow Audit',
    phase: 'Discovery',
    duration: 'Week 1',
    description: 'We tear down how your business currently operates. We identify every disconnected sheet, broken handoff, manual copy-paste task, and founder bottleneck.',
    activities: [
      'Current tech stack & license review',
      'Information flow & bottleneck mapping',
      'Team permission & role requirements'
    ],
    deliverable: 'Operational Blueprint & Architecture Roadmap'
  },
  {
    number: '02',
    title: 'Database Architecture & Data Modeling',
    phase: 'Schema Design',
    duration: 'Week 1 to 2',
    description: 'We structure the relational foundation. Every client, project, deliverable, lead, and invoice connects logically with zero duplicate data entry.',
    activities: [
      'Entity relationship diagrams & relation models',
      'Custom formulas, rollups & status workflows',
      'Role-filtered views (Admin vs Contractor vs Client)'
    ],
    deliverable: 'Engineered Workspace Prototype in Notion / Airtable / ClickUp'
  },
  {
    number: '03',
    title: 'Make.com Zero-Touch Automations',
    phase: 'Integration',
    duration: 'Week 2 to 3',
    description: 'We connect your forms, payment gateways, calendar, and team chats with Make.com webhook scenarios so data moves without manual human effort.',
    activities: [
      'Multi-branch webhook routing & error handling',
      'Instant client intake & automated folder provisioning',
      'Automated reminder notifications & status triggers'
    ],
    deliverable: 'Active Zero-Touch Make.com Automation Scenarios'
  },
  {
    number: '04',
    title: 'Loom SOP Library & 14 Days of Free Support After Delivery',
    phase: 'Handoff & Adoption',
    duration: 'Week 3 to 4',
    description: 'A system is only as good as team adoption. We record bespoke video SOPs, train your team live, and provide 14 days of free support after delivery, just in case I am needed.',
    activities: [
      'Custom video walkthroughs for every team role',
      'Live team Q&A and onboarding walkthrough session',
      '14 days of free priority support after delivery on Slack/WhatsApp'
    ],
    deliverable: 'Complete SOP Knowledge Base & Fully Adopted System'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How long does a full systems build take from start to finish?',
    a: 'Our standard 4-Week Engineering Sprint is completed in 28 days. Week 1 is Audit & Blueprint, Week 2 is Database Schema Modeling, Week 3 is Make.com Automations, and Week 4 is Video SOP Documentation & Live Team Hand-Off.'
  },
  {
    q: 'Do I need to upgrade to Notion Enterprise or pay for expensive software?',
    a: 'No. In 90% of cases, we optimize within your existing software tiers (e.g. Notion Plus, Make Core plan, standard ClickUp or Airtable). We engineer around your budget to minimize recurring software overhead.'
  },
  {
    q: 'What if my team struggles to adopt new tools and workflows?',
    a: 'Adoption is our top priority. We do not just build and vanish. We record role-specific video SOPs (Loom/Tango), host a live interactive team training call, and provide 14 days of free support after delivery on Slack/WhatsApp to make adjustments, just in case I am needed.'
  },
  {
    q: 'Can you integrate our existing tools like Stripe, Google Drive, and Slack?',
    a: 'Yes. Through Make.com and custom webhook pipelines, we connect your entire tech stack — automatically syncing invoices, client folders, calendar events, and team notifications with zero manual data entry.'
  },
  {
    q: 'How do we get started?',
    a: 'Book a complimentary 30-minute Systems Diagnostic call. We will audit your current tool sprawl, identify your biggest operational bottleneck, and outline a custom roadmap for your business.'
  }
];

