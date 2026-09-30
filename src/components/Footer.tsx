"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030305] border-t border-white/10 py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <Link href="#inicio" className="relative h-9 w-44 inline-block shrink-0">
            <Image
              src="/images/logo.png"
              alt="Quality Sound"
              fill
              sizes="176px"
              className="object-contain object-left drop-shadow-[0_2px_12px_rgba(230,25,25,0.3)]"
            />
          </Link>

          {/* Developer credit */}
          <p className="text-xs text-slate-500 tracking-wide">
            Desarrollado por{" "}
            <span className="text-slate-300 font-semibold">MGH</span>
          </p>

        </div>
      </div>
    </footer>
  );
}
