import React from "react"
import Image from "next/image"
import comingpic from "@/assets/comingpic.png"


const page = () => {
  return (
    <>
    <div className="w-full h-[78vh] bg-black flex items-center justify-center flex-col">
      <Image className="rounded-lg" height={300} width={500} src={comingpic} alt="" />
      <h1 className="font-semibold m-4 text-5xl text-lime-300">Coming Soon</h1>
      <p className="text-lg w-6/12 text-center">Our new projects are <span className="text-xl text-lime-300 border-b-2 border-lime-200">COMING SOON</span></p>
    </div>
    </>
  )
}

export default page