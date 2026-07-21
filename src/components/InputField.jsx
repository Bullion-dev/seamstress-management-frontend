function InputField({labelText, inputPlaceHolder, type, width, value, onChange}){
    return(
<div className={`flex flex-col gap-2 ${width}`}>
    <label className="text-sm">{labelText}</label>
    <input
    type={type}
    placeholder={inputPlaceHolder}
    value={value}
    onChange={onChange}
    className=" border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-400 outline-none focus:border-golden"
    />
</div>
    );
}

export default InputField;