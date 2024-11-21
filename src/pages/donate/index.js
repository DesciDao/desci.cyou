import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function DonateCard() {
  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
          Support the Scientific Revolution
        </h1>
      </header>

      <div className="bg-slate-50 dark:bg-slate-800 shadow-md rounded-lg p-6 sm:p-8 lg:p-12">
        <p className="text-lg text-slate-700 dark:text-slate-400 mb-6 leading-relaxed">
          For years, our groundbreaking research has depended solely on limited support from a
          handful of universities. We have deliberately avoided advertising, government grants, and
          sponsorships to maintain our independence and integrity. However, this also means we have
          no other funding sources.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-400 mb-6 leading-relaxed">
          Six months ago, we launched our social media presence to connect with like-minded
          scientists and visionaries who share our mission. If you believe in the transformative
          power of science and want to help us drive meaningful change, we invite you to support our
          efforts with a donation.
        </p>
        <p className="text-lg text-sky-500 font-semibold mb-6 leading-relaxed">
          Every contribution matters. Donations can be made to the following SOL address:
        </p>
        <div className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200 font-mono rounded-md p-4 mb-6 break-all">
          6K6w1aNAa3em5hzRhPVGvbjfqC6EnaL17JW6kC5xso2w
        </div>
        <p className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed">
          Together, let’s ignite a revolution in science and pave the way for a brighter future.
        </p>
        <div className="mt-8">
          <a
            href="https://solscan.io/account/6K6w1aNAa3em5hzRhPVGvbjfqC6EnaL17JW6kC5xso2w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-green-400 text-white font-medium shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-green-500 transition-all duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </main>
  )
}

DonateCard.layoutProps = {
  meta: {
    title: 'Support Scientific Revolution',
    description: 'Donate to help ignite a scientific revolution.',
  },
}
