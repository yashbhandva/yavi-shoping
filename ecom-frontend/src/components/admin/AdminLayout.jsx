import React, { useState } from 'react'
import Sidebar from '../shared/Sidebar'
import { Outlet } from 'react-router-dom'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { RxCross1 } from 'react-icons/rx';
import { FaBars } from 'react-icons/fa';
import '../../assets/style/admin-layout.scss';

const AdminLayout = () => {
    let [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="admin-layout">
        <Dialog 
            open={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
            className="sidebar-mobile-dialog">
        
        <DialogBackdrop 
        transition
        className="sidebar-backdrop" />

        <div className="sidebar-panel-container">
          <DialogPanel 
            transition
            className="sidebar-panel">
                
           <TransitionChild>
            <div className='close-sidebar-btn-container'>
                <button type='button'
                 onClick={() => setSidebarOpen(false)}
                 className='close-sidebar-btn'>
                    <span className='sr-only'> Close Sidebar</span>
                    <RxCross1 className='close-icon'/>
                </button>
            </div>
           </TransitionChild>
           <Sidebar />
          </DialogPanel>
        </div>
      </Dialog>

        <div className='sidebar-desktop'>
            <Sidebar />
        </div>

        <div className='main-content-wrapper'>
            <button
                type='button'
                onClick={() => setSidebarOpen(true)}
                className='mobile-menu-btn'>
                    <span className='sr-only'> Open Sidebar</span>
                    <FaBars className='menu-icon'/>
            </button>

            <main className='main-content'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default AdminLayout