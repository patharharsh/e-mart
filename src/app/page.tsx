import FeatureSection from "@/sections/FeatureSection";
import HeroSection from "@/sections/HeroSection";
import PopularCategories from "@/sections/PopularCategories";
import PopularProducts from "@/sections/PopularProducts";

export default function Home() {
  return (
   <>
    <HeroSection />
    <FeatureSection />
    <PopularCategories />
    <PopularProducts />
   </>
  );
}
