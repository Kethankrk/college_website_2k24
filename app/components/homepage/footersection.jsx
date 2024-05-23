export default function FooterSection() {
  return (
    <div className="px-10 pt-10 pb-5 bg-[#004960]">
      <div className="grid grid-cols-1 gap-10 lg:gap-5 lg:grid-cols-6 footer text-white max-w-5xl mx-auto">
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-4">
            COLLEGE OF APPLIED SCIENCE THAMRASSERY
          </h3>
          <p className="text-[12px] font-medium">Managed by IHRD</p>
        </div>
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <ul>Our Campus</ul>
            <li>academics</li>
          </div>
          <div>
            <ul>Our Courses</ul>
            <li>BCA</li>
            <li>BSC Computer Science</li>
            <li>BBA</li>
            <li>B.Com with Computer Application</li>
            <li>BA English Language and Literature</li>
            <li>M.Com</li>
            <li>MA English</li>
          </div>
          <div>
            <ul>Contact</ul>
            <li>8281502083</li>
            <li>459-09234920</li>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center text-sm font-light text-white">
          Copyright Genisys
        </p>
      </div>
    </div>
  );
}
