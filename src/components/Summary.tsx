import React from "react";
import Baba from "../assets/images/BabaSmall.jpeg"; // Adjust the path if necessary

import { FaFire, FaBookOpen, FaRegCalendarAlt } from "react-icons/fa";

// Represents a list of features relevant to the Mandir
const features = [
  {
    name: "Temple Timing",
    description:
        "Every day (6 PM - 9 PM), Sai Sandhya - every Thursday & Saturday 6:30 PM.",
    icon: FaFire,
  },
  {
    name: "Daily Aarti",
    description:
        "Daily Dhup/Shej aarti , 108 name chanting and prayer.",
    icon: FaFire,
  },
  {
    name: "Thursday Satsang",
    description:
        "Meditation, Palki, Bhajans, Prasadam",
    icon: FaFire,
  },
  {
    name: "Festivals and Celebrations",
    description:
        "Ram Navami, Guru Purnima, Maha Samadhi Day, Temple Anniversary.",
    icon: FaRegCalendarAlt,
  },
  {
    name: "Spiritual Discourses",
    description:
        "Meditation, Recital of Sai Satcharit and Guru Bhagvat.",
    icon: FaBookOpen,
  },
];


const Summary = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-orange-600">
                  Experience Serenity
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                  A Sacred Journey
                </p>
                <p className="mt-6 text-lg leading-8 text-red-600">
                  Discover the peace and spirituality of the Temple.
                  Join for rituals, Satsang, and community events to get
                  closer to the divine.
                </p>
                {/* Features List */}
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-red-600 lg:max-w-none">
                  {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        {/* Feature Title with Icon */}
                        <dt className="inline font-semibold text-red-900">
                          <feature.icon
                              className="absolute left-1 top-1 h-5 w-5 text-orange-600"
                              aria-hidden="true"
                          />
                          {feature.name}
                        </dt>
                        <br/>
                        {/* Feature Description */}
                        <dd className="inline">{feature.description}</dd>
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

export default Summary