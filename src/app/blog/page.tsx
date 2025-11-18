import BlurFade from "@/components/magicui/blur-fade";
import { GradientText } from "@/components/magicui/gradient-text";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="max-w-4xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-4 mb-12">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
            <GradientText>My Blog</GradientText>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl">
            Stories, experiences, and thoughts from my journey in tech and life.
          </p>
        </div>
      </BlurFade>
      
      <div className="grid gap-6">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="block group"
                href={`/blog/${post.slug}`}
              >
                <article className="relative overflow-hidden rounded-xl border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] p-6 sm:p-8">
                  <div className="flex flex-col space-y-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {post.metadata.title}
                    </h2>
                    
                    {post.metadata.summary && (
                      <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                        {post.metadata.summary}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-4" />
                        <time>{post.metadata.publishedAt}</time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="size-4" />
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </article>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
