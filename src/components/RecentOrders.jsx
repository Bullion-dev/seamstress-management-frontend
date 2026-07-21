function RecentOrders({title, columns, rows, statusIndex, onDelete, onRowClick }) {
  const statusColors = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Ready': 'bg-green-100 text-green-800',
    'Delivered': 'bg-gray-100 text-gray-800',
    'Paid': 'bg-green-100 text-green-800',
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center">
      </div>
      <h1>{title}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              // When a row is clicked, call onRowClick with the row index//
// onRowClick && means only run if onRowClick was passed//
// cursor-pointer shows hand cursor so user knows it's clickable //
               <tr key={rowIndex}
               onClick = { () => onRowClick && onRowClick(rowIndex)}
               className="hover:bg-gray-50 cursor-pointer">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {cellIndex === statusIndex ? (
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[cell] || 'bg-gray-100 text-gray-800'}`}>
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}

                  {onDelete && (
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onDelete(rowIndex)}}
      className="text-red-500 hover:text-red-700 font-medium"
    >
      Delete
    </button>
  </td>
)}

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;