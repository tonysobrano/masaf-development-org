"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

export function TypewriterText({ text, speed = 40 }: TypewriterTextProps) {
  const [index, setIndex] = useState(0);
  const done = index >= text.length;

  useEffect(() => {
    if (done) return;
    const id = setTimeout(() => setIndex((i) => i + 1), speed);
    return () => clearTimeout(id);
  }, [index, done, speed]);

  return (
    <>
      {text.slice(0, index)}
      <span
        aria-hidden="true"
        className={`inline-block w-[2px] h-[0.75em] bg-current ml-1 align-middle${done ? " animate-cursor-blink" : ""}`}
      />
    </>
  );
}
