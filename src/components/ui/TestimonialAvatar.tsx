"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  name: string;
  initials: string;
};

export function TestimonialAvatar({ src, name, initials }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-12 h-12 rounded-full bg-masaf-tan flex-shrink-0 overflow-hidden flex items-center justify-center">
      {failed ? (
        <span className="text-masaf-cream font-semibold text-sm">{initials}</span>
      ) : (
        <Image
          src={src}
          alt={name}
          width={48}
          height={48}
          className="object-cover w-full h-full"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
