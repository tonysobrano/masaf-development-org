import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { programs } from "@/content/site";

type Params = { slug: string };

const programDetails: Record<
  string,
  { heading: string; body: string[] }
> = {
  "skills-development": {
    heading: "Skills Development & Lifelong Learning",
    body: [
      "MASAF's skills development programs equip youth with practical, market-relevant capabilities that translate directly into livelihoods. From digital literacy to industry-specific vocational training, every course is co-designed with employers and anchored in local labor market realities.",
      "Our approach prioritizes hands-on learning over passive instruction. Participants build portfolios, complete real projects, and earn credentials recognized by employer partners. Short courses run on flexible schedules so young people can learn while working or caregiving.",
      "We invest especially in skills for women, IDPs, and persons with disabilities — populations systematically excluded from formal training pipelines. MASAF Spaces provide the physical and digital infrastructure to make learning accessible regardless of background.",
    ],
  },
  "entrepreneurship-msme": {
    heading: "Entrepreneurship & MSME Support",
    body: [
      "MASAF's entrepreneurship programming supports aspiring and early-stage founders from idea validation through revenue generation. We combine structured curricula with one-on-one coaching, peer cohorts, and direct connections to markets and capital.",
      "Micro, small, and medium enterprises (MSMEs) are the backbone of African economies, yet most young entrepreneurs lack access to the mentorship, networks, and working capital needed to survive the first two years. MASAF addresses each of these gaps through integrated support.",
      "Our incubation and MSME support programs have produced ventures in technology, agribusiness, creative industries, and social services — demonstrating that with the right scaffolding, young Ethiopians build businesses that employ others and strengthen local economies.",
    ],
  },
  "youth-leadership": {
    heading: "Youth Leadership & Civic Engagement",
    body: [
      "MASAF believes young people are not future leaders — they are leaders today. Our youth leadership programming creates structured pathways for young people to shape organizational strategy, facilitate peer learning, and lead community dialogues.",
      "Civic engagement programs train participants in facilitation, public speaking, community organizing, and policy advocacy. These skills are essential for youth who want to influence the decisions affecting their communities, from local government to international development.",
      "Youth who complete leadership tracks often return as program facilitators and mentors — creating a self-sustaining cycle of capacity building that extends MASAF's reach far beyond any single staff team.",
    ],
  },
  "womens-empowerment": {
    heading: "Women's Economic Empowerment",
    body: [
      "Across Ethiopia and the Horn of Africa, women face compounded barriers to economic participation: limited access to finance, restricted mobility, caregiving burdens, and social norms that constrain opportunity. MASAF's women's empowerment programming directly addresses these structural barriers.",
      "Our programs combine skills training with childcare support, financial literacy, savings groups, and direct market linkages. We design schedules around women's realities and create safe, women-centered learning environments.",
      "Impact data shows that women who complete MASAF programs are more likely to start businesses, increase household income, and take on leadership roles in their communities — confirming that targeted investment in women yields outsized returns.",
    ],
  },
  "workforce-development": {
    heading: "Workforce Development & Employability",
    body: [
      "MASAF's workforce development programs bridge the gap between what young people learn and what employers need. We work directly with private-sector partners to identify skills gaps, co-design curricula, and create hiring pipelines.",
      "Programs include CV and portfolio coaching, interview preparation, workplace readiness training, and direct introductions to employer partners. For many participants, this is the first time they receive structured career guidance.",
      "Our employer partnerships are not transactional — they are co-creation relationships. Companies that partner with MASAF help shape training content, host interns, and commit to hiring from our talent pool, creating a reliable pathway from training to employment.",
    ],
  },
  "digital-jobs": {
    heading: "Digital Jobs & Innovation",
    body: [
      "The digital economy is one of the fastest-growing sources of youth employment in Africa, yet most young people in underserved communities lack the foundational digital skills to participate. MASAF's digital jobs programming closes this gap.",
      "From coding bootcamps and data analytics courses to creative technology and freelance platform training, our digital tracks prepare youth for remote and local tech-enabled work. Digital MASAF Spaces (coming soon) will extend this programming beyond physical hubs.",
      "Innovation programming encourages young technologists to build solutions for local challenges — from health information systems to agricultural market platforms — positioning communities as producers of technology, not just consumers.",
    ],
  },
  "financial-literacy": {
    heading: "Financial Literacy & Inclusion",
    body: [
      "Financial literacy is a prerequisite for economic participation, yet it is rarely taught in formal education systems. MASAF's financial literacy programming gives young people the knowledge and confidence to manage money, access financial services, and build savings habits.",
      "Courses cover budgeting, saving, credit management, mobile banking, and investment basics. We partner with microfinance institutions and banks to connect participants with appropriate financial products.",
      "For aspiring entrepreneurs, financial literacy is the foundation of business planning. Our programs integrate financial skills into every entrepreneurship track, ensuring founders can manage cash flow, price products, and prepare for investor conversations.",
    ],
  },
  "climate-livelihoods": {
    heading: "Climate-Smart Livelihoods",
    body: [
      "Climate change is reshaping livelihoods across the Horn of Africa. MASAF's climate-smart programming helps communities adapt — building skills and enterprises that are resilient to shifting weather patterns, water scarcity, and environmental degradation.",
      "Programs cover climate-resilient agriculture, renewable energy skills, natural resource management, and green enterprise development. We connect participants with climate finance mechanisms and adaptation technologies appropriate for their contexts.",
      "By integrating climate awareness into all programming — not isolating it — MASAF ensures that every skills track and business model accounts for environmental reality, building livelihoods that can sustain under changing conditions.",
    ],
  },
  "community-resilience": {
    heading: "Community Resilience & IDP Support",
    body: [
      "Internally displaced persons (IDPs) and crisis-affected communities face the steepest barriers to economic participation. MASAF's resilience programming is designed specifically for these populations — providing rapid skills training, psychosocial support, and pathways to self-reliance.",
      "Programs are delivered in accessible locations with flexible schedules, recognizing that displaced families often cannot commit to long-term courses. Short, intensive skills modules allow participants to start earning quickly while building toward longer-term livelihoods.",
      "MASAF partners with humanitarian agencies and local authorities to ensure resilience programming complements — rather than duplicates — existing assistance. The goal is always transition: from relief dependence to productive, dignified economic participation.",
    ],
  },
};

export async function generateStaticParams(): Promise<Params[]> {
  return Object.keys(programDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = programDetails[slug];
  if (!detail) return {};
  return { title: detail.heading, description: detail.body[0] };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const detail = programDetails[slug];
  if (!detail) notFound();

  const thematicArea = programs.thematicAreas.items.find((a) =>
    a.toLowerCase().includes(slug.split("-")[0]),
  );

  return (
    <article className="py-20 md:py-28">
      <Container size="narrow">
        <Link
          href="/programs"
          className="text-sm uppercase tracking-[0.18em] text-masaf-red hover:text-masaf-red-dark"
        >
          ← Back to Programs
        </Link>

        <div className="mt-8">
          {thematicArea && <Eyebrow>{thematicArea}</Eyebrow>}
          <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.1] text-masaf-red">
            {detail.heading}
          </h1>
        </div>

        <div className="mt-12 space-y-6">
          {detail.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-masaf-ink">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-masaf-ink/10 bg-masaf-red/5 p-8">
          <Eyebrow tone="red">Get involved</Eyebrow>
          <p className="mt-3 text-lg leading-relaxed text-masaf-ink">
            Interested in funding, co-designing, or collaborating on this program?
          </p>
          <div className="mt-4">
            <Link
              href="/get-involved#contact-form"
              className="text-sm font-medium uppercase tracking-[0.08em] text-masaf-red hover:text-masaf-red-dark"
            >
              Partner With Us →
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
