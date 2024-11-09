import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="text-blue-700 body-font bg-[#C9F31D] m-6 rounded-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <a className="flex titlefont font-medium items-center text-gray-400 mb-4 md:mb-0">
          <h1 className="ml-3 text-xl text-slate-950">Niba <span className='text-gray-400'>Khan</span></h1>
        </a>

        {/* Navigation Links */}
        <nav className="md:py-3 space-x-8 flex flex-wrap items-center text-base">
          <Link className="hover:text-red-500" href="/">Home</Link>  
          <Link className="hover:text-blue-500" href="/about">About</Link> 
          <Link className="hover:text-blue-500" href="/skills">Skills</Link> 
          <Link className="hover:text-green-500" href="/project">Project</Link>
          <Link className="hover:text-yellow-500" href="/contact">Contact</Link>
        </nav>

        {/* Download CV Button */}
        <div className="mt-4 md:mt-0">
          <a
            className="flex justify-end text-white border-4 border-black px-6 py-3 rounded-md bg-transparent bg-gradient-to-br from-[#C9F31D] via-gray-500 to-[#C9F31D]"
            href="https://milestone-1-2-beryl.vercel.app/"
          >
          Resume Builder
          </a>      
        </div>
      </div>
    </header>
  )
}
