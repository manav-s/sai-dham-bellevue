import React from "react";

import Summary from "./Summary.tsx";
import Festivals from "./Festivals.tsx";
import SaiBaba from "./sai-baba.tsx";
import AboutUs from "./AboutUs.tsx";
import Guruji from "./guruji.tsx";

function Home() {
  return (
    <>
      <Summary />
      <Festivals />
      <SaiBaba />
        <Guruji />
      <AboutUs />
    </>
  );
}

export default Home;