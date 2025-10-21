'use client'
import Image from "next/image";
import Logo from "@/assets/logo.png"
import CustomAuthForm from "@/components/CustomAuthForm";

export default function Home() {
  
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 bg-linear-to-b from-neutral-400 to-white">
      <Image src={Logo} alt="Logo" className="h-8 w-full object-contain"/>
      <CustomAuthForm/>
    </div>
  );
}
