/**
 * Masaf Development Organization — Site Content (source of truth for v1)
 *
 * Content comes from `masaf-brand-assets/logos/Masaf website content draft.docx`
 * (the owner's change spec) layered on the legacy `content/content.md`.
 *
 * When Sanity is seeded later, pages can read from Sanity and fall back here.
 */

type NavItem = {
  label: string;
  href: string;
};

export const siteSettings = {
  name: "Masaf Development Organization",
  shortName: "MASAF",
  url: "https://masaf.co",
  description:
    "A youth-led Ethiopian nonprofit empowering underserved communities through skills development, innovation, and inclusive economic opportunities.",
  contact: {
    email: "contact@masaf.co",
    phones: {
      ethiopia: ["+251 916 195 311", "+251 9 414 17543"],
    },
    offices: [
      {
        name: "Addis Ababa Office",
        street: "Hatal Building, Wollo Sefer, Kirkos Sub-city, 3rd Floor",
        city: "Addis Ababa",
        region: "",
        country: "Ethiopia",
      },
      {
        name: "Jigjiga – MASAF Space Hub & Office",
        street: "Aayardega Street",
        city: "Jigjiga",
        region: "Somali Regional State",
        country: "Ethiopia",
      },
      {
        name: "Degahbour – MASAF Space Hub & Office",
        street: "Aware Street, Kebele 04",
        city: "Degahbour",
        region: "Somali Regional State",
        country: "Ethiopia",
      },
    ],
  },
  socials: {
    facebook: "https://www.facebook.com/share/18YBhZ9eWx/?mibextid=wwXIfr",
    linkedin: "https://www.linkedin.com/company/masaf-space/",
    instagram: "https://www.instagram.com/masaf_development_org?igsh=MTFpN2F2eWU4MW9zdA==",
    twitter: "https://x.com/masafdev?s=11",
  },
} as const;

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Masaf Spaces", href: "/masaf-spaces" },
  { label: "Programs", href: "/programs" },
  { label: "News & Media", href: "/news" },
  { label: "Get Involved", href: "/get-involved" },
];

export const home = {
  hero: {
    tagline: "Empowering Youth. Expanding Opportunity. Building Resilient Communities.",
    subTaglines: [
      "Youth-led solutions creating pathways to skills, jobs, and resilience.",
      "Inclusive skills and innovation for underserved communities.",
      "Where youth potential transforms into opportunity and impact.",
    ],
    identity:
      "Masaf Development Organization (MASAF) is a youth-led nonprofit organization based in Ethiopia, empowering underserved communities through skills development, innovation, and inclusive economic opportunities.",
    primaryCta: { label: "Partner With Us", href: "/get-involved" },
    secondaryCta: { label: "Explore Our Work", href: "/programs" },
  },
  whoWeAre: {
    eyebrow: "Who We Are",
    heading: "Youth-driven. Impact-focused. Rooted in Ethiopia.",
    body: "We expand opportunities for youth, women, internally displaced persons, and persons with disabilities. Our work sits at the intersection of skills, entrepreneurship, digital innovation, and community resilience — equipping the next generation of African leaders to build livelihoods and communities that last.",
  },
  mission: {
    eyebrow: "Our Mission",
    statement:
      "To empower youth and marginalized communities in Ethiopia by expanding access to skills, education, digital opportunities, and networks that create jobs, strengthen resilience, and drive inclusive development.",
  },
  whyMasaf: {
    eyebrow: "Why MASAF",
    heading: "Five principles that shape every program",
    points: [
      {
        title: "Youth-Led & Youth-Focused",
        description:
          "Young people are not beneficiaries — they are co-designers, facilitators, and leaders across our work.",
      },
      {
        title: "Inclusive by Design",
        description:
          "We deliberately create access for women, internally displaced persons, and persons with disabilities.",
      },
      {
        title: "Skills to Livelihoods",
        description:
          "Every program is built to translate learning into real jobs, enterprises, and economic participation.",
      },
      {
        title: "Blended Physical & Digital Model",
        description:
          "We combine on-the-ground MASAF Spaces with digital platforms that extend reach beyond any one city.",
      },
      {
        title: "Partnership-Driven",
        description:
          "We co-create with donors, governments, employers, and civil society — no single actor solves systemic barriers alone.",
      },
    ],
  },
  impact: {
    eyebrow: "Our Impact",
    heading: "Growing reach across the Horn of Africa",
    stats: [
      {
        value: "17,000+",
        label: "Youth engaged through programs, events, and digital platforms",
      },
      {
        value: "Multiple",
        label: "MASAF Spaces established as inclusive hubs for skills and innovation",
      },
      {
        value: "Hundreds",
        label: "Trained in employability, entrepreneurship, and digital skills",
      },
      {
        value: "Growing",
        label: "Partnerships with civil society, government, and private-sector actors",
      },
    ],
  },
  masafSpacesCallout: {
    eyebrow: "A Flagship Program",
    heading: "MASAF Spaces",
    body: "Our first youth innovation and co-working hub opened in the Somali Region of Ethiopia. Today MASAF Spaces is a blended physical and digital model — a place where youth access skills training, mentorship, and peer networks designed for the realities of underserved communities.",
    cta: { label: "Explore MASAF Spaces →", href: "/masaf-spaces" },
  },
  programmaticFocus: {
    eyebrow: "Programmatic Focus",
    heading: "Six integrated areas of work",
    areas: [
      "Skills Development & Lifelong Learning",
      "Entrepreneurship & MSME Support",
      "Workforce Development & Employability",
      "Women's Economic Empowerment",
      "Technology, Digital Jobs & Innovation",
      "Community Resilience & IDP Support",
    ],
    cta: { label: "View All Programs →", href: "/programs" },
  },
  partnerSection: {
    eyebrow: "Partner With MASAF",
    heading: "Let's build resilient pathways together.",
    body: "MASAF grows through co-creation. Whether you fund programs, hire young talent, host research, or contribute expertise, there is a way to work with us.",
    partnershipTypes: [
      "Program funding and co-creation",
      "Employer partnerships and talent pipelines",
      "Hosting interns and young professionals",
      "Research, learning, and innovation initiatives",
    ],
    cta: { label: "Partner With Us →", href: "/get-involved" },
  },
  closing: {
    line: "Creating Pathways to Skills, Jobs, and Resilience.",
  },
} as const;

export const about = {
  hero: {
    eyebrow: "About MASAF",
    heading: "A youth-driven development organization.",
    body: "Masaf Development Organization (MASAF) began in April 2024 as Masaf Spaces — the first youth innovation and co-working hub in Ethiopia's Somali Region, headquartered in Jigjiga. As the work grew, we registered federally as a development organization so our skills, entrepreneurship, and resilience programming could scale across Ethiopia and the Horn of Africa.",
  },
  founding: {
    heading: "From a single hub to a nationwide mission",
    body: "We started because young people in the Somali Region had the ambition, creativity, and resolve to shape their future — but faced systemic barriers to skills, networks, and capital. The first MASAF Space became a proof point: when you combine inclusive space, practical training, and peer community, young people build real livelihoods. Today we carry that model into a full development organization.",
  },
  mission: {
    heading: "Our Mission",
    statement:
      "To empower youth and marginalized communities in Ethiopia — including women, internally displaced persons (IDPs), and persons with disabilities — by expanding access to skills, education, digital opportunities, and networks that create jobs, strengthen resilience, and drive inclusive development.",
  },
  objectives: {
    heading: "Organizational Objectives",
    items: [
      {
        title: "Expand access to quality skills and lifelong learning",
        description:
          "Equip youth with employable and entrepreneurial capabilities aligned with today's economy.",
      },
      {
        title: "Build inclusive economic opportunity",
        description:
          "Open pathways for women, IDPs, and persons with disabilities into jobs, enterprise, and leadership.",
      },
      {
        title: "Grow a resilient innovation ecosystem",
        description:
          "Strengthen hubs, networks, and digital platforms that support young founders and creatives.",
      },
      {
        title: "Deepen partnerships and co-creation",
        description:
          "Work alongside civil society, government, private sector, and donors to multiply impact.",
      },
      {
        title: "Generate and share learning",
        description:
          "Produce research, tools, and models other practitioners can adapt for their own contexts.",
      },
    ],
  },
  values: {
    heading: "Our Core Values",
    items: [
      {
        title: "Integrity",
        description:
          "We operate transparently, honor our commitments, and hold ourselves accountable to the communities we serve.",
      },
      {
        title: "Excellence",
        description:
          "We aim for the highest quality in programs, spaces, and research — never settling for what's merely adequate.",
      },
      {
        title: "Innovation",
        description:
          "We experiment, iterate, and adopt new tools and ideas to solve persistent problems in new ways.",
      },
      {
        title: "Inclusion & Equity",
        description:
          "We design for those most often left out. Access is the baseline; belonging is the goal.",
      },
      {
        title: "Collaboration",
        description:
          "We build with — not for — partners, communities, and young leaders who understand local realities best.",
      },
      {
        title: "Accountability",
        description:
          "We measure what matters, share what we learn, and adjust based on evidence.",
      },
      {
        title: "Empowerment",
        description:
          "We invest in people so they lead their own futures — and eventually, the futures of others.",
      },
    ],
  },
  approach: {
    heading: "Our Approach",
    items: [
      "Co-design programs with the young people they serve",
      "Combine physical spaces with digital delivery for scale",
      "Partner with employers and ecosystems for real pathways",
      "Center women, IDPs, and persons with disabilities by default",
      "Measure livelihood outcomes, not activity counts",
    ],
  },
  team: {
    heading: "The Team",
    body: "MASAF is led by a diverse team of development professionals, young leaders, and technologists drawn from across the Horn of Africa. We combine field experience in youth programs, livelihoods, and community resilience with fluency in digital product and ecosystem building.",
    members: [
      {
        name: "Ahmed Taman Hasen",
        role: "Founder & Executive Director",
        initials: "AH",
      },
    ],
  },
};

export const masafSpaces = {
  hero: {
    eyebrow: "Flagship Program",
    heading: "MASAF Spaces",
    subheading:
      "The first youth innovation hub in the Somali Region — now a blended model for inclusive skills and opportunity.",
  },
  overview: {
    heading: "Overview",
    body: "MASAF Spaces began in Jigjiga as a single physical hub — a welcoming place where young people could learn, build, and find community. It has grown into a repeatable model: a network of inclusive spaces, connected by a shared digital platform, designed to reach young people wherever they are.",
  },
  whyItMatters: {
    heading: "Why MASAF Spaces Matter",
    problem:
      "Young people in underserved communities face stacked barriers: limited access to training that matches the real economy, few physical spaces to collaborate, weak mentorship networks, and little visibility of opportunities. Women, IDPs, and persons with disabilities face even steeper barriers.",
    solution:
      "MASAF Spaces lower those barriers by offering inclusive places, practical curricula, peer community, and direct connections to employers and enterprises — bundled into one sustained experience.",
    impact:
      "Youth who engage with MASAF Spaces consistently report gains in confidence, skills, and employment — and become mentors, facilitators, and program leaders themselves.",
  },
  services: {
    heading: "Services Available to Youth",
    items: [
      {
        title: "Skills Development & Lifelong Learning",
        description:
          "Short courses and workshops in employability, leadership, and industry-relevant skills.",
      },
      {
        title: "Digital Literacy & Technology Access",
        description:
          "From foundational digital skills to coding, data, and creative tools — with access to devices and connectivity.",
      },
      {
        title: "Entrepreneurship Training & Business Coaching",
        description:
          "Practical curricula and one-on-one coaching for aspiring and early-stage founders.",
      },
      {
        title: "Startup Incubation & MSME Support",
        description:
          "Structured support for early-stage ventures, including workspace, mentorship, and investor readiness.",
      },
      {
        title: "Mentorship & Peer Networking",
        description:
          "Curated mentor matches and peer cohorts that turn isolated ambition into collective momentum.",
      },
      {
        title: "Career Guidance & Employability Support",
        description:
          "CV and portfolio coaching, interview preparation, and direct introductions to employer partners.",
      },
      {
        title: "Community Dialogues & Youth Leadership Programs",
        description:
          "Forums where young people lead conversations on the issues shaping their communities.",
      },
    ],
  },
  model: {
    heading: "Physical & Digital Model",
    physical: {
      title: "Physical MASAF Spaces",
      description:
        "Inclusive hubs offering hands-on training, peer learning, and youth-led initiatives. Open, accessible, and designed to feel like a second home for young people.",
    },
    digital: {
      title: "Digital MASAF Spaces",
      status: "Coming Soon",
      description:
        "An online platform for training, virtual mentorship, business support, and career guidance — extending MASAF's reach far beyond any single city.",
    },
  },
  youthLeadership: {
    heading: "Peer Support & Youth Leadership",
    body: "Young people don't just attend MASAF Spaces — they run them. Graduates return as facilitators, mentors, and program leads. It's the most reliable indicator we have that the model is working.",
  },
  vision: {
    heading: "Impact & Long-Term Vision",
    body: "We are building toward a network of MASAF Spaces across Africa — a reference model for inclusive, youth-led development. Each new space is a commitment to the idea that opportunity should not depend on where you were born.",
  },
};

export const programs = {
  hero: {
    eyebrow: "Programs",
    heading: "Integrated programs that address the real barriers facing youth.",
    body: "MASAF programs are designed to work together. A young person might join a skills cohort, graduate into entrepreneurship coaching, and eventually mentor peers through a digital jobs track. The goal is a sustained pathway, not a one-off workshop.",
  },
  thematicAreas: {
    heading: "Thematic Focus Areas",
    items: [
      "Skills Development & Lifelong Learning",
      "Entrepreneurship & MSME Support",
      "Youth Leadership & Civic Engagement",
      "Women's Economic Empowerment",
      "Workforce Development & Employability",
      "Digital Jobs & Innovation",
      "Financial Literacy & Inclusion",
      "Climate-Smart Livelihoods",
      "Community Resilience & IDP Support",
    ],
  },
};

export const news = {
  hero: {
    eyebrow: "News & Media",
    heading: "Stories, events, and media from across the MASAF community.",
  },
  sections: [
    { id: "news", label: "News & Updates" },
    { id: "events", label: "Events" },
    { id: "stories", label: "Success Stories" },
    { id: "gallery", label: "Media Gallery" },
    { id: "resources", label: "Resources" },
  ],
  posts: [
    {
      slug: "empowering-innovation-transforming-lives",
      category: "news",
      title: "Masaf Spaces: Empowering Innovation, Transforming Lives in Africa",
      excerpt:
        "The founding story — Masaf as a movement, from the Degahbour Community Library to the first innovation hub in Jigjiga.",
      publishedAt: "2024-12-07",
      body: [
        "What began as a single community library in Degahbour has grown into a movement. Masaf Spaces was founded by Ahmed Taman Hasen with a conviction that young people in the Somali Region of Ethiopia deserve the same access to opportunity, skills, and networks as their peers anywhere in the world.",
        "The Degahbour Community Library, established years before MASAF's formal founding, reached over 100,000 students with books, study space, and a quiet place to think. It proved that when you provide access, young people use it. That insight became the seed for something much larger.",
        "In April 2024, Masaf Spaces opened its first innovation and co-working hub in Jigjiga, the capital of Ethiopia's Somali Region. The hub offered training programs, mentorship, startup support, and a physical community for youth, women, and underserved populations who had been systematically excluded from economic opportunity.",
        "The response was immediate and overwhelming. Within months, hundreds of young people had enrolled in skills courses, launched ventures through the incubation program, and found peer networks that replaced isolation with collective momentum. MASAF was no longer just a space — it had become a platform for transformation.",
      ],
    },
    {
      slug: "inside-masaf-spaces-first-innovation-hub",
      category: "news",
      title:
        "Inside Masaf Spaces — the region's first innovation hub empowering the next generation of entrepreneurs",
      excerpt:
        "A 2024 year-in-review: launching the first innovation hub in the Somali Region of Ethiopia, with a focus on youth, women, and underserved communities.",
      publishedAt: "2025-05-02",
      body: [
        "2024 was the year MASAF proved its model. From a single hub in Jigjiga, the organization reached thousands of young people with skills training, entrepreneurship support, and community programming that translated ambition into livelihoods.",
        "The numbers tell part of the story: hundreds trained in employability and digital skills, dozens of startups supported through incubation, and a growing network of employer partners committed to hiring from MASAF's talent pool. But the deeper story is in the individual transformations — the young woman who launched a tailoring business after a skills course, the intern who became a program facilitator, the community that gathered for its first youth-led dialogue.",
        "MASAF's focus on women, internally displaced persons, and persons with disabilities was not an add-on — it was foundational. Every program was designed to lower the barriers these populations face, from flexible scheduling to accessible locations to curricula that reflect their economic realities.",
        "As the year closed, MASAF hosted its Year-End Event with Mama Asli Abade — the first female pilot in Africa and the Middle East — symbolizing the organization's commitment to showing young people that their futures are not constrained by geography or circumstance.",
      ],
    },
    {
      slug: "masaf-launches-somalia-operations",
      category: "news",
      title:
        "Masaf Spaces Launches Operations in Somalia as Part of Its Pan-African Expansion Strategy",
      excerpt:
        "The first regional scale-up outside Ethiopia, deepening ties with Somali communities across borders.",
      publishedAt: "2025-03-15",
      body: [
        "MASAF has launched operations in Somalia, marking the organization's first expansion beyond Ethiopia and a concrete step toward its Pan-African vision. The Somalia office will adapt the MASAF Spaces model to local realities, offering skills training, entrepreneurship support, and community programming to Somali youth.",
        "\"Our expansion into Somalia is a natural extension of who we are,\" said Ahmed Taman Hasen, MASAF's Founder and Executive Director. \"The communities we serve don't stop at national borders. Somali youth in Mogadishu face the same barriers as Somali youth in Jigjiga — and they deserve the same pathways to opportunity.\"",
        "The Somalia operation will begin with digital skills programming and entrepreneurship training, leveraging MASAF's existing curricula and partner network while building new relationships with local employers, civil society organizations, and government agencies. A dedicated Somalia office has been established with a local coordinator and contact email (somaliaoffice@masaf.co).",
        "This expansion is the first test of MASAF's repeatable model — proving that the approach developed in Jigjiga can be adapted to new contexts without losing its core commitment to inclusive, youth-led development. Future expansion plans include additional locations across the Horn of Africa.",
      ],
    },
    {
      slug: "summer-internship-program-2025",
      category: "news",
      title: "Masaf Spaces Summer Internship Program 2025",
      excerpt:
        "A voluntary 3-month internship (July–September 2025) across Admin & Finance, Programs, and Communications in Jigjiga.",
      publishedAt: "2025-06-01",
      body: [
        "MASAF is accepting applications for its Summer Internship Program 2025 — a voluntary three-month placement running from July through September at MASAF Spaces in Jigjiga. The program offers hands-on experience in nonprofit operations, program delivery, and community engagement.",
        "Interns will be placed in one of three tracks: Admin & Finance, where they will support organizational operations, budgeting, and compliance; Programs, where they will assist with training delivery, mentorship coordination, and participant engagement; or Communications, where they will contribute to content creation, social media management, and public outreach.",
        "The program requires a commitment of 15–20 hours per week. It is designed for recent graduates and early-career professionals who want to build practical skills while contributing to MASAF's mission of empowering youth and marginalized communities. Interns receive mentorship, networking opportunities, and a certificate of completion.",
        "To apply, send a brief statement of interest and CV to info@masaf.co with the subject line \"Summer Internship 2025 — [Track Name].\" Applications are reviewed on a rolling basis. MASAF especially encourages applications from women, persons with disabilities, and internally displaced persons.",
      ],
    },
  ],
  events: [
    {
      slug: "year-end-event-2024",
      title: "Year-End Event 2024 with Mama Asli Abade",
      date: "2024-12-31",
      location: "Masaf Spaces, Jigjiga",
      excerpt:
        "MASAF hosted Mama Asli Abade, the first female pilot in Africa and the Middle East, for a community evening of reflection and aspiration.",
    },
  ],
};

export const resources = {
  hero: {
    eyebrow: "Resources",
    heading: "Documents, reports, and guides from MASAF.",
    body: "We share what we learn so practitioners, partners, and policymakers can move faster. New resources are added as programs produce them.",
  },
  categories: [
    {
      title: "Annual Reports",
      description: "Year-over-year accounts of MASAF's work, impact, and finances.",
      status: "In preparation — first annual report coming soon.",
    },
    {
      title: "Organizational Profile",
      description: "Overview of MASAF's mission, programs, and operating model.",
      status: "In preparation.",
    },
    {
      title: "Theory of Change",
      description: "How MASAF programs translate inputs into long-term outcomes.",
      status: "In preparation.",
    },
    {
      title: "Policies & Governance",
      description:
        "Governance charter, safeguarding, ethics, financial management, and related policies.",
      status: "In preparation.",
    },
    {
      title: "Strategic Plan",
      description: "Multi-year strategy for programs, partnerships, and scale.",
      status: "In preparation.",
    },
  ],
};

export const getInvolved = {
  hero: {
    eyebrow: "Get Involved",
    heading: "Build with us.",
    body: "MASAF grows through partnerships. Whatever your organization's shape or size, there is likely a way to contribute — and a young person who will benefit from your involvement.",
  },
  sections: [
    {
      id: "partner",
      title: "Partner With Us",
      body: "We partner with donors, NGOs, UN agencies, government, and private-sector organizations who want to reach underserved youth with real programs.",
      bullets: [
        "Fund new or existing programs",
        "Co-design initiatives with our team",
        "Commission research or program evaluation",
        "Host joint events and convenings",
      ],
    },
    {
      id: "employer",
      title: "Employer & Industry Partners",
      body: "Employers are at the center of the livelihoods MASAF is building. Come in at whatever depth works for you.",
      bullets: [
        "Hire from our talent pool",
        "Offer internships or apprenticeships",
        "Mentor young professionals",
        "Co-design curricula for your sector",
      ],
    },
    {
      id: "volunteer",
      title: "Volunteer & Contribute",
      body: "Individual expertise moves programs forward. We especially welcome mentors, trainers, technical advisors, and designers.",
      bullets: [
        "Mentor a cohort or a single young leader",
        "Deliver a workshop in your area of expertise",
        "Offer pro-bono legal, financial, or technical advice",
        "Contribute tools, templates, or curricula",
      ],
    },
  ],
};

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    heading: "Let's talk.",
    body: "Send a message and the MASAF team will follow up. For urgent matters, call our Ethiopia or Somalia offices directly.",
  },
};
