function OrderCards(){
return(
<div className="grid grid-cols-5 gap-4 mb-4 mt-3">
<div className="p-6 rounded-lg text-center shadow-md bg-dark">
  <p className="text-sm text-golden mb-3">All</p>
  <h3 className="text-xl font-bold text-white">(25)</h3>
</div>
<div className="p-6 rounded-lg text-center shadow-md bg-dark">
  <p className="text-sm text-golden mb-3">Pending</p>
  <h3 className="text-xl font-bold text-white">(5)</h3>
</div>
<div className="p-6 rounded-lg text-center shadow-md bg-dark">
  <p className="text-sm text-golden mb-3">In Progress</p>
  <h3 className="text-xl font-bold text-white">(2)</h3>
</div>
<div className="p-6 rounded-lg text-center shadow-md bg-dark">
  <p className="text-sm text-golden mb-3">Ready</p>
  <h3 className="text-xl font-bold text-white">(10)</h3>
</div>
<div className="p-6 rounded-lg text-center shadow-md bg-dark">
  <p className="text-sm text-golden mb-3">Delivered</p>
  <h3 className="text-xl font-bold text-white">(5)</h3>
</div>
</div>
);
}


export default OrderCards;