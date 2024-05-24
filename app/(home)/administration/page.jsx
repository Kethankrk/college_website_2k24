import React from "react";
import { TeachersList } from "../department/[departmentName]/page";

function AdministrationPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-[400px]">
      <div className="px-5 py-10 flex justify-center flex-col items-center text-gray-900">
        <h1 className="text-3xl font-medium mb-3 text-gray-800">
          Administration
        </h1>
        <p className="mb-5">Office staff</p>
        <div className="max-w-[400px] w-full">
          <TeachersList />
          <TeachersList />
          <TeachersList />
          <TeachersList />
          <TeachersList />
        </div>
      </div>
    </div>
  );
}

export default AdministrationPage;
