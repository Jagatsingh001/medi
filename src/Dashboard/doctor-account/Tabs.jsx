import React from 'react';
import { BiMenu } from 'react-icons/bi';
import {authContext} from '../../context/AuthContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const Tabs = ({ tab, setTab }) => {

  const {dispatch} = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch ({type:'LOGOUT'});
    navigate('/');
  };

  const handleDeleteAccount = () => {
    // Implement your delete account logic here
    console.log('Account deleted');
  };

  return (
    <div className='flex justify-start'>
      <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
        <button
          onClick={() => setTab('overview')}
          className={`${
            tab === 'overview' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab('appointments')}
          className={`${
            tab === 'appointments' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab('settings')}
          className={`${
            tab === 'settings' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
        <button
          onClick={handleLogout}
          className='w-full btn mt-4 bg-red-500 hover:bg-red-600 text-white rounded-md'
        >
          Logout
        </button>
        <button
          onClick={handleDeleteAccount}
          className='w-full btn mt-4 bg-red-500 hover:bg-red-600 text-white rounded-md'
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Tabs;