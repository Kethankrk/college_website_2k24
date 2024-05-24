import Image from "next/image";
import React from "react";

function Principalsection() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-5 xl:px-0">
      <div className="flex flex-wrap justify-between gap-5">
        <div>
          <h3 className="font-medium mb-5 text-2xl">Principal’s Desk</h3>
          <p className="text-sm font-medium text-start mb-4">
            Smt.Radhika KM
            <br />
            The Principal, <br />
            College of Applied Science Thamarassery <br />
            Ph: 0495 2765154,
            <br />
            E-mail: caskozhikode@ihrd.ac.in
          </p>
          <p className="max-w-[600px] text-start">
            College of Applied Science, Thamarassery is managed by IHRD, a
            government organization recognized worldwide for the service it
            renders in the fields of education and social service. Inspired by
            the noble vision of our founder, some random guy, our college is now
            in its seventh decade of serving a transformative role in the world
            through the education and empowerment of students.
          </p>
        </div>
        <div className="flex items-center justify-end">
          <Image
            width={300}
            height={300}
            src="/princi.jpg"
            className="rounded-md shadow-md mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Principalsection;