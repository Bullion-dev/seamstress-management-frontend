import { useNavigate } from 'react-router-dom';

function FormTopbar({backText, backPath, title, cancelPath, saveText}){
   const navigate = useNavigate();
   return(
<div className="flex justify-between items-center bg-white py-3 px-4  shadow-sm border-b border-gray-200 top-0 rounded-xl mb-4">
    <div className="flex">
        <span className="text-gray-400 cursor-pointer hover:text-golden " onClick={() => navigate(backPath)}>← {backText}</span>
        <span className="text-gray-400">/</span>
        <h1 className="text-black">{title}</h1>
    </div>
<div className="flex gap-3">
    <button className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-200" onClick= {()=> navigate(cancelPath)}>
        Cancel
        </button>
    {saveText && (
    <button className="bg-golden hover:bg-golden-100 text-black font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-200">
        {saveText}
      </button>
)}
</div>
</div>
    );
}


export default FormTopbar;