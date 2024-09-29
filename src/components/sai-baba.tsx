import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const baseurl = "https://www.saiparivarfoundation.org/";
const events = "images/Baba/";

const ids = [1,2,3,4,5,6,7,8,9,10];

// Represents a list of features relevant to the Mandir
const features = [
  {
    name: "Whoever puts his feet on Shirdi soil, his sufferings would come to an end.",
    icon: FaBookOpen,
  },
  {
    name: "The wretched and miserable would rise into plenty of joy and happiness, as soon as they climb steps of my samadhi.",
    icon: FaBookOpen,
  },
  {
    name: "I shall be ever active and vigorous even after leaving this earthly body.",
    icon: FaBookOpen,
  },
  {
    name: "My tomb shall bless and speak to the needs of my devotees.",
    icon: FaBookOpen,
  },
  {
    name: "I shall be active and vigorous even from the tomb.",
    icon: FaBookOpen,
  },
  {
    name: "My mortal remains would speak from the tomb.",
    icon: FaBookOpen,
  },
  {
    name: "I am ever living to help and guide all who come to me, who surrender to me and who seek refuge in me.",
    icon: FaBookOpen,
  },
  {
    name: "If you look to me, I look to you.",
    icon: FaBookOpen,
  },
  {
    name: "If you cast your burden on me, I shall surely bear it.",
    icon: FaBookOpen,
  },
  {
    name: "If you seek my advice and help, it shall be given to you at once.",
    icon: FaBookOpen,
  },
  {
    name: "There shall be no want in the house of my devotees.",
    icon: FaBookOpen,
  },
];


const SaiBaba = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                  Shiridi Sai Baba
                </p>
                <p className="mt-6 text-lg leading-8 text-red-600">
                Shirdi Sai Baba was an Indian spiritual master and fakir, considered to be a saint, revered by both Hindu and Muslim devotees during and after his lifetime. According to accounts from his life, Sai Baba preached the importance of "realisation of the self" and criticised "love towards perishable things". His teachings concentrated on a moral code of love, forgiveness, helping others, charity, contentment, inner peace, and devotion to God and Guru. 
                </p>
                <br />
                <h2 className="text-base font-semibold leading-7 text-orange-600">
                  Eleven Assurances
                </h2>
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
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex mt-6 justify-center lg:justify-start">
              <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                  {ids.map(id => (
                      <div className="flex justify-center lg:justify-start box" key={id}>
                          <img
                          src={baseurl + events+ id + ".JPG"}
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
  )
}

export default SaiBaba