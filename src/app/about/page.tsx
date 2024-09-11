import React from "react"
import Image from "next/image"
import aboutpic from "@/assets/aboutpic.png"

const about = () => {
  return (
    <>
    <div className="w-full h-[78vh] bg-black flex items-center justify-center flex-col">
      <Image className="rounded-lg" height={300} width={500} src={aboutpic} alt="about" />
      <h1 className="font-semibold m-4 text-5xl text-lime-300 ">About</h1>
      <p className="text-lg w-6/12 text-center"> We are working on <span className="text-xl text-lime-300 border-b-2 border-lime-200">GEN AI</span> at <span className="text-xl text-lime-300 border-b-2 border-lime-200">ManTech Pakistan</span>. <br /> 
      We will be making cusptom <span className="text-xl text-lime-300 border-b-2 border-lime-200">GPTs</span> very soon. <br />
      For more updates stay <span className="text-xl text-lime-300 border-b-2 border-lime-200">CONNECTED</span> with us.
      </p>
    </div>
    </>
  )
}

export default about