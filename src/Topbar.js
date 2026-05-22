import { useNavigate } from 'react-router-dom';

function Topbar({title, buttonText, buttonPath, topText, numText}){
    const navigate= useNavigate();

    return (
<div className="flex justify-between items-center bg-white py-3 px-4  shadow-sm border-b border-gray-200 top-0 rounded-xl mb-4">
    <div>
        <h1 className="text-black">{title}</h1>
    </div>
    {buttonText && (
    <button 
    onClick={()=> navigate(buttonPath) }
    className="bg-golden hover:bg-golden-100 text-black font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-200">
        {buttonText}
      </button>
)}
      {topText && (
      <h2 className="text-md text-black">{topText}<span className="text-golden text-md">{numText}</span></h2>
      )}
</div>
    )
}

export default Topbar;