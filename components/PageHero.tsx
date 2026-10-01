/*
  Change summary:
  - What: Shared inner-page hero used by About, Services, Blog, Products.
  - Why: Inner pages on the live site open with a centered Playfair title.
  - Related: inner app pages
*/

import { Container } from "@/components/ui";

export function PageHero({
  title,
  accent,
  subtitle,
}: {
  title: string;
  accent?: string;
  subtitle: string;
}) {
  return (
    <section className="bg-white pt-32 pb-12 md:pt-36 md:pb-16">
      <Container className="text-center">
        <h1 className="serif text-[40px] font-bold leading-[1.1] tracking-[-0.035em] text-ink md:text-[60px]">
          {title}{" "}
          {accent && (
            <span className="bg-linear-to-r from-brand to-accent bg-clip-text text-transparent">
              {accent}
            </span>
          )}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-muted">{subtitle}</p>
      </Container>
    </section>
  );
}
