import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
/*import 'primereact/resources/themes/saga-blue/theme.css';*/
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Header.css'; // Import custom styles

import siteLogo from '../../assets/logo.png'
import { useAuth } from '../../context/AuthContext';
import { InputText } from 'primereact/inputtext';
const Header = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (login(username, password)) {
      setShowLoginDialog(false);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid credentials');
    }
  };
  const items = [
    {
      label: 'HOME',
      template: () => <Link to="/">HOME</Link>,
    },
    {
      label: 'INVENTORY',
      items: [
        {
          label: 'Pre-Owned Inventory', template: () => <Link
            to="/cars"
            className="block px-1 py-2 text-sm whitespace-nowrap transition duration-200 ease-in-out border border-transparent hover:border-amber-300 hover:text-amber-300"
          >Pre-Owned Inventory</Link>
        },

      ],
    },
    {
      label: 'FINANCING',
      items: [
        {
          label: 'FINANCE DEPARTMENT', template: () => <Link to="/finance"
            className="block px-1 py-2 text-sm whitespace-nowrap transition duration-300 ease-in-out border border-transparent hover:border-amber-300 hover:text-amber-300"

          >Finance Department</Link>
        },
        {
          label: 'CAR LOAN CALCULATOR', template: () => <Link to="/calculator"
            className="block px-1 py-2 text-sm transition duration-300 ease-in-out border border-transparent hover:border-amber-300 hover:text-amber-300"

          >Car Loan Calculator</Link>
        },
        {
          label: 'APPLY FOR CREDIT', template: () => <Link to="/application"
            className="block px-1 py-2 text-sm transition duration-300 ease-in-out border border-transparent hover:border-amber-300 hover:text-amber-300"

          >Apply For Credit</Link>
        },
      ],
    },
    {
      label: 'ABOUT US',
      template: () => <Link to="/about-us">ABOUT US</Link>,
    },
  ];

  const end = (
    <div className="flex items-center mx-10">
      {isLoggedIn ? (
        <Button label="LOGOUT" className="p-button-text custom-button text-amber-200" onClick={logout} />
      ) : (
        <Button label="LOGIN" className="p-button-text custom-button text-amber-200" onClick={() => setShowLoginDialog(true)} />
      )}

    </div>
  )

  return (
    <header className="custom-header bg-gray-900 p-4 shadow-lg">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img src={
              siteLogo
            } alt="Motor Super Kings" className="h-auto max-h-20 w-auto sm:max-h-16 md:max-h-18 lg:max-h-20 flex-shrink-0" />
          </Link>
        </div>

        {/* Centered Menu Items */}
        <div className="flex-grow flex justify-center gap-8 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <Menubar
            model={items}
            className="bg-transparent border-none custom-menubar menu-item spaced-menu-items"
          />
        </div>

        {/* End buttons */}
        <div className="flex items-center gap-3">
          {end}
        </div>

        <Dialog header="LOGIN" visible={showLoginDialog} onHide={() => setShowLoginDialog(false)} className="w-[350px] sm:w-[300px] md:w-[350px] lg:w-[400px] shadow-lg font-bold bg-gray-600 text-zinc-900"
          closeIcon={<i className="pi pi-times text-red-500 hover:text-red-700 text-lg"></i>}
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="username">Username</label>
            <InputText value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" 
            className="p-2 mx-2 rounded-md bg-zinc-700 border border-gray-600
           text-amber-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
            <label htmlFor="username">Password</label>
            <Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" className="p-2 mx-2 rounded-md bg-zinc-700 border border-gray-600 text-amber-300 focus:ring-2 focus:ring-blue-500" inputClassName="w-full bg-transparent text-amber-300 placeholder-gray-400  focus:outline-none"
              feedback={false} />
            <Button label="LOGIN" severity="secondary" onClick={handleLogin} className="mx-2 my-2 bg-amber-300 hover:bg-blue-600 text-black font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
            />
          </div>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;

