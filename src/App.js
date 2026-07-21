import './App.css';
import Sidebar from './components/Sidebar.jsx'; 
import Customer from './pages/Customer.jsx';
import { Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings.jsx';
import AddCustomers from './pages/AddCustomers.jsx';
import NewOrder from './pages/NewOrder.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Orders from './pages/Orders.jsx';
import Payments from './pages/Payments.jsx';
import OrderDetails from './pages/OrderDetails.jsx';


function App() {
  return (
     <div className="flex">
       <script src="http://localhost:8097"></script> 
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
         <Route path="/order-details/:id" element={<OrderDetails/>}/>
        </Routes>
      </main>
    </div>
   
  );
}

export default App;

