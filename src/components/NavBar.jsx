import React from "react";
import { Outlet } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import SidebarOptions from "./SidebarOptions";
const sidebarOptions = [
  {
    id: 1,
    title: "Course List",
    icon: <RectangleGroupIcon className="h-6 w-6 text-gray-500" />,
    route: "/"
  },
  {
    id: 2,
    title: "Student Dashboard",
    icon: <UserIcon className="h-6 w-6 text-gray-500" />,
    route: "/dashboard"
  },
];


const NavBar = () => {
  return (
    <div className="mx-auto h-[calc(100vh)] flex w-[calc(100vw-5%)]  ">
      <div className="flex flex-[0.35] flex-col items-center gap-10 bg-slate-800/80 m-4 p-4 rounded-3xl">
        <div className="flex flex-col items-start justify-start gap-5">
            {sidebarOptions.map((option) => <SidebarOptions item={option} key={option.id} />)}
        </div>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
