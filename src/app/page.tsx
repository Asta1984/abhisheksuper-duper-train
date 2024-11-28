"use client"

import React from "react";
import { Mail, Instagram, Linkedin, ChevronDown } from "lucide-react";
import RealisticLightspeedWarpDrive from '../components/realistic-lightspeed-warp-drive';
import { TimelineDemo } from "../components/timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { workExperience } from "@/constants/workExperience"

const ProfilePage = () => {
  return (
    <div className="relative min-h-screen">
      <RealisticLightspeedWarpDrive />
      <div className="relative z-10 min-h-screen bg-black/20 backdrop-transparent-md border border-white/10 rounded-lg text-gray-200">
        <div className="max-w-2xl mx-auto py-16 px-7">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-white">Hey! I'm <span className="text-blue-500">Abhishek Singh</span> and I'm 
              your best <span className="text-green-500">Product Manager</span>.</h1>
              <div className="flex items-center text-gray-400">
                {/* <div className="flex items-center gap-2">San Francisco, CA</div> */}
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                <Link
                  href="mailto:ab888singh@gmail.com"
                  className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-gray-300" />
                </Link>
                <Link
                  href="https://www.instagram.com/abhisheksinghh8/"
                  className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5 text-gray-300" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abhishek-singh-94b719194/"
                  className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-gray-300" />
                </Link>
              </div>
            </div>

            {/* Bio Sections */}
            <div className="space-y-4 text-gray-400 text-sm md:text-base">
              <p>
                I&apos;m an enthusiastic and results-driven individual with a proven track record of successfully 
                contributing to IT projects leveraging my diverse skillset.
              </p>

              <p>
                I&apos;ve independently developed a web application which takes personal info and develops a QR 
                to a customizable AR-profile. 
                With a background in Automobile Engineering, I taught myself coding, design,
                and Project management. I have a strong background in Project Management, 
                Python, and machine learning.
              </p>

              <p>
                Crafting autonomous bots, machine learning projects and Product development interests me.
                You could reach out to me via email.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xl pt-10 font-semibold mb-4 text-white">Work</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {workExperience.map((work, index) => (
                  <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className="border border-gray-800 rounded-lg bg-gray-950"
                  >
                    <AccordionTrigger className="hover:no-underline px-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium`}
                        >
                          {work.icon}
                        </div>
                        <div className="flex flex-col items-start">
                          <div className="font-semibold text-white">{work.company}</div>
                          {work.role && (
                            <div className="text-sm text-gray-400">{work.role}</div>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="pl-14">
                        <p className="text-gray-400">{work.shortdesc}</p>
                        <br />
                        <p className="text-gray-400">{work.desc}</p>
                      </div>
                      <div className="flex justify-between flex-row">
                        <div className="pl-14">
                          <br />
                          {work.sourceCode && (
                            <Link
                              href={work.sourceCode}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="text-white bg-gray-900 hover:bg-gray-800 p-3 rounded-md transition-colors duration-200">
                                <p>Source Code</p>
                              </button>
                            </Link>
                          )}
                        </div>
                        <div className="pl-14">
                          <br />
                          {work.webLink && (
                            <Link
                              href={work.webLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="text-white bg-[#1F305E] hover:bg-[#284180] p-3 rounded-md transition-colors duration-200">
                                <p>Website</p>
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <TimelineDemo />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage