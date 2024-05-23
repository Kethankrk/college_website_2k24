"use client";
import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { HiAcademicCap } from "react-icons/hi";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="flex w-full justify-center py-4">
      <div className="flex flex-col md:flex-row  max-w-7xl md:justify-between w-full md:items-end  items-center">
        <div className="flex gap-2 w-full ">
          <img src="/IHRD_Logo.svg" alt="asd" className="w-20" />
          <Typography variant="h4" color="red">
            COLLEGE OF APPLIED SCIENCE <br />
            THAMRASSERY
          </Typography>
        </div>
        <div className=" md:justify-end justify-center  flex w-full px-8 gap-3">
          <Typography className="py-3">HOME</Typography>
          <ProfileMenu />
          <AcademicMenu />
          <Typography className="py-3">CONTACT</Typography>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const ProfileMenu = () => {
  const menuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div>
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
          >
            PROFILE{" "}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="gray"
            shadow={false}
            className="col-span-3 flex h-full w-full items-center justify-center rounded-2xl p-4"
          >
            {/* <CursorArrowRaysIcon strokeWidth={1} className="h-10 w-10" />
            <Typography className="mt-5 text-center" variant="h5">
              Material Tailwind PRO
            </Typography> */}
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {menuItems.map(({ title, description }) => (
              <a href="#" key={title}>
                <MenuItem className="border-b border-t ">
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                  </Typography>
                </MenuItem>
              </a>
            ))}
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};

const AcademicMenu = () => {
  const menuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div>
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
          >
            ACADEMIN{" "}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="gray"
            shadow={false}
            className="col-span-3 flex h-full w-full items-center justify-center rounded-2xl p-4"
          >
            <HiAcademicCap className="h-10 w-10 text-white" />
            <Typography className="mt-5 text-center" variant="h5">
              ACADEMICS
            </Typography>
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {menuItems.map(({ title, description }) => (
              <a href="#" key={title}>
                <MenuItem className="border-b border-t ">
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                  </Typography>
                </MenuItem>
              </a>
            ))}
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};
