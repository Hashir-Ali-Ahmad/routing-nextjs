import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full h-[78vh] bg-black flex items-center justify-center flex-col">
      <Image className="rounded-lg" height={300} width={500} src="/home.png" alt="" />
      <h1 className="font-semibold m-4 text-5xl text-lime-300">Home</h1>
      <p className="text-lg w-6/12 text-center">Welcome to our website <br />
      hope so you will have a better experience this time.</p>
    </div>
    </>
  );
}
