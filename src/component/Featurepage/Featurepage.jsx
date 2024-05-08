import React from "react";
import {Link} from "react-router-dom";

const Featurepage = () => {

  return (
      <div class="relative isolate px-6 pt-0 lg:px-8 bg-white featurepage bg-image-fp">
        <div class="mx-auto max-w-2xl featurepage">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Boost IQ & Knowledge, Dive into Quizzes!
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
            "Challenge your mind, expand your horizons, and enrich your intellect with quizzes that enhance both your IQ and general knowledge."
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/main" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Featurepage;
