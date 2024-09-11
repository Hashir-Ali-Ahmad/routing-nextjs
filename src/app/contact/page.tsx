import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <>
    <div className="w-full h-[78vh] bg-black flex items-center justify-center flex-col">
      <Image className="rounded-lg" height={300} width={500} src="/contact.png" alt="" />
      <h1 className="font-semibold m-4 text-5xl text-lime-300">Contact US</h1>
      <p className="text-lg w-6/12 text-center">
      <a target="_blank" className="text-lime-300 border-b-2 border-lime-200" href="mailto:hashiraliahmad@proton.me">Mail Me</a>   <br />
      <a target="_blank" className="text-lime-300 border-b-2 border-lime-200" href="https://www.linkedin.com/in/hashiraliahmad/">LinkedIn</a>  <br />
      </p>
    </div>
    </>
  )
}

export default page