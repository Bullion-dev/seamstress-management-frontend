import { NavLink } from 'react-router-dom';
import { useContext } from "react";// why? because, i want to open a backpack//
import { AppContext } from "../context/AppContext";//this is the backpack i want//

function Sidebar(){
  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Customers', path: '/customers' },
    { name: 'Orders', path: '/orders' },
    { name: 'Payments', path: '/payments' },
    { name: 'Settings', path: '/settings' },
  ];

  return(
    <div className="bg-dark w-64 min-h-screen p-6 text-gray-400 fixed top-0 left-0">
      <h1 className="text-yellow-400 text-2xl font-bold mb-8">SEAM-LESS</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name} className="mb-4">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-full transition-all duration-200 cursor-pointer
                  ${isActive ? 'text-yellow-400' : 'hover:text-yellow-400'}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;