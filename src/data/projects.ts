export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  priceEstimate: string;
  deliveryTime: string;
  technologies: string[];
  features: string[];
  heroImage: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "real-estate-website",
    title: "Real Estate Website",
    category: "PropTech & Real Estate",
    shortDescription: "AI-powered real estate platform with intelligent property recommendations, multi-language support, and advanced CRM tools.",
    longDescription: "A cutting-edge real estate platform managed by artificial intelligence that recommends the best properties to customers based on their preferences and behavior. Features AI-powered property matching, smart search filters, interactive maps, and WhatsApp integration. Supports multiple languages including English, Arabic, Russian, Persian, and any other language requested by the client. Includes comprehensive admin dashboard, lead management, and automated customer engagement.",
    priceEstimate: "From $6,500",
    deliveryTime: "3–5 weeks",
    technologies: ["React 19", "Next.js", "AI/ML", "Supabase", "shadcn/ui", "Cloudflare"],
    features: [
      "AI-powered property recommendations",
      "Interactive maps (Google/Mapbox)",
      "Agent dashboard & CRM tools",
      "WhatsApp quick messaging",
      "Multi-language support (EN/AR/RU/FA & more)"
    ],
    heroImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 2,
    slug: "ai-ecommerce-platform",
    title: "AI-Powered E-Commerce Store",
    category: "E-Commerce & Retail",
    shortDescription: "A smart store with AI-based product tagging, recommendations, and dynamic filtering.",
    longDescription: "An advanced online store powered by AI for automatic product classification, smart recommendations, and ultra-fast filtering. Includes admin panel, payment gateway, and mobile-friendly design.",
    priceEstimate: "From $5,000",
    deliveryTime: "4–6 weeks",
    technologies: ["React 19", "Next.js", "AI Models", "Stripe", "Tailwind/Shadcn"],
    features: [
      "AI auto-tagging of products",
      "Dynamic smart filtering",
      "Recommendation engine",
      "Payment gateway integration",
      "Lightning-fast product search"
    ],
    heroImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 3,
    slug: "whatsapp-management",
    title: "WhatsApp Management Software",
    category: "Communication & CRM",
    shortDescription: "A powerful dashboard to manage WhatsApp chats, automation, bulk messaging, and templates.",
    longDescription: "A complete WhatsApp business software with contact grouping, chat templates, broadcast messages, auto-reply rules, and multi-agent support.",
    priceEstimate: "From $4,600",
    deliveryTime: "3–4 weeks",
    technologies: ["React", "Node.js", "WhatsApp API", "shadcn/ui"],
    features: [
      "Multi-agent WhatsApp inbox",
      "Auto-replies & workflows",
      "Bulk broadcasting",
      "Templates & quick replies",
      "Chat analytics"
    ],
    heroImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 4,
    slug: "call-center-system",
    title: "Call Center System",
    category: "Voice & Contact Center",
    shortDescription: "A cloud call-center platform integrated with IVR, routing, agent dashboard, and reporting.",
    longDescription: "A complete call-center solution with IVR menus, forwarding logic, analytics dashboard, ticketing, and CRM integration.",
    priceEstimate: "From $5,800",
    deliveryTime: "5–8 weeks",
    technologies: ["Asterisk", "React", "WebRTC", "VoIP APIs"],
    features: [
      "IVR (press 1 for sales...)",
      "Call routing & queueing",
      "Agent dashboard",
      "Call recordings",
      "Live analytics"
    ],
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 5,
    slug: "video-call-platform",
    title: "Video Call Platform",
    category: "Voice & Video",
    shortDescription: "Secure, high-quality video meetings built using WebRTC.",
    longDescription: "A scalable video communication system with screen sharing, chat, recording, and meeting scheduling.",
    priceEstimate: "From $8,000",
    deliveryTime: "5–7 weeks",
    technologies: ["React", "WebRTC", "Node.js", "shadcn"],
    features: [
      "HD video meetings",
      "Screen sharing",
      "Recording",
      "Chat & reactions",
      "Meeting scheduler"
    ],
    heroImage: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 6,
    slug: "meeting-management",
    title: "Meeting Management & Recording",
    category: "Voice & Video",
    shortDescription: "A system for scheduling, hosting, and recording meetings with AI summaries.",
    longDescription: "A productivity system for teams to manage meetings, auto-record them, transcribe audio, and generate AI summaries.",
    priceEstimate: "From $9,000",
    deliveryTime: "6–8 weeks",
    technologies: ["React", "WebRTC", "AI Models", "Node.js"],
    features: [
      "Meeting scheduling",
      "Auto-recording",
      "AI transcription",
      "AI summary generation",
      "Team dashboard"
    ],
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 7,
    slug: "odoo-api-integration",
    title: "Custom Odoo API Integration",
    category: "ERP & Integrations",
    shortDescription: "Connect any application to Odoo ERP with seamless API integration and data synchronization.",
    longDescription: "A complete API integration solution that connects your existing applications with Odoo ERP. Includes real-time data sync, webhook support, custom endpoints, and comprehensive documentation.",
    priceEstimate: "From $3,200",
    deliveryTime: "4–6 weeks",
    technologies: ["Python", "Odoo API", "REST API", "WebSockets"],
    features: [
      "Real-time data synchronization",
      "Custom API endpoints",
      "Webhook integration",
      "Error handling & logging",
      "API documentation"
    ],
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 8,
    slug: "custom-odoo-module",
    title: "Custom Odoo Module Development",
    category: "ERP & Integrations",
    shortDescription: "Tailored Odoo modules built specifically for your business requirements and workflows.",
    longDescription: "Professional development of custom Odoo modules with full integration into your existing ERP system. Includes custom models, views, reports, automated workflows, and security rules.",
    priceEstimate: "From $2,800",
    deliveryTime: "3–5 weeks",
    technologies: ["Python", "Odoo", "XML", "JavaScript"],
    features: [
      "Custom business logic",
      "Automated workflows",
      "Custom reports & dashboards",
      "Security & access control",
      "Multi-company support"
    ],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 9,
    slug: "property-valuation-system",
    title: "Property Valuation & Appraisal System",
    category: "PropTech & Real Estate",
    shortDescription: "Advanced real estate valuation platform with automated appraisals, market analysis, and reporting.",
    longDescription: "A comprehensive property valuation system for real estate professionals. Features AI-powered market analysis, comparable property matching, automated valuation models (AVM), and detailed appraisal reports.",
    priceEstimate: "From $4,200",
    deliveryTime: "5–7 weeks",
    technologies: ["React", "Next.js", "AI Models", "PostgreSQL"],
    features: [
      "Automated valuation models (AVM)",
      "Comparable property analysis",
      "Market trend reports",
      "PDF appraisal generation",
      "Historical data tracking"
    ],
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 10,
    slug: "property-inspection-app",
    title: "Property Inspection Mobile App",
    category: "Mobile Apps",
    shortDescription: "Mobile application for property inspections with photo documentation, checklists, and instant reports.",
    longDescription: "A complete mobile solution for property inspectors and real estate agents. Includes customizable inspection checklists, photo annotations, voice notes, offline mode, and automatic report generation.",
    priceEstimate: "From $3,800",
    deliveryTime: "4–6 weeks",
    technologies: ["React Native", "Firebase", "TypeScript"],
    features: [
      "Customizable inspection forms",
      "Photo documentation & annotations",
      "Offline mode support",
      "Automatic PDF reports",
      "Cloud synchronization"
    ],
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 11,
    slug: "odoo-mobile-module",
    title: "Odoo Android & iOS Mobile Module",
    category: "Mobile Apps",
    shortDescription: "A mobile application layer for Odoo, built for Android & iOS.",
    longDescription: "A fully integrated mobile module for Odoo, enabling customers and employees to access ERP features from mobile devices.",
    priceEstimate: "From $3,500",
    deliveryTime: "4–6 weeks",
    technologies: ["React Native", "Odoo API", "TypeScript"],
    features: [
      "Login & authentication",
      "Orders & invoices",
      "Notifications",
      "Forms & approvals",
      "Offline mode"
    ],
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 12,
    slug: "odoo-payment-gateways-oman",
    title: "Odoo Payment Gateway Module (Bank Muscat & Sohar)",
    category: "ERP & Integrations",
    shortDescription: "Secure payment gateway integration for Odoo ERP for Omani banks.",
    longDescription: "A production-ready payment gateway module for Odoo, supporting Bank Muscat and Bank Sohar. Includes encryption, callbacks, refunds, and order verification.",
    priceEstimate: "From $2,800",
    deliveryTime: "3–5 weeks",
    technologies: ["Python", "Odoo", "AES Encryption"],
    features: [
      "Payment initialization",
      "Callback handling",
      "Refund API",
      "Order verification",
      "AES-128-ECB encryption"
    ],
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 13,
    slug: "call-tracker-android",
    title: "Call Tracker Android (Odoo CRM Integration)",
    category: "Mobile Apps",
    shortDescription: "Automatically create leads in Odoo CRM from all incoming and outgoing calls on Android devices.",
    longDescription: "A powerful Android application that integrates seamlessly with Odoo CRM to automatically capture all phone call activities. Every incoming and outgoing call is logged as a lead in Odoo with caller details, duration, timestamp, and call recording options. Perfect for sales teams to never miss a potential opportunity.",
    priceEstimate: "From $3,200",
    deliveryTime: "3–4 weeks",
    technologies: ["Android", "Kotlin", "Odoo API", "Firebase"],
    features: [
      "Auto-create leads from all calls",
      "Call recording & attachment",
      "Caller ID & contact matching",
      "Real-time sync with Odoo CRM",
      "Call duration & timestamp logging"
    ],
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 14,
    slug: "whatsapp-crm",
    title: "WhatsApp CRM System",
    category: "Communication & CRM",
    shortDescription: "Professional CRM system built on WhatsApp for fast and effective communication between sales teams and customers.",
    longDescription: "A comprehensive WhatsApp-based CRM solution that enables professional customer relationship management directly through WhatsApp. Manage contacts, track conversations, automate responses, assign leads to team members, and maintain full conversation history. Perfect for businesses that want to leverage WhatsApp's popularity for customer engagement.",
    priceEstimate: "From $5,500",
    deliveryTime: "5–7 weeks",
    technologies: ["Node.js", "WhatsApp Business API", "React", "MongoDB", "Redis"],
    features: [
      "Contact management & segmentation",
      "Multi-agent conversation assignment",
      "Automated workflows & responses",
      "Conversation history & analytics",
      "Lead tracking & pipeline management"
    ],
    heroImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 15,
    slug: "telegram-crm",
    title: "Telegram CRM System",
    category: "Communication & CRM",
    shortDescription: "Complete CRM solution built on Telegram for managing customer relationships and sales pipelines.",
    longDescription: "A feature-rich CRM system that leverages Telegram's powerful bot API to provide professional customer relationship management. Includes contact management, automated messaging, team collaboration, lead tracking, and comprehensive analytics. Ideal for businesses that prefer Telegram's security and flexibility.",
    priceEstimate: "From $4,800",
    deliveryTime: "4–6 weeks",
    technologies: ["Node.js", "Telegram Bot API", "React", "PostgreSQL"],
    features: [
      "Contact & lead management",
      "Automated bot responses",
      "Team collaboration & assignment",
      "Sales pipeline tracking",
      "Analytics & reporting dashboard"
    ],
    heroImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 16,
    slug: "real-estate-tokenization",
    title: "Real Estate Tokenization System",
    category: "Blockchain & Web3",
    shortDescription: "Blockchain-based platform for tokenizing real estate assets and enabling fractional ownership.",
    longDescription: "A cutting-edge blockchain solution that enables property tokenization, allowing real estate assets to be divided into digital tokens for fractional ownership. Includes smart contracts for automated transactions, investor dashboard, compliance management, and secondary market trading. Transform traditional real estate investment into accessible digital assets.",
    priceEstimate: "From $18,000",
    deliveryTime: "10–14 weeks",
    technologies: ["Solidity", "Ethereum/Polygon", "React", "Web3.js", "IPFS"],
    features: [
      "Property tokenization & smart contracts",
      "Fractional ownership management",
      "Investor dashboard & KYC/AML",
      "Secondary market trading",
      "Automated dividend distribution"
    ],
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 17,
    slug: "building-management-system",
    title: "Building Management System (BMS)",
    category: "PropTech & Real Estate",
    shortDescription: "Comprehensive property management platform for residential and commercial buildings.",
    longDescription: "A complete building management solution designed for property managers, residents, and facility teams. Manage maintenance requests, tenant communications, payments, amenity bookings, visitor management, and facility operations. Includes mobile apps for residents and staff, automated billing, and detailed reporting.",
    priceEstimate: "From $12,500",
    deliveryTime: "8–12 weeks",
    technologies: ["React", "Node.js", "PostgreSQL", "React Native", "Payment Gateway"],
    features: [
      "Maintenance request management",
      "Tenant portal & communication",
      "Automated billing & payments",
      "Amenity booking system",
      "Visitor & access management"
    ],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 18,
    slug: "real-estate-crowdfunding",
    title: "Real Estate Crowdfunding Platform",
    category: "FinTech & Investment",
    shortDescription: "Investment platform for crowdfunding real estate development projects with equity or debt models.",
    longDescription: "A professional crowdfunding platform specifically designed for real estate development projects. Enables developers to raise capital from multiple investors while providing investors with detailed project information, investment tracking, and returns management. Includes KYC/AML compliance, secure payment processing, project milestones tracking, and investor communications.",
    priceEstimate: "From $16,000",
    deliveryTime: "10–14 weeks",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe/Payment Gateway", "AWS"],
    features: [
      "Project listing & fundraising campaigns",
      "Investor KYC/AML verification",
      "Secure payment processing",
      "Investment tracking & returns",
      "Milestone-based fund release"
    ],
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 19,
    slug: "ai-document-intelligence",
    title: "AI Document Intelligence & Automation",
    category: "AI & Automation",
    shortDescription: "Advanced AI system for automatic document processing, extraction, classification, and intelligent workflow automation.",
    longDescription: "A cutting-edge AI-powered platform that revolutionizes document management. Automatically extracts data from invoices, contracts, forms, and IDs using OCR and NLP. Intelligently classifies documents, validates information, routes for approval, and integrates with ERP systems. Reduces manual data entry by 95% and processing time from hours to seconds.",
    priceEstimate: "From $14,500",
    deliveryTime: "8–10 weeks",
    technologies: ["Python", "TensorFlow", "OpenAI GPT", "OCR", "React", "PostgreSQL"],
    features: [
      "AI-powered OCR & data extraction",
      "Intelligent document classification",
      "Automated validation & verification",
      "Smart workflow routing",
      "ERP/CRM integration"
    ],
    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 20,
    slug: "smart-inventory-iot",
    title: "Smart Inventory Management with IoT & AI",
    category: "AI & IoT",
    shortDescription: "IoT-enabled intelligent inventory system with real-time tracking, predictive analytics, and automated reordering.",
    longDescription: "Next-generation inventory management combining IoT sensors, RFID technology, and AI predictive analytics. Real-time stock monitoring, automated reorder triggers, expiry tracking, warehouse optimization, and demand forecasting. Includes mobile apps, barcode/RFID scanning, multi-warehouse support, and integration with e-commerce and ERP systems.",
    priceEstimate: "From $11,200",
    deliveryTime: "7–10 weeks",
    technologies: ["React", "Node.js", "IoT", "RFID", "AI/ML", "MongoDB", "React Native"],
    features: [
      "Real-time IoT sensor monitoring",
      "RFID & barcode scanning",
      "AI-powered demand forecasting",
      "Automated reorder management",
      "Multi-warehouse optimization"
    ],
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 21,
    slug: "beauty-clinic-website",
    title: "Beauty Clinic Website",
    category: "Healthcare & Beauty",
    shortDescription: "Premium beauty clinic website with online booking, service pages, before/after gallery, and WhatsApp lead capture.",
    longDescription: "A modern, premium website for beauty clinics and aesthetic centers focused on conversions. Includes a clean service catalog (injection/laser/skin-care/etc.), online booking request, before/after gallery, testimonials, Instagram integration, WhatsApp quick contact, multilingual support (EN/AR/FA), and a lightweight admin workflow for updating content. Optimized for Core Web Vitals and local search visibility.",
    priceEstimate: "From $1,800",
    deliveryTime: "2–3 weeks",
    technologies: ["React 19", "Next.js", "AI Models", "Tailwind/shadcn", "Cloudflare", "SEO"],
    features: [
      "High-converting landing sections",
      "Services pages & pricing blocks",
      "Online booking request form",
      "Before/after gallery & testimonials",
      "WhatsApp & Instagram integration"
    ],
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=800&fit=crop&q=80"
  },
  {
    id: 22,
    slug: "seo-and-site-management-monthly",
    title: "SEO & Website Management (Monthly)",
    category: "Monthly Services",
    shortDescription: "Monthly SEO + ongoing site management: content updates, technical monitoring, performance, security, and reporting.",
    longDescription: "A monthly retainer service that keeps your website fast, secure, and growing. Includes technical SEO checks, on-page optimization, Core Web Vitals monitoring, content updates, landing page improvements, uptime monitoring, backups, security hardening, and a monthly performance report. Suitable for business websites, clinics, and e-commerce stores.",
    priceEstimate: "From $450 / month",
    deliveryTime: "Ongoing (monthly)",
    technologies: ["Google Search Console", "GA4", "Technical SEO", "Performance", "Security"],
    features: [
      "Monthly technical SEO audit & fixes",
      "Content updates (text/images/pages)",
      "Performance optimization (Core Web Vitals)",
      "Uptime monitoring, backups & security",
      "Monthly report + action plan"
    ],
    heroImage: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=800&fit=crop&q=80"
  }
];
