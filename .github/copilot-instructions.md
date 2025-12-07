### **Senior Blockchain LLC — Projects Portfolio (React 19 + shadcn/ui)**

### **Instructions for GitHub Copilot**

---

## **🎯 Objective**

Generate a complete **Projects Portfolio System** using **React 19**, **TypeScript**, **shadcn/ui**, and modern UI architecture.
The portfolio contains:

* A **Projects List Page**
* **Individual Project Presentation Pages**
* Reusable components (Cards, Pricing Blocks, Hero sections, Feature grids)

All content should be clean, minimal, elegant, and aligned with a premium tech-consulting brand.

---

## **📁 Folder Structure (Copilot must follow this)**

```
src/
 ├─ components/
 │   ├─ ProjectCard.tsx
 │   ├─ ProjectHero.tsx
 │   ├─ ProjectFeature.tsx
 │   ├─ PriceBox.tsx
 │   ├─ Section.tsx
 │   └─ ui/ (shadcn auto-generated components)
 │
 ├─ data/
 │   └─ projects.ts
 │
 ├─ pages/
 │   ├─ projects/
 │   │    ├─ index.tsx
 │   │    ├─ [slug].tsx
 │   │
 │   └─ home.tsx
 │
 ├─ lib/
 │   └─ utils.ts
 │
 └─ styles/
     └─ projects.css
```

---

# **📌 DATA FILE — Project List**

Copilot must create this file: `src/data/projects.ts`

Each project includes:

* id
* slug
* title
* shortDescription
* longDescription
* priceEstimate
* features
* technologies
* heroImage (placeholder)
* deliveryTime
* difficultyLevel

### **Include these 10 sample projects:**

---

## **Project 1 — Real Estate Website**

```
{
  id: 1,
  slug: "real-estate-website",
  title: "Real Estate Website",
  shortDescription: "A modern and scalable real estate platform with property listings, maps, filters, and CRM tools.",
  longDescription: "A fully customized real estate platform designed for agencies to publish listings, manage leads, connect WhatsApp, and automate customer engagement. Includes maps integration, filters, project pages, and admin dashboard.",
  priceEstimate: "From $2,500",
  deliveryTime: "3–5 weeks",
  difficultyLevel: "Medium",
  technologies: ["React 19", "Next.js", "Supabase", "shadcn/ui", "Cloudflare"],
  features: [
    "Advanced property search & filters",
    "Interactive maps (Google/Mapbox)",
    "Agent dashboard & CRM tools",
    "WhatsApp quick messaging",
    "Multi-language support (EN/AR)"
  ],
  heroImage: "/images/projects/real-estate.jpg"
}
```

---

## **Project 2 — AI-Powered E-Commerce Store**

```
{
  id: 2,
  slug: "ai-ecommerce-platform",
  title: "AI-Powered E-Commerce Store",
  shortDescription: "A smart store with AI-based product tagging, recommendations, and dynamic filtering.",
  longDescription: "An advanced online store powered by AI for automatic product classification, smart recommendations, and ultra-fast filtering. Includes admin panel, payment gateway, and mobile-friendly design.",
  priceEstimate: "From $3,000",
  deliveryTime: "4–6 weeks",
  difficultyLevel: "High",
  technologies: ["React 19", "Next.js", "AI Models", "Stripe", "Tailwind/Shadcn"],
  features: [
    "AI auto-tagging of products",
    "Dynamic smart filtering",
    "Recommendation engine",
    "Payment gateway integration",
    "Lightning-fast product search"
  ],
  heroImage: "/images/projects/ai-store.jpg"
}
```

---

## **Project 3 — WhatsApp Management Software**

```
{
  id: 3,
  slug: "whatsapp-management",
  title: "WhatsApp Management Software",
  shortDescription: "A powerful dashboard to manage WhatsApp chats, automation, bulk messaging, and templates.",
  longDescription: "A complete WhatsApp business software with contact grouping, chat templates, broadcast messages, auto-reply rules, and multi-agent support.",
  priceEstimate: "From $2,200",
  deliveryTime: "3–4 weeks",
  difficultyLevel: "Medium",
  technologies: ["React", "Node.js", "WhatsApp API", "shadcn/ui"],
  features: [
    "Multi-agent WhatsApp inbox",
    "Auto-replies & workflows",
    "Bulk broadcasting",
    "Templates & quick replies",
    "Chat analytics"
  ],
  heroImage: "/images/projects/whatsapp.jpg"
}
```

---

## **Project 4 — Call Center System**

```
{
  id: 4,
  slug: "call-center-system",
  title: "Call Center System",
  shortDescription: "A cloud call-center platform integrated with IVR, routing, agent dashboard, and reporting.",
  longDescription: "A complete call-center solution with IVR menus, forwarding logic, analytics dashboard, ticketing, and CRM integration.",
  priceEstimate: "From $4,500",
  deliveryTime: "5–8 weeks",
  difficultyLevel: "High",
  technologies: ["Asterisk", "React", "WebRTC", "VoIP APIs"],
  features: [
    "IVR (press 1 for sales...)",
    "Call routing & queueing",
    "Agent dashboard",
    "Call recordings",
    "Live analytics"
  ],
  heroImage: "/images/projects/callcenter.jpg"
}
```

---

## **Project 5 — Video Call Platform**

```
{
  id: 5,
  slug: "video-call-platform",
  title: "Video Call Platform",
  shortDescription: "Secure, high-quality video meetings built using WebRTC.",
  longDescription: "A scalable video communication system with screen sharing, chat, recording, and meeting scheduling.",
  priceEstimate: "From $5,000",
  deliveryTime: "5–7 weeks",
  difficultyLevel: "High",
  technologies: ["React", "WebRTC", "Node.js", "shadcn"],
  features: [
    "HD video meetings",
    "Screen sharing",
    "Recording",
    "Chat & reactions",
    "Meeting scheduler"
  ],
  heroImage: "/images/projects/video-call.jpg"
}
```

---

## **Project 6 — Online Meeting Manager & Recording**

```
{
  id: 6,
  slug: "meeting-management",
  title: "Meeting Management & Recording",
  shortDescription: "A system for scheduling, hosting, and recording meetings with AI summaries.",
  longDescription: "A productivity system for teams to manage meetings, auto-record them, transcribe audio, and generate AI summaries.",
  priceEstimate: "From $6,000",
  deliveryTime: "6–8 weeks",
  difficultyLevel: "High",
  technologies: ["React", "WebRTC", "AI Models", "Node.js"],
  features: [
    "Meeting scheduling",
    "Auto-recording",
    "AI transcription",
    "AI summary generation",
    "Team dashboard"
  ],
  heroImage: "/images/projects/meeting.jpg"
}
```

---

## **Project 7 — Insurance ERP System**

```
{
  id: 7,
  slug: "insurance-erp",
  title: "Insurance ERP System",
  shortDescription: "A complete ERP for insurance brokers in Oman with policies, claims, commissions, and CRM.",
  longDescription: "A modern insurance ERP tailored for Omani brokers. Includes policy lifecycle, commissions, claims, CRM, invoicing, multilingual support, and full automation.",
  priceEstimate: "From $12,000",
  deliveryTime: "10–16 weeks",
  difficultyLevel: "Very High",
  technologies: ["React", "Blazor", "PostgreSQL", "Odoo API"],
  features: [
    "Policy management",
    "Claims workflow",
    "Commission engine",
    "Customer portal",
    "Full bilingual support (EN/AR)"
  ],
  heroImage: "/images/projects/insurance-erp.jpg"
}
```

---

## **Project 8 — Odoo Mobile App (Android/iOS Module)**

```
{
  id: 8,
  slug: "odoo-mobile-module",
  title: "Odoo Android & iOS Mobile Module",
  shortDescription: "A mobile application layer for Odoo, built for Android & iOS.",
  longDescription: "A fully integrated mobile module for Odoo, enabling customers and employees to access ERP features from mobile devices.",
  priceEstimate: "From $3,500",
  deliveryTime: "4–6 weeks",
  difficultyLevel: "Medium",
  technologies: ["React Native", "Odoo API", "TypeScript"],
  features: [
    "Login & authentication",
    "Orders & invoices",
    "Notifications",
    "Forms & approvals",
    "Offline mode"
  ],
  heroImage: "/images/projects/odoo-mobile.jpg"
}
```

---

## **Project 9 — Odoo Payment Gateway (Bank Muscat + Sohar)**

```
{
  id: 9,
  slug: "odoo-payment-gateways-oman",
  title: "Odoo Payment Gateway Module (Bank Muscat & Sohar)",
  shortDescription: "Secure payment gateway integration for Odoo ERP for Omani banks.",
  longDescription: "A production-ready payment gateway module for Odoo, supporting Bank Muscat and Bank Sohar. Includes encryption, callbacks, refunds, and order verification.",
  priceEstimate: "From $2,800",
  deliveryTime: "3–5 weeks",
  difficultyLevel: "Medium",
  technologies: ["Python", "Odoo", "AES Encryption"],
  features: [
    "Payment initialization",
    "Callback handling",
    "Refund API",
    "Order verification",
    "AES-128-ECB encryption"
  ],
  heroImage: "/images/projects/payment-oman.jpg"
}
```

---

## **Project 10 — Aramex Shipping Module for Odoo**

```
{
  id: 10,
  slug: "odoo-aramex-shipping",
  title: "Aramex Shipping Module for Odoo",
  shortDescription: "Automated Aramex shipping integration with Odoo.",
  longDescription: "A complete shipping module that connects Odoo orders with Aramex API for label creation, shipment tracking, and rate calculation.",
  priceEstimate: "From $2,400",
  deliveryTime: "3–4 weeks",
  difficultyLevel: "Medium",
  technologies: ["Python", "Odoo", "REST API"],
  features: [
    "Rate calculation",
    "Shipment creation",
    "Tracking updates",
    "Label generation",
    "Cash-on-delivery support"
  ],
  heroImage: "/images/projects/aramex.jpg"
}
```

---

# **📄 Project List Page — `pages/projects/index.tsx`**

Copilot must generate:

* A hero section
* A responsive grid
* Cards using shadcn/ui
* Animations (fade, scale)
* Click → open project details page

---

# **📄 Project Details Page — `pages/projects/[slug].tsx`**

Copilot must generate:

* Full hero banner
* Features list
* Pricing box (stylish)
* Technology tags
* Timeline bar
* Call-to-action section
* Beautiful section dividers

---

# **📦 Shared UI Components**

## **ProjectCard**

* Minimal card
* Hover scale
* Shows price immediately
* CTA button

## **ProjectHero**

* Large title
* Background image
* Light overlay
* Centered text

## **PriceBox**

* Bold pricing
* Feature bullets
* Button “Request Quote”

---

# **🎨 Styling Guidelines**

* Use **brand colors** of Senior Blockchain LLC
* Use **shadcn/ui** utilities
* Use **Tailwind** spacing rules
* Smooth animations using `framer-motion`
* Typography must feel **enterprise-grade**

---

# **📢 Final Instruction to Copilot**

```
Follow this entire document as the master specification.
Use React 19 + TypeScript + shadcn/ui components.
Generate clean, production-ready, readable code.
Every page must look modern, premium, and well-animated.
```

 