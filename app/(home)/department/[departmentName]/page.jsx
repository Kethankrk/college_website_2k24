import React from "react";

export function TeachersList() {
  return (
    <div className="w-full grid grid-cols-2 text-gray-800 font-semibold mb-3">
      <p className="">Dinesh Kumar CP</p>
      <p className="text-center">HOD</p>
    </div>
  );
}
function SingleDepartmentPage({ params }) {
  let dep = params.departmentName;
  if (dep == "cs") dep = "computer science";
  return (
    <main className="bg-[#f7f7f7] px-5">
      <div className="max-w-6xl mx-auto pt-10 pb-20">
        <h2 className="text-4xl text-center mb-10 text-gray-800">
          Department of {dep}
        </h2>
        <p className="text-sm text-gray-700 mb-20">
          The Department of Computer Science, functioning from very beginning of
          the college. The students are assessed through continuous internal
          evaluation and examination conducted by the college at the end of each
          semester. There are several courses including one open course, one
          elective course, one mini project and one main project that spreads
          over a period of 6 semesters. In addition to the computer hardware and
          software courses, subjects like Basic Mathematics, Management,
          Quantitative techniques and Technical Communication are also included.
          Laboratory work is an integral part of this programme. The UG and PG
          students are trained on Windows and LINUX platforms and in various
          high level languages and packages.
        </p>
        <p className="font-medium text-2xl mb-8 text-gray-800">Faculty</p>
        <div className="">
          <div className="max-w-[400px] w-full">
            <TeachersList />
            <TeachersList />
            <TeachersList />
            <TeachersList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleDepartmentPage;
