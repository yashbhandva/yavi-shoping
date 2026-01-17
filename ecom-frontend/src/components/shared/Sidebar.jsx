import React from 'react'
import { FaTachometerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { adminNavigation, sellerNavigation } from '../../utils';
import classNames from 'classnames';

const Sidebar = ({isProfileLayout = false}) => {
    const pathName = useLocation().pathname;
    const { user } = useSelector((state) => state.auth);

    const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");

    const sideBarLayout = isAdmin ? adminNavigation : sellerNavigation;
    
  return (
    <div className='sidebar-container'>
        <div className='sidebar-header'>
            <FaTachometerAlt className='header-icon'/>
            <h1 className='header-title'>
                {isAdmin ? "Admin Panel" : "Seller Panel"}
            </h1>
        </div>
        <nav className='sidebar-nav'>
            <ul role='list' className='nav-list'>
                <li>
                    <ul role='list' className='nav-sublist'>
                        {sideBarLayout.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className={classNames(
                                        'nav-link',
                                        pathName === item.href
                                            ? "active"
                                            : "inactive"
                                    )}>

                                        <item.icon className='nav-icon'/>
                                        {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar