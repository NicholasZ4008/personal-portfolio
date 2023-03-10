import React from 'react'
import {motion} from "framer-motion"
import City from '../public/city.jpg'
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        
        <h3 className = "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        
        <motion.div 
        initial={{
            opacity:0,
        }}
        whileInView={{opacity: 1 }}
        transition={{
            duration:1,
        }}
        viewport={{once:true}}>
            <div className = "relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]">
                <Image src={City} 
                objectFit="cover"
                layout='fill'
                className="rounded-full"
                /> 
            </div>
            
        </motion.div> 

        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition = {{duration:1.5}}
            viewport={{once:true}}
            className = "space-y-10 px-0 md:px-10">

            <h4 className = "text-4xl font-semibold">
                Here is a{" "}
                <span className = "underline decoration-[#F7AB0A]/50">little</span>{" "} 
                background
            </h4>
            <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta hic quaerat. Sunt accusamus dolore aliquid ut velit, sint obcaecati sapiente, tempore dolorem, adipisci architecto ea quasi nemo minus nulla!
            </p>
        </motion.div>

    </div>

  );
} 