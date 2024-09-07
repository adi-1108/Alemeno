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
        "flex cursor-pointer items-center justify-center gap-5 rounded-full px-16 py-4 transition-all hover:scale-110 hover:bg-primary ",
        {
          "bg-white": isActive,
          "bg-none": !isActive,
        }
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
