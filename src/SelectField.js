function SelectField({ labelText, selectplaceholder, options, width, type }) {
  return (
    <div className={`flex flex-col gap-2 ${width}`}>
      <label className="text-sm text-gray-700">{labelText}</label>
      <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 outline-none focus:border-golden transition-all duration-200">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;