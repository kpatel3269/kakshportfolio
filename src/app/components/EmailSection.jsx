import React from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
    <div className="bg-gradient-to-r from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full right-[80%] transform -translate-y-1/2"></div>
    <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md"> I am curently looling fro opportunities, my inbox is always open.
         whether you havea question ro just want to say hi, I will try my best
        to ge back at you!</p>
        <div className="socials flex flex-row gap-2">
        <Link href="https://github.com">
            <Image src={GithubIcon} alt="Github Icon" />
            </Link>
        <Link href="https://linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
        </div>
        </div>
        <div>
            <from className="flex flex-col">
                <div className="mb-6">
                <label htmlFor="email" className="text-white  block mb-2 text-sm font-medium"> Your email</label>
                <input type ="email" 
                id="email" 
                required 
                className="bg-[#18191E] border-[#333353F] placeholder-[#9CA2CA9] text-gray-100 text-sm rounded-lg blockw-full p-2.5"
                placeholder="jacob@google.com"
                 />
                 </div>
                 <div className="mb-6">
                <label htmlFor="subject" className="text-white  block text-sm mb-2 font-medium"> Subject</label>
                <input type ="text" 
                id="subject" 
                required 
                className="bg-[#18191E] border-[#333353F] placeholder-[#9CA2CA9] text-gray-100 text-sm rounded-lg blockw-full p-2.5"
                placeholder="Just saying hi"
                 />
                 </div>
                 <div className="mb-6">
                    <label
                    htmlFor="message"
                    className="text-white block mb-2 font-medium"
                    > Message
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border-[#333353F] placeholder-[#9CA2CA9] text-gray-100 text-sm rounded-lg blockw-full p-2.5"
                    placeholder="Let's talk about..."
                    />
                    </div>
                    <button
                    type ="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
            </from>
        </div>
    </section>
  );
};

export default EmailSection;