function SummaryCards({cards}){
    return (
    <div className="grid grid-cols-3 gap-4 mb-4 mt-3">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-10 rounded-lg shadow-md hover:bg-dark group">
          <p className="text-sm group-hover:text-golden text-gray-600 mb-3">{card.title}</p>
          <h3 className="text-3xl font-bold group-hover:text-white text-gray-900">{card.value}</h3>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;