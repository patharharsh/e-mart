import FeatureSection from "@/sections/FeatureSection";
import FeaturedProducts from "@/sections/FeaturedProducts";
import HeroSection from "@/sections/HeroSection";
import LatestNews from "@/sections/LatestNews";
import PopularCategories from "@/sections/PopularCategories";
import PopularProducts from "@/sections/PopularProducts";

export default function Home() {
  return (
   <>
    <HeroSection />
    <FeatureSection />
    <PopularCategories />
    <PopularProducts />
    <LatestNews />
    <FeaturedProducts />
   </>
  );
}
