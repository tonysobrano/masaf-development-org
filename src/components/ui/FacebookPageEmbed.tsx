"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB?: { XFBML: { parse: () => void } };
    fbAsyncInit?: () => void;
  }
}

type Props = {
  href: string;
  tabs?: string;
  height?: number;
};

export function FacebookPageEmbed({ href, tabs = "events", height = 500 }: Props) {
  useEffect(() => {
    const init = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    };

    if (window.FB) {
      init();
      return;
    }

    if (!document.getElementById("facebook-jssdk")) {
      window.fbAsyncInit = init;
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-page"
        data-href={href}
        data-tabs={tabs}
        data-width=""
        data-height={String(height)}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      />
    </>
  );
}
