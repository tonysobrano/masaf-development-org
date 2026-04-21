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
      { target: 17000, suffix: "+", label: "Youth Reached" },
      { target: 78, suffix: "", label: "Activities Delivered" },
      { target: 5, suffix: "", label: "Cities Reached" },
      { target: 28, suffix: "", label: "Partnerships Built" },
      { target: 2, suffix: "", label: "Hubs Created" },
    ],
  },
  masafSpacesCallout: {
    eyebrow: "A Flagship Program",
    heading: "MASAF Spaces: Youth Innovation & Skills Hubs",
    body: "MASAF established the first youth innovation and co-working hub in the Somali Region, creating safe, inclusive spaces where young people can learn, innovate, collaborate, and build careers. Today, MASAF Spaces operate as a blended model—combining physical hubs and digital platforms—to expand access to skills, mentorship, and opportunity.",
    cta: { label: "Explore MASAF Spaces →", href: "/masaf-spaces" },
  },
  programmaticFocus: {
    eyebrow: "Programmatic Focus",
    heading: "Our Work Focuses On",
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
    eyebrow: "Build With Us",
    heading: "Creating Pathways to Skills, Jobs, and Resilience.",
    body: "Whether you are a donor, employer, university, institution, or individual contributor — there is a way to strengthen the opportunities young people build here.",
    primaryCta: { label: "Partner With Us", href: "/get-involved" },
    secondaryCta: { label: "Explore Our Programs", href: "/programs" },
  },
} as const;

export const about = {
  hero: {
    eyebrow: "About MDO",
    heading: "A youth-driven development organization.",
    body: "Masaf Development Organization (MDO) is a youth-driven, impact-focused nonprofit organization working across Ethiopia to empower underserved and marginalized communities.",
  },
  founding: {
    heading: "From a single hub to a nationwide mission",
    body: "MASAF was founded in April 2024 as Masaf Spaces — the first youth innovation and skills hub in the Somali Region, headquartered in Jigjiga. As its impact expanded, MASAF transitioned into a federally registered development organization with a broader mandate and strengthened governance systems.",
  },
  whatWeDo: {
    heading: "What We Do",
    body: "MASAF expands access to skills, digital opportunities, entrepreneurship support, and inclusive economic pathways for youth and marginalized groups.",
  },
  mission: {
    heading: "Our Mission",
    statement:
      "Masaf Development Organization (MASAF) empowers underserved and marginalized communities—particularly youth, women, internally displaced persons (IDPs), and persons with disabilities—by expanding inclusive access to skills, education, digital opportunities, networks, and essential resources.",
    extended:
      "We enable individuals to build sustainable livelihoods, create jobs, and strengthen resilience, while developing future innovators, entrepreneurs, and civic leaders who contribute to economic growth, social inclusion, and resilient, thriving communities across Ethiopia and the Horn of Africa.",
  },
  objectives: {
    heading: "Organizational Objectives",
    intro: "MASAF works toward the following strategic objectives:",
    items: [
      {
        title: "Inclusive Education Access",
        description:
          "Enhance access to inclusive, practical, and digital education for marginalized youth and women.",
      },
      {
        title: "Economic Empowerment",
        description:
          "Promote economic empowerment through entrepreneurship development, financial literacy, and sustainable livelihood opportunities.",
      },
      {
        title: "Gender Equality & Social Inclusion",
        description:
          "Advance gender equality and social inclusion for women, girls, persons with disabilities, and displaced populations.",
      },
      {
        title: "Labor Market Readiness",
        description:
          "Improve labor market readiness and workforce participation through employability skills development and private-sector linkages.",
      },
      {
        title: "Community Resilience",
        description:
          "Strengthen community resilience and climate-responsive livelihoods through innovative, sustainable, and locally driven solutions.",
      },
    ],
  },
  values: {
    heading: "MASAF Core Values",
    intro:
      "MASAF's work is guided by the following core values, which shape our decisions, partnerships, and impact:",
    items: [
      {
        title: "Integrity",
        description:
          "We uphold honesty, transparency, and ethical conduct in all our actions, ensuring trust and accountability with communities, partners, and stakeholders.",
      },
      {
        title: "Excellence",
        description:
          "We pursue the highest standards in program design, implementation, and impact, continuously learning and improving to deliver meaningful results.",
      },
      {
        title: "Innovation",
        description:
          "We embrace creativity, technology, and new approaches to address complex challenges and unlock opportunities for youth and women.",
      },
      {
        title: "Inclusion & Equity",
        description:
          "We promote equal access and meaningful participation for all, with a strong focus on marginalized groups, including youth, women, IDPs, and persons with disabilities.",
      },
      {
        title: "Collaboration",
        description:
          "We believe sustainable impact is achieved through strong partnerships and collective action with communities, civil society, government, and the private sector.",
      },
      {
        title: "Accountability",
        description:
          "We remain responsible and transparent in the use of resources, delivery of results, and fulfillment of our commitments.",
      },
      {
        title: "Empowerment",
        description:
          "We strengthen people's skills, agency, and confidence so they can lead their own development and shape their futures.",
      },
    ],
  },
  approach: {
    heading: "Our Approach",
    items: [
      "Participatory and community-led development",
      "Youth innovation hubs through Masaf Spaces",
      "Skills, mentorship, and access to technology",
      "Strengthening local leadership and institutions",
      "Partnership-driven and scalable impact",
    ],
  },
  governance: {
    heading: "Governance Structure",
    body: "MASAF Development Organization is a board-led organization guided by strong governance principles that promote accountability, transparency, strategic leadership, and sustainable impact.",
  },
  executiveTeam: {
    heading: "Meet Our Executive Team",
    body: "Our Executive Team leads the organization's strategy, operations, partnerships, and day-to-day implementation, ensuring effective delivery of programs and continued growth.",
    members: [
      {
        name: "Ahmed Taman",
        role: "Executive Director",
        image: "/team/ahmed-taman.jpg",
      },
      {
        name: "Mohamud Abdirishid Bashir",
        role: "Deputy Director for Operations",
        image: "/team/mohamud-abdirishid-bashir.jpg",
      },
      {
        name: "Ali Mohamed Ali",
        role: "Program Manager",
        image: "/team/ali-mohamed-ali.jpg",
      },
      {
        name: "Mohamed Abdullahi Mohamud",
        role: "Program Coordinator",
        image: "/team/mohamed-abdullahi-mohamud.jpg",
      },
      {
        name: "Mahamed Aabi Ahmed",
        role: "Finance and Admin Manager",
        image: "/team/mahamed-aabi-ahmed.jpg",
      },
      {
        name: "Suhayb Mohamed Barkadle",
        role: "Finance & Admin Team Leader",
        image: "/team/suhayb-mohamed-barkadle.jpg",
      },
      {
        name: "Suber Abdulahi Ali",
        role: "Operations Manager",
        image: "/team/suber-abdulahi-ali.jpg",
      },
      {
        name: "Kader Shafi Ismail",
        role: "MASAF Space – Hub Manager",
        image: "/team/kader-shafi-ismail.jpg",
      },
      {
        name: "Mohamud Sheik Mohamed",
        role: "Communication Director",
        image: "/team/mohamud-sheik-mohamed.jpg",
      },
      {
        name: "Zakaria Muktar Abdi",
        role: "Internal Auditor",
        image: "/team/zakaria-muktar-abdi.jpg",
      },
    ] as { name: string; role: string; image?: string; bio?: string }[],
  },
  boardOfDirectors: {
    heading: "Meet Our Board of Directors",
    body: "Our Board of Directors provides strategic oversight, governance leadership, and long-term stewardship of the organization. Their guidance helps strengthen accountability, sustainability, and MASAF's mission-driven vision.",
    members: [
      {
        name: "Ridwan Abdirizak Mahamud",
        role: "Board Chairperson",
        image: "/board/ridwan-abdirizak-mahamud.png",
      },
      {
        name: "Mahamed Abdi Wali",
        role: "Deputy Board Chairman",
        image: "/board/mahamed-abdi-wali.png",
      },
      {
        name: "Mohamed Abdirishid Ibrahim",
        role: "Board Secretary",
        image: "/board/mohamed-abdirishid-ibrahim.png",
      },
      {
        name: "Marwo Abdiaziz Abdulahi",
        role: "Board Member",
        image: "/board/marwo-abdiaziz-abdulahi.png",
      },
      {
        name: "Guled Hasen Egal",
        role: "Board Member",
        image: "/board/guled-hasen-egal.png",
      },
    ] as { name: string; role: string; image?: string; bio?: string }[],
  },
};

export const masafSpaces = {
  hero: {
    eyebrow: "Flagship Program",
    heading: "Masaf Spaces: Youth Innovation & Skills Hubs",
    subheading:
      "The first youth innovation and skills hub in the Somali Region — now a blended model for inclusive skills and opportunity.",
  },
  overview: {
    heading: "Overview",
    body: "Masaf Spaces is the flagship youth innovation and skills program of Masaf Development Organization (MASAF). Established in Jigjiga, Masaf Spaces became the first co-working and youth innovation hub in the Somali Region, responding to the absence of inclusive, safe, and accessible spaces where young people could learn, collaborate, and build sustainable futures.",
    extended:
      "What began as a single physical hub has evolved into a scalable model of youth-centered innovation spaces, combining physical community hubs with emerging digital platforms. Masaf Spaces provides young people — especially those from underserved and marginalized backgrounds — with the tools, networks, and confidence to turn ideas into livelihoods, careers, and community-driven solutions.",
  },
  whyItMatters: {
    heading: "Why Masaf Spaces Matter",
    lead: "In many underserved regions, youth face multiple barriers: limited access to skills training, technology, mentorship, professional networks, and safe civic spaces. Masaf Spaces addresses these gaps by creating inclusive environments where youth are not only beneficiaries, but active contributors and leaders.",
    bullets: [
      "Expands access to skills and opportunities",
      "Encourages youth-led problem solving and innovation",
      "Strengthens local entrepreneurship and employment pathways",
      "Supports social cohesion and civic engagement",
      "Contributes to a stronger youth empowerment ecosystem",
    ],
    impact:
      "Youth who engage with Masaf Spaces gain access to valuable resources, professional networks, and real opportunities that help them build careers, secure employment, start businesses, and create positive impact within their communities. Many go on to become entrepreneurs, leaders, collaborators, and contributors to local development.",
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
    heading: "Physical & Digital Masaf Spaces Model",
    physical: {
      title: "Physical Masaf Spaces",
      description:
        "Physical Masaf Spaces serve as community innovation hubs — safe, inclusive environments where youth can meet, learn, collaborate, and create. These hubs bring essential services closer to communities, particularly in regions where such opportunities are limited.",
      supports: [
        "Hands-on training and workshops",
        "Peer-to-peer learning and collaboration",
        "Youth-led initiatives and community solutions",
        "Local innovation, entrepreneurship, and leadership",
      ],
      note: "They also function as civil spaces that promote inclusion, dialogue, and participation, strengthening trust and cooperation among youth, institutions, and communities.",
    },
    digital: {
      title: "Digital Masaf Spaces",
      status: "Coming Soon",
      description:
        "Digital Masaf Spaces will extend the full Masaf Spaces experience online — ensuring that youth in remote, displaced, or underserved areas can access the same services offered in physical hubs.",
      provides: [
        "Online skills training and learning resources",
        "Virtual mentorship and peer networks",
        "Entrepreneurship and business support",
        "Career guidance and employability tools",
        "Access to opportunities, events, and communities",
      ],
      note: "This blended model allows MASAF to scale impact without geographic barriers, reaching more young people across Ethiopia and beyond.",
    },
  },
  peerSupport: {
    heading: "Peer Support, Youth Leadership & Ecosystem Contribution",
    lead: "Masaf Spaces is built on the belief that youth are not just participants, but leaders of change. The spaces actively promote peer learning, collaboration, and youth-led solutions that respond to local challenges.",
    introLine: "Through Masaf Spaces, MASAF:",
    bullets: [
      "Strengthens youth networks and collective action",
      "Supports civil society and community engagement",
      "Bridges gaps between youth, employers, institutions, and development actors",
      "Contributes to a more inclusive and resilient youth empowerment ecosystem",
    ],
  },
  vision: {
    heading: "Impact and Long-Term Vision",
    body: "Masaf Spaces has already demonstrated the power of youth-centered spaces to unlock potential, create opportunity, and strengthen communities. As part of MASAF's long-term strategy, the organization envisions expanding Masaf Spaces into a network of youth innovation and skills hubs across major cities in Africa, through partnerships, learning, and scalable models.",
    extended:
      "Grounded in Ethiopia and informed by local realities, Masaf Spaces aims to become a reference model for inclusive, youth-led development, supporting the next generation of innovators, entrepreneurs, and civic leaders.",
  },
  testimonials: {
    eyebrow: "Partner Voices",
    heading: "What our partners say",
    items: [
      {
        quote:
          "Working with Masaf Space has been a transformative experience for our youth programs. Their environment is not just a venue, but a true innovation hub where ideas are nurtured and collaborations are born. Through our joint initiatives, we've been able to engage more young people, spark creativity, and deliver impactful programs that respond to real community needs.",
        name: "Abdirahman Bashir",
        role: "Program Director",
        organization: "Curis Youth Development Organization",
        initials: "AB",
        image: "/images/testimonials/IMG_9150.jpeg",
      },
      {
        quote:
          "Masaf Space has played a vital role in supporting our health awareness and outreach programs. Their commitment to community impact and their flexible, well-equipped space allowed us to host meaningful sessions and connect with diverse audiences. Partnering with Masaf Space strengthened our mission and expanded our reach in the region.",
        name: "Muna Ali",
        role: "Founder",
        organization: "Mosad Med Health Initiative",
        initials: "MA",
        image: "/images/testimonials/IMG_9151.jpeg",
      },
      {
        quote:
          "As a digital and software-focused company, collaboration and creativity are essential to our work. Masaf Space provided us with the perfect ecosystem to network, innovate, and even co-create solutions with other startups. Their support for tech-driven initiatives is exactly what the Somali region needs to grow its digital economy.",
        name: "Abdifatah Ibrahim",
        role: "Founder",
        organization: "Garaad Digital",
        initials: "AI",
        image: "/images/testimonials/IMG_9152.jpeg",
      },
      {
        quote:
          "Masaf Space stands out for its inclusivity and dedication to empowering all members of the community. Through our collaboration, we've been able to host programs that amplify the voices of youth with disabilities and create more awareness. Their platform gave us visibility, support, and a sense of belonging.",
        name: "Abdifatah Mohamed",
        role: "Executive Director",
        organization: "Somali Deaf Association",
        initials: "AM",
        image: "/images/testimonials/IMG_9149.jpeg",
      },
    ],
  },
};

export const programs = {
  hero: {
    eyebrow: "Our Programs",
    heading: "Integrated programs that address the real barriers facing youth.",
    body: "Masaf Development Organization designs and implements integrated programs that address barriers to employment, entrepreneurship, and social inclusion faced by youth and marginalized communities. Our programs combine skills development, digital access, entrepreneurship support, workforce readiness, and community resilience to create sustainable pathways to livelihoods, leadership, and economic participation.",
    bodyExtended:
      "MASAF's programs are inclusive, demand-driven, and aligned with labor market needs and development priorities, ensuring measurable impact and long-term value for individuals and communities.",
  },
  overview: {
    heading: "Programs We Offer",
    body: "At MASAF Development Organization, we deliver practical, inclusive, and future-focused programs that empower youth, women, entrepreneurs, and vulnerable communities to unlock opportunities, improve livelihoods, and build resilient communities. Our work is delivered through MASAF Spaces — our physical innovation and learning hubs — as well as digital platforms, mobile outreach, and community-based programs that expand access beyond location barriers.",
  },
  items: [
    {
      number: "01",
      title: "Skills Development & Lifelong Learning",
      description:
        "We provide high-quality learning opportunities that help individuals continuously grow, adapt, and succeed in a changing world. Our programs focus on practical skills, communication, leadership, digital literacy, languages, and personal development.",
      why: "Many talented people lack access to relevant learning opportunities. We bridge this gap by making skills development accessible and impactful.",
      objectives: [
        "Strengthen employability and productivity",
        "Build confidence and personal growth",
        "Promote lifelong learning culture",
        "Prepare individuals for modern opportunities",
      ],
    },
    {
      number: "02",
      title: "Entrepreneurship & MSME Support",
      description:
        "We support entrepreneurs and small businesses to start, grow, formalize, and scale sustainable enterprises through training, mentorship, incubation, business advisory services, and market linkages.",
      why: "Small businesses are key drivers of jobs and local economic growth, yet many need stronger support systems.",
      objectives: [
        "Promote entrepreneurship and innovation",
        "Strengthen MSME growth and resilience",
        "Create jobs and income opportunities",
        "Improve business management capacity",
      ],
    },
    {
      number: "03",
      title: "Youth Leadership & Civic Engagement",
      description:
        "We empower young people to become leaders, changemakers, and active contributors to peaceful, inclusive, and prosperous communities.",
      why: "Youth are a powerful force for development when equipped with leadership skills, voice, and opportunity.",
      objectives: [
        "Build youth leadership capacity",
        "Increase civic participation",
        "Encourage volunteerism and community action",
        "Promote peace and inclusion",
      ],
    },
    {
      number: "04",
      title: "Women's Economic Empowerment",
      description:
        "We create pathways for women to access skills, entrepreneurship support, employability opportunities, and leadership development.",
      why: "When women thrive economically, families prosper and communities become stronger.",
      objectives: [
        "Increase women's economic participation",
        "Support women-led enterprises",
        "Improve financial independence",
        "Advance inclusive growth",
      ],
    },
    {
      number: "05",
      title: "Workforce Development & Employability",
      description:
        "We prepare individuals for decent work through career readiness, workplace skills, professional development, and connections to opportunities.",
      why: "Many job seekers face barriers due to skills mismatch and limited labor market access.",
      objectives: [
        "Improve job readiness",
        "Strengthen professional skills",
        "Increase access to employment opportunities",
        "Support career growth pathways",
      ],
    },
    {
      number: "06",
      title: "Digital Jobs & Innovation",
      description:
        "We help communities access the future economy through digital skills training, freelancing readiness, innovation labs, remote work preparation, and technology-enabled opportunities.",
      why: "Digital transformation is creating opportunities, but many communities risk being left behind.",
      objectives: [
        "Expand digital employment pathways",
        "Build innovation and problem-solving culture",
        "Prepare youth for remote work opportunities",
        "Increase access to technology careers",
      ],
    },
    {
      number: "07",
      title: "Financial Literacy & Inclusion",
      description:
        "We equip individuals and businesses with the knowledge and tools to make informed financial decisions and access inclusive financial systems.",
      why: "Financial knowledge is essential for stability, growth, and resilience.",
      objectives: [
        "Promote savings and budgeting habits",
        "Improve business financial management",
        "Strengthen financial confidence",
        "Support inclusive economic participation",
      ],
    },
    {
      number: "08",
      title: "Climate-Smart Livelihoods",
      description:
        "We promote sustainable livelihoods that help communities adapt to environmental and economic challenges while creating income opportunities.",
      why: "Climate change increasingly affects jobs, agriculture, migration, and household resilience.",
      objectives: [
        "Build climate resilience",
        "Promote green livelihoods and enterprise",
        "Support sustainable income generation",
        "Encourage environmental responsibility",
      ],
    },
    {
      number: "09",
      title: "Community Resilience & IDP Support",
      description:
        "We work with displaced and vulnerable communities to rebuild livelihoods, strengthen inclusion, and create pathways toward self-reliance.",
      why: "Communities affected by displacement and crisis need long-term opportunities, not only short-term relief.",
      objectives: [
        "Restore dignity and livelihoods",
        "Improve social and economic inclusion",
        "Support youth and women in vulnerable settings",
        "Strengthen resilience and recovery",
      ],
    },
  ],
  deliveryModel: {
    heading: "Our Delivery Model",
    body: "MASAF combines physical spaces, digital access, and community outreach to ensure wider reach and stronger impact.",
    channels: [
      {
        title: "MASAF Spaces",
        description:
          "Innovation hubs for learning, networking, events, incubation, and collaboration.",
      },
      {
        title: "Digital Programs",
        description:
          "Online training, mentorship, remote learning, and virtual engagement.",
      },
      {
        title: "Community Outreach",
        description:
          "Mobile programs and localized initiatives for underserved communities.",
      },
    ],
    note: "This blended model allows us to reach participants where they are and scale opportunities efficiently.",
  },
  partner: {
    heading: "Partner With Us",
    body: "We welcome collaboration with donors, companies, development agencies, institutions, and ecosystem actors to scale impact together.",
    intro: "Partners can engage through:",
    bullets: [
      "Strategic collaboration and co-designed programs",
      "Funding and sponsorship support",
      "Technical expertise and mentorship",
      "Research, innovation, and ecosystem partnerships",
      "Talent pipelines, internships, and job linkages",
      "Expansion of MASAF Spaces and digital initiatives",
    ],
    note: "To explore partnership opportunities, please visit the Partner section of our website.",
    cta: { label: "Partner With Us →", href: "/get-involved" },
  },
  join: {
    heading: "Join Our Programs",
    body: "Participants can explore open calls, training opportunities, events, and upcoming initiatives through the News & Media section of our website.",
    cta: { label: "Explore Opportunities →", href: "/news#opportunities" },
  },
};

export const news = {
  hero: {
    eyebrow: "News & Media",
    heading: "Stories, events, and media from across the MASAF community.",
  },
  sections: [
    { id: "news", label: "News & Updates" },
    { id: "stories", label: "Success Stories" },
    { id: "events", label: "Events" },
    { id: "opportunities", label: "Opportunities" },
    { id: "blogs", label: "Blogs" },
    { id: "gallery", label: "Media Gallery" },
    { id: "resources", label: "Resources" },
  ],
  opportunities: [] as {
    slug: string;
    type: "Job" | "Internship" | "Youth Opportunity" | "Program Call";
    title: string;
    deadline?: string;
    location?: string;
    excerpt?: string;
  }[],
  blogs: [] as {
    slug: string;
    title: string;
    author?: string;
    publishedAt: string;
    excerpt: string;
  }[],
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
