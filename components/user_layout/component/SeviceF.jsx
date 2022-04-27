import React from 'react'

const SeviceF = () => {
  return (
    <div>
      <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              NAME
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              <span>Edit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span>Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              1
            </th>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              Nguyễn Hồng Quang
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              $10000
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              Dep trai
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-red-600 dark:red-blue-500 hover:underline">Delete</a>
            </td>
          </tr>
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              2
            </th>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              Nguyễn Văn Dức
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              $10000
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              dep trai
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-red-600 dark:red-blue-500 hover:underline">Delete</a>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              3
            </th>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              Đinh Việt Hoàng
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              $10000
            </td>
            <td className="px-6 py-4 text-gray-900 dark:text-white">
              dep trai
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-red-600 dark:red-blue-500 hover:underline">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SeviceF