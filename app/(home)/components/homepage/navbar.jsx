"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-between px-5 py-4 items-center bg-white shadow-md">
      <div className="flex items-center">
        <img src="/IHRD_Logo.svg" alt="Logo" className="w-12 md:w-16 lg:w-20" />
        <Typography
          variant="h4"
          color="red"
          className="ml-2 text-xs sm:text-sm md:text-base lg:text-xl"
        >
          COLLEGE OF APPLIED SCIENCE <br />
          THAMRASSERY
        </Typography>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus:outline-none"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center md:space-x-4 w-full md:w-auto transition-all duration-300 ease-in-out`}
      >
        <Link href="/" className="px-2 py-1">
          <Typography className="py-1 font-normal text-sm md:text-base">
            HOME
          </Typography>
        </Link>
        <ProfileMenu />
        <AcademicMenu />
        <ActivitiesMenu />
        <Link href="/#gallery" className="px-2 py-1">
          <Typography className="py-1 font-normal text-sm md:text-base">
            GALLERY
          </Typography>
        </Link>
        <Link href="/#contact" className="px-2 py-1">
          <Typography className="py-1 font-normal text-sm md:text-base">
            CONTACT
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

const ProfileMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className="py-1">
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-1 md:gap-3 text-sm md:text-base font-normal capitalize tracking-normal"
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
        <MenuList className="lg:grid text-left text-sm md:text-base font-normal text-blue-gray-900">
          <ul className="flex w-full flex-col gap-1">
            <a href="#">
              <MenuItem className="border-b">
                <p>About us</p>
              </MenuItem>
            </a>
            <a href="#">
              <MenuItem className="border-b">
                <p>Management</p>
              </MenuItem>
            </a>
            <a href="#">
              <MenuItem className="border-b">
                <p>Administration</p>
              </MenuItem>
            </a>
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};

const AcademicMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className="py-1">
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-1 md:gap-3 text-sm md:text-base font-normal capitalize tracking-normal"
          >
            ACADEMICS{" "}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="lg:grid text-left text-sm md:text-base font-normal text-blue-gray-900">
          <ul className="flex w-full flex-col gap-1">
            <Menu placement="right-start" className="w-full bg-white">
              <MenuHandler>
                <MenuItem className="border-b">
                  <p>PROGRAMS </p>
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <MenuItem>UG</MenuItem>
                <MenuItem>PG</MenuItem>
              </MenuList>
            </Menu>
            <a href="#">
              <MenuItem className="border-b">
                <p>ACADEMIC CALENDAR </p>
              </MenuItem>
            </a>
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};

const ActivitiesMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className="py-1">
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-1 md:gap-3 text-sm md:text-base font-normal capitalize tracking-normal"
          >
            ACTIVITIES{" "}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="lg:grid text-left text-sm md:text-base font-normal text-blue-gray-900">
          <ul className="flex w-full flex-col gap-1">
            <a href="#">
              <MenuItem className="border-b">
                <p>IEDC </p>
              </MenuItem>
            </a>
            <a href="#">
              <MenuItem className="border-b">
                <p>MU LEARN</p>
              </MenuItem>
            </a>
            <a href="#">
              <MenuItem className="border-b">
                <p>STANDARD CLUB</p>
              </MenuItem>
            </a>
            <a href="#">
              <MenuItem className="border-b">
                <p>NSS </p>
              </MenuItem>
            </a>
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};
