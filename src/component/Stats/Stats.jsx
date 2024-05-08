import React from "react";

const Stats = () => {
  return (
    <div class="bg-black py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-primary-color text-600">
              Daily quiz completions
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-900 text-primary-color sm:text-5xl">
              8 Thousand+
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-600 text-primary-color">
              Total questions available
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-900 text-primary-color sm:text-5xl">
              1750+ 
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-600 text-primary-color">
              New users yearly
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-900 sm:text-5xl text-primary-color">
              450+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
