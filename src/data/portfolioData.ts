import { CaseStudy, Testimonial, Certification, Service, StatItem, PageInfo } from '../types';
import owensProfilePhoto from '../assets/owens_profile_hoodie.png';
import vulturesVzwImage from '../assets/case-studies/vultures-vzw.webp';
import donorPulseImage from '../assets/case-studies/donor-pulse.webp';
import clientManagementSystemImage from '../assets/case-studies/client-management-system.webp';
import marcusSystemImage from '../assets/case-studies/marcus-system.webp';
import knightJewelriesImage from '../assets/case-studies/knight-jewelries.webp';
import novaLinesImage from '../assets/case-studies/nova-lines.webp';

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
  profilePhotoUrl: owensProfilePhoto,
  profilePhotoFallback: owensProfilePhoto,
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
    description: 'A full workspace built around how your team actually works: client tracker, project hub, SOPs, and dashboards people actually open.',
    tools: ['Notion', 'Formulas 2.0', 'Relations & Rollups'],
    deliverables: ['Custom Operations Hub', 'Client & Project Trackers', 'Staff Onboarding Portal', 'Video Walkthrough Guide'],
    bestFor: 'You are running the business out of notes and spreadsheets and need one place that holds it all.',
    icon: 'LayoutGrid'
  },
  {
    id: 'make-automation',
    title: 'Workflow Automation via Make.com',
    description: 'Your forms, CRM, payments, and project boards start talking to each other, so nobody retypes the same information twice.',
    tools: ['Make.com', 'Webhooks', 'REST APIs', 'Zapier'],
    deliverables: ['Multi-Branch Scenarios', 'Error-Handling Routines', 'Instant Lead Hand-Offs', 'Automated Notifications'],
    bestFor: 'Your team spends hours a week copying data from one app into another by hand.',
    icon: 'Cpu'
  },
  {
    id: 'crm-architecture',
    title: 'CRM Architecture & Access Structuring',
    description: 'A lead and deal pipeline built for your reps, contractors, and leadership, with clear ownership and no way to see someone else\'s clients by accident.',
    tools: ['Notion', 'Airtable', 'Make.com'],
    deliverables: ['Multi-Tier Lead Pipelines', 'Rep-Specific Filtered Views', 'Master Revenue Dashboard', 'Lead Intake Webhooks'],
    bestFor: 'You run a coaching network, agency, or sales team where reps keep stepping on each other\'s leads.',
    icon: 'Users'
  },
  {
    id: 'multi-tool',
    title: 'Multi-Tool Ecosystems (ClickUp & Airtable)',
    description: 'For teams that need Airtable\'s relational data or ClickUp\'s sprint tracking working alongside Notion, not fighting it.',
    tools: ['ClickUp', 'Airtable', 'Notion', 'Make.com'],
    deliverables: ['Custom Relational Bases', 'Sprint & Task Automations', 'Custom Dashboards', 'Cross-Platform Sync'],
    bestFor: 'Your team has outgrown a single tool and needs a few working together instead.',
    icon: 'Layers'
  },
  {
    id: 'audits-consulting',
    title: 'Workflow Audits & Systems Diagnostics',
    description: 'A close look at how inquiries, fulfillment, and team communication actually move through your business right now, and exactly where the time is leaking.',
    tools: ['Process Mapping', 'Loom Audits', 'Architecture Blueprints'],
    deliverables: ['Bottleneck Analysis Report', 'Recommended Tool Architecture', 'Prioritized 30-Day Action Plan', 'Strategy Call'],
    bestFor: 'You are about to scale and want to know what will break first.',
    icon: 'Search'
  },
  {
    id: 'admin-support',
    title: 'Ongoing Systems & Operations Maintenance',
    description: 'Someone keeping your databases clean, your automations current, and your team\'s tech questions answered, month after month.',
    tools: ['Notion', 'Make.com', 'ClickUp', 'Airtable'],
    deliverables: ['Monthly Database Hygiene', 'Automation Optimization', 'Team Tech Support', 'New Feature Additions'],
    bestFor: 'You move fast and want someone on call to keep the systems from falling behind.',
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
    image: vulturesVzwImage,
    problem: 'A growing creative and event agency had client briefs, financial logs, and project files spread across notes and message threads. As they took on more work, nothing tied together, and every new project meant more time lost to delivery bottlenecks.',
    solution: 'Built one Notion system with 8 connected databases: leads, active clients, project milestones, budgets, and vendors, all linked together with Make.com sending status notifications automatically.',
    outcome: 'Client onboarding time dropped 75%, and the founders could see every active project at a glance. The system was clear enough that they closed their next expansion deal on the spot during the demo.',
    stats: { label: 'System Complexity', value: '8 Connected Databases' },
    link: 'https://owen-oparaku.notion.site/Vultures-Client-Management-System-3a47f686868a80dd9ee3d2cae2b7d46f?source=copy_link',
    linkText: 'View Notion Workspace Breakdown',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Vultures-Client-Management-System-3a47f686868a80dd9ee3d2cae2b7d46f?source=copy_link',
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
    image: donorPulseImage,
    problem: 'Nonprofits and mission-driven teams kept losing touch with major donors and missing grant deadlines. Enterprise CRMs were too rigid, and spreadsheets got out of date the moment someone forgot to update them.',
    solution: 'Built Donor Pulse, a Notion system that tracks donor health on its own, flagging who is active, who is due for a check-in, and who has gone quiet, alongside gift tracking and program performance in one place.',
    outcome: 'Donor check-ins now happen automatically instead of falling through, funding relationships stay protected, and nobody is stuck updating a spreadsheet by hand anymore.',
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
    image: clientManagementSystemImage,
    problem: 'Event deliverables and client approvals were scattered across spreadsheets, email, and group chats. Scope got misread, assets sat waiting on approval, and every production turned into a last minute scramble.',
    solution: 'Built one workspace covering client intake, deliverable reviews, vendor dispatch, and a production schedule that counts backward automatically from each event date.',
    outcome: 'Five separate tools became one. Status meetings dropped by 80%, and every live production hit its deadlines on time.',
    stats: { label: 'Tools Replaced', value: '5 Tools Unified' },
    link: 'https://https://owen-oparaku.notion.site/Client-Management-System-3667f686868a80578963c4f9c8af9c98?source=copy_link',
    linkText: 'View Production System Breakdown',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Client-Management-System-3667f686868a80578963c4f9c8af9c98?source=copy_link',
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
    image: marcusSystemImage,
    problem: 'A multi-channel retail and wholesale business was running on disconnected spreadsheets, which meant inventory counts didn\'t match reality, supplier orders went out late, and nobody could see warehouse stock in real time.',
    solution: 'Built a command center in Notion covering wholesale accounts, live inventory, automatic low-stock reorder alerts, supplier lead times, and dispatch, all in one view.',
    outcome: 'Orders now move from purchase to dispatch without the gaps, stockouts on core products stopped happening, and margins and open purchase orders are visible at a glance.',
    stats: { label: 'Inventory Accuracy', value: '100% Real-Time Tracking' },
    link: 'https://owen-oparaku.notion.site/Marcus-System-3667f686868a8040bd6bd136425008e1?source=copy_link',
    linkText: 'View Supply Chain & Wholesale Engine',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Marcus-System-3667f686868a8040bd6bd136425008e1?source=copy_link',
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
    image: knightJewelriesImage,
    problem: 'Custom jewelry commissions were hard to track across CAD revisions, gemstone sourcing, bench work, and final valuations, which meant delays and lost customer records.',
    solution: 'Built a Notion system made specifically for a jewelry studio, with dedicated tracking for client commissions, CAD approvals, gemstone and metal inventory, bench workflow, and valuation paperwork.',
    outcome: 'Custom pieces move faster from order to delivery, and the team can pull up gem specs, metal weights, ring sizes, or a client\'s full commission history in seconds.',
    stats: { label: 'Production Cycle', value: 'Streamlined Commission Workflow' },
    link: 'https://owen-oparaku.notion.site/Knight-Jewelries-Studio-2187f686868a80418071fb84aa15d471?source=copy_link',
    linkText: 'View Jewelry Studio & Vault System',
    liveDemoUrl: 'https://owen-oparaku.notion.site/Knight-Jewelries-Studio-2187f686868a80418071fb84aa15d471?source=copy_link',
    highlights: [
      'End-to-end bespoke commission pipeline from 3D CAD modeling to bench crafting and QA',
      'Precious gemstone and precious metal weight inventory tracking with automated pricing formulas',
      'Private client vault storing bespoke piece records, ring sizing, valuations, and repair logs'
    ]
  },
  {
    id: 'nova-lines',
    client: 'American Mahjong (Nova Lines)',
    title: 'Content, Community & Subscriber Operations Hub',
    industry: 'Games, Hobby & Community Media',
    tools: ['Notion', 'Content Pipelines', 'Event Management', 'Subscriber Tracking'],
    badge: 'Community & Content OS',
    image: novaLinesImage,
    problem: 'Running a content driven American Mahjong brand across rule breakdowns, newsletters, social posts and video meant Nova Lines had ideas scattered across five different tools, no clear view of what was published versus planned, and a growing player and subscriber base nobody was properly segmenting or tracking.',
    solution: 'Built a full Notion operations hub with a content workflow board covering rule guides, newsletters, social posts and video from idea to publish, a live events and community calendar tracking registration status for every game night and tournament, a team dashboard mapping every role and contact, and a subscriber system tagging each player by campaign type and active status.',
    outcome: 'Nova Lines now runs their entire American Mahjong content and community engine from one workspace. Every piece of content has a clear owner and stage, every game night and tournament shows real time registration status, and the player base is fully segmented for targeted outreach instead of one size fits all blasts.',
    stats: { label: 'Content Pieces Tracked', value: '15+ Live Items' },
    link: 'https://owen-oparaku.notion.site/American-Mahjong-2927f686868a80cbb666d8899010694a?source=copy_link',
    linkText: 'View Content & Community Hub',
    liveDemoUrl: 'https://owen-oparaku.notion.site/American-Mahjong-2927f686868a80cbb666d8899010694a?source=copy_link',
    highlights: [
      'Unified content pipeline for rule guides, newsletters, social posts and video',
    'Live game night and tournament calendar with registration status tracking',
    'Team dashboard mapping every role and contact',
    'Segmented player and subscriber system by campaign and status'
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
  'I am Owens Oparaku. I build the operational backbone that small businesses are usually missing, the client trackers, project systems, and automations that replace scattered spreadsheets and sticky note chaos with something that actually holds.',
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
    description: 'I look at how your business actually runs right now. Every disconnected sheet, every broken handoff, every task that only happens because you remember it.',
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
    description: 'This is where the actual database gets built. Every client, project, deliverable, lead, and invoice connects to each other, so nothing gets entered twice.',
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
    description: 'Your forms, payments, calendar, and team chat get connected through Make.com, so information moves on its own instead of someone copying it over by hand.',
    activities: [
      'Multi-branch webhook routing & error handling',
      'Instant client intake & automated folder provisioning',
      'Automated reminder notifications & status triggers'
    ],
    deliverable: 'Active Zero-Touch Make.com Automation Scenarios'
  },
  {
    number: '04',
    title: 'Video Handoff & 14 Days of Free Support',
    phase: 'Handoff & Adoption',
    duration: 'Week 3 to 4',
    description: 'A system only works if your team actually uses it. I record videos for each role, walk everyone through it live, and stay on for 14 days after delivery in case anything needs adjusting.',
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
    a: 'About 28 days. Week 1 is figuring out what you actually need, week 2 is building the database, week 3 is the automations, and week 4 is recording videos and handing it to your team.'
  },
  {
    q: 'Do I need to upgrade to Notion Enterprise or pay for expensive software?',
    a: 'No. Most of the time your current plan, whether that\'s Notion Plus, Make Core, or standard ClickUp or Airtable, is enough. I build around what you already pay for.'
  },
  {
    q: 'What if my team struggles to adopt new tools and workflows?',
    a: 'That\'s on me to prevent, not you. Every build comes with short videos for each role, a live walkthrough with your team, and 14 days of free support after delivery for anything that needs adjusting.'
  },
  {
    q: 'Can you integrate our existing tools like Stripe, Google Drive, and Slack?',
    a: 'Yes. Make.com connects your tools together, so invoices, client folders, and notifications sync on their own, with nobody typing the same thing twice.'
  },
  {
    q: 'How do we get started?',
    a: 'Book a call. It starts at $50 and we spend it figuring out where your time is actually going and what to fix first.'
  }
];

