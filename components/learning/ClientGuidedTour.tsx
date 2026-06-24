"use client";

import dynamic from "next/dynamic";

const GuidedTour = dynamic(() => import("./GuidedTour"), {
  ssr: false,
});

export default function ClientGuidedTour() {
  return <GuidedTour />;
}
