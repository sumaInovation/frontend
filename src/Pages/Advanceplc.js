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
                className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8 bg-[#e7ebe9]"
            >

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
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
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Basic instructions
                    </h2>
                    1.Bit logic contacts and coils<br />
                    2.Set and reset instructions .<br />
                    3.Positive and negative edge instructions.<br />
                    4.Timers  & Counters.<br />
                    5.Compare instructions.<br />
                    6.Math  Instructions.<br />
                    7.Convert instructions.<br />
                    8.Round and truncate instructions.<br />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Basic instructions
                    </h2>
                    9.Scale and normalize instructions <br />
                    10.Program control.<br />
                    11.Jump and label instructions.<br />
                    12.SWITCH instruction.<br />
                    13.AND, OR, and XOR instructions.<br />
                    14.Invert instruction.<br />
                    15.Encode and decode instructions.<br />
                    16.Shift and Rotate .<br />


                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Technology instructions
                    </h2>
                    High-speed counter.<br />
                    1.Operation of the high-speed counter.<br />
                    2.Selecting the functionality for the HSC.<br />
                    3.Input addresses for the HSC.<br />



                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Technology instructions
                    </h2>
                    PID control<br />
                    1.PID algorithm.<br />
                    2.Inserting the PID instruction and technological object.<br />
                    3.PID_Compact instruction.<br />
                    4.PID_3STEP instruction.<br />
                    5.Configuring the PID controller.<br />
                    6.Commissioning the PID controller.<br />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Technology instructions
                    </h2>
                    Motion control <br />
                    1.Configuring a pulse generator(PWM).<br />
                    2.Configuring the axis<br />
                    3.Motion control instructions.<br />
                    a.MC_Power instruction<br />
                    b.MC_Reset instruction.<br />
                    c.MC_Home instruction.<br />
                    d.MC_MoveAbsolute instruction.<br />
                    e.MC_MoveRelative instruction.<br />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Technology instructions
                    </h2>
                    Motion control<br />
                    3.Motion control instructions<br />
                    f.MC_MoveVelocity instruction<br />
                    g.MC_MoveJog instruction<br />
                    h.MC_CommandTable instruction<br />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Programming concepts
                    </h2>
                    1.Using blocks to structure your program<br />
                    2.Organization block (OB)<br />
                    3.Function (FC)<br />
                    4.Function block (FB)<br />
                    5.Data block (DB).

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Communications
                    </h2>
                    1.PROFINET Communication<br />
                    2.Local/Partner connection<br />
                    3.Open user communication<br />
                    4.Modbus RTU communication<br />
                    5.Modbus TCP/IP communication<br />
                    6.S7 communication
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        HMI & SCADA
                    </h2>
                    1.Introduction to SCADA<br />
                    2.Introduction to HMI<br />
                    3.Desing Custom animation desining<br />
                    4.OPC Server
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Practicals
                    </h2>
                    1.AC Servo Motor controlling via Analog<br />
                    2.Ac Server Motor Controlling vis PWM<br />
                    3.AC Server Motor Controlling vis Modbu RTU<br />
                    4.AC Servo Motor Postion Controlling<br />
                  
                    5.AC Servo Motor Speed Controlling<br />






                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Practicals
                    </h2>
                    1.AC induction Motor controlling via Analog<br />
                    2.Ac induction Motor Controlling vis PWM<br />
                    3.AC induction Motor Controlling vis Modbu RTU<br />
                    4.AC induction Motor Postion Controlling<br />
                    5.AC induction Motor Speed Controlling<br />




                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Practicals
                    </h2>
                    1.AC Servo motor PID Controlling<br/>
                    2.AC induction Motor PID Controlling<br/>
                    3.DC Motor PID Controlling<br/>
                    4.HMI Controll Automation System<br/>
                    5.SACDA Controll Automation system<br/>
                    
                    
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
                >
                    <h2 className="py-8 text-base font-bold text-center md:text-3xl">
                        Practicals
                    </h2>
                    1.Arduino with PLC communication via Modbus RTU<br/>
                    2.Arduino with PLC communication  vis Modbus TCP/IP<br/>
                    3.Factory IO Syatem<br/>
                    
                    
                    
                </motion.div>


</motion.div>
        </>
    );
};

export default Advanceplc;
