import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Project() {
  return (
    <div>
      <div className="pt-[4rem] md:pt-[8rem] pb-[1rem]">
        <h1 className="mt-10 md:mt-0 text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text text-center bg-gradient-to-r from-black via-[#C9F31D] to-black animate-bounce">
          MY Projects
        </h1>
        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          
          {/*Projects*/}
          <div className="bg-[#C9F31D] p-6 rounded-lg border-4 border-gray-500 transition-colors duration-300 hover:border-white animate-pulse">
            <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-[100%] h-[200px] md:h-[300px]">
              <Link href="https://protfolio-website-using-html-css.vercel.app/">
              <FaExternalLinkAlt color='blue' />
                <Image
                  src="/image/Portfolio.png"
                  alt="Portfolio"
                  layout="fill"
                  className="object-contain"
                />
              </Link>
            </div>
            <h3 className="text-blue-950 mt-4 text-2xl font-extrabold text-center ">Portfolio Website</h3>
            <p className="text-gray-400">
              A responsive portfolio website showcasing projects and skills.
            </p>
          </div>

          {/* Project 2: Todo App */}
          <div className="bg-[#C9F31D]  p-6 rounded-lg border-4 border-gray-500  transition-colors duration-300 hover:border-white animate-pulse">
            <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-[100%] h-[200px] md:h-[300px]">
              <Link href="https://github.com/Niba-khan/TODO_LIST_APP.git">
              <FaExternalLinkAlt color='blue' />
                <Image
                  src="/image/Todo.png"
                  alt="Todo app"
                  layout="fill"
                  className="object-contain"
                />
              </Link>
            </div>
            <h3 className="text-blue-950 mt-4 text-2xl font-extrabold text-center ">Todo List App</h3>
            <p className="text-gray-400">
              A simple to-do list application to manage daily tasks efficiently.
            </p>
          </div>

          {/* Project 3: Student Management System */}
          <div className="bg-[#C9F31D]  p-6 rounded-lg border-4 border-gray-500  transition-colors duration-300 hover:border-white animate-pulse">
            <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-[100%] h-[200px] md:h-[300px]">
              <Link href="https://github.com/Niba-khan/STUDENT-MANGEMENT-SYSTEM.git">
              <FaExternalLinkAlt color='blue' />
                <Image
                  src="/image/student-management-system.png"
                  alt="student management system"
                  layout="fill"
                  className="object-contain"
                />
              </Link>
            </div>
            <h3 className="text-blue-950 mt-4 text-2xl font-extrabold text-center ">Student Management System</h3>
            <p className="text-gray-400">
              A system to manage student records, attendance, and grades.
            </p>
          </div>

          {/* Project 4: Marksheet Generator */}
          <div className="bg-[#C9F31D]  p-6 rounded-lg border-4 border-gray-500  transition-colors duration-300 hover:border-white animate-pulse">
            <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-[100%] h-[200px] md:h-[300px]">
              <Link href="https://github.com/Niba-khan/Marksheet.git">
              <FaExternalLinkAlt color='blue' />
                <Image
                  src="/image/Marksheet.jpg"
                  alt="Marksheet"
                  layout="fill"
                  className="object-contain"
                />
              </Link>
            </div>
            <h3 className="text-blue-950 mt-4 text-2xl font-extrabold text-center">Marksheet Generator</h3>
            <p className="text-gray-400">
              A tool for generating student marksheets based on input data.
            </p>
          </div>

          {/* Project 5: Simple Calculator */}
          <div className="bg-[#C9F31D]  p-6 rounded-lg border-4 border-gray-500  transition-colors duration-300 hover:border-white animate-pulse">
            <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-[100%] h-[200px] md:h-[300px]">
              <Link href="https://github.com/Niba-khan/simple-calculator.git">
              <FaExternalLinkAlt color='blue' />
                <Image
                  src="/image/calculator.png"
                  alt="Simple Calculator"
                  layout="fill"
                  className="object-contain"
                />
              </Link>
            </div>
            <h3 className="text-blue-950 mt-4 text-2xl font-extrabold text-center">Simple Calculator</h3>
            <p className="text-gray-400">
              A basic calculator app that performs standard arithmetic operations.
            </p>
          </div>

          {/* Project 6: Teacher's Day Card */}
          <div className="bg-[#C9F31D]  p-6 rounded-lg border-4 border-gray-500  transition-colors duration-300 hover:border-white animate-pulse">
            <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-[100%] h-[200px] md:h-[300px]">
              <Link href="https://teqacher-day-card.vercel.app/">
              <FaExternalLinkAlt color='blue' />
                <Image
                  src="/image/teacher day.png"
                  alt="Teacher's Day Card"
                  layout="fill"
                  className="object-contain"
                />
              </Link>
            </div>
            <h3 className="text-blue-950 mt-4 text-2xl font-extrabold text-center">Teacher,s Day Card</h3>
            <p className="text-gray-400">
              A special Teacher-card created for Teacher,s Day to show appreciation.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
