
'use client';
import Image from 'next/image';
import { useState } from 'react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('Introduction');

  return (
    <section className="flex items-center justify-center px-8 py-20">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
        
      <div className="md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
    
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[280px] h-[280px] md:w-[430px] md:h-[430px] rounded-full bg-[#C9F31D] animate-pulse -z-10"></div>
        </div>
        <Image src="/image/aboutpic.jpg" alt="Profile Picture" width={350} height={350} className="object-cover border-8 border-[#C9F31D] hover:border-[#767a4b] rounded-md" />        
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h1 className="text-5xl font-semibold text-[#C9F31D] ">About Me</h1>
          </div>

          <div className="flex space-x-10">
            {['Introduction', 'Education', 'Language'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium rounded-md ${
                  activeTab === tab ? 'bg-[#C9F31D] text-white' : 'bg-zinc-400/55 text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-slate-400">
            {activeTab === 'Introduction' && (
              <div>
                <h3 className="text-lg font-serif font-extrabold text-white">🖐🏻Hello! MY Name is Niba khan</h3>
                <p className="mt-2">Weolcome To My Portfolio! I am an AI Engineer with a robust foundation in front-end development technologies
                  , including HTML, CSS, JavaScript, TypeScript, React, and Next.js. As a Certified Information Technology (CIT)
                   professional, I bring a structured approach to development, combining my technical expertise with a strong understanding 
                   of industry best practices. My experience spans building intuitive and responsive user interfaces, leveraging modern frameworks,
                    and creating seamless user experiences. Passionate about advancing in AI and software engineering,
                     Im committed to continuous learning and innovation to drive impactful solutions.</p>
                           </div>
            )}
            {activeTab === 'Education' && (
              <div>
                <h3 className="text-lg font-serif font-extrabold text-white">Education Details</h3>
                <p className="mt-5">
                    <p className='mb-2'>⭐Matriculation: Little Citizen School</p>
                    <p className='mb-2'>⭐Intermediate: Goverment Girls Collage</p>
                    <p className='mb-2'>⭐AI Engineering: Governor House (on Going)</p>
                </p>
              </div>
            )}
            {activeTab === 'Language' && (
              <div>
                <h3 className="text-lg font-serif font-extrabold text-white mt-4">Language</h3>
                <p className="mt-2">⭐English</p>
                <p className="mt-2">⭐urdu</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
