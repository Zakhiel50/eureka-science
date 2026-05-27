"use client";

import dynamic from "next/dynamic";

const EinsteinBot = dynamic(() => import("./EinsteinBot"), {
  ssr: false,
});

export default function ClientEinsteinBot() {
  return <EinsteinBot />;
}
