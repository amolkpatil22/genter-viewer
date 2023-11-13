import React from 'react'

const SubFooter = () => {
    return (
        <div data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000" className="relative  overflow-hidden bg-gray-900 py-8 sm:py-24 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col gap-5">
                            <dt className="mt-4 text-3xl font-bold text-white">Your logo</dt>
                            <dd className="mt-2 leading-7 text-gray-400">Technology to revolutionize your hiring process</dd>
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 text-white">
                            Start interview
                            </div>
                        </div>
                    </dl>
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300"></p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete='email' required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
                            <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubFooter