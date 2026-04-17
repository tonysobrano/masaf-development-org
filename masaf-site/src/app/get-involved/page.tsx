import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/sections/PageHero";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { PartnerLogos } from "@/components/ui/PartnerLogos";
import { siteSettings, getInvolved } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description: getInvolved.hero.body,
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow={getInvolved.hero.eyebrow}
        heading={getInvolved.hero.heading}
        body={getInvolved.hero.body}
      />

      {getInvolved.sections.map((section, i) => (
        <section
          key={section.id}
          className={i % 2 === 1 ? "py-20 md:py-28 bg-masaf-tan/15" : "py-20 md:py-28"}
        >
          <Container size="wide">
            <div className="grid gap-12 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <Eyebrow tone={section.id === "partner" ? "tan" : "ink"}>
                  {section.title}
                </Eyebrow>
                <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.15] tracking-[-0.025em] text-masaf-red">
                  {section.body}
                </h2>
              </div>
              <ul className="md:col-span-6 md:col-start-7 space-y-3">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-4 rounded-full bg-white px-6 py-4 text-masaf-ink border border-masaf-ink/10"
                  >
                    <span
                      aria-hidden
                      className="inline-block h-2 w-2 rounded-full bg-masaf-tan shrink-0"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}

      <PartnerLogos />

      <section id="contact-form" className="py-20 md:py-28 bg-masaf-tan/15">
        <Container size="wide">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>Send a message</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.15] tracking-[-0.025em] text-masaf-red">
                Ready to build with us? We&rsquo;d love to hear from you.
              </h2>
              <div className="mt-10">
                <InquiryForm defaultType="partner" source="get-involved-page" />
              </div>
            </div>

            <aside className="md:col-span-4 md:col-start-9 space-y-10">
              <div>
                <Eyebrow>Contact</Eyebrow>
                <div className="mt-3 text-sm text-masaf-ink">
                  <a href={`mailto:${siteSettings.contact.email}`} className="hover:text-masaf-red transition-colors">
                    {siteSettings.contact.email}
                  </a>
                </div>
              </div>

              <div>
                <Eyebrow>Phone</Eyebrow>
                <div className="mt-3 space-y-1 text-sm text-masaf-ink">
                  {siteSettings.contact.phones.ethiopia.map((phone) => (
                    <p key={phone}>
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-masaf-red transition-colors">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <Eyebrow>Offices</Eyebrow>
                <div className="mt-3 space-y-4 text-sm text-masaf-ink">
                  {siteSettings.contact.offices.map((office) => (
                    <address key={office.name} className="not-italic leading-relaxed">
                      <span className="font-medium">{office.name}</span>
                      <br />
                      {office.street}
                      <br />
                      {office.city}{office.region && `, ${office.region}`}
                      <br />
                      {office.country}
                    </address>
                  ))}
                </div>
              </div>

              <div>
                <Eyebrow>Follow us</Eyebrow>
                <div className="mt-3 flex gap-4">
                  <SocialLink href={siteSettings.socials.facebook} label="Facebook">
                    <FacebookIcon />
                  </SocialLink>
                  <SocialLink href={siteSettings.socials.linkedin} label="LinkedIn">
                    <LinkedInIcon />
                  </SocialLink>
                  <SocialLink href={siteSettings.socials.instagram} label="Instagram">
                    <InstagramIcon />
                  </SocialLink>
                  <SocialLink href={siteSettings.socials.twitter} label="X (Twitter)">
                    <XIcon />
                  </SocialLink>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-masaf-ink/15 text-masaf-ink transition-colors hover:border-masaf-red hover:text-masaf-red"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
