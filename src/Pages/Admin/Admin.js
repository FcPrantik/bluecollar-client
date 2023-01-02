import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {


    return (
        <div className="drawer drawer-mobile mt-10 bg-accent">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/admin/orderlist'>Order List</Link></li>
                    <li><Link to='/admin/addservice'>Add Service</Link></li>
                    <li><Link to='/admin/users'>Make Admin</Link></li>
                    <li><Link to='/admin/manageservice'>Manage Service</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;