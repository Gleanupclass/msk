import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Header.css';

import siteLogo from '../../assets/site-logo.jpg';

const Header = ({ isLoggedIn, login, logout }) => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      label: 'LOGIN',
      visible: isMobile,
      command: () => setShowLoginDialog(true),
      className: 'mobile-only'
    },
    {
      label: 'HOME',
      template: () => <Link to="/" className="menu-link">HOME</Link>,
    },
    {
      label: 'INVENTORY',
      items: [
        {
          label: 'Pre-Owned Inventory',
          template: () => (
            <Link
              to="/cars"
              className="menu-link submenu-link"
            >
              Pre-Owned Inventory
            </Link>
          ),
        },
      ],
    },
    {
      label: 'FINANCING',
      items: [
        {
          label: 'FINANCE DEPARTMENT',
          template: () => (
            <Link
              to="/finance"
              className="menu-link submenu-link"
            >
              Finance Department
            </Link>
          ),
        },
        {
          label: 'CAR LOAN CALCULATOR',
          template: () => (
            <Link
              to="/calculator"
              className="menu-link submenu-link"
            >
              Car Loan Calculator
            </Link>
          ),
        },
        {
          label: 'APPLY FOR CREDIT',
          template: () => (
            <Link
              to="/application"
              className="menu-link submenu-link"
            >
              Apply For Credit
            </Link>
          ),
        },
      ],
    },
    {
      label: 'ABOUT US',
      template: () => <Link to="/about-us" className="menu-link">ABOUT US</Link>,
    },
  ];

  const start = (
    <Link to="/" className="flex items-center">
      <img
        src={siteLogo}
        alt="Motor Super Kings"
        className="h-auto max-h-16 w-auto"
      />
    </Link>
  );

  const end = !isMobile ? (
    <div className="desktop-login">
      <Button
        label={isLoggedIn ? "LOGOUT" : "LOGIN"}
        className="p-button-text custom-button text-amber-200"
        onClick={isLoggedIn ? logout : () => setShowLoginDialog(true)}
      />
    </div>
  ) : null;

  return (
    <header className="custom-header bg-gray-900 p-4 shadow-lg">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img
              src={siteLogo}
              alt="Motor Super Kings"
              className="h-auto max-h-20 w-auto sm:max-h-16 md:max-h-18 lg:max-h-20 flex-shrink-0"
            />
          </Link>
        </div>

        {/* Menubar wrapper */}
        <div className="flex-grow flex justify-center mobile-menubar">
          <Menubar
            model={items}
            className="bg-transparent border-none custom-menubar menu-item spaced-menu-items"
          />
        </div>

        {/* Login button (visible on desktop) */}
        <div className="hidden md:flex items-center gap-3">{end}</div>

        {/* Login Dialog */}
        <Dialog
          header="LOGIN"
          visible={showLoginDialog}
          onHide={() => setShowLoginDialog(false)}
          className="w-[350px] sm:w-[300px] md:w-[350px] lg:w-[400px] shadow-lg font-bold bg-gray-600 text-zinc-900"
          closeIcon={<i className="pi pi-times text-red-500 hover:text-red-700 text-lg"></i>}
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="username">Username</label>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
              className="login-input"
            />
            <label htmlFor="password">Password</label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="login-input"
              inputClassName="w-full bg-transparent text-amber-300"
              feedback={false}
            />
            <Button
              label="LOGIN"
              severity="secondary"
              onClick={handleLogin}
              className="login-button"
            />
          </div>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;

