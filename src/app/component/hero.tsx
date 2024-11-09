'use client'
import Image from 'next/image';
import { FaFacebook, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const HeroPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-24 py-20 relative ">
      {/*Icons*/}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-24 z-10 bg-[#C9F31D] p-2 m-2 rounded-md">
        <a href="https://www.facebook.com/profile.php?id=100065116775317&mibextid=ZbWKwL" className=" cursor-pointer"><FaFacebook size={24} color='blue' /></a>
        <a href="https://github.com/Niba-khan" className=" cursor-pointer"><FaGithub size={24} color='black'/></a>
        <a href="https://www.linkedin.com/in/niba-farooq" className=" cursor-pointer"><FaLinkedinIn size={24} color='blue'/></a>
        <a href="https://www.instagram.com/eman_khan278?igsh=dDNvcWhpMDl2N2hl" className="cursor-pointer"><FaInstagram size={24}  color='rgb(223, 14, 143)'/></a>
      </div>

      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-5xl font-bold  text-zinc-400">
          Welcome To MY Portfolio
        </h1>
        <h2 className="text-[#C9F31D] text-3xl font-semibold">
          It,s Me <span>
            <Typewriter 
              words={['Niba Khan', 'Frontend Developer', 'Programmer', 'CIT Professional']}
              loop={true}
              cursor
              cursorStyle={'~'}
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-zinc-400 max-w-lg mx-3">
          AI Student proficient in TypeScript & HTML, CSS, and Certified Information Technology | Dedicated to advancing AI with coding expertise | Ready to tackle cutting-edge challenges.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="px-6 py-2 bg-[#C9F31D] text-white font-semibold rounded-lg hover:bg-[#eff0b4]">
            Hire me
          </button>
          <button><a className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700"
          href="https://cv-in-html-css.vercel.app/">
            Download CV
            </a> 
          </button>
        </div>
      </div>

      <div className="md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
       <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[280px] h-[280px] md:w-[430px] md:h-[430px] rounded-full bg-[#C9F31D] animate-pulse -z-10"></div>
        </div>
        <Image src="/image/hero.jpg" alt="Profile Picture" width={350} height={350} className="object-cover border-8 border-[#C9F31D] hover:border-[#767a4b] rounded-md" />

     
        <div className="absolute top-4 right-2/3 bg-black/55 rounded-lg p-2 shadow-md z-10">
          <p className="text-lg font-serif text-gray-300">Artifical Intelligence</p>
          <p className="text-center text-gray-300 font-bold">GIAIC</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/55 rounded-lg p-2 shadow-md z-10">
          <p className="font-semibold text-gray-300">Niba Khan</p>
          <p className="text-xs">AI Engineering</p>
          <p className="text-xs text-gray-300">Experince</p>
          <p className="text-xs text-gray-300">4 Year Teaching</p>
          <p className="text-xs text-gray-300">Art & Designing</p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
