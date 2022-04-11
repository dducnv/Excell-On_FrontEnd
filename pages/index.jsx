import HeadPage from '../components/user_layout/HeadPage'
import Layout from '../components/user_layout/Layout'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]
export default function Home() {
  return (
    <>
      <Layout>
        <HeadPage />
        <div className='dark:bg-gray-800 container px-6'>
          <div className="xl:mx-auto container dark:bg-gray-800 py-20 2xl:px-0 px-6">
            <div className="lg:flex items-center justify-between">
              <div className=" lg:w-1/2 w-full">
                <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 bg-white dark:bg-gray-800">
                  Our services
                </h1>
                <p role="contentinfo" className="text-base leading-5 mt-5 bg-white dark:bg-gray-800">
                  We always give our users the best service !
                </p>
                <div className="w-56">
                  <div className=" mt-10">
                    <button className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6">
                      See more
                    </button>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                <div role="listitem" className="bg-white dark:bg-gray-500 cursor-pointer shadow rounded-lg p-8 relative z-30">
                  <div className="md:flex items-center justify-between">
                    <h2 className="text-2xl font-semibold leading-6 dark:text-gray-100 text-gray-800">In-bounds-Service
                    </h2>
                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800"></p>
                    <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 dark:text-gray-100 text-gray-800">4500$</p>
                  </div>
                  <p className=" text-base leading-6 mt-4 dark:text-gray-200 text-gray-800">The In-bound service is a service in which one can only receive the calls from the customers. These call centers provide 24 hours
                    service to all customers. The primary goal of these call centers are to receive product orders, help customers both technically and
                    non-technically, to find dealer location</p>
                </div>
                <div role="listitem" className="bg-white dark:bg-gray-500 cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                  <div className="w-full p-8">
                    <div className="md:flex items-center justify-between">
                      <h2 className="text-2xl font-semibold leading-6 dark:text-gray-100 text-gray-800">Out-bound-Service
                      </h2>
                      <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                        <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 dark:text-gray-100 text-gray-800">6000$</p>
                      </p>
                    </div>
                    <p className=" text-base leading-6 mt-4 dark:text-gray-200 text-gray-800">The Out-bound service is a service in which the employees of Excell-on call the customers for product promotions, for checking
                      with the customer satisfaction on the services they provide, and for the telemarketing. Outbound Call Centers depends on the
                      technological solutions, extensive experience, quality assurance programns and commitment to customer service excellence
                      that further ensures maximum results from the direct marketing efforts for its success</p>
                  </div>
                </div>
                <div role="listitem" className="bg-white dark:bg-gray-500 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                  <div className="md:flex items-center justify-between">
                    <h2 className="text-2xl font-semibold leading-6 dark:text-gray-100 text-gray-800">TeleMarketing-Service</h2>
                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                      <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 dark:text-gray-200 text-gray-800">5500$</p>
                    </p>
                  </div>
                  <p className="text-base leading-6 mt-4 dark:text-gray-200 text-gray-800">The Tele Marketing service is a service which is purely for the promotion of marketing or sales of the products and services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container dark:bg-gray-800">
          <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 dark:text-gray-100 sm:mb-0 mb-12">
            More Than 10 Years We Provide Service <br className="md:block hidden" />
            in Real State Industry
          </h1>
          <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover  sm:block hidden" />
            <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover  absolute z-0" />
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full rounded-md  bg-white sm:absolute relative z-20  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
              <p className="text-3xl font-semibold text-gray-800">20K+</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Property Listed</p>
            </div>
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full rounded-md bg-white sm:absolute relative z-20  mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
              <p className="text-3xl font-semibold text-gray-800">8K+</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Listening</p>
            </div>
                <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full rounded-md bg-white sm:absolute relative z-20  mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
              <p className="text-3xl font-semibold text-gray-800">8K+</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Listening</p>
            </div>
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full rounded-md bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
              <p className="text-3xl font-semibold text-gray-800">15K+</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Sold Lands</p>
            </div>
          </div>
        </div>
        <div className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-gray-200 text-gray-800 sm:text-4xl">
                Feedback our Customer
              </p>
              <p className="mt-4 max-w-2xl text-xl dark:text-gray-200 text-gray-800 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                accusamus quisquam.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 dark:text-gray-200 text-gray-800">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium dark:text-gray-200 text-gray-800">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base dark:text-gray-200 text-gray-800">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
