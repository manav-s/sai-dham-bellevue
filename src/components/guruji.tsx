import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [{
      "id": 1,
      "url": "https://static.wixstatic.com/media/31892e_08ffb49ed68b4b6da457d65898d2e73c~mv2.jpg/v1/fill/w_500,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/31892e_08ffb49ed68b4b6da457d65898d2e73c~mv2.jpg",
   }, {
      "id": 2,
      "url": "https://static.wixstatic.com/media/31892e_84ad35282c78459d85f80e0d69771909~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_640,h_836,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/31892e_84ad35282c78459d85f80e0d69771909~mv2_d_5616_3744_s_4_2.jpg",
   }, {
      "id": 3,
      "url": "https://static.wixstatic.com/media/31892e_636d88c9eee243178d33c26a781da50c~mv2.jpg/v1/fill/w_597,h_768,al_c,q_85,enc_auto/31892e_636d88c9eee243178d33c26a781da50c~mv2.jpg",
   }, {
      "id": 4,
      "url": "https://online.pubhtml5.com/zwpc/vznn/files/large/2.jpg",
   }
];
const Guruji = () => {
   return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                    Our Guruji
                  </p>
                  <p className="mt-6 text-lg leading-8 text-red-600">
                  Dr. Chandra Bhanu Satpathy is a noted scholar, spiritual thinker, author and a humanitarian. He is an impeccable personification of the noble principles of life such as love, empathy, compassion, simplicity, humility, devotion to God and sacrifice. As an heir to a family of great academicians and administrators, versatile young writer of his time, perfect family man, an accomplished and decorated professional, compassionate and humanitarian, an ardent devotee of his Master and a friend, philosopher and guide to millions of people across the globe, Dr. Satpathy has experienced it all with equanimity.                  </p>
                  <br />
                  <a href="http://www.cbsatpathy.com/" target={"_blank"} rel="noreferrer">
                     <h2 className="text-base font-semibold leading-7 text-orange-600">
                     Read more about our Guruji here {`>`}
                     </h2>    
                  </a>
                </div>
              </div>
              {/* Mandir Interior Image */}
              <div className="flex mt-6 justify-center lg:justify-start">
               <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                  {images.map(image => (
                     <div className="flex justify-center lg:justify-start box" key={image.id}>
                        <img
                           src={image.url}
                           width={2432}
                           height={1442}
                           className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                           alt="guruji img"
                        />
                     </div>
                  ))}
               </Carousel>
               </div>
            </div>
          </div>
        </div>
    )
}

export default Guruji;
