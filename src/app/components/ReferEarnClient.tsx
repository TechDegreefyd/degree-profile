"use client";

import React, { useState } from "react";

// Local Mail SVG Icon
const MailIconLocal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function ReferEarnClient() {
  const referralLink = "https://degreefyd.com/ref/kartikay";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <section className="flex-1 flex flex-col gap-6 items-start">
      <h1 className="text-xl lg:text-2xl font-bold text-text-dark font-title">
        Refer Degreefyd to others to get benifits
      </h1>

      {/* Banner Graphic Illustration */}
      <div className="w-full xl:w-[1013px] h-fit lg:h-[212px] rounded-[8px] overflow-hidden shadow-sm border border-slate-100 relative bg-[#f1f3fa]">
        <img 
          src="/refer_banner.png" 
          alt="Refer and Earn Banner - Share your unique link with friends and earn rewards when they join." 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Referral Link & Actions card */}
      <div className="bg-white border border-border rounded-xl p-5 lg:p-6 w-full xl:w-[1013px] shadow-premium flex flex-col gap-4">
        {/* Top info line */}
        <p className="text-[13px] text-text-light font-medium leading-relaxed">
          Share your unique link with friends and earn rewards when they join.
        </p>

        {/* Input Label */}
        <span className="text-sm font-bold text-text-dark font-title">
          Your Referral Link
        </span>

        {/* Link & share buttons block */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* Copyable Input Row */}
          <div className="relative flex items-center w-full">
            <input 
              type="text" 
              readOnly 
              value={referralLink} 
              className="w-full border border-slate-200 rounded-lg py-2.5 px-3.5 pr-12 text-xs sm:text-sm text-text-dark font-medium bg-[#fcfdfe] focus:outline-none"
            />
            <button 
              onClick={handleCopy}
              className="absolute right-3.5 text-slate-400 hover:text-primary transition-colors cursor-pointer flex items-center justify-center"
              title="Copy Referral Link"
            >
              {copied ? (
                <span className="text-[10px] text-green-500 font-bold bg-green-50 px-1.5 py-0.5 rounded border border-green-150">Copied!</span>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>

          {/* Share Buttons: 2 columns on mobile, flex row on desktop */}
          <div className="grid grid-cols-2 md:flex gap-3 w-full">
            {/* Whatsapp Share button */}
            <a 
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Join Degreefyd using my link: " + referralLink)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-[#007B2D] rounded-[8px] py-2.5 px-4 text-xs sm:text-sm font-bold text-[#007B2D] bg-white hover:bg-green-50/30 transition-colors cursor-pointer w-full md:w-auto"
            >
              <img src="/whatsapp_icon.png" alt="WhatsApp" className="w-4 h-4 object-contain inline" />
              <span>WhatsApp</span>
            </a>

            {/* Email Share button */}
            <a 
              href={`mailto:?subject=Join%20Degreefyd&body=${encodeURIComponent("Hey, join Degreefyd and discover the best online colleges! Here is my link: " + referralLink)}`}
              className="flex items-center justify-center gap-2 border border-primary rounded-lg py-2.5 px-4 text-xs sm:text-sm font-semibold text-primary bg-white hover:bg-slate-50 transition-colors cursor-pointer w-full md:w-auto"
            >
              <MailIconLocal />
              <span>Email</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
