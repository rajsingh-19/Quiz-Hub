import React from 'react'

const Testimonial = () => {
  return (
    <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <img class="mx-auto h-14" src="https://quiz.konfhub.com/logo-dark.svg" alt="" />
    <figure class="mt-10">
      <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>"At Quizhub, we're not just about quizzes; we're about transforming the way people learn. Our platform isn't just a destination for testing knowledge; it's a springboard for personal growth and development. We're committed to providing an engaging and interactive experience that empowers our users to unlock their full potential and succeed in their educational journey."</p>
      </blockquote>
      <figcaption class="mt-10">
        <img class="mx-auto h-10 w-10 rounded-full" src="https://media.istockphoto.com/id/889895020/vector/mind-icon.jpg?s=612x612&w=0&k=20&c=4235uiE6zP4H1LFnzYPi4i8D79m_v7MX_7ANYiT0eJQ=" alt="" />
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900">Will Smith</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600">CEO of QuizHub</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>
  )
}

export default Testimonial
