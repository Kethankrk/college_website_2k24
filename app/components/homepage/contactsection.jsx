import Image from "next/image";
import React from "react";

function ContactSection() {
  return (
    <main className="p-10 min-h-screen">
      <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10">
        <div>
          <p className="font-semibold text-xs mb-2">connect</p>
          <h3 className="text-2xl font-semibold mb-3">Contact Information</h3>
          <p className="text-sm">
            Have a question or need assistance? Reach out to us.
          </p>
          <div className="mt-16 flex flex-col gap-10">
            <div className="flex flex-col items-center lg:block">
              <Image src="email.svg" width={30} height={30} />
              <p className="font-semibold mb-2">Email</p>
              <p className="text-sm">Send us an email</p>
              <p className="text-sm">castmsy@gmail.com</p>
            </div>
            <div className="flex flex-col items-center lg:block">
              <Image src="phone.svg" width={30} height={30} />
              <p className="font-semibold mb-2">Phone</p>
              <p className="text-sm">Give use a call</p>
              <p className="text-sm">+91 987654321</p>
            </div>
            <div className="flex flex-col items-center lg:block">
              <Image src="location.svg" width={30} height={30} />
              <p className="font-semibold mb-2">Location</p>
              <p className="text-sm">Thamarassery, Kozhikode, Kerala.</p>
              <p className="text-sm">Get Direction {">"}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.7111996880003!2d75.92397917427085!3d11.428495288762651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba668bff97df223%3A0x11e793e1742a507d!2sIHRD%20College%20of%20Applied%20Science!5e0!3m2!1sen!2sin!4v1716212950076!5m2!1sen!2sin"
            width="600"
            className="border-0 h-[300px] lg:h-[450px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default ContactSection;
