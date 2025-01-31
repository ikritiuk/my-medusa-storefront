import Hero from "@modules/home/components/hero";
import FloatingButton from "@modules/home/components/floating-button";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Luxury24 shop",
  description: "Магазин элитных часов",
  verification: {
    yandex: "8e708c798b48a43d",
  },
};

export default async function Home() {
  return (
    <>
      <Hero />
      {/*<FloatingButton/>*/}
    </>
  );
}
