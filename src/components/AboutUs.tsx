import React from "react";
import Baba from "../assets/images/Temple.jpg";

import {FaBookOpen, FaFire, FaRegCalendarAlt} from "react-icons/fa";

const Activities = [
    {
        name: "Sai Sandhya - every Thursday & Saturday 6:00 PM.",
        icon: FaFire,
    },
    {
        name: "Satsang - every Thursday & Saturday 6:30 PM.",
        icon: FaBookOpen,
    },
    {
        name: "Recital of “Guru Bhagawat” as well discuss and exchange learning from Baba’s teachings.",
        icon: FaBookOpen,
    },
    {
        name: "Food and clothes drives to help distribute among the poor and needy.",
        icon: FaRegCalendarAlt,
    }
];

const AboutUs = () => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-3 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                                About us-
                            </p>
                            <p className="mt-6 text-lg leading-8 text-red-600">
                                We are a non-profit organization registered in the state of Washington.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-red-600">
                                OUR MISSION: To spread Shirdi Sai Baba’s philosophy and teachings, Shraddha (devotion)
                                and Saburi (patience).
                            </p>
                            <li>The Sai Age and be a part of Sai-ism, as He is the Master of the Age.</li>
                            <li>Spread the message of love, purity and sanctifying the lives in the service of Lord
                                Shirdi Sai.
                            </li>
                            <br/>
                            <h2 className="text-base font-semibold leading-7 text-orange-600">
                                Activities
                            </h2>
                            {/* Features List */}
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-red-600 lg:max-w-none">
                                {Activities.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        {/* Feature Title with Icon */}
                                        <dt className="inline font-semibold text-red-900">
                                            <feature.icon
                                                className="absolute left-1 top-1 h-5 w-5 text-orange-600"
                                                aria-hidden="true"
                                            />
                                            {feature.name}
                                        </dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    {/* Mandir Interior Image */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={Baba}
                            alt="Mandir interior"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs