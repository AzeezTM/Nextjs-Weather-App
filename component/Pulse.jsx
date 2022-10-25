import React from 'react'
import Image from 'next/image'
import pulse from "../public/pulse.gif"

function Pulse() {
  return (
    <>
    <Image 
    className="w-[200px] m-auto block"
     src={pulse}
     alt="loading"/>
    </>
  )
}

export default Pulse;