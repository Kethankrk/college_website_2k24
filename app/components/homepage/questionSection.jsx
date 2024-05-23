import React from "react";

function QuestionCard({ question, answer }) {
  return (
    <div className="mb-5">
      <hr className="border border-black mb-5" />
      <h4 className="font-semibold mb-2">{question}</h4>
      <p className="text-sm">{answer}</p>
    </div>
  );
}

function QuestionSection() {
  return (
    <main className="py-24 bg-[#E5F4FB] px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h3 className="font-semibold text-3xl mb-4 text-center lg:text-start">
            Frequently Asked Questions
          </h3>
          <p className="text-sm max-w-[300px] text-center mx-auto lg:text-start lg:mx-0">
            Find answers to common questions that prospective students might
            have.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <QuestionCard
            question="What are the admission requirements?"
            answer="The admission requirements vary depending on the program. Please visit
        our website for detailed information."
          />
          <QuestionCard
            question="What are the admission requirements?"
            answer="The admission requirements vary depending on the program. Please visit
        our website for detailed information."
          />
          <QuestionCard
            question="What are the admission requirements?"
            answer="The admission requirements vary depending on the program. Please visit
        our website for detailed information."
          />
          <hr className="border border-black" />
        </div>
      </div>
    </main>
  );
}

export default QuestionSection;
