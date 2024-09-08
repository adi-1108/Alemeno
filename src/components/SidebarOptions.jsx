import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "tailwind-cn";

const SidebarOptions = ({ item }) => {
  const path = useLocation().pathname;
  const isActive = item.route === path;
  return (
    <Link
      to={item.route}
      className={cn(
        "bg-blue-700 w-full flex cursor-pointer shadow-xl items-center justify-start gap-5 rounded-full px-16 py-4 transition-all hover:scale-110",
        {
          "bg-white": isActive,
          "bg-none": !isActive,
        },
      )}
    >
      {item.icon}
      <div>
        <span className="font-semibold">{item.title}</span>
      </div>
    </Link>
  );
};

export default SidebarOptions;
