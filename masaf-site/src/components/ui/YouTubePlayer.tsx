"use client";

import { useState, useRef, useEffect } from "react";

type YouTubePlayerProps = {
  videoId: string;
  className?: string;
};

export function YouTubePlayer({ videoId, className = "" }: YouTubePlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    if (playerRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      playerRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: newMuted ? "mute" : "unMute",
        }),
        "https://www.youtube.com"
      );
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "mute",
        }),
        "https://www.youtube.com"
      );
    }
  }, []);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0">
        <iframe
          ref={playerRef}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&loop=1&playlist=${videoId}&enablejsapi=1`}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-none pointer-events-none"
        />
        <div className="absolute inset-0 pointer-events-auto" />
      </div>
      <button
        onClick={toggleMute}
        className={`absolute bottom-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-masaf-tan/80 backdrop-blur-sm text-masaf-cream transition-all duration-200 hover:bg-masaf-tan ${
          isHovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </div>
  );
}
