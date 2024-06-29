import React from "react";
import BabaImage from "../../assets/images/Baba.jpeg"; // Adjust the path if necessary

import { FaFire, FaBookOpen, FaRegCalendarAlt } from "react-icons/fa";
import Section1 from "./Section1.tsx";
import Section2 from "./Section2.tsx";

// Represents a list of features relevant to the Mandir
const features = [
  {
    name: "Daily Aarti",
    description:
      "Join us for the daily aarti ceremonies, where we offer our prayers and devotion to the deities. Experience the spiritual ambiance and divine connection.",
    icon: FaFire,
  },
  {
    name: "Festivals and Celebrations",
    description:
      "Participate in various festivals and celebrations throughout the year. Enjoy the vibrant and colorful events that bring the community together.",
    icon: FaRegCalendarAlt,
  },
  {
    name: "Spiritual Discourses",
    description:
      "Attend enlightening spiritual discourses by esteemed speakers and scholars. Gain insights into ancient scriptures and spiritual practices.",
    icon: FaBookOpen,
  },
];

function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
}

export default Home;