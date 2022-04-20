import React from 'react'
import Layout from "../components/user_layout/Layout"

const contact = () => {
    return (
        <Layout>
            <section
                className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 py-20 lg:py-[120px] overflow-hidden z-10">
                <div className="container mx-auto px-10">
                    <div className="flex mx-auto flex-wrap lg:justify-between ">
                        <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                            <div className="max-w-[570px] mb-12 lg:mb-0">
                        <span className="block mb-4 text-base text-primary font-semibold">
                           Contact Us
                        </span>
                                <h2
                                    className="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">

                                    GET IN TOUCH WITH US
                                </h2>
                                <p className=" text-gray-800 dark:text-gray-100 leading-relaxed mb-9">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    adiqua minim veniam quis nostrud exercitation ullamco
                                </p>

                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                            <div
                                className="dark:text-gray-100 text-gray-200 bg-gray-200 dark:bg-gray-600 relative rounded-lg p-8 sm:p-12 shadow-lg">
                                <form>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full rounded py-3 px-[14px] text-gray-800 dark:text-gray-300 font-semibold dark:bg-gray-700 border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full rounded py-3 px-[14px] text-gray-800 dark:text-gray-300 font-semibold dark:bg-gray-700 border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary "

                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Your Phone"
                                            className="w-full rounded py-3 px-[14px] text-gray-800 dark:text-gray-300 font-semibold dark:bg-gray-700 border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary "/>

                                    </div>
                                    <div className="mb-6">
                              <textarea
                                  rows="6"
                                  placeholder="Your Message"
                                  className="w-full rounded py-3 px-[14px] text-gray-800 dark:text-gray-300 font-semibold dark:bg-gray-700 border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary "
                              />
                                    </div>
                                    <div>
                                        <button type="submit"
                                                className="w-full text-white bg-indigo-600 dark:bg-indigo-800 rounded border border-primary p-3 transition hover:bg-opacity-90">
                                            Send Message
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default contact
