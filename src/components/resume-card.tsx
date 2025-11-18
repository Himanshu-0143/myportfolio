"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="block min-h-[56px]">
      <Card className="flex hover:bg-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden group cursor-pointer" onClick={(e) => { if (description) { setIsExpanded(!isExpanded); } }}>
        <div className="flex-none p-3 sm:p-4">
          <Avatar className="border size-12 sm:size-14 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-2 items-center flex-col group">
          <CardHeader className="p-3 sm:p-4">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm sm:text-base gap-2">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1.5 flex-wrap">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs px-2 py-0.5"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 sm:size-5 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs sm:text-sm text-muted-foreground mt-1">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="px-3 sm:px-4 pb-3 sm:pb-4"
            >
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{description}</p>
              {href && href !== "#" && (
                <Link href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <Button variant="outline" size="sm" className="gap-2 h-8 text-xs">
                    <ExternalLinkIcon className="size-3" />
                    Visit Website
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
