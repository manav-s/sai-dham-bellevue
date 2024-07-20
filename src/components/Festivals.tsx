import React from 'react'

const Festivals = () => {
    return (
        <div className="bg-white">
            <div
                className="relative isolate overflow-hidden bg-orange-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Events-
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Paduka puja - this Month!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <span aria-hidden="true"><a
                  href="https://www.signupgenius.com/go/70A0F4BAAAC2FA5FE3-50079187-baba#/"
                  className="text-sm font-semibold leading-6 text-white"
              >Detail</a></span>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Guru Purnima- July 20, 2024.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <span aria-hidden="true"><a
                  href="https://www.saiparivarfoundation.org/Guru%20Purnima%2024.pdf"
                  className="text-sm font-semibold leading-6 text-white"
              >Detail</a></span>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    <a
                        href="https://www.saiparivarfoundation.org/TempleParking.pdf"
                        className="text-sm font-semibold leading-6 text-white"
                    >Temple Parking</a>
                </p>
            </div>
        </div>
    )
}

export default Festivals