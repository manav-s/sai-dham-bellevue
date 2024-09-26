import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const paduka = [{
    "id": 1,
    "url": "https://www.saiparivarfoundation.org/images/Events/PadukaSeva/1.jpeg",
 }, {
    "id": 2,
    "url": "https://www.saiparivarfoundation.org/images/Events/PadukaSeva/2.jpeg",
 }, {
    "id": 3,
    "url": "https://www.saiparivarfoundation.org/images/Events/PadukaSeva/3.jpeg",
 }, {
    "id": 4,
    "url": "https://www.saiparivarfoundation.org/images/Events/PadukaSeva/4.jpeg",
 }, {
    "id": 5,
    "url": "https://www.saiparivarfoundation.org/images/Events/PadukaSeva/5.jpeg",
 }
];

const food = [{
  "id": 1,
  "url": "https://www.saiparivarfoundation.org/images/Events/Charitable/Food Drive/FD1.jpeg",
}, {
  "id": 2,
  "url": "https://www.saiparivarfoundation.org/images/Events/Charitable/Food Drive/FD2.jpeg",
}, {
  "id": 3,
  "url": "https://www.saiparivarfoundation.org/images/Events/Charitable/Food Drive/FD3.jpeg",
}
];

const temple = [{
  "id": 1,
  "url": "https://www.saiparivarfoundation.org/images/Events/Temple/2024/T1.jpeg",
}, {
  "id": 2,
  "url": "https://www.saiparivarfoundation.org/images/Events/Temple/2024/T2.jpeg",
}, {
  "id": 3,
  "url": "https://www.saiparivarfoundation.org/images/Events/Temple/2024/T3.jpeg",
}, {
  "id": 4,
  "url": "https://www.saiparivarfoundation.org/images/Events/Temple/2024/T4.jpeg",
}, {
  "id": 5,
  "url": "https://www.saiparivarfoundation.org/images/Events/Temple/2024/T5.jpeg",
}
];

const Events = () => {
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
                        {paduka.map(image => (
                            <div className="flex justify-center lg:justify-start box" key={image.id}>
                                <img
                                src={image.url}
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
                        {food.map(image => (
                            <div className="flex justify-center lg:justify-start box" key={image.id}>
                                <img
                                src={image.url}
                                width={2432}
                                height={1442}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                                alt=""
                                />
                            </div>
                            
                        ))}
                    </Carousel>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-red-600">Temple Aarti</p>
                  <div className="flex mt-6 justify-center lg:justify-start">
                    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                        {temple.map(image => (
                            <div className="flex justify-center lg:justify-start box" key={image.id}>
                                <img
                                src={image.url}
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

export default Events