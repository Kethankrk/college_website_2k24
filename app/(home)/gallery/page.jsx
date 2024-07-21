"use client";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";

const Page = () => {
  const [images, setimages] = useState();
  const [category, setcategory] = useState();

  useEffect(() => {
    const fetch_data = async () => {
      const res = await fetch("/api/images");
      const data = await res.json();
      setimages(data);
    };
    fetch_data();
  }, []);
  console.log(images);
  // const data = [
  //   {
  //     imgelink:
  //       "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   },
  //   {
  //     imgelink:
  //       "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //   },
  //   {
  //     imgelink:
  //       "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  //   },
  //   {
  //     imgelink:
  //       "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  //   },
  //   {
  //     imgelink:
  //       "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  //   },
  // ];

  const data = [];
  if (images) {
    images.forEach((element) => {
      data.push({
        label: element.title,
        value: element.title,
        images: element.images,
      });
    });
  }

  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  return (
    <div className=" flex flex-col items-center gap-8 px-14 py-5">
      <Typography variant="h2">GALLERY</Typography>
      <div className="max-w-5xl">
        {/* <div className="grid gap-4">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
        </div> */}
        {images ? (
          <Tabs value={!images ? "Nothing" : data[0].label} className=" py-5">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="grid grid-cols-1 gap-4 ">
              {data.map(({ value, images }) => (
                <TabPanel
                  className="grid grid-cols-2 gap-4 md:grid-cols-3"
                  key={value}
                  value={value}
                >
                  {images?.map((imageLink, index) => (
                    <div key={index}>
                      <img
                        className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                        src={imageLink}
                        alt="image-photo"
                      />
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        ) : (
          "Loading....."
        )}
      </div>
    </div>
  );
};

export default Page;
