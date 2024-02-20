import React from "react";
import { motion } from "framer-motion";
import img2 from '../Assets/S7-1500-Image.webp'
const Advanceplc = () => {
    return (
        <>


            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8 bg-gray-100 dark:bg-gray-800"
            >

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Introduction to TIA Portal
                    </h2>
                    TIA Portal base 1200PLC programming 
                    <motion.img 
                    initial={{scale:0}}
                    whileInView={{scale:1}}
                    transition={{duration:2}}
                    
                    
                    src={img2}  className="w-[300px] "/>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Basic instructions
                    </h2>
                    <ul className='text-start'>
                    <li>1.Bit logic contacts and coils</li>
                    <li>2.Set and reset instructions</li> 
                    <li>3.Positive and negative edge instructions.</li>
                    <li>4.Timers  & Counters.</li>
                    <li>5.Compare instructions.</li>
                    <li>6.Math  Instructions.</li>
                    <li>7.Convert instructions.</li>
                    <li>8.Round and truncate instructions.</li>
                    </ul>
                    

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Basic instructions
                    </h2>
                    <ul className='text-start'>
                    <li>9.Scale and normalize instructions </li>
                    <li>10.Program control.</li>
                    <li>11.Jump and label instructions.</li>
                    <li>12.SWITCH instruction.</li>
                    <li>13.AND, OR, and XOR instructions.</li>
                    <li>14.Invert instruction.</li>
                    <li>15.Encode and decode instructions.</li>
                    <li>16.Shift and Rotate .</li>
                    </ul>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Technology instructions
                    </h2>
                    <ul className="text-start">
                    <li>High-speed counter.</li>
                    <li>1.Operation of the high-speed counter.</li>
                    <li>2.Selecting the functionality for the HSC.</li>
                    <li>3.Input addresses for the HSC.</li>

                    </ul>
                   


                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Technology instructions
                    </h2>
                    <ul className="  text-start">
                   <li> PID control</li>
                    <li>1.PID algorithm.</li>
                    <li>2.Inserting the PID instruction and technological object.</li>
                    <li>3.PID_Compact instruction.</li>
                    <li>4.PID_3STEP instruction.</li>
                    <li>5.Configuring the PID controller.</li>
                    <li>6.Commissioning the PID controller.</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Technology instructions
                    </h2>
                    <ul className="text-start">
                    <li>Motion control </li>
                    <li>1.Configuring a pulse generator(PWM).</li>
                    <li>2.Configuring the axis</li>
                    <li>3.Motion control instructions.</li>
                    <li>a.MC_Power instruction</li>
                    <li>b.MC_Reset instruction.</li>
                    <li>c.MC_Home instruction.</li>
                    <li>d.MC_MoveAbsolute instruction.</li>
                    <li>e.MC_MoveRelative instruction.</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Technology instructions
                    </h2>
                    <ul className="text-start">
                    <li>Motion control</li>
                    <li>3.Motion control instructions</li>
                    <li>f.MC_MoveVelocity instruction</li>
                    <li>g.MC_MoveJog instruction</li>
                    <li>h.MC_CommandTable instruction</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Programming concepts
                    </h2>
                    <ul className="text-start">
                    <li>1.Using blocks to structure your program</li>
                    <li>2.Organization block (OB)</li>
                    <li>3.Function (FC)</li>
                    <li>4.Function block (FB)</li>
                    <li>5.Data block (DB).</li>
                     </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Communications
                    </h2>
                    <ul className="text-start">
                    <li>1.PROFINET Communication</li>
                    <li>2.Local/Partner connection</li>
                    <li>3.Open user communication</li>
                    <li>4.Modbus RTU communication</li>
                    <li>5.Modbus TCP/IP communication</li>
                    <li>6.S7 communication</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        HMI & SCADA
                    </h2>
                    <ul className="text-start">
                    <li>1.Introduction to SCADA</li>
                    <li>2.Introduction to HMI</li>
                    <li>3.Desing Custom animation desining</li>
                    <li>4.OPC Server</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Practicals
                    </h2>
                     <ul className="text-start">

                    <li>1.AC Servo Motor controlling via Analog</li>
                    <li>2.Ac Server Motor Controlling vis PWM</li>
                    <li>3.AC Server Motor Controlling vis Modbu RTU</li>
                    <li>4.AC Servo Motor Postion Controlling</li>
                  
                    <li>5.AC Servo Motor Speed Controlling</li>
                       </ul>





                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Practicals
                    </h2>
                    <ul className="text-start">

                    <li>1.AC induction Motor controlling via Analog</li>
                    <li>2.Ac induction Motor Controlling vis PWM</li>
                    <li>3.AC induction Motor Controlling vis Modbu RTU</li>
                    <li>4.AC induction Motor Postion Controlling</li>
                    <li>5.AC induction Motor Speed Controlling</li>
                   </ul>



                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Practicals
                    </h2>
                    <ul className="text-start">
                    <li>1.AC Servo motor PID Controlling</li>
                    <li>2.AC induction Motor PID Controlling</li>
                    <li>3.DC Motor PID Controlling</li>
                    <li>4.HMI Controll Automation System</li>
                    <li>5.SACDA Controll Automation system</li>
                    </ul>
                    
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl 
                    hover:scale-105 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Practicals
                    </h2>
                    <ul className="text-start">

                    <li>1.Arduino with PLC communication via Modbus RTU</li>
                    <li>2.Arduino with PLC communication  vis Modbus TCP/IP</li>
                    <li>3.Factory IO Syatem</li>
                    </ul>
                    
                    
                </motion.div>


</motion.div>
        </>
    );
};

export default Advanceplc;
