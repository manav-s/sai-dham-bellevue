import React from "react";

import Section1 from "./Section1.tsx";
import Section2 from "./Section2.tsx";
import SaiBaba from "./sai-baba.tsx";
import AboutUs from "./AboutUs.tsx";
import Guruji from "./guruji.tsx";

function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <SaiBaba />
        <Guruji />
      <AboutUs />
    </>
  );
}

export default Home;