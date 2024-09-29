import React from 'react'

const Festivals = () => {
    return (
        <div className="bg-white">
            <div
                className="relative isolate overflow-hidden bg-orange-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Events - this Month!
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Dusehra - Baba's Maha Samadhi day- Oct 12, 2024, Saturday.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    <a
                        href="https://www.saiparivarfoundation.org/Mahasamadhi.pdf"
                        className="text-sm font-semibold leading-6 text-white"
                    >Details</a>
                </p>
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