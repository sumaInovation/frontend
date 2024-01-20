import React from 'react'
import { motion } from 'framer-motion'
const Sylabus = () => {
    return (
        <div className=" w-full py-[1rem]   bg-black m-auto">


            {/* Animate part */}
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8 bg-[#41c97c]">
                {/* topic1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className=" bg-slate-400 flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
                    <h2 className="py-8 text-1xl font-bold text-center md:text-3xl">
                        Topic1
                    </h2>
                </motion.div>
                {/* topic2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="bg-slate-400 flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
                    <h2 className="py-8 text-1xl font-bold text-center md:text-3xl">
                        Topic2
                    </h2>
                </motion.div>
                {/* topic3 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="bg-slate-400 flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
                    <h2 className="py-8 text-1xl font-bold text-center md:text-3xl">
                        Topic3
                    </h2>
                </motion.div>
                {/* topic4 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="bg-slate-400 flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
                    <h2 className="py-8 text-1xl font-bold text-center md:text-3xl">
                        Topic4
                    </h2>
                </motion.div>

            </motion.div>


        </div>
    )
}

export default Sylabus
