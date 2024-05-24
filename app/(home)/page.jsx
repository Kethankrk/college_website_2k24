import ContactSection from "./components/homepage/contactsection";
import FacilitySection from "./components/homepage/facilitysection";
import FooterSection from "./components/homepage/footersection";
import QuestionSection from "./components/homepage/questionSection";
import Herosection from "./components/homepage/herosection";
import Principalsection from "./components/homepage/principalsction";
import Aboutsection from "./components/homepage/aboutsection";

export default function Home() {
  return (
    <main className="">
      <Herosection />
      <Aboutsection />
      <Principalsection />
      <FacilitySection />
      <QuestionSection />
      <ContactSection />
    </main>
  );
}
