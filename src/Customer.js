import Topbar from "./Topbar";

function Customer(){
    return(
        <div>
<Topbar 
title="CUSTOMERS" 
buttonText="+ Add Customer" 
buttonPath="/add-customers"
/>

            <div className="rounded-lg mb-4 text-gray-400 py-2 px-2 shadow-sm bg-white flex justify-between items-center w-[50vw]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
  </svg>

  {/* Input */}
  <input
    type="text"
    placeholder="Search"
    className="bg-white rounded-lg px-4 py-2 w-full outline-none text-gray-500 text-sm"
  />
                    {/* Icon goes here */}
            </div>
{/* Table */}
<div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center" >
      <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customers</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacts</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mary Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">055 981 0302</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-status text-gray-600">
                  2 Orders
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-golden">View All</td>
            </tr>

           {/* row 2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mary Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">054 931 0402</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-status-100 text-gray-500">
                  No Order
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-golden">View All</td>
            </tr>

            {/* row 3 */}
            <tr className="hover:bg-gray-50">
              {/*whitespace-nowrap prevents text from wrapping onto a new line*/}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">J.Cole</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">050 980 0300</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 inline-flex text-xs leading-5{/*line height*/}  font-semibold rounded-full bg-status-100 text-gray-500">
                  No Order
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-golden">View All</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
</div>

    );
}

export default Customer;