import React from "react";
import RecommendationsClient from "../../components/RecommendationsClient";

export const metadata = {
  title: "College Recommendations | DegreeFYD",
  description: "Explore top-ranked online and distance universities tailored to your educational preferences, budget, and stream choices on DegreeFYD.",
  alternates: {
    canonical: "https://degreefyd.com/recommendations",
  },
  openGraph: {
    title: "College Recommendations | DegreeFYD",
    description: "Explore top-ranked online and distance universities tailored to your educational preferences, budget, and stream choices on DegreeFYD.",
    url: "https://degreefyd.com/recommendations",
    siteName: "DegreeFYD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "College Recommendations | DegreeFYD",
    description: "Explore top-ranked online and distance universities tailored to your educational preferences, budget, and stream choices on DegreeFYD.",
  },
};

export default function RecommendationsPage() {
  return <RecommendationsClient />;
}
