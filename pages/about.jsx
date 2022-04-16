import React from 'react'
import Layout from '../components/user_layout/Layout'


const about = () => {
  return (
    <Layout>
      <div className='bg-gray-200 dark:bg-gray-700 md:px-12 '>
        <div role="contentinfo" className="flex items-center flex-col px-4">
          <h1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 dark:text-gray-400 text-gray-800 lg:w-5/12 md:w-9/12 mt-10 pt-14 pb-10">Create Beautiful Landing Pages &amp; Web Apps in a Jiffy</h1>
        </div>
        <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
            <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
              <div>
                <p className="text-3xl xl:text-4xl font-semibold leading-9 dark:text-gray-400 text-gray-800">Few Words About Us!
                </p>
              </div>
              <div className="mt-4 lg:w-4/5 xl:w-3/5">
                <p className="text-base leading-6 dark:text-gray-400 text-gray-800">Excell-on has segregated themselves into various branches based
                  on the varlous servicas that they affer to their clients so as to maet
                  the requirements of organizations le, of their chents</p>
              </div>
              <div className="mt-16 w-full">
                <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-gray-100 hover:text-gray-300 hover:bg-gray-600">
                  <p className="text-xl font-medium leading-5">View Out Services</p>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
              <div>
                <img className="hidden lg:block" src="https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2017/11/vai-tro-cua-customer-service-1024x625.jpg" alt="sofa" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className=" text-lg text-center dark:text-gray-400 text-gray-800 font-normal pb-3">Meet our lovely team</h1>
            <p className="xl:text-4xl text-3xl text-center dark:text-gray-400 text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque, eaque ipsa quae ab illo inventore.</p>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 px-10 pt-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">

                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-gray-200 dark:bg-gray-500">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt className="rounded-full object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-16 ">
                      <div className="font-bold text-3xl text-center pb-1">Dương Quỳnh Anh</div>
                      <p className="text-gray-800 text-sm text-center">CEO of Company
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                              <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-gray-200 dark:bg-gray-500">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt className="rounded-full object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">Nguyễn Văn Đức</div>
                      <p className="text-gray-800 text-sm text-center">Manager of Company
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                              <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-gray-200 dark:bg-gray-500">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">Nguyễn Hồng Quang</div>
                      <p className="text-gray-800 text-sm text-center">Dicector
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                              <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-200 md:px-12  dark:bg-gray-700'>
        <div className="mx-auto container  flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
            <div className="w-80 sm:w-auto flex flex-col justify-start items-start">

              <div className="mt-4 lg:w-4/5 xl:w-3/5">
                <p className="text-base leading-6 dark:text-gray-400 text-gray-800">Excell-on has segregated themselves into various branches based
                  on the varlous servicas that they affer to their clients so as to maet
                  the requirements of organizations le, of their chents</p>
              </div>
              <div className="mt-16 w-full">

              </div>
            </div>
            <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
              <div>
                <img className="hidden lg:block" src="https://images.ctfassets.net/xj0skx6m69u2/6XtpFUVse6U43tKsCFlqK/716080a1a6e89a61c92968220f91155f/stockfresh_8245621_female-customer-services-agent-in-call-center_sizeS.jpg?fm=jpg&w=1200&h=630&fit=fill&f=Right" alt="sofa" />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-200 dark:bg-gray-700'>
          <div className="py-16 white">
            <div className="container m-auto px-6 text-gray-600 xl:px-6">
              <h2 className="mb-12 text-center text-2xl dark:text-gray-400 text-gray-800 font-bold md:text-4xl">Feedback our Customer
              </h2>
              <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                <div className="row-span-2 p-6 borde rounded-xl bg-gray-200 dark:bg-gray-700 sm:flex sm:space-x-8 sm:p-8">
                  <div className="p-6 border rounded-xl bg-gray-200 dark:bg-gray-700 sm:flex sm:space-x-8 sm:p-8">
                    <img className="w-20 h-20 mx-auto rounded-full" src="https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png" alt="user avatar" height="220" width="220" loading="lazy" />
                    <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                      <p className="dark:text-gray-400 text-gray-800"> <span className="font-serif">&quot</span> We are very pleased with the service
                        here. You can have excellent
                        employees without having to spend <span className="font-serif">&quot</span></p>
                      <div>
                        <h6 className="text-lg dark:text-gray-400 text-gray-800 font-semibold leading-none">Customer 1</h6>
                        <span className="text-xs dark:text-gray-400 text-gray-800">Customer1@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 border rounded-xl bg-gray-200 dark:bg-gray-700 sm:flex sm:space-x-8 sm:p-8">
                  <img className="w-20 h-20 mx-auto rounded-full" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="user avatar" height="220" width="220" loading="lazy" />
                  <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                    <p className="dark:text-gray-400 text-gray-800"> <span className="font-serif">&quot</span> Creat. I have hired many services
                      here and am completely satistied
                      with the work and professionalism. <span className="font-serif">&quot</span></p>
                    <div>
                      <h6 className="text-lg dark:text-gray-400 text-gray-800 font-semibold leading-none">Customer 2</h6>
                      <span className="text-xs dark:text-gray-400 text-gray-800">Customer2@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 border rounded-xl bg-gray-200 dark:bg-gray-700 sm:flex sm:space-x-8 sm:p-8">
                  <img className="w-20 h-20 mx-auto rounded-full" src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" alt="user avatar" height="220" width="220" loading="lazy" />
                  <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                    <p className="dark:text-gray-400 text-gray-800"> <span className="font-serif">&quot</span>If you are a busy porson, come here.
                      think this is the best solution for you
                      to save time and mone.<span className="font-serif">&quot</span></p>
                    <div>
                      <h6 className="text-lg dark:text-gray-400 text-gray-800 font-semibold leading-none">Customer 3</h6>
                      <span className="text-xs dark:text-gray-400 text-gray-800">Customer3@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )

}

export default about;
