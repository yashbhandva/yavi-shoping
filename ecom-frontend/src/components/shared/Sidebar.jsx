import React, { useState } from 'react'
import { FaTachometerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { adminNavigation, sellerNavigation } from '../../utils';
import classNames from 'classnames';

const Sidebar = ({isProfileLayout = false}) => {
    const pathName = useLocation().pathname;
    const { user } = useSelector((state) => state.auth);
    const [expandedGroups, setExpandedGroups] = useState({});

    const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");
    const sideBarLayout = isAdmin ? adminNavigation : sellerNavigation;

    const toggleGroup = (groupName) => {
        setExpandedGroups(prev => ({
            ...prev,
            [groupName]: !prev[groupName]
        }));
    };
    
    return (
        <div className='sidebar-container'>
            <div className='sidebar-header'>
                <div className='header-icon-wrapper'>
                    <FaTachometerAlt className='header-icon'/>
                </div>
                <div className='header-content'>
                    <h1 className='header-title'>
                        {isAdmin ? "Admin Panel" : "Seller Panel"}
                    </h1>
                    <p className='header-subtitle'>
                        {isAdmin ? "Manage Everything" : "Your Dashboard"}
                    </p>
                </div>
            </div>
            
            <nav className='sidebar-nav'>
                <ul role='list' className='nav-list'>
                    <li>
                        <ul role='list' className='nav-sublist'>
                            {sideBarLayout.map((item) => (
                                <li key={item.name} className='nav-item'>
                                    <Link
                                        to={item.href}
                                        className={classNames(
                                            'nav-link',
                                            pathName === item.href ? "active" : "inactive"
                                        )}>
                                        <item.icon className='nav-icon'/>
                                        <span className='nav-text'>{item.name}</span>
                                        {item.badge && (
                                            <span className='badge'>{item.badge}</span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>

            <div className='sidebar-footer'>
                <div className='user-profile'>
                    <div className='avatar'>
                        {user?.firstName?.charAt(0) || 'U'}
                    </div>
                    <div className='user-info'>
                        <div className='user-name'>
                            {user?.firstName || 'User'} {user?.lastName || ''}
                        </div>
                        <div className='user-role'>
                            {isAdmin ? 'Administrator' : 'Seller'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar