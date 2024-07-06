'use client'
import blogs from "../blogs.json"
import { motion } from 'framer-motion'

export default function blogfull(){

    return(
        <main className="bg-platinum-300 ">
            <section className="w-screen py-10 bg-platinum-500">
                <h1 className="text-center text-4xl">Blog-Full</h1>
            </section>
            <section className="lg:grid lg:gap-y-10 p-20 lg:grid-cols-4 ">
                {blogs.map(blog => {
                    const { title, description, image, time } = blog;
                    return(
                        <motion.a
                        key={1}
                        whileHover={{ scale: 1.05 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}  
                        whileInView={{ opacity: 1, transition: {delay: .2} }}
                        className="mb-5 lg:mb-0 lg:grid bg-platinum-500 p-3 rounded-2xl lg:col-span-4 lg:grid-cols-4"
                        >
                                <div className="text-center">
                                    <div className="lg:size-80 mx-auto">
                                        <img src={image} className=" rounded-2xl"/>
                                    </div>
                                    
                                </div>
                                <div className=" p-5 col-span-3">
                                    <div className="  text-4xl">{title}</div>
                                    <div className="text-lg">{description}</div>
                                    
                                </div>
                        </motion.a>
                        
                        
                    )
                })}
                

            </section>
        </main>
        
    )
} 