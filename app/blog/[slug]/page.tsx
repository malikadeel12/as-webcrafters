/*
  Change summary:
  - What: Each blog URL renders that article's own sections.
  - Why: Every post used to share the same three placeholder paragraphs.
  - Related: lib/data.ts blogPosts
*/

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, Container } from "@/components/ui";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return {
    title: post?.title ?? "Article",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-white pt-32 pb-20">
      <Container className="max-w-3xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
          {post.category} · {post.minutes} min read
        </p>
        <h1 className="serif mt-3 text-[36px] font-bold leading-tight text-ink md:text-[48px]">{post.title}</h1>
        <p className="mt-5 text-[17px] leading-8 text-muted">{post.excerpt}</p>
        {post.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-[24px] font-bold text-ink">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-[16px] leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <div className="mt-12 rounded-[24px] bg-slate-50 p-6">
          <p className="text-[15px] leading-7 text-slate-600">
            If this matches a problem you are already dealing with, tell us what is happening and we will say what we would look at first.
          </p>
          <div className="mt-4">
            <Button href="/contact">Talk to the studio</Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
