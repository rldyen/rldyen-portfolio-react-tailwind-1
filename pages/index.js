import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import Image from 'next/image';
import profilepic from '../public/profilepic.png';
import SRMlogo from '../public/srmLogo.png';
import MAVlogo from '../public/mavLogo.png';
import USTSHSlogo from '../public/ustshsLogo.png';
import USTCICSlogo from '../public/ustcicsLogo.png';
import ASEA from '../public/projectASEA.jpg';
import UMatter from '../public/projectUMatter.png';
import USTracer from '../public/projectUSTracer.jpg';
import EquipmentManagement from '../public/projectEquipmentManagementSystem.jpg';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Roald Yen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-white">rldyen</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)} 
                className="cursor-pointer text-2xl dark:text-white hover:text-teal-600 dark:hover:text-teal-600"/>
              </li>
            <li>
              <a className="bg-teal-600 text-white px-4 py-2 rounded-md ml-8 hover:bg-teal-500" href="https://app.flowcv.com/resume-feedback/y2knfnFfOl6HjGDIv7tlW" target="_blank">Resume</a>
              </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">Hi! I am Roald</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Front-End Developer and UI/UX Designer</h3>
          <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
            Designing and creating appealing interfaces for both Web and Mobile Applications.
            </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 dark:text-gray-200">
  
          <a href="mailto:roaldyen.soriano@gmail.com">
            <MdEmail className="hover:text-teal-600 cursor-pointer hover:animate-bounce" />
          </a>

          <a href="https://github.com/rldyen" target="_blank">
            <AiFillGithub className="hover:text-teal-600 cursor-pointer hover:animate-bounce" />
          </a>
        
          <a href="https://www.linkedin.com/in/roaldyen/" target="_blank">
            <AiFillLinkedin className="hover:text-teal-600 cursor-pointer hover:animate-bounce" />
          </a>
        </div>
        <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 transform transition duration-500 hover:scale-110 shadow-lg">
          <Image
            src={profilepic} />
        </div>

        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1 pt-10 text-center dark:text-white">
              About Me
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-justify max-w-5xl mx-auto dark:text-white">
            As someone who is enthusiastic about technology, I am most especially eager to the concept of creating web-based applications and programs by means of using modern technologies.
            I am very interested in doing UI/UX Designs, and I am in the process of continuously improving my skills to become a well-known UI/UX Designer in the IT industry. I also enjoy doing Front-End Development in Web Development and my passion is focused on designing and creating appealing interfaces for both Web and Mobile Applications.</p>
            <p className="text-md py-2 leading-8 text-gray-800 text-justify max-w-5xl mx-auto dark:text-white">
            I am currently taking up my <span className="text-teal-600 font-medium">Bachelor's Degree in Information Technology, Majoring in Web and Mobile Application Development </span> at the University of Santo Tomas.
              </p>
          </div>
          <div>
            <h3 className="text-3xl py-1 pt-5 text-center dark:text-white">Education</h3>
          </div>

          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition duration-500 hover:scale-110">
              <Image src={USTCICSlogo} width={100} height={100} className="mx-auto"/>
              <h4 className="text-l font-medium pt-8 pb-2 ">University of Santo Tomas <br/>College of Information and <br/>Computing Sciences</h4>
              <p className="py-2">
                Tertiary
                </p>
            </div>
            <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition duration-500 hover:scale-110">
              <Image src={USTSHSlogo} width={100} height={100} className="mx-auto"/>
              <h3 className="text-l font-medium pt-8 pb-2 ">University of Santo Tomas <br/>Senior High <br/>School</h3>
              <p className="py-2">
                Upper Secondary
                </p>
            </div>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition duration-500 hover:scale-110">
              <Image src={MAVlogo} width={100} height={100} className="mx-auto"/>
              <h3 className="text-l font-medium pt-8 pb-2 ">Montessori <br/>Academy of <br/>Valenzuela</h3>
              <p className="py-2">
                Lower Secondary
                </p>
            </div>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition duration-500 hover:scale-110">
              <Image src={SRMlogo} width={100} height={100} className="mx-auto"/>
              <h3 className="text-l font-medium pt-8 pb-2 ">Sto. Rosario<br/>Montessori<br/>School</h3>
              <p className="py-2">
                Primary
                </p>
            </div>
          </div>
          </div>
          
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 pt-5 text-center dark:text-white">Projects Worked On</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a className="cursor-pointer" href="https://asea-iwork-builders-co.vercel.app/home" target="_blank">
                <Image 
                src={ASEA} 
                className="rounded-lg object-cover transition duration-500 hover:scale-105" 
                width={'100%'} 
                height={'100%'} 
                layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a className="cursor-pointer" href="https://github.com/rldyen/UMatter_MobileApplication" target="_blank">
                <Image 
                src={UMatter} 
                className="rounded-lg object-cover transition duration-500 hover:scale-105" 
                width={'100%'} 
                height={'100%'} 
                layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a className="cursor-pointer" href="https://github.com/rldyen/USTracer_FinalProject" target="_blank">
                <Image 
                src={USTracer} 
                className="rounded-lg object-cover transition duration-500 hover:scale-105" 
                width={'100%'} 
                height={'100%'} 
                layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a className="cursor-pointer" href="https://github.com/rldyen/Equipment_Management_System_FinalProject" target="_blank">
                <Image 
                src={EquipmentManagement} 
                className="rounded-lg object-cover transition duration-500 hover:scale-105" 
                width={'100%'} 
                height={'100%'} 
                layout="responsive"/>
              </a>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
