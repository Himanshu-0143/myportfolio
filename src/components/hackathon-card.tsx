import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-12 sm:ml-16 py-4">
      <div className="absolute -left-16 sm:-left-20 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 sm:size-14 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1.5">
        {dates && (
          <time className="text-xs sm:text-sm text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none text-base sm:text-lg">{title}</h2>
        {location && (
          <p className="text-sm sm:text-base text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm sm:text-base text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-3 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2 px-2.5 py-1.5 text-xs hover:bg-secondary/80 transition-colors min-h-[32px]">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
