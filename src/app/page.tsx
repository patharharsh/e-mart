import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <HeroBanner
        title=" eMart Electronics"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="./headphones.png"
      />
      <SectionTitle />
    </>
  );
}
