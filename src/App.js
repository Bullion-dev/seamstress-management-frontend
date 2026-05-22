import './App.css';
import Sidebar from './Sidebar.js'; 
import Customer from './Customer.js';
import { Routes, Route } from 'react-router-dom';
import Settings from './Settings.js';
import AddCustomers from './AddCustomers.js';
import NewOrder from './NewOrder.js';
import Dashboard from './Dashboard.js';
import Orders from './Orders.js';
import Payments from './Payments.js';


function App() {
  return (
     <div className="flex">
      <Sidebar />
      
      <main className="flex-grow p-6 bg-main min-h-screen ml-64">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/orders" element={<Orders/>} />
        <Route path="/payments" element={<Payments/>} />
<Route path="/settings" element={<Settings/>}/>
        <Route path="/add-customers" element={<AddCustomers/>}/>
         <Route path="/new-order" element={<NewOrder/>}/>
        </Routes>
      </main>
    </div>
   
  );
}

export default App;

