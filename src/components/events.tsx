import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const paduka = [{
    "id": 1,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihaMieiIXzBl10waNAt0trhFeASI3WjJPW4iynScDap0fBnPQeYRYAxTtT3ESRGcX-SJ_12lu7iaB-QIRgPDzFWsgDbo6ECcFHk=w958-h910-rw-v1",
 }, {
    "id": 2,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihYcR2D_XDnyVkTKhE0jV1wDsZLoLUgFCHTafya318SIJGQPU1aIl39NwBiMI9if83nHbw9XSz0Si2VqWKFSQBsVpp4_c5Xxgg=w958-h910-rw-v1",
 }, {
    "id": 3,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpiha0Z4qlelYht8S4vXU0MkKDTJKFWmP42Nl9CXZmHcMdk9KGsOpxUfiHjtTalr04h6rIdQibfrics9L6Uvv5_2HyU_enDoSUQNA=w958-h910-rw-v1",
 }, {
    "id": 4,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZxfHJuIA_olVEKtRsOqlRs21sQ7BGTFYqh7n5WsqTECKUY1Iib0iikw7unfN4dvnH5keLjzAo8ORe4mWQFVVvVmLjef4K2yR8=w958-h910-rw-v1",
 }, {
    "id": 5,
    "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihaJ53BdpQtnzhfkVBVlcS7TsIHxitEZymErMhltMzHwDQRHbjg4BNXm9mLDlwFHny_lXFwrfcmf0AXzPkH7p8SkV-lt174KrI8=w958-h910-rw-v1",
 }
];

const food = [{
  "id": 1,
  "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihb4YNkBHYBZzG0kkbbl6wj9hLgeGVDMwxqSySScFDFMBpwEGpyWPneSHbNrvnW-WHfn8mZW7pbGiu02q0kFUj1SxtJjzdWK-9A=w958-h910-rw-v1",
}, {
  "id": 2,
  "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihbndv1whAJfPgoN2XdTXgaOkER1B6Ej8W8Mq-Xc-C0drOQ-cBfDOsjyz63a-8HkFYotcWWIk3dJybdyiebCbpHbPkmuaG9Qeu8=w958-h910-rw-v1",
}, {
  "id": 3,
  "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihY3bZmyOo_iV6mrjCprlZ3apunLNPiHqZw4aF7nAGq8CCFhrP21aap3vNTFovYTIhGYYe2CIN6Id5R1C35qqhQk59Q2pdssvg=w958-h910-rw-v1",
}
];

const temple = [{
  "id": 1,
  "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpiha2S6jyw83dC3zRLgPcwa2LOaGuDxBLtbsdx5d1A3Xn0Q_0mUC1YE5V3otT7zPbUJ-Va8Exd-2sprhgwyyx886an4pyskA_Ufs=w958-h910-rw-v1",
}, {
  "id": 2,
  "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihbFhVyDHwlX3G0DBE5hXrhRkKby65k3wa4Afob_YPvuRQe6fJ--BE0_PInd39jNr8Fu00dxVCHom4vIT9IRjwN6_beRkLg4iMU=w958-h910-rw-v1",
}, {
  "id": 3,
  "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihY_bh_FxiAZxInzmpuCkEsAG1BAn4Gc2wHPZEQsbnlBPjTshlWC4UTnch8uNeH7foLjiKxctSwK2b88cxz6zhNRJ2C6MWFzIA=w958-h910-rw-v1",
}, {
  "id": 4,
  "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihYNSJoOPviCWS6KzU9OIvmb7ZWKYz5h0bfGww8fJzh3MEI1iL2wEwQANesgtzedq_4r4W6vWNrsNF49lv8LjJ-wBK_IvL_N8YQ=w958-h910-rw-v1",
}, {
  "id": 5,
  "url": "https://lh3.googleusercontent.com/drive-viewer/AKGpihY6bsxVC62MoAUIrqKRTXb3NIKNQAHFuNQzwCDv9NyHlHJ5wEv9FLm2Pl5dYdT6bYdFVlGR8-6AhrNBkOIyg_Ye9YqGoa-4Vnk=w958-h910-rw-v1",
}
];

const Events = () => {
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