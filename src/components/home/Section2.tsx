import React from 'react'
import BabaImage from "../../assets/images/Baba.jpeg"; // Adjust the path if necessary


const Section2 = () => {
    return (
      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-orange-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#FFA500" />
                <stop offset={1} stopColor="#FF4500" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Shirdi Sai Dham, Bellevue, WA
              <br />
              Experience Sai Baba's Blessings
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join us for special events, prayers, Archanas and cultural program.
              Embrace the blessings of Sai Baba.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Guru Purnima- July 20, 2014
              </button>
              <span aria-hidden="true"><a
                  href="https://www.saiparivarfoundation.org/Guru%20Purnima%2024.pdf"
                  className="text-sm font-semibold leading-6 text-white"
              >Detail →</a></span>
              <a
                  href="https://www.saiparivarfoundation.org/TempleParking.pdf"
                  className="text-sm font-semibold leading-6 text-white"
              >Temple Parking</a>
            </div>
          </div>
          {/* Image of Sai Baba */}
          <div className="relative mt-16 lg:mt-8 lg:ml-auto lg:flex lg:items-center">
            <img
                className="w-full max-w-lg rounded-md bg-white/5 ring-1 ring-white/10"
              src={BabaImage}
              alt="Sai Baba"
            />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Section2