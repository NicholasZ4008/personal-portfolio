import React from 'react'
import Image from 'next/image'
import Byte from "../public/byteLogo.png"
import {motion} from "framer-motion"
import ReactOriginalIcon from "react-devicons/react/original";




type Props = {}

export default function ExperienceCard({}: Props) {
  return ( 
    <article 
    className = "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
        
        <motion.div
           initial={{
            y: -100,
            opacity:0,
            }}
            transition = {{duration:1.2}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            className = "relative w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px0 object-center" >

            <Image
                src = {Byte}
                objectFit="cover"
                layout='fill'
                className="relative rounded-full"
            />
        </motion.div>

        <div className= "px-0 md:px-10">
            <h4 className = "text-4xl font-light">JOB</h4>
            <p className = "font-bold text-2xl mt-1">second point</p>
            <div className = "flex space-x-2 my-2">
                <ReactOriginalIcon/>
                <ReactOriginalIcon/>
                <ReactOriginalIcon/>

            </div>
            <p className ="uppercase py-5 text-gray-300">Started at ... -ENDED</p>
        </div>

        <ul className = "list-dic space-y-4 ml-5 text-lg">
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
        </ul>
    </article>
  )
}