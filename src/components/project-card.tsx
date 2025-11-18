import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TiltCard } from "@/components/magicui/tilt-card";
import { Shimmer } from "@/components/magicui/shimmer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <TiltCard className="group h-full">
      <Card
        className={
          "flex flex-col overflow-hidden border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 ease-out h-full relative bg-card/50 backdrop-blur-sm hover:border-primary/50"
        }
      >
        <Shimmer />
        <Link
          href={href || "#"}
          className={cn("block cursor-pointer", className)}
        >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-48 sm:h-52 md:h-56 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-48 sm:h-52 md:h-56 w-full overflow-hidden object-contain object-center bg-muted"
          />
        )}
      </Link>
      <CardHeader className="px-3 sm:px-4 pt-4 pb-2">
        <div className="space-y-1.5">
          <CardTitle className="mt-1 text-base sm:text-lg">{title}</CardTitle>
          <time className="font-sans text-xs sm:text-sm text-muted-foreground">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs sm:text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-3 sm:px-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-xs"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-3 sm:px-4 pb-3 sm:pb-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2.5 py-1.5 text-xs hover:bg-secondary/80 transition-colors min-h-[32px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
    </TiltCard>
  );
}
