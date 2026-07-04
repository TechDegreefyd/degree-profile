import React from "react";
import Image from "next/image";
import { 
  PhoneIcon, 
  MailIcon, 
  InstagramIcon, 
  FacebookIcon, 
  YoutubeIcon, 
  LinkedinIcon, 
  ChevronDownIcon, 
  SearchIcon, 
  UserIcon, 
  HamburgerIcon, 
  ChevronLeftIcon 
} from "./Icons";

const BrandLogo = () => (
  <div className="flex relative items-center justify-center">
    <Image 
      src="/logo.png" 
      alt="DegreeFYD Logo" 
      width={140} 
      height={35} 
      priority
      style={{ objectFit: "contain" }}
    />
  </div>
);

interface HeaderProps {
  profileName?: string;
}

export default function Header({ profileName = "Kartikay" }: HeaderProps) {
  const firstName = profileName.split(" ")[0];

  return (
    <>
      {/* Top thin bar */}
      <div className="hidden lg:flex justify-between items-center py-2 px-8 xl:px-12 bg-white border-b border-border text-[13px] text-text-body">
        <div className="flex gap-5">
          <div className="flex items-center gap-1.5">
            <span className="text-accent-orange"><PhoneIcon /></span>
            <span>9306508369</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-accent-orange"><MailIcon /></span>
            <span>example@degreefyd.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>Connect with us on your Favorite Socials -</span>
          <div className="flex gap-2 items-center">
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><InstagramIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><FacebookIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><YoutubeIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="hidden lg:flex justify-between items-center py-3.5 px-8 xl:px-12 bg-white sticky top-0 z-50 border-b border-border shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
        <div className="flex items-center gap-2 font-bold text-2xl text-text-dark font-title">
          <BrandLogo />
        </div>
        <nav className="flex gap-7.5 gap-x-8">
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>Universities</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>Courses</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>More</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium text-text-dark text-[15px] cursor-pointer py-1.5 px-3 rounded-md transition-colors hover:bg-primary-light">
            <span>Regular</span>
            <ChevronDownIcon />
          </div>
          <button className="flex items-center gap-2 border border-[#c3d4e9] py-2 px-4 rounded-lg text-primary font-medium text-sm transition-all hover:bg-primary-light hover:border-primary">
            <SearchIcon />
            <span>Search</span>
          </button>
          <button className="flex items-center gap-2 bg-[#f3f6f9] border border-border py-2 px-4 rounded-lg text-text-dark font-medium text-sm transition-all hover:bg-[#e2e8f0]">
            <UserIcon />
            <span>{firstName}</span>
          </button>
        </div>
      </header>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-between items-center p-3.5 bg-white border-b border-border sticky top-0 z-50">
        <button className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg">
          <HamburgerIcon />
        </button>
        <div className="flex items-center gap-1.5 font-bold text-xl text-text-dark font-title">
          <BrandLogo />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg">
            <SearchIcon />
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg">
            <UserIcon />
          </button>
        </div>
      </div>
      <div className="flex lg:hidden items-center bg-primary py-3 px-5 text-white font-medium text-sm gap-2 cursor-pointer">
        <ChevronLeftIcon />
        <span>Back</span>
      </div>
    </>
  );
}
