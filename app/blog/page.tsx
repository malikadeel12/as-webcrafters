/*
  Change summary:
  - What: Blog index lists the four studio articles only.
  - Why: The old page mixed in placeholder posts and a "verified case study" label that was not a real result.
  - Related: lib/data.ts blogPosts, app/blog/[slug]/page.tsx
*/

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/lib/data";
import { pageSearch } from "@/lib/site";

export const metadata: Metadata = pageSearch(
  "/blog",
  "Notes from A&S WebCrafters on business websites, WhatsApp follow-up, hiring a studio, and getting found without paying for every click.",
  "Studio Notes",
);

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Notes from"
        accent="the studio"
        subtitle="Plain writing on websites, follow-up, search, and how to hire the work. No invented results."
      />
      <section className="bg-white pb-16">
        <Container>
          <div className="grid gap-4">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-[24px] border border-slate-100 p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {post.category} · {post.minutes} min read
                </p>
                <h2 className="mt-2 text-[22px] font-bold text-ink">{post.title}</h2>
                <p className="mt-2 text-[15px] leading-7 text-muted">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-[14px] font-semibold text-brand">
                  Read the article →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
