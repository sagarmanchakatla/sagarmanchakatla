import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  issuer?: string;
  date?: string;
  href?: string;
  icon?: string;
}

export function CertificationCard({ title, issuer, date, href, icon }: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full border-2 border-gray-200 w-12 h-12">
        {/* <span className="text-lg">{icon || "🏆"}</span> */}
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={icon} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {date && <time className="text-xs text-muted-foreground">{date}</time>}
        <h3 className="font-semibold leading-none">{title}</h3>
        {issuer && <p className="text-sm text-muted-foreground">{issuer}</p>}
      </div>
      <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
        <Link href={href ?? "#"} target="_blank">
          <Badge className="flex gap-2">
            <ExternalLinkIcon className="size-3" />
            View Credential
          </Badge>
        </Link>
      </div>
    </li>
  );
}
