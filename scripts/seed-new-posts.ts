import { createClient } from "next-sanity";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

function toBlocks(text: string) {
  return text.split("\n\n").filter(Boolean).map(paragraph => ({
    _type: "block",
    _key: Math.random().toString(36).substring(7),
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: Math.random().toString(36).substring(7),
        text: paragraph.trim(),
        marks: [],
      }
    ]
  }));
}

const posts = [
  {
    title: "Masaf Invites Employers to Partner in Accelerating Youth Careers in Ethiopia",
    slug: "masaf-invites-employers-partner-accelerating-youth-careers",
    excerpt: "Masaf Development Organization is calling on forward-looking organizations to join a growing movement aimed at shaping the future of Africa’s workforce.",
    body: `Masaf Development Organization is calling on forward-looking organizations to join a growing movement aimed at shaping the future of Africa’s workforce. Through the Career Acceleration Program (CAP), implemented in partnership with Africa Career Networks, Masaf is connecting talented young professionals with meaningful career opportunities across Ethiopia and beyond.

The Career Acceleration Program is designed to support Mastercard Foundation Scholars and other high-potential youth as they transition from education into the world of work. While many young people possess the ambition and academic foundation to succeed, access to practical experience and professional opportunities remains a significant barrier. CAP addresses this challenge by equipping participants with career readiness skills, industry exposure, and direct connections to employers.

At the heart of the program is a simple but powerful idea: when employers and young talent come together, both sides benefit. Organizations gain access to a pipeline of motivated, skilled, and purpose-driven individuals who bring fresh ideas and energy into the workplace. At the same time, young professionals gain the experience, mentorship, and confidence needed to launch successful careers.

One of the defining features of the program in Ethiopia is its strong commitment to inclusion. Many of the scholars engaged through CAP are young leaders with disabilities who have demonstrated remarkable resilience and potential. By opening their doors to this diverse talent pool, employer partners not only strengthen their teams but also contribute to building more inclusive and equitable workplaces.

Through its collaboration with Africa Career Networks, Masaf is also linking local employers to a broader continental network of organizations committed to talent development. Partners have the opportunity to engage in regional events, cross-country collaborations, and knowledge-sharing platforms that extend beyond national boundaries.

Organizations can engage with the program in multiple ways, including offering internships and entry-level roles, providing mentorship, participating in career events, or collaborating on innovation challenges and short-term projects. These flexible partnership models allow employers to align their engagement with their specific needs while contributing to a larger impact.

Masaf remains committed to supporting its partners throughout the process, from identifying the right talent to ensuring meaningful engagement and continuous collaboration. The goal is to build long-term partnerships that create value for both employers and young professionals.

As Ethiopia continues to invest in its young population, partnerships like these are essential in unlocking opportunity and driving sustainable development. Masaf invites organizations across sectors to take part in this initiative and help shape a more inclusive and dynamic workforce.

Organizations interested in partnering are encouraged to reach out via contact@masaf.co. We are ready to discuss this further and explore opportunities for collaboration.`
  },
  {
    title: "Official Launch of the Career Acceleration Pathways (CAP) Program at the University of Gondar",
    slug: "official-launch-cap-program-university-of-gondar",
    excerpt: "Masaf Development Organization officially launched the Career Acceleration Pathways (CAP) Program at the Maraki Campus of the University of Gondar.",
    body: `March 31, 2026

Masaf Development Organization officially launched the Career Acceleration Pathways (CAP) Program at the Maraki Campus of the University of Gondar, marking an important milestone in supporting Mastercard Foundation Scholars as they transition from higher education into meaningful and dignified careers.

The launch event brought together more than 60 Mastercard Foundation Scholars and alumni from different academic backgrounds, creating a vibrant platform for learning, networking, and engagement. The session commenced with opening remarks from the Scholars Program Coordinator, Dr. Molalum, who highlighted the importance of strengthening career readiness and employment pathways for scholars as they prepare for life beyond university.

The event continued with a presentation by Ahmed Taman, Executive Director of Masaf Development Organization, who introduced the Career Acceleration Pathways (CAP) Program and shared its vision, objectives, and opportunities. Participants learned about the program’s comprehensive approach to supporting scholars through career development services, professional networking, experiential learning opportunities, mentorship, coaching, and pathways to internships and employment.

The launch was designed as an interactive engagement session rather than a traditional presentation. Scholars actively participated in group discussions and collaborative exercises, contributing ideas and recommendations that will help shape the future implementation of the program. Participants also shared their expectations, explored the challenges they face in entering the labor market, and completed initial assessments that will inform personalized support throughout their CAP journey. The session further served as an enrollment opportunity, enabling interested scholars to join the program and begin their career development journey.

Through the CAP Program, Masaf Development Organization, in partnership with Africa Career Networks (ACN), seeks to empower Mastercard Foundation Scholars with the skills, knowledge, networks, and practical experiences necessary to successfully navigate the transition from education to employment. The program will provide a range of opportunities, including career readiness training, mentorship and coaching, internship placements, sector-focused workshops, experiential learning activities, and exposure to potential employers and industry professionals.

The University of Gondar offers a unique and inspiring environment for the program due to its strong commitment to inclusion and accessibility. The presence of scholars with disabilities within the Mastercard Foundation Scholars Program enriches the learning experience and brings diverse perspectives that strengthen discussions around leadership, innovation, and career development.

Masaf Development Organization extends its sincere appreciation to the University of Gondar Mastercard Foundation Scholars Program team for their collaboration, support, and coordination in making the launch a success. Their commitment to creating opportunities for young leaders continues to play a vital role in empowering scholars to achieve their full potential.

As the CAP Program moves forward, participating scholars will gain access to a structured pathway of learning, professional development, mentorship, and career opportunities designed to accelerate their journey toward impactful and fulfilling careers.

Empowering Young Leaders. Accelerating Career Pathways. Building Africa’s Future.

#CAPProgram #MasafDevelopment #AfricaCareerNetworks #MastercardFoundation #CareerDevelopment #YouthEmpowerment #Leadership #UniversityOfGondar #Employability #FutureOfWork #YoungLeaders #AfricaDevelopment`
  },
  {
    title: "Masaf Development Organization Launches Digital Awarenes to Prevent Violence Against Women and Girls in the Somali Region",
    slug: "masaf-launches-digital-awareness-prevent-vawg-somali-region",
    excerpt: "Masaf Development Organization (MDO) has officially commenced implementation of its new project, “Digital Awareness to Prevent Violence Against Women and Girls (VAWG).",
    body: `Jigjiga, Ethiopia – June 2026

Masaf Development Organization (MDO) has officially commenced implementation of its new project, “Digital Awareness to Prevent Violence Against Women and Girls (VAWG),” following participation in the Small Grant Mechanism Grantee Kickoff and Capacity Building Workshop organized by the International Solidarity Foundation (ISF) with support from the Ministry for Foreign Affairs of Finland.

The four-day workshop, held from 20–23 June at Hagarlaawe Hotel in Jigjiga, brought together eight selected grantee organizations from across Ethiopia. The event served as an important platform for project orientation, capacity strengthening, collaborative learning, and detailed planning for the implementation phase of the Small Grant Mechanism.

During the workshop, participating organizations worked closely with the ISF team to finalize project action plans, implementation approaches, monitoring frameworks, budgets, reporting requirements, and safeguarding considerations. The sessions provided practical guidance on effective project delivery, community engagement, accountability, and achieving sustainable impact.

For Masaf Development Organization, the workshop marked an important milestone in launching a community-driven initiative aimed at preventing violence against women and girls through social norms transformation, youth engagement, community dialogue, and advocacy.

The project will be implemented in Jigjiga City and surrounding communities, engaging youth, women, religious leaders, elders, community influencers, university students, and local institutions in collective efforts to address harmful practices and promote gender equality.

Through youth leadership initiatives, community conversations, digital awareness campaigns, peer-to-peer outreach, and public engagement activities, the project seeks to strengthen local ownership of solutions and foster safer, more inclusive communities where women and girls can thrive free from violence and discrimination.

Speaking on the significance of the workshop, the Masaf team highlighted the value of learning alongside fellow grantees and receiving practical support from ISF to strengthen project planning and implementation.

The workshop also created opportunities for networking, knowledge exchange, and collaboration among participating organizations working on gender equality, community empowerment, and social transformation across different regions of Ethiopia.

As implementation begins, Masaf Development Organization looks forward to working closely with communities, local stakeholders, youth leaders, and women’s groups to advance positive social norms and strengthen community-led action against violence against women and girls.

The project reflects Masaf’s continued commitment to empowering underserved communities, promoting inclusion, and creating sustainable pathways for social change in the Somali Region.

Photo Caption: Masaf Development Organization team members participating in the Small Grant Mechanism Grantee Kickoff and Capacity Building Workshop held at Hagarlaawe Hotel, Jigjiga, from 20–23 June 2026.

About the Partnership
The project is being implemented by Masaf Development Organization through the Small Grant Mechanism, supported by International Solidarity Foundation (ISF) and funded by the Ministry for Foreign Affairs of Finland, to strengthen community-led efforts for the prevention of violence against women and girls in Ethiopia.`
  },
  {
    title: "MASAF Development Organization Joins Africa Career Networks (ACN) as Affiliate Partner for Ethiopia",
    slug: "masaf-joins-africa-career-networks-affiliate-partner-ethiopia",
    excerpt: "MASAF Development Organization (MDO) is proud to announce its official partnership with Africa Career Networks (ACN) as an Affiliate Partner for Ethiopia.",
    body: `Strengthening Career Pathways for Scholars, Alumni, and Young Professionals Across Ethiopia

MASAF Development Organization (MDO) is proud to announce its official partnership with Africa Career Networks (ACN) as an Affiliate Partner for Ethiopia, marking an important milestone in our commitment to empowering young people with the skills, networks, and opportunities needed to thrive in today’s evolving world of work.

As part of this partnership, MASAF participated in the ACN Affiliate Onboarding Retreat held from 24–28 June at the African Leadership Academy Campus in Johannesburg, South Africa, bringing together affiliate organizations from across the continent to strengthen collaboration, share best practices, and build a stronger ecosystem for youth employment and career advancement.

Expanding Opportunities Through a “Network of Networks”
Africa Career Networks operates through a unique “network of networks” approach, connecting universities, scholarship programs, employers, entrepreneurship ecosystems, and youth-serving organizations across Africa. By joining this network, MASAF gains access to a continental platform dedicated to support young people as they transition from education to meaningful and dignified employment.

Through the partnership, MASAF will work closely with ACN to:
	•	Connect scholars, graduates, and young professionals to career opportunities across Africa.
	•	Facilitate internships, work placements, and professional development opportunities.
	•	Strengthen career readiness and employability skills among youth.
	•	Support networking and mentorship opportunities for emerging professionals.
	•	Build stronger linkages between employers, educational institutions, and young talent.
	•	Contribute local expertise and contextual knowledge from Ethiopia to a broader African ecosystem.

Advancing MASAF’s Youth Empowerment Mission
For years, MASAF Development Organization has been dedicated to supporting youth and women through skills development, entrepreneurship support, innovation programs, digital literacy initiatives, and workforce readiness interventions. This partnership with ACN further strengthens MASAF’s role as a trusted local institution helping young people navigate the journey from learning to earning.

The collaboration aligns closely with MASAF’s growing portfolio of youth-focused programs, including career development initiatives, entrepreneurship pathways, leadership development, and employment readiness support. By leveraging ACN’s continental network and MASAF’s grassroots presence, the partnership will create new opportunities for scholars, alumni, and aspiring professionals across Ethiopia.

A Shared Vision for Africa’s Future Workforce
Africa is home to the world’s youngest population, presenting immense opportunities for innovation, economic growth, and social transformation. However, many young people continue to face challenges in accessing quality employment, professional networks, and career guidance.

Through this partnership, MASAF and ACN are committed to addressing these challenges by building stronger bridges between education, skills development, and the labor market. Together, we aim to equip young Africans with the connections, competencies, and confidence needed to pursue meaningful careers and contribute to sustainable development.

Looking Ahead
As an ACN Affiliate Partner for Ethiopia, MASAF looks forward to expanding access to career opportunities, strengthening youth employment ecosystems, and fostering collaborations that create lasting impact for young people.

We are excited to embark on this journey alongside Africa Career Networks and our fellow partners across the continent as we work together to build a future where every young African has the opportunity to achieve their full potential.

Together, we are creating stronger pathways from education to dignified work.

⸻

About MASAF Development Organization (MDO)
MASAF Development Organization is a youth-led nonprofit organization working across Ethiopia and the Horn of Africa to promote economic empowerment, entrepreneurship, innovation, skills development, digital inclusion, and resilient livelihoods for young people, women, displaced communities, and other underserved populations.

About Africa Career Networks (ACN)
Africa Career Networks (ACN) is a continent-wide network dedicated to supporting young Africans in their transition from education to employment through partnerships, career development initiatives, employer engagement, mentorship, and ecosystem-building approaches that connect talent with opportunity across Africa.`
  }
];

const opportunities = [
  {
    title: "Launch Your Career of Impact with the CAP Program",
    slug: "launch-your-career-of-impact-with-cap-program",
    type: "Program Call",
    location: "Ethiopia",
    excerpt: "Calling All Ethiopian Mastercard Foundation Scholars and Alumni! Are you ready to take the next step in your professional journey?",
    body: `Calling All Ethiopian Mastercard Foundation Scholars and Alumni!
Are you ready to take the next step in your professional journey? Do you want to build the skills, networks, and experiences needed to secure meaningful employment, launch a business, or create impact in your community?

The Career Acceleration Pathways (CAP) Program, implemented by Masaf Development Organization in partnership with Africa Career Networks (ACN) and the Mastercard Foundation, is designed to help Mastercard Foundation Scholars and alumni transition successfully from education to dignified and impactful careers. The program aligns with ACN’s mission of accelerating career pathways for young African leaders through career readiness, professional development, employer engagement, and sector-based opportunities.  

What is the CAP Program?
The Career Acceleration Pathways (CAP) Program is a comprehensive career development initiative that equips scholars with practical skills, professional networks, mentorship, and career opportunities. Through structured learning, coaching, and experiential activities, participants gain the confidence and competencies needed to thrive in today’s competitive job market.

Whether your goal is employment, entrepreneurship, social impact, or further professional growth, CAP provides the support and guidance you need to succeed.

Opportunities Available Through CAP

1. Career Readiness Assessment
Participants begin their journey with a Career Impact Readiness Assessment to identify strengths, growth areas, and career aspirations. This helps create a personalized development pathway.  

2. Professional Development and Capacity Building
Access high-quality training sessions focused on:
	•	Career planning and goal setting
	•	CV and cover letter development
	•	Interview preparation and mock interviews
	•	Leadership and communication skills
	•	Personal branding and LinkedIn optimization
	•	Critical thinking and problem-solving
	•	Workplace professionalism and employability skills

3. Entrepreneurship Pathway
For aspiring entrepreneurs, CAP offers:
	•	Entrepreneurship fundamentals
	•	Business model development
	•	Startup and SME management
	•	Innovation and design thinking
	•	Financial literacy and business planning
	•	Access to entrepreneurial networks and ecosystem actors
	•	Guidance on transforming ideas into sustainable ventures

4. Coaching and Mentorship
Receive personalized support from experienced coaches, mentors, and industry professionals who can help you navigate career decisions, strengthen your applications, and prepare for opportunities.  

5. Sector Challenges and Experiential Learning
Participate in real-world challenges that simulate workplace experiences and help you develop practical skills while working with diverse teams to solve pressing challenges. These experiences serve as internship-equivalent opportunities and help build your professional portfolio.  

6. Networking Opportunities
Connect with:
	•	Industry professionals
	•	Employers and recruiters
	•	Fellow Mastercard Foundation Scholars
	•	Entrepreneurs and innovators
	•	Mentors and sector experts
Build relationships that can open doors to internships, jobs, collaborations, and future career opportunities.  

7. Internship and Employment Pathways
CAP works closely with employers and sector partners to facilitate access to internships, job opportunities, and career exposure experiences that align with participants’ interests and goals.  

Who Should Apply?
This opportunity is open to:
	•	Current Mastercard Foundation Scholars in Ethiopia
	•	Mastercard Foundation Scholar Alumni
	•	Young leaders passionate about creating positive impact
	•	Aspiring professionals seeking career advancement
	•	Emerging entrepreneurs looking to grow innovative ideas

Why Join CAP?
By joining CAP, you will:
✅ Strengthen your employability skills
✅ Access professional coaching and mentorship
✅ Expand your professional network
✅ Explore entrepreneurship opportunities
✅ Gain practical experience through sector challenges
✅ Connect with employers and career opportunities
✅ Join a community of ambitious young African leaders

Be Part of the Next Generation of African Leaders
Your degree is only the beginning. The CAP Program is here to help you transform your potential into meaningful impact, purposeful work, and sustainable career success.

Take the next step in your career journey. Join the Career Acceleration Pathways (CAP) Program today and unlock opportunities for growth, leadership, entrepreneurship, and employment.
Your future starts now. 🚀
#CareerAccelerationPathways #CAPProgram #MastercardFoundationScholars #AfricaCareerNetworks #MasafDevelopmentOrganization #YouthEmployment #Entrepreneurship #CareerDevelopment #Leadership #FutureOfWork #CareersOfImpact`
  },
  {
    title: "June Career Development Series: Equipping Mastercard Foundation Scholars for Career Success",
    slug: "june-career-development-series-mastercard-foundation-scholars",
    type: "Program Call",
    location: "Ethiopia",
    excerpt: "The Career Acceleration Pathways (CAP) June 2026 Career Development Series is a flagship initiative designed to support Mastercard Foundation Scholars.",
    body: `Building the Next Generation of African Professionals

The Career Acceleration Pathways (CAP) June 2026 Career Development Series is a flagship initiative designed to support Mastercard Foundation Scholars as they transition from education to meaningful employment, entrepreneurship, and leadership opportunities.

Implemented by Masaf Development Organization (MDO) in partnership with Africa Career Networks (ACN), the series provides practical career development training, coaching, mentorship, and pathways to internship opportunities for scholars across Ethiopia.

Why the Career Development Series?
Across Africa, thousands of talented graduates enter the labor market every year. While academic qualifications remain important, employers increasingly seek candidates who possess practical skills, professional competencies, strong communication abilities, digital literacy, and real-world experience.

The June Career Development Series was designed to bridge this gap by helping scholars build the knowledge, skills, confidence, and networks required to succeed in today’s evolving world of work.

Through interactive online sessions, coaching clinics, assignments, and mentorship opportunities, participants gain practical tools that prepare them for internships, employment, and future career growth.

What Participants Will Learn
The series consists of four practical courses delivered by experienced facilitators and career development professionals.

Course 1: Career Readiness & Professional Development
Participants explore:
	•	Labor market trends and emerging opportunities
	•	Career planning and goal setting
	•	Self-assessment and work values
	•	Professional growth and employability skills
	•	Building a personal career action plan
This course helps scholars understand where opportunities exist and how they can strategically position themselves for success.

Course 2: CV, Cover Letter & Application Mastery
Participants learn how to:
	•	Develop professional CVs
	•	Write compelling cover letters
	•	Tailor applications to specific opportunities
	•	Avoid common application mistakes
	•	Increase their chances of securing interviews
The course provides practical guidance for internship and job applications.

Course 3: Interview, Networking & Personal Branding
Participants strengthen their ability to:
	•	Prepare for interviews confidently
	•	Build professional networks
	•	Communicate effectively
	•	Develop a strong personal brand
	•	Utilize LinkedIn and professional platforms
This course helps scholars present themselves effectively to employers and industry professionals.

Course 4: Digital Skills, AI & Future of Work
Participants gain insights into:
	•	Digital productivity tools
	•	Artificial Intelligence applications
	•	Future workplace trends
	•	Digital collaboration and communication
	•	Technology skills required in modern careers
The course prepares scholars for an increasingly digital and technology-driven labor market.

Beyond Training: Coaching, Mentorship & Internships
The Career Development Series is more than a training program.
Participants also benefit from:
	•	Career coaching sessions
	•	Peer learning opportunities
	•	Professional mentorship
	•	Career planning support
	•	Internship preparation guidance

As part of the broader Career Acceleration Pathways (CAP) model, scholars who complete the program will be positioned to access internship opportunities and further career development support through ACN’s growing network of employers and partners.

A Partnership for Impact
The Career Development Series reflects the shared commitment of Masaf Development Organization and Africa Career Networks to strengthen career pathways for young Africans.

By combining local implementation expertise with continental networks and career support systems, the program aims to create practical opportunities that help scholars move confidently from education to dignified work.

Looking Ahead
The journey has only begun.

Over the coming weeks, scholars will continue participating in training sessions, coaching clinics, assignments, and mentorship activities designed to strengthen their employability and professional readiness.

Through the Career Acceleration Pathways program, Mastercard Foundation Scholars are building the skills, networks, and confidence needed to thrive in increasingly competitive labor market.

Together, we are building the next generation of African professionals.

⸻
Masaf Development Organization (MDO)
Africa Career Networks (ACN)
Career Acceleration Pathways (CAP) – June 2026 Career Development Series 🚀`
  }
];

async function seed() {
  console.log("Seeding new posts...");
  for (const post of posts) {
    console.log(`Creating post: ${post.title}`);
    await client.create({
      _type: "post",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      publishedAt: new Date().toISOString(),
      body: toBlocks(post.body),
      featured: true
    });
  }

  console.log("Seeding new opportunities...");
  for (const opp of opportunities) {
    console.log(`Creating opportunity: ${opp.title}`);
    await client.createOrReplace({
      _id: `opportunity-${opp.slug}`,
      _type: "opportunities",
      title: opp.title,
      slug: { _type: "slug", current: opp.slug },
      type: opp.type,
      location: opp.location,
      excerpt: opp.excerpt,
      body: toBlocks(opp.body),
      featured: true
    });
  }
  console.log("Successfully seeded new posts and opportunities!");
}

seed().catch(console.error);
