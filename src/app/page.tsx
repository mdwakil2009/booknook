import Arrivals from "@/components/Homepage/Arrivals";
import Banner from "@/components/Homepage/Banner";
import HowBookNookWorks from "@/components/Homepage/HowBookNookWorks";
import TopCategories from "@/components/Homepage/TopCategories";
import { getPageMetadata } from "@/lib/page-title"

;

export const metadata = getPageMetadata("Home | BookNook");
const page = () => {
  return (
    <div>
      <Banner />
      <Arrivals></Arrivals>
      <HowBookNookWorks></HowBookNookWorks>
      <TopCategories></TopCategories>
    </div>
  );
};

export default page;
