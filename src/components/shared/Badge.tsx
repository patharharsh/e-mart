import classNames from "classnames";
import React from "react";

interface BadgeProps {
  children?: React.ReactNode;
  type?: "success" | "danger" | "warning";
  varient?: "rounded" | "pill";
}

const Badge = ({ children, type="success", varient="rounded" }: BadgeProps) => {
  const BadgeClass = classNames(
    "text-sm font-medium px-2.5 py-1.5 ",
    { "bg-green-100 text-green-800": type === "success" },
    { "bg-red-100 text-red-800": type === "danger" },
    { "bg-yellow-100 text-yellow-800": type === "warning" },
    { "rounded": varient === "rounded" },
    { "rounded-full": varient === "pill" },
  );

  return <span className={BadgeClass}>{children}</span>;
};

export default Badge;
