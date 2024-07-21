"use client";
import prisma from "@/prisma/db";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Page = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    images.forEach(async (image) => {
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
        console.log("Image uploaded successfully in imgbb");
        // const res2 = await prisma.gallery.create({
        //   data: {
        //     image: res.url,
        //     category: category,
        //   },
        // });
        const res2 = await prisma.gallery.append();
        console.log(res2);
      } else {
        console.error("Image upload failed");
      }
    });

    // console.log(image);
    // console.log(category);
  };

  return (
    <div className="px-10 py-7">
      <h1 className="text-2xl">Admin page</h1>

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
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Page;
