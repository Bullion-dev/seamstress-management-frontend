import { createContext, useState, useEffect} from "react";

export const AppContext = createContext();

function AppProvider({children}){
  const [customers, setCustomers] = useState([]);
const [orders, setOrders] = useState([]);
const [sidebarOpen,setSidebarOpen] = 
useState(true);

//use effect to load from local storage//
useEffect(() => {
  const savedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
  setCustomers(savedCustomers);
  
  const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
  setOrders(savedOrders);
}, []);


return (
<AppContext.Provider
value={{
    sidebarOpen,
    setSidebarOpen,
    customers,
  setCustomers,
  orders,
  setOrders,
      }}
    >
        
 {children}
    </AppContext.Provider> 
    );
}

export default AppProvider;