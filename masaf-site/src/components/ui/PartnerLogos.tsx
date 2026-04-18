import Image from "next/image";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type Partner = {
  name: string;
  src: string;
};

const partners: Partner[] = [
  { name: "Africa Career Networks", src: "/images/partners/acn.jpg" },
  { name: "Doolo Development Society (DDS)", src: "/images/partners/dds.png" },
  { name: "Jigjiga University", src: "/images/partners/jigjiga-university.jpg" },
  { name: "University of Kabridahar", src: "/images/partners/kabridahar-university.jpg" },
  { name: "SRS Disaster Risk Management Bureau", src: "/images/partners/drmb.jpg" },
  { name: "Degahbur Public Library", src: "/images/partners/dpl.jpg" },
  { name: "SRS Youth & Sports Bureau", src: "/images/partners/srsysb.jpg" },
  { name: "Somali Non-State Actors Coalition", src: "/images/partners/sonsac.jpg" },
  { name: "Mahadho", src: "/images/partners/mahadho.jpg" },
  { name: "Maternal Health Initiative", src: "/images/partners/maternal.png" },
  { name: "Ideas Innovation", src: "/images/partners/ideas.jpg" },
  { name: "AVRO Innovation", src: "/images/partners/avro.jpg" },
  { name: "CLI", src: "/images/partners/cli.jpg" },
  { name: "Partner 1", src: "/images/partners/partner-1.jpg" },
  { name: "Partner 2", src: "/images/partners/partner-2.jpg" },
  { name: "Partner 3", src: "/images/partners/partner-3.jpg" },
];

type PartnerLogosProps = {
  heading?: string;
  eyebrow?: string;
  className?: string;
};

export function PartnerLogos({
  heading = "Our Partners",
  eyebrow = "Trusted collaborators",
  className,
}: PartnerLogosProps) {
  return (
    <section className={className ?? "py-20 md:py-28 bg-masaf-cream border-t border-masaf-ink/10"}>
      <Container size="wide">
        <div className="max-w-2xl">
          <Eyebrow tone="tan">{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium leading-[1.15] tracking-[-0.025em] text-masaf-red">
            {heading}
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex aspect-square items-center justify-center rounded-2xl border border-masaf-ink/10 bg-white p-5 transition-colors hover:border-masaf-red/40"
            >
              <div className="relative h-full w-full">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
