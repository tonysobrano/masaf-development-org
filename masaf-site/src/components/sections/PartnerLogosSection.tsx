"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { partnersSection } from "@/content/site";

function PartnerLogoCard({
  name,
  logo,
  url,
}: {
  name: string;
  logo: string;
  url: string;
}) {
  const [imgError, setImgError] = useState(false);

  const inner = (
    <div className="group flex items-center justify-center rounded-xl border border-masaf-ink/10 bg-white px-5 py-4 h-20 transition-all hover:border-masaf-tan/60 hover:shadow-sm">
      {imgError ? (
        <span className="text-xs font-medium text-center leading-tight text-masaf-ink-muted px-2">
          {name}
        </span>
      ) : (
        <Image
          src={logo}
          alt={name}
          width={140}
          height={56}
          className="h-10 w-auto object-contain grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );

  if (url && url !== "#") {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
        {inner}
      </a>
    );
  }

  return <div aria-label={name}>{inner}</div>;
}

export function PartnerLogosSection() {
  return (
    <section className="py-16 md:py-20 border-y border-masaf-ink/10">
      <Container size="wide">
        <div className="text-center">
          <Eyebrow tone="tan">{partnersSection.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-[1.15] tracking-[-0.025em] text-masaf-ink">
            {partnersSection.heading}
          </h2>
          <p className="mt-3 text-sm text-masaf-ink-muted">
            {partnersSection.body}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
          {partnersSection.logos.map((partner) => (
            <li key={partner.name}>
              <PartnerLogoCard
                name={partner.name}
                logo={partner.logo}
                url={partner.url}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
