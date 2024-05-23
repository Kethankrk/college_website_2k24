import React from "react";
import Image from "next/image";
function FacilitySection() {
  return (
    <div className="w-full bg-[#C0DFE7] p-10">
      <div className="mx-auto max-w-[1000px]">
        <h3 className="text-xl font-semibold mb-4">Our Facility</h3>
        <div className="flex justify-between flex-wrap gap-10">
          <div className="flex items-center gap-2">
            <Image src="/computer.svg" width={30} height={30} />
            <p className="text-sm font-medium">Computer Lab</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/auditorium.svg" width={30} height={30} />
            <p className="text-sm font-medium">Auditorium</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/library.svg" width={30} height={30} />
            <p className="text-sm font-medium">Library</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/badminton.svg" width={30} height={30} />
            <p className="text-sm font-medium">Badminton Court</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilitySection;
