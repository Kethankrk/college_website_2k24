import React from "react";

function AboutPage() {
  return (
    <div className="bg-[#f7f7f7] pt-10 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-5 text-gray-800">About us</h2>
        <p className="text-sm text-gray-700 mb-10">
          College of Applied Science, Thamarassery, is affiliated to the Calicut
          University and was established in 2012 with regular courses in B.Sc
          (Computer Science), B.Com with CA, BA English, BCA, BBA, MA English
          and M.Com.
        </p>
        <div>
          <h3 className="mb-4 font-medium text-gray-900">
            Four Year UG Programs
          </h3>
          <ul className="text-gray-900 ml-3">
            <li className="list-disc text-sm mb-2">
              BSC Computer Science (Honours)
            </li>
            <li className="list-disc text-sm mb-2">BCA (Honours)</li>
            <li className="list-disc text-sm mb-2">
              B.COM with Computer Applicaton (Honours)
            </li>
            <li className="list-disc text-sm mb-2">BBA (Honours)</li>
            <li className="list-disc text-sm mb-2">
              BA English Language and Literature (Honours)
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="mb-4 font-medium text-gray-900">PG Programs</h3>
          <ul className="text-gray-900 ml-3">
            <li className="list-disc text-sm mb-2">MA English</li>
            <li className="list-disc text-sm mb-2">M.COM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
