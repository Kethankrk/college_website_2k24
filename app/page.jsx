import Navbar from "./components/homepage/navbar";
import Topsection from "./components/homepage/topsection";

import ContactSection from "./components/homepage/contactsection";
import FacilitySection from "./components/homepage/facilitysection";
import FooterSection from "./components/homepage/footersection";
import QuestionSection from "./components/homepage/questionSection";
import Herosection from "./components/homepage/herosection";

export default function Home() {
  return (
    <main className="">
      <Topsection />
      <Navbar />
      <Herosection />
      <FacilitySection />
      <QuestionSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
