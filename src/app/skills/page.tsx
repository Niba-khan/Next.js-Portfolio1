import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiMicrosoftexcel, SiMicrosoftword, SiMicrosoftpowerpoint, SiAdobephotoshop } from 'react-icons/si';


export default function Skills(){
  return (
    <div className="flex flex-col items-center text-white py-8">
      <h2 className="text-5xl font-black mb-9 text-[#C9F31D] animate-ping">Skills</h2>
      <p className="flex font-serif grid-col-2 mb-10">
  My technical skills allow me to translate complex requirements into dynamic, functional
  and visually engaging interfaces, <br />aligning with industry standards and best practices for performance and scalability.
</p>
 <div className="grid grid-cols-5 gap-8">
      <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiTypescript size={50} color='blue' />
          <p>Typescript</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiJavascript size={50} color='yellow' />
          <p>Javascript</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiHtml5 size={50} color='orange' />
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiCss3 size={50} color='skyblue' />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <FaReact size={50} color='blue'/>
          <p>React</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiNextdotjs size={50} color='white' />
          <p>Next.js</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiMicrosoftword size={50} color='blue' />
          <p>Microsoft Word</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiMicrosoftexcel size={50} color='green' />
          <p>Microsoft Excel</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiMicrosoftpowerpoint size={50} color='red' />
          <p>Microsoft Powerpoint</p>
        </div>
        <div className="flex flex-col items-center animate-bounce hover:scale-110 transition duration-300">
          <SiAdobephotoshop size={50} color='blue' />
          <p>AdobePhotoshop</p>
        </div>
      </div>
    </div>
  );
};

