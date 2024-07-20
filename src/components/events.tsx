import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const charity = [{
      "id": 1,
      "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZmE-hPpu1kP9YjGPoJ8oO5B4EoH6O1p4TJopbBIgqlTnIq7kAZH4v_wDcx1dX0dQM2U7C-FvgAxivqvfdhecbFqcHwzPBDkg=w1920-h898-rw-v1",
   }, {
      "id": 2,
      "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihbdOYxzwWAVclRYYsXhz4ILlxgkh_Zc2byrrOgzVgK-FoWcTmh8h_fXh21-rD_AZFDLamIHzaSAYQXi1jQ5RJEZetV1NGWUYg=w958-h910-rw-v1",
   }, {
      "id": 3,
      "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZGysk3hfcwoF0clt1Di_cRCjsnF5JeieyBb0SgeUIH67qnRhO7rfnVyfglQv2PA_I6rfr9kfwwLkaRAdpgYF0b-rOhI95ZzU4=w958-h910-rw-v1",
   }, {
      "id": 4,
      "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihY2pN84aJNL7NlYcael0Z79Eopc6IOokCctYZ5wgcosnPteJWlBgo0voA7rHGDByz1CoJ4ZlRyano6FlVZE8bOjV1R4uQHFaeo=w958-h910-rw-v1",
   }, {
      "id": 5,
      "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihYUJZimnnZLcPA3Ytp0gM0Nz0Wa_dwu4LmDbxKb53UW2V61LwBaSBa4hZi4fv9m2yUCHFANYHm2BWQJmmwKhJX7MHVibVwmCA=w958-h910-rw-v1",
   }, {
      "id": 6,
      "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihYwyJNCxh6GonUpvyFE8UheUkBUySGYphtZU1wka-QWqXk-k9y5ATRMwzvm4_w-r0i1OjaC2JcJM4SM8VyRmueaSbNZMxKrn54=w958-h910-rw-v1",
   }, {
      "id": 7,
      "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZCvAPOPgkhHgg75vQV4HxkdkL3v6eezbX1-RmPDhDWlIVF744UOeX62WuVYGMkHD0U4PhnPLxw-1cBOr7pWpCXvrQmVihp74g=w958-h910-rw-v1",
   }, {
      "id": 8,
      "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihaClnP9rLwuvfdTQaPCr1oVq-LsT2AbWRtF185uGmDb6d2FFq_nFws7Qtzlru6yjMivod-OfnM23SBEBwb6CtMtj_63hgq5Xw=w958-h910-rw-v1",
   }
];

const cultural = [{
    "id": 1,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZKcKuff2oLdl2UamW3wruYFldiIfkNP9hQHFLHNUMz9RvmnUuikRqfhzyePcI7ftT7aYoZf2R3bBprpeukizb3D3ZzdfvcLeM=w958-h910-rw-v1",
 }, {
    "id": 2,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihb2G1A2q77ootro9LEjJlMxIAFyaHLgEzqHDTOUhHStbUnC6KfSznRR300AbakeaR-01xHi-yzEKGwm7aDQxqDhFx6pg0BIo3o=w958-h910-rw-v1",
 }, {
    "id": 3,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZKcKuff2oLdl2UamW3wruYFldiIfkNP9hQHFLHNUMz9RvmnUuikRqfhzyePcI7ftT7aYoZf2R3bBprpeukizb3D3ZzdfvcLeM=w958-h910-rw-v1",
 }, {
    "id": 4,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihbBmurBEOesPo4gaocfai1zEb-fhHoDYUdztSczvWONl_-1uECbXjAmvOZA9zhvkHU7rIGjIBTdW8xvfe2XEczr_3uIKvJl6w=w958-h910-rw-v1",
 }
];

const temple = [{
    "id": 1,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZb-An8_-bepYqAj-MuKoS4VYiQPwNT9TKkIOrA2SP51wsjO_RbOfAORxaffb1Cf2QDFQalz4pF1HBoRC2TCsawqI8Np_EuvhA=w958-h910-rw-v1",
 }, {
    "id": 2,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpiha36lycY_0oSwkZJXFw9K7BTqAHjaAw2XYZ3DiV18JwDai2hRnZTZhXHoOgDQuoO2oz043nQSFyJW6HKK0CMJLz76d9TP6qTg=w958-h910-rw-v1",
 }, {
    "id": 3,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihbcZCpxvQr0yXpwvEAN4UQ7Zg8mxJlnD462P6kWI7lV52pHoQwO-skvhGlB3fJ09wFdndms3sogzr5cMsgUdJtcze_eqcHYkQ=w958-h910-rw-v1",
 }, {
    "id": 4,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ97WBa7Gt6YKaK7h6LczYdNr7FKRWQm6m9Ay_SB603F0x9n7RRga4bNInhgL1_kuhNFyDnCH915zfW4IziXRDdkfUF9vKXMAY=w958-h910-rw-v1",
 }, {
    "id": 5,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihYQ3P7tzAqobbhqRXVRLnsA249y03OKx0sF_fKOdPx0Xo9_tL7INVeM7Mr9QU2eI39FYTqUzN3wXFSEyir900RvTnryrYXcek8=w958-h910-rw-v1",
 }
];

const Events = () => {
   return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                    Events
                  </p>
                  <p className="mt-6 text-lg leading-8 text-red-600">Charity</p>
                  <div className="flex mt-6 justify-center lg:justify-start">
                    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                        {charity.map(image => (
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

                  <p className="mt-6 text-lg leading-8 text-red-600">Cultural</p>
                  <div className="flex mt-6 justify-center lg:justify-start">
                    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                        {cultural.map(image => (
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

                  <p className="mt-6 text-lg leading-8 text-red-600">Temple</p>
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
    )
}

export default Events;
