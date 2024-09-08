import React from "react";
import { Outlet } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import SidebarOptions from "./SidebarOptions";
const sidebarOptions = [
  {
    id: 1,
    title: "Course List",
    icon: <RectangleGroupIcon className="h-6 w-6 text-slate-900" />,
    route: "/" || "/course/",
  },
  {
    id: 2,
    title: "Student Dashboard",
    icon: <UserIcon className="h-6 w-6 text-slate-900" />,
    route: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <div className="mx-auto flex h-[calc(100vh)] w-[calc(100vw-100px)]">
      <div className="flex flex-[0.2] flex-col items-center gap-10 px-4 mr-4 py-10">
        <div className="flex flex-col items-start justify-start gap-5">
          {sidebarOptions.map((option) => (
            <SidebarOptions item={option} key={option.id} />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
