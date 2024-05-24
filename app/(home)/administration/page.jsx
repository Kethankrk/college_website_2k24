import React from "react";
import prisma from "@/prisma/db";
import { TeachersList } from "../department/components/teacherListCard";

const getData = async () => {
  const staff = await prisma.staff.findMany({
    where: {
      department: "office",
    },
  });
  return staff;
};

async function AdministrationPage() {
  const staff = await getData();
  return (
    <div className="min-h-[400px]">
      <div className="px-5 py-10 flex justify-center flex-col items-center text-gray-900">
        <h1 className="text-3xl font-medium mb-3 text-gray-800">
          Administration
        </h1>
        <p className="mb-5">Office staff</p>
        <div className="max-w-[400px] w-full">
          {staff.map((item) => (
            <TeachersList name={item.name} post={item.post} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdministrationPage;
