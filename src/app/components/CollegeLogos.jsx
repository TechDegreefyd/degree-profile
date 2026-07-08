"use client";

import React from "react";
import Image from "next/image";

export const AlagappaLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/alagappa_logo.png" 
      alt="Alagappa University Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

export const AmityLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/amity_logo.jpg" 
      alt="Amity University Online Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

export const GlaLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/gla_logo.jpg" 
      alt="GLA University Online Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

export const LpuLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/lpu_logo.png" 
      alt="LPU Online Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

export const ShardaLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/sharda_logo.png" 
      alt="Sharda University Online Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

export const LOGO_COMPONENTS = {
  Alagappa: AlagappaLogo,
  Amity: AmityLogo,
  Gla: GlaLogo,
  Lpu: LpuLogo,
  Sharda: ShardaLogo
};
