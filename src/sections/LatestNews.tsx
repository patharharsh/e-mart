import NewsCard from "@/components/NewsCard";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const LatestNews = () => {
  return (
    <div className="container mx-auto my-10 ">
      <SectionTitle title="Letest News" align="center" />
      <div className="grid grid-cols-2 md:grid-cols-3  gap-8">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default LatestNews;
