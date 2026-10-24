/*
  Change summary:
  - What: Shared site content. Featured Work now includes GT Home Solutions and PA Copilot.
  - Why: These two live projects belong in the same list as the other client sites.
  - Related: components/home/FeaturedWork.tsx, public/projects/gt-home-*.png, public/projects/pa-copilot-*.png
  - MCP Context 7: plain data module; no framework API here.
*/

// --- Navigation ---
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/products", label: "Products" },
] as const;

// Business contact: one email and one mobile, used by the footer, contact page, and founder card.
export const contact = {
  email: "aswebcrafters@gmail.com",
  phoneDisplay: "0302 3368307",
  phoneTel: "+923023368307",
  whatsapp: "https://wa.me/923023368307",
  address: "Islamabad, Pakistan",
};

// --- Services (business rule: six offers, each has its own route) ---
export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    eyebrow: "Turn Visitors Into Customers",
    blurb:
      "Fast, search-ready sites built to earn trust, collect enquiries, and grow the business — not just look finished.",
    summary:
      "A high-performance storefront that actually converts, built around your offer instead of a generic template.",
    who: [
      "Teams stuck with a slow or mobile-unfriendly site",
      "New brands that need to look established on day one",
      "Founders who have outgrown locked-down templates",
    ],
    why: [
      "Most buyers judge credibility from the first screen.",
      "A clear site works as a salesperson after hours.",
      "Ads and SEO need a single, fast landing hub.",
    ],
    packages: [
      { name: "Landing Page", pages: "1", note: "Focused campaign page" },
      { name: "Business Website", pages: "3–5", note: "Most requested" },
      { name: "Custom / Commerce", pages: "6–8", note: "Deeper product flows" },
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    eyebrow: "Software Built Around Your Business",
    blurb:
      "Systems designed around your real workflow so the team stops bending around someone else’s product.",
    summary:
      "Owned software for operations that off-the-shelf tools cannot hold together.",
    who: [
      "Operations run across five or more disconnected apps",
      "Data rules that generic SaaS cannot meet",
      "Teams paying rising per-seat fees as they grow",
    ],
    why: [
      "You own the product — no surprise shutdowns.",
      "Manual steps that generic tools skip can be automated.",
      "Proprietary systems raise the value of the company.",
    ],
    packages: [
      { name: "Workflow MVP", pages: "1 core flow", note: "Prove the bottleneck fix" },
      { name: "Operations Suite", pages: "Multi-module", note: "Most requested" },
      { name: "Enterprise Build", pages: "Full stack", note: "Auth, billing, roles" },
    ],
  },
  {
    slug: "seo",
    title: "SEO & Growth",
    eyebrow: "Be Found Before Your Competitors",
    blurb:
      "Rank for the searches that already want what you sell, then keep that traffic without renting every click.",
    summary:
      "Long-term search visibility so qualified buyers find you before they find the next tab.",
    who: [
      "Local and national service brands that need inbound leads",
      "Sites with traffic that never turns into conversations",
      "Teams tired of paying for the same click twice",
    ],
    why: [
      "People searching are already in-market.",
      "Rankings compound after the work is done.",
      "Organic placement reads as trust, not an interruption.",
    ],
    packages: [
      { name: "Basic", pages: "Audit + keywords", note: "Foundation" },
      { name: "Advance", pages: "Content + AI search", note: "Recommended" },
      { name: "Growth Desk", pages: "Full channel", note: "Content + technical" },
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    eyebrow: "Turn Ad Spend Into Revenue",
    blurb:
      "Campaigns aimed at people ready to buy, with creative and tracking tight enough to see what actually paid back.",
    summary:
      "Paid media that is judged on revenue, not impressions.",
    who: [
      "D2C and ecommerce brands ready to scale volume",
      "B2B teams with a working offer and a leaky funnel",
      "High-ticket services that need qualified booked calls",
    ],
    why: [
      "Spend only shows to people statistically likely to buy.",
      "Visibility can start this week, not next quarter.",
      "Retargeting brings back visitors who almost converted.",
    ],
    packages: [
      { name: "Basic", pages: "One platform", note: "Test and learn" },
      { name: "Advance", pages: "Meta + Google", note: "Recommended" },
      { name: "Always-on", pages: "Creative + media", note: "Weekly optimization" },
    ],
  },
  {
    slug: "saas",
    title: "SaaS Development",
    eyebrow: "Build the Product You've Been Planning",
    blurb:
      "From first useful version to a platform people can pay for — hosted, billed, and ready to grow.",
    summary:
      "Subscription products with real users, not slide-deck prototypes.",
    who: [
      "Founders with a validated workflow problem",
      "Owners who want one product for a daily job, like lead follow-up",
      "Teams that need billing, roles, and dashboards",
    ],
    why: [
      "Ready products skip months of greenfield cost.",
      "We host and maintain the stack so you can sell.",
      "WhatsApp Lead Desk is the follow-up product we offer. New builds can stay that narrow.",
    ],
    packages: [
      { name: "Lead Desk", pages: "Form → WhatsApp", note: "Our product" },
      { name: "MVP Sprint", pages: "Core loop", note: "First paying users" },
      { name: "Platform", pages: "Multi-tenant", note: "Scale path" },
    ],
  },
  {
    slug: "automation-tools",
    title: "Business Automation",
    eyebrow: "Stop Repeating Manual Work",
    blurb:
      "Connect the tools you already use so follow-ups, invoices, and handoffs happen without another spreadsheet.",
    summary:
      "Quiet systems that move leads and work while the team sleeps.",
    who: [
      "Service businesses drowning in copy-paste admin",
      "Sales teams that lose leads between form and CRM",
      "Clinics, agencies, and shops that book by hand",
    ],
    why: [
      "Data moves between apps without retyping.",
      "New leads get a reply in minutes, not tomorrow.",
      "Reminders and invoices stop depending on memory.",
    ],
    packages: [
      { name: "Lead Desk", pages: "Form → CRM", note: "First automation" },
      { name: "Ops Pack", pages: "3–5 workflows", note: "Most requested" },
      { name: "AI Desk", pages: "Inbox + routing", note: "Classification + drafts" },
    ],
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

/*
  Our product.
  Business rule: one offer only. Do not invent user counts, and do not publish a price.
  The product is the thing we sell with a website: form in, WhatsApp out, list saved, reminder if quiet.
*/
export const leadDesk = {
  name: "WhatsApp Lead Desk",
  summary:
    "When someone fills the form on your site, the lead reaches your WhatsApp, stays in one list, and you get a reminder if nobody replies.",
  who: [
    { title: "Property agents", body: "A site visit request should reach you before the buyer calls the next listing." },
    { title: "Clinics and coaches", body: "An appointment enquiry should not sit in an inbox until the next morning." },
    { title: "Local services", body: "Plumbers, tutors, and shops lose work when the form and the phone stay disconnected." },
  ],
  steps: [
    { title: "Someone fills your form", body: "Name, phone, and what they want. The same form you already put on the website." },
    { title: "You get a WhatsApp", body: "The lead arrives on the owner's WhatsApp, so they can reply while the customer is still interested." },
    { title: "It is saved in one list", body: "Every enquiry sits in a simple list so nothing depends on scrolling chat history." },
    { title: "A reminder if it goes quiet", body: "If nobody replies, the desk sends a reminder so the lead is not forgotten." },
  ],
  includes: [
    "Your website form connected to WhatsApp",
    "One shared list of new leads",
    "A reminder when a lead has no reply",
    "Setup on a new A&S site, or the site you already have",
  ],
} as const;

// --- Live A&S projects (replaced the old demo case studies) ---
export const caseStudies = [
  {
    slug: "vamos-fugir",
    number: "01",
    industry: "Travel & Experiences",
    name: "Vamos Fugir",
    theme: "travel" as const,
    body:
      "A Portugal-based travel house needed a site that felt like the trip, not a brochure wall. We shaped destinations, small-group dates, and search so people can pick a journey by mood, month, and place.",
    result:
      "Trip pages now carry dates, prices, and a clear next step — from São Tomé circuits to Marrakech city breaks.",
    services: "Website Design, Development & Booking Journey",
    href: "https://vamosfugir.pt/en",
    mockTitle: "Journeys that go beyond the horizon.",
  },
  {
    slug: "vista-estate",
    number: "02",
    industry: "Real Estate Lead Gen",
    name: "Vista Estate",
    theme: "estate" as const,
    body:
      "The brief was not another property listing grid. We built a lead-first site: the offer sits on the first screen, with a short path from the visit to an enquiry.",
    result:
      "The live page states that offer, then the enquiry path.",
    services: "Website Development, Lead Capture & Conversion",
    href: "https://vistaestate.shop/",
    mockTitle: "Smarter leads. Faster closings.",
  },
  {
    slug: "sell-predator",
    number: "03",
    industry: "Sales & AI Support",
    name: "Sell Predator",
    theme: "predator" as const,
    body:
      "A sales team wanted one page for the product, the follow-up, and support. We shipped a site that explains the AI desk in plain language and points buyers to a trial.",
    result:
      "The first screen states the product in one line, then the trial. Open the project to read it.",
    services: "SaaS Website, Product Narrative & CTA Design",
    href: "https://sellpredator.com/",
    mockTitle: "Sell smarter. Support faster.",
  },
  {
    slug: "ultd-llc",
    number: "04",
    industry: "Texas Real Estate",
    name: "ULTD LLC",
    theme: "estate" as const,
    body:
      "A Texas brokerage needed a site that felt like modern living, not a MLS dump. We built ULTD around homes, neighborhoods, and a clear path to talk to a broker.",
    result:
      "The first screen now sets the tone: redefining modern living — then the listings and contact path follow.",
    services: "Website Design, Development & Brokerage Enquiry",
    href: "https://ultdllc.com/",
    mockTitle: "Redefining modern living.",
  },
  {
    slug: "europa-financing",
    number: "05",
    industry: "Mortgage & Referrals",
    name: "Europa Financing",
    theme: "estate" as const,
    body:
      "Referrals only work if the next step is obvious. We built Europa Financing so agents and buyers can read the offer on the page and send a deal in from there.",
    result:
      "The site sells the referral desk first, then the form. Partners know what happens after they click.",
    services: "Website Development, Lead Capture & Conversion",
    href: "https://europafinancing.com/",
    mockTitle: "Close deals faster with intelligent referrals.",
  },
  {
    slug: "by-smart",
    number: "06",
    industry: "E-Commerce",
    name: "BY Smart",
    theme: "shop" as const,
    body:
      "A store that only lists products still loses shoppers. We built BY Smart around comparison and confidence — shop smarter, choose better — with a clean catalog and a mobile-first checkout path.",
    result:
      "The storefront now reads as a buying guide, not a warehouse dump.",
    services: "Ecommerce Website, UX & Conversion",
    href: "https://e-com-site-mocha.vercel.app/",
    mockTitle: "Shop smarter. Choose better.",
  },
  // --- GT Home: a realtor site. The note describes the page, not a sales result. ---
  {
    slug: "gt-home",
    number: "07",
    industry: "Kansas & Missouri Real Estate",
    name: "GT Home Solutions",
    theme: "estate" as const,
    body:
      "Dr. Danny Tipton needed a site that introduces him before any listing. We built GT Home Solutions so buyers and sellers in Kansas and Missouri see who he is, and can choose buy or sell on the first screen.",
    result:
      "The live page names the agent, the two states he covers, and the next step.",
    services: "Website Design, Development & Enquiry Path",
    href: "https://dany-tiptan.vercel.app/",
    mockTitle: "Your trusted real estate expert.",
  },
  // --- PA Copilot: the public entry is the sign-in. Do not invent clinic results. ---
  {
    slug: "pa-copilot",
    number: "08",
    industry: "Prior Authorization",
    name: "PA Copilot",
    theme: "clinic" as const,
    body:
      "A clinic tool for prior authorization needed a front door, not a blank login. We built the PA Copilot sign-in so the privacy promise and the product sit beside the form.",
    result:
      "The page states the offer in one line, then the sign-in. Open the project to read it.",
    services: "Product Website, Sign-in & Narrative",
    href: "https://pa-copliot-gamma.vercel.app/login",
    mockTitle: "Prior authorization, ready to sign in.",
  },
] as const;

// One path, used on the homepage and the services page so the first step has one name.
export const processSteps = [
  {
    phase: "Step 01",
    title: "Read what you have",
    body: "The founder looks at the current site, how enquiries arrive, and where people stall — before any new build starts.",
  },
  {
    phase: "Step 02",
    title: "Name the real leak",
    body: "Sometimes the site is unclear. Sometimes the follow-up is the problem. The brief names that, not a long wishlist.",
  },
  {
    phase: "Step 03",
    title: "Build the fix",
    body: "A website, a piece of software, or a WhatsApp follow-up, shaped around how the business already works.",
  },
  {
    phase: "Step 04",
    title: "Tighten after launch",
    body: "After real visitors arrive, the founder watches what stalls and tightens the page or the follow-up.",
  },
] as const;

// Real founder from the live A&S site. Photo is a local copy of that portrait.
export const founders = [
  {
    name: "Adeel Riaz",
    role: "CEO & Founder",
    subtitle: "Lead Developer",
    bio: "Adeel designs the page and writes the code himself. About 1.5 years building websites with React, Node, and Next.js.",
    tags: ["React", "Node", "Next.js", "MongoDB", "Leadership", "Strategy"],
    // Social icons only. The written email and phone stay on the contact page and footer.
    socials: [
      { kind: "github" as const, label: "GitHub", href: "https://github.com/malikadeel12" },
      { kind: "linkedin" as const, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-adeel-riaz-3bb59b270" },
      { kind: "email" as const, label: "Email", href: "mailto:aswebcrafters@gmail.com" },
    ],
    image: "/founders/adeel.jpg",
    initials: "AR",
    tone: "warm" as const,
  },
] as const;

export const faqs = [
  {
    q: "What does A&S WebCrafters do?",
    a: "A&S WebCrafters is a digital studio. We design and ship websites, custom software, SaaS products, automation, and growth systems for teams that want a long-term engine — not a one-off template.",
  },
  {
    q: "What services does A&S WebCrafters offer?",
    a: "Six offers: website development, custom software, SEO, performance marketing, SaaS products, and business automation. Most projects start by reading the current site and the follow-up, then choosing the offer that fits.",
  },
  {
    q: "Who does A&S WebCrafters work with?",
    a: "Owners who need a website, custom software, or follow-up on WhatsApp. Recent public work includes travel, property, and shops. Clients can be anywhere. The studio is based in Islamabad.",
  },
  {
    q: "Is A&S WebCrafters a software development company?",
    a: "Yes. The practice is founder-led engineering plus design. We write custom code, offer WhatsApp Lead Desk for enquiry follow-up, and also run the marketing systems a business needs.",
  },
  {
    q: "Where is A&S WebCrafters based?",
    a: "We are based in Islamabad, Pakistan, and we work with clients anywhere. Projects run remotely, with a direct WhatsApp and email line.",
  },
  {
    q: "How much does a website cost?",
    a: "Prices are not listed on the site. Share the project and we will send a quote after we understand the scope, integrations, and content.",
  },
  {
    q: "Can A&S WebCrafters build custom software for my business?",
    a: "Yes. Typical builds include CRMs, membership platforms, booking, billing, and internal ops tools. We start by mapping the workflow so the software fits the team, not the other way around.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes. Technical setup, content, and local or national visibility sit alongside the sites we ship. Retainers start from a basic audit plan and step up when content and AI-search work are in scope.",
  },
] as const;

/*
  Studio notes written for owners, not placeholder cards.
  Business rule: no invented results, cities, or reading times. Each article is a full piece.
*/
export const blogPosts = [
  {
    slug: "what-a-business-website-should-do",
    category: "Websites",
    minutes: 2,
    title: "What a Business Website Should Do Before It Tries to Look Impressive",
    excerpt:
      "A site can look finished and still fail the only job that matters: helping the right person take the next step.",
    sections: [
      {
        heading: "The first screen has one job",
        paragraphs: [
          "Most owners judge a new site by how it looks on a laptop in a meeting. A customer judges it in a few seconds on a phone, usually while they are already comparing you with someone else.",
          "The first screen should say who the work is for, what they get, and what to do next. If a visitor has to scroll to find the offer, or hunt for a phone number, the design is getting in the way of the sale.",
          "Pretty type and a dark hero do not fix a vague offer. Write the sentence a customer would repeat to a friend. If you cannot say it in one line, the page will not say it either.",
        ],
      },
      {
        heading: "Speed is part of trust",
        paragraphs: [
          "A slow page feels unfinished, even when the photos are good. People on mobile data will not wait for a heavy template to wake up. They go back to the search result and open the next business.",
          "That is why we build custom pages instead of stacking a page-builder on top of ten plugins. Fewer moving parts means the page can load, the form can open, and the person can send an enquiry without fighting the site.",
          "Ask whoever builds the site to open it on a normal phone, on a normal connection, before you approve it. If the first screen is still blank, the project is not done.",
        ],
      },
      {
        heading: "One path, not a menu of maybes",
        paragraphs: [
          "A clinic, an agent, a shop, and a studio do not need the same page. They do need the same discipline: one main action. Call, WhatsApp, or a short form. Pick the one your team will actually answer.",
          "Extra buttons feel helpful in a design file. On the live site they split attention. If both “Learn more” and “Book now” sit in the same spot, many people do neither.",
          "The page after the button matters as much as the button. A form that asks for twelve fields will lose the person who was ready to talk. Name, phone, and what they want is usually enough to start.",
        ],
      },
      {
        heading: "What we look at first",
        paragraphs: [
          "Before we design anything, we read the current path: where people arrive, where they stall, and what the team does with an enquiry after it lands. Sometimes the leak is the site. Sometimes the site is fine and the follow-up is the problem.",
          "A new A&S site is built around that finding. The visual work still has to feel like the brand, but it is there to carry the offer, not to hide a weak one.",
        ],
      },
    ],
  },
  {
    slug: "from-form-to-whatsapp",
    category: "Lead follow-up",
    minutes: 2,
    title: "Why a Website Form Is Not a Follow-Up System",
    excerpt:
      "The enquiry is only useful if it reaches the person who can reply while the customer is still interested.",
    sections: [
      {
        heading: "The quiet hour after the form",
        paragraphs: [
          "A visitor fills the form because they want an answer now. Then the message sits in an inbox the owner checks after lunch, or in a notification that looks like every other email. By the time someone replies, the customer has already called the next listing, clinic, or shop.",
          "The form did its job. The business did not have a path from that form to a person. That gap is where a lot of paid traffic and word-of-mouth quietly dies.",
        ],
      },
      {
        heading: "What should happen instead",
        paragraphs: [
          "The person who can reply should see the lead on the phone they already use. For most of the businesses we talk to, that phone is WhatsApp. They should not have to install a new app, and the customer should not have to either.",
          "WhatsApp Lead Desk is the follow-up we add for that job. Someone fills the form on the site. The lead reaches the owner on WhatsApp, it is saved in one list, and if nobody has replied, the desk sends a reminder so the enquiry is not forgotten in the chat.",
          "The list matters. A WhatsApp thread is easy to lose once the next message arrives. A single list of new leads means the team is not depending on memory or on scrolling yesterday’s chats.",
        ],
      },
      {
        heading: "Who feels this first",
        paragraphs: [
          "Property agents lose a visit request when it waits until morning. Clinics and coaches lose an appointment when the enquiry sits beside newsletters. Plumbers, tutors, and local shops lose the job when the website and the phone are two separate worlds.",
          "If your team already answers WhatsApp quickly, the desk is there so the website uses that habit instead of fighting it. If replies are slow, the reminder is the point. It is a nudge, not a new department.",
        ],
      },
      {
        heading: "It can sit on the site you already have",
        paragraphs: [
          "You do not need a brand-new website for this, though a clear form helps. We can connect the form on a new A&S site, or the form on the site you already run.",
          "We do not publish a price or a user count for Lead Desk on this site. If the gap between your form and your phone sounds familiar, tell us how enquiries arrive today and we will say whether this is the right fix.",
        ],
      },
    ],
  },
  {
    slug: "questions-before-you-hire",
    category: "Working with a studio",
    minutes: 2,
    title: "What to Ask Before You Hire Someone to Build Your Site",
    excerpt:
      "The proposal should tell you who does the work, what you will own, and what happens to an enquiry after launch.",
    sections: [
      {
        heading: "Who actually builds it",
        paragraphs: [
          "A lot of agency work is sold by one person and built by another team you never meet. The brief gets thinner each time it is passed along, and the finished site no longer matches the conversation you paid for.",
          "Ask, in the first call, who will design it and who will write the code. If the answer is a rotating bench, decide whether you are comfortable with that. At A&S the founder stays on the work. There is no separate account-manager layer between you and the build.",
        ],
      },
      {
        heading: "What you own when it is done",
        paragraphs: [
          "A cheap template can look acceptable and still lock you in. You may not be able to move the site, change the form, or hand it to another developer without starting over.",
          "Ask what you receive: the code, the content, the domain, and the hosting login. Ask what happens if you stop working together. A serious studio can answer that without getting vague.",
          "Custom work costs more thought than a theme, and we do not list public prices, because the number depends on the pages, the form, and the tools it has to talk to. The quote should come after the scope is clear, not before anyone has asked how you get customers.",
        ],
      },
      {
        heading: "How an enquiry will be handled",
        paragraphs: [
          "Launch day is not the finish if the new form dumps messages into an inbox nobody watches. Ask where a lead goes, who is notified, and what happens if that person is busy.",
          "If the answer is only “you will get an email,” decide whether email is really how your team works. If the team lives on WhatsApp, the site should meet them there.",
        ],
      },
      {
        heading: "What the first week after launch looks like",
        paragraphs: [
          "A site that has never met a real visitor will have rough edges: a sentence that confuses people, a button that is hard to tap, a page that is slower than it was in the preview.",
          "Ask what is included after go-live. Watching the first real enquiries and tightening the page is part of the job, not a surprise invoice, when that was agreed up front.",
          "If a studio cannot explain the first month in plain language, they are selling a handover, not a working site.",
        ],
      },
    ],
  },
  {
    slug: "found-without-renting-every-click",
    category: "Search",
    minutes: 2,
    title: "How a Local Business Gets Found Without Paying for Every Click",
    excerpt:
      "Search works when the page answers a real question. Ads can start sooner. They should not be the only way anyone hears of you.",
    sections: [
      {
        heading: "People who search are already looking",
        paragraphs: [
          "Someone typing “dentist in my city” or “website for a clinic” is not browsing for fun. They have a job to do. If your page answers that job clearly, you are in the conversation before you have paid for the visit.",
          "That only works if the page is specific. A homepage that says you do “digital solutions for modern brands” does not help a person who needs a dentist, an agent, or a shop. Name the service, the place, and the next step.",
        ],
      },
      {
        heading: "The page has to be worth ranking",
        paragraphs: [
          "Search engines, and the answer boxes people read now, prefer a page that states the offer in plain language. Hiding the point under a slogan makes you harder to quote and harder to trust.",
          "Technical basics still matter: the site should load properly on a phone, each important service should have its own page, and the business name, city, and contact details should match what you use everywhere else. A messy address or a dead form wastes whatever ranking you earn.",
          "We do not promise a position or a timeframe on this site. Rankings move, competitors publish too, and anyone who guarantees page one without looking at your market is selling a feeling.",
        ],
      },
      {
        heading: "Ads are a tap, not a plan",
        paragraphs: [
          "Paid ads can bring visits this week. They stop the day you stop paying. That is useful when you are testing an offer. It is expensive when it is the only way the phone rings.",
          "The useful order is simple. Make the page able to convert. Then decide whether search, ads, or both should send people to it. Sending paid traffic to a slow or confusing page is how businesses pay for the same click twice.",
        ],
      },
      {
        heading: "Start with the leak, not the channel",
        paragraphs: [
          "If nobody can tell what you sell, more traffic will not fix it. If people enquire and nobody replies, a higher ranking will not fix it either.",
          "That is the order we use. Read the current site and the follow-up, name the actual leak, then choose the work: a clearer site, search, ads, or a follow-up desk. The channel is the second decision.",
        ],
      },
    ],
  },
] as const;

export const techGroups = [
  {
    title: "Frontend & UI",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "TypeScript", "Firebase", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel"],
  },
  {
    title: "Databases & CMS",
    items: ["MongoDB", "WordPress"],
  },
] as const;
