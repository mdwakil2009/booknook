import Banner from "@/components/Homepage/Banner";
import HowBookNookWorks from "@/components/Homepage/HowBookNookWorks";
import TopCategories from "@/components/Homepage/TopCategories";

import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <HowBookNookWorks></HowBookNookWorks>
      <TopCategories></TopCategories>
    </div>
  );
};

export default page;
