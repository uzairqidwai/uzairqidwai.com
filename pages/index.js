import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import heroStyles from '../styles/hero.module.css'
import cn from 'classnames'
import Navbar from '../components/navbar'
import axios from 'axios'

export default function Home() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(true)
  const [msg, setMsg] = useState('')

  const handleUpdate = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = () => {
    axios.post('/api/email', { email: email })
      .then(res => {
        console.log(res)
        setMsg(res.data.msg)
        setError(false)
      })
      .catch((err) => {
        if (err.response) {
          // Request made and server responded
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          setError(true);
          setMsg(err.response.data.err)
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
          setError(true);
          setMsg("There was an error on the server")
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', err.message);
          setError(true);
          setMsg("The request could not be made")
        }
      })
  }
  return (
    <div className="min-w-full">
      <Head>
        <title>Uzair Qidwai</title>
        <meta name="description" content="By Uzair Qidwai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/U1.ico" />
      </Head>
      <Navbar />
      <main>
        <section className={cn("bg-red pt-10 pb-16 md:pt-20 md:pb-32", heroStyles.main)}>
          <div className="container">
            <div className="flex flex-col items-center">
              <Image src="/icons/U1.svg" width={300} height={300} />
              <h1 className="font-display text-2xl md:text-4xl font-medium">Hi, I'm Uzair</h1>
              <div className="mt-6 md:max-w-5xl text-center">
                <h1 className="font-display text-4xl md:text-7xl font-bold">Building digital solutions, innovations and experiences</h1>
              </div>
              <div className="mt-8 px-4 md:px-0 md:max-w-sm">
                <p className="font-display text-center whitespace-normal break-words" style={{ lineHeight: '26px' }}>I'm an ECE student with a passion for all things tech, tinkering and productivity. I have a special interest in networking and digital systems.</p>
              </div>
    
              <div className="flex justify-center mt-6">
                <a 
                  href="mailto:uzair@gocybersense.com"
                  className="transition bg-black rounded-full py-6 px-12 font-semibold font-display text-white shadow-lg hover:shadow-xl hover:scale-110">
                    Get in touch with me
                </a>
              </div>
    
    
   
            </div>
    
          </div>
        </section>
        <section className="bg-gray-100 py-16" id="work">
          <div className="container">
            <div className="flex flex-col items-center px-6">
              <h1 className="font-display text-5xl font-semibold">Work</h1>
              <p className="max-w-lg text-gray-500 font-display mt-2 text-center">How I've put my interests and skills into an initative to streamline people's businesses.</p>
        <div className="grid grid-cols-1 gap-5 mt-9 max-w-6xl">
    
 
    
                <a href="https://gocybersense.com" className="transition bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 p-2 w-full">
                  <div className="flex flex-row">
                    <div className="flex-shrink-0">
                      <img className="h-24 object-cover" src="/icons/logo-round.png" />
                    </div>
                    <div className="flex flex-col justify-center items-start pr-5">
                      <h2 className="font-display font-medium text-xl">Cybersense</h2>
                      <p className="font-display text-gray-500">Technological Solution</p>
                    </div>
                  </div>
                </a>
    
    
              </div>
            </div>
          </div>
        </section>
        <section className="py-14" id="resume">
          <div className="container flex flex-col justify-start items-start max-w-6xl px-6">
            <h2 className="text-5xl font-display font-semibold">Resume</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold font-display">Experience</h2>

                <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">Verizon</h3>
                  <p className="font-display text-md flex items-center">Network Planning Intern&nbsp;&nbsp;</p>
                  <p className="font-display text-gray-500">June 2022 - Current</p>
                </div>
    
                <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">Cybersense</h3>
                  <p className="font-display text-md flex items-center">Founder&nbsp;&nbsp;</p>
                  <p className="font-display text-gray-500">August 2020 - Current</p>
                </div>
    
    
                <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">My Project USA</h3>
                  <p className="font-display text-md">Board Member & Director of Administration&nbsp;&nbsp;<span className="text-white bg-gray-300 rounded-full py-2 px-3 text-xs font-medium">Volunteer</span></p>
                  <p className="font-display text-gray-500">March 2021 - Current</p>
                </div>
    
    <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">My Deah's</h3>
                  <p className="font-display text-md">Director&nbsp;&nbsp;<span className="text-white bg-gray-300 rounded-full py-2 px-3 text-xs font-medium">Volunteer</span></p>
                  <p className="font-display text-gray-500">March 2021 - Current</p>
                </div>
    
    <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">Best Brains Learning Centers</h3>
                  <p className="font-display text-md">IT Consultant&nbsp;&nbsp;</p>
                  <p className="font-display text-gray-500">March 2020 - August 2021</p>
                </div>
    
    <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">Noor Islamic Cultural Center</h3>
                  <p className="font-display text-md">IT Committee Member&nbsp;&nbsp;<span className="text-white bg-gray-300 rounded-full py-2 px-3 text-xs font-medium">Volunteer</span></p>
                  <p className="font-display text-gray-500">December 2019 - Current</p>
                </div>
    
        <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">Q3Logics</h3>
                  <p className="font-display text-md">Assist. Electrical & Computer Eng. Intern&nbsp;&nbsp;</p>
                  <p className="font-display text-gray-500">June 2019 - August 2019</p>
                </div>
    
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-semibold font-display">Education</h2>
                
    <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">Kuwait English School</h3>
                  <p className="font-display text-md">High School - IGCSE</p>
                  <p className="font-display text-gray-500">September 2014 - June 2019</p>
                </div>
    
       <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">Ohio State University</h3>
                  <p className="font-display text-md">Electrical & Computer Engineering</p>
                  <p className="font-display text-gray-500">September 2019 - Expected May 2023</p>
                </div>
    
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold font-display">Skills</h2>
                <div className="grid grid-cols-2 gap-6 mt-5">
    
                  <p className="font-display text-gray-700">ERP Config/Management</p>
                  <p className="font-display text-gray-700">*nix Systems</p>
                  <p className="font-display text-gray-700">Python</p>
                  <p className="font-display text-gray-700">System Administration</p>
                  <p className="font-display text-gray-700">AWS</p>
                  <p className="font-display text-gray-700">Networking Fundementals</p>

                </div>
              </div>
    
              <div className="w-full mt-10 md:mt-0">
                <h2 className="text-2xl font-semibold font-display">Tools</h2>
                <div className="grid gap-6 mt-5">
                  <p className="font-display text-gray-700">Solidworks</p>
                  <p className="font-display text-gray-700">Matlab</p>
                  <p className="font-display text-gray-700">MS Office</p>
                  <p className="font-display text-gray-700">GitHub</p>
                  <p className="font-display text-gray-700">WordPress</p>
                </div>
              </div>
    
    
            </div>
    
                  <div className="flex justify-center mt-6">
                <a 
                  href="https://github.com/uzairqidwai/uzairqidwai.com/raw/main/public/Uzair%20Qidwai%20-%20Resume.pdf"
                  className="transition bg-black rounded-full py-6 px-12 font-semibold font-display text-white shadow-lg hover:shadow-xl hover:scale-110">
                    Download PDF
                </a>
              </div>
    
    
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container">
            <div className="flex flex-col items-center px-6">
              <h1 className="font-display text-5xl font-semibold">Projects</h1>
              <p className="text-lg font-display text-gray-700 mt-3">Some projects I've worked on</p>

              <div className="grid grid-cols-1  gap-5 mt-9 max-w-6xl">
                <a href="https://www.gocybersense.com" target="none" className="bg-white rounded-lg flex flex-col shadow-md">
                  <div className="h-48 w-full overflow-hidden">
                    <img className="object-cover rounded-t-lg w-auto" src="/icons/c-logo.svg" />
                  </div>
                  <div className="flex-shrink-1 px-5 pb-5 pt-3">
                    <h3 className="text-xl font-display font-medium">Coming Soon!</h3>
                    <p className="font-display mt-1 text-gray-500">Great things coming up</p>
                </a>

              <div className="grid grid-cols-2  gap-5 mt-9 max-w-6xl">
                <a href="https://www.gocybersense.com" target="none" className="bg-white rounded-lg flex flex-col shadow-md">
                  <div className="h-48 w-full overflow-hidden">
                    <img className="object-cover rounded-t-lg w-auto" src="/icons/c-logo.svg" />
                  </div>
                  </div>
                  </div>
                </a>


    
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 ">
          <div className="container text-center">
            <h2 className="font-display text-5xl font-semibold">Want to stay up to date?</h2>
            <p className="font-display text-gray-500 max-w-lg mx-auto mt-3">I'll send you occasional emails about what I'm doing, things I find interesting and other helpful things (no spam, I promise)</p>
            <div className="flex mt-6 w-full justify-center">
              <input
                type="email"
                className="flex-grow-1 bg-white px-7 py-4 rounded-l-full border border-gray-200 focus:outline-none focus:border-gray-400 w-full md:w-4/12"
                placeholder="Your email here..."
                value={email}
                onChange={handleUpdate} />
              <button
                onClick={handleSubmit}
                className="flex-shrink-0 px-7 py-4 rounded-r-full bg-black text-white font-display font-semibold"
              >
                Submit
              </button>
            </div>
            <small className={`font-display text-${error ? 'red-500' : 'gray-500'} ml-4 mt-1`}>
              {msg}
            </small>
          </div>
        </section>
      </main>
    </div>
  )
}
