import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const Companydetail = () => {
  const features = [
    {
      name: "Current opportunities",
      description:
        "We don't have any opportunities right now.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Internship Opportunities",
      description:
        "We currently do not have any internship openings available. Please check back at a later time for potential opportunities, or feel free to explore other areas of our website for information on programs and initiatives.",
      icon: LockClosedIcon,
    },
    {
      name: "Community Engagement",
      description:
        "At our core, we prioritize community engagement. Through volunteer efforts, partnerships, and contributions, we aim to make a positive impact and support causes that matter most to our communities.",
      icon: ArrowPathIcon,
    },
    {
      name: "Our Work Culture",
      description:
        "Experience our vibrant work culture, built on integrity, collaboration, and growth. Join a team where innovation thrives and every voice is heard.",
      icon: FingerPrintIcon,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Explore Our Details
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to know about us
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            "Unlock comprehensive insights into our organization and its offerings with everything you need to know about us."
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Companydetail;
