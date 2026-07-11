import React from "react";
import ShortlistsClient from "../../components/ShortlistsClient";

export const metadata = {
  title: "Shortlisted Colleges | DegreeFYD",
  description: "Review and manage your saved and shortlisted online university applications, status updates, and progress logs on DegreeFYD.",
  alternates: {
    canonical: "https://degreefyd.com/shortlists",
  },
  openGraph: {
    title: "Shortlisted Colleges | DegreeFYD",
    description: "Review and manage your saved and shortlisted online university applications, status updates, and progress logs on DegreeFYD.",
    url: "https://degreefyd.com/shortlists",
    siteName: "DegreeFYD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shortlisted Colleges | DegreeFYD",
    description: "Review and manage your saved and shortlisted online university applications, status updates, and progress logs on DegreeFYD.",
  },
};

export default function ShortlistsPage() {
  return <ShortlistsClient />;
}
