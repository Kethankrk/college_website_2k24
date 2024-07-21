"use client";

import prisma from "@/prisma/db";
import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setloading] = useState(false);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    const fetchcategory = async () => {
      const res = await fetch("/api/category");
      const cate = await res.json();
      setcategories(cate);
    };
    fetchcategory();
  }, []);
  const OnError = () => {
    toast.error("Image upload failed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      // pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setloading(true);

    const imgurls = [];
    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        const res = await fetch(
          "https://api.imgbb.com/1/upload?key=3d8bf11ce249ae916c6a0f8c59052db8",
          {
            method: "POST",
            body: formData,
          }
        );

        if (res.ok) {
          console.log("Image uploaded successfully to imgbb");

          const imageurl = await res.json();
          imgurls.push(imageurl.data.url);
        } else {
          console.error("Image upload failed");
          OnError();
          setloading(false);
          setImages([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const serverRes = await fetch("/api/images", {
        method: "POST",
        body: JSON.stringify({
          id: category,
          images: imgurls,
        }),
      });
      if (serverRes.ok) {
        console.log("Image uploaded successfully to server");
        setloading(false);
        setImages([]);
        toast.success("Image uploaded successfully.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          // pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.error("Image upload failed");
        OnError();
        setloading(false);
        setImages([]);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(image);
    // console.log(category);
  };

  return (
    <div className="px-10 py-7">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="text-2xl">Admin page</h1>

      {categories ? (
        <form
          onSubmit={handleUpload}
          className="flex flex-col items-start gap-2 mt-4"
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImages([...e.target.files])}
            multiple
            required
          />
          <div className="flex items-center gap-2">
            <h1>Category</h1>
            <select
              required
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="ml-2"
            >
              <option value="">Select category</option>
              {categories
                ? categories.map((i) => (
                    <option value={i.id} key={i.id}>
                      {i.title}
                    </option>
                  ))
                : ""}
              {/*
            <option value="category2">Category 2</option> */}
            </select>
          </div>
          <Button
            type="submit"
            variant="gradient"
            loading={loading}
            color="blue"
            size="lg"
          >
            Submit
          </Button>
        </form>
      ) : (
        <p>Loading ......</p>
      )}
    </div>
  );
};

export default Page;
