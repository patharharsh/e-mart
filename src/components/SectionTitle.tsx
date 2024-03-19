import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface SectionTitleProps {
  title: string;
  isViewAll?: boolean;
  viewAllPath?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle = ({
  title,
  isViewAll = false,
  viewAllPath,
  align = "left",
}: SectionTitleProps) => {
  const titleClasses = classNames("flex items-center mb-8 ", {
    "justify-center": align === "center",
    "justify-between": align !== "center",
  });
  return (
    <div className={titleClasses}>
      <h1 className={`text-3xl font-semibold  leading-9`}>{title}</h1>
      {isViewAll && (
        <Link className="text-[#00B207]" href={viewAllPath ?? "/"}>
          View All
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
