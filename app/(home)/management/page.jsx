import Link from "next/link";
import React from "react";

function ManagementPage() {
  return (
    <div className="min-h-[400px]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <h1 className="font-medium text-3xl mb-5 text-gray-800 text-center">
          Management
        </h1>
        <p className="text-gray-900 font-light text-sm lg:text-base mb-2">
          <span className="font-medium">
            Institute of Human Resources Development (IHRD)
          </span>{" "}
          is an autonomous educational institution established by the Government
          of Kerala in 1987. The institute is registered under The Travancore –
          Cochin Literary, Scientific and Charitable societies registrations Act
          12 of 1955. The Institute's Memorandum of Association and its rules
          and regulations have been judiciously framed with built-in growth
          provisions. The management of the institute is vested with a Governing
          Body composed of with the Hon’ble Minister of Higher Education,
          Government of Kerala, as the Chairman and Chief Secretary to
          Government of Kerala as the Vice-Chairman. Institute of Human
          Resources Development is dedicated to the scientific advancement,
          technological progress and economic growth of the country through
          human resources development. Based on the principle, "Think Globally
          and Act Locally" it endeavours to bring about the welfare of the
          nation. It endeavours to provide education and training of
          consistently high stands through innovative and versatile programmes
          suitable for the current and emerging needs of the community.
        </p>
        <a href="http://www.ihrd.ac.in/" target="_blank">
          <p className="text-blue-900 hover:underline">
            Institute of Human Resources Development
          </p>
        </a>
      </div>
    </div>
  );
}

export default ManagementPage;
