import React from 'react'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const baseurl = "https://www.saiparivarfoundation.org/";
const events = "images/Events/";

const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const Pictures = () => {
    return (
      <div className="bg-white">
          <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-6 text-lg leading-8 text-red-600">Paduka Seva</p>
                  <div className="flex mt-6 justify-center lg:justify-start">
                    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                        {ids.map(id => (
                            <div className="flex justify-center lg:justify-start box" key={id}>
                                <img
                                src={baseurl + events+ "PadukaSeva/" + id + ".jpeg"}
                                width={2432}
                                height={1442}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                                alt=""
                                />
                            </div>
                            
                        ))}
                    </Carousel>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-red-600">Cultural</p>
                  <div className="flex mt-6 justify-center lg:justify-start">
                    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                        {ids.map(id => (
                            <div className="flex justify-center lg:justify-start box" key={id}>
                                <img
                                src={baseurl + events+ "Cultural/" + id + ".jpg"}
                                width={2432}
                                height={1442}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                                alt=""
                                />
                            </div>
                            
                        ))}
                    </Carousel>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-red-600">Food Drive</p>
                  <div className="flex mt-6 justify-center lg:justify-start">
                    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                        {ids.map(id => (
                            <div className="flex justify-center lg:justify-start box" key={id}>
                                <img
                                src={baseurl + events+ "Food Drive/" + id + ".jpg"}
                                width={2432}
                                height={1442}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                                alt=""
                                />
                            </div>
                            
                        ))}
                    </Carousel>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-red-600">Cloth Drive</p>
                  <div className="flex mt-6 justify-center lg:justify-start">
                    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                        {ids.map(id => (
                            <div className="flex justify-center lg:justify-start box" key={id}>
                                <img
                                src={baseurl + events+ "Clothes Drive/" + id + ".jpg"}
                                width={2432}
                                height={1442}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                                alt=""
                                />
                            </div>
                            
                        ))}
                    </Carousel>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-red-600">Arati at Home</p>
                  <div className="flex mt-6 justify-center lg:justify-start">
                    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                        {ids.map(id => (
                            <div className="flex justify-center lg:justify-start box" key={id}>
                                <img
                                src={baseurl + "images/Arati at Home/2016/" + id + ".jpg"}
                                width={2432}
                                height={1442}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                                alt=""
                                />
                            </div>
                            
                        ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Pictures