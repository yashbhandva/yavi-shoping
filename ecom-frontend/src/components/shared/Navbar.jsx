import { Badge } from "@mui/material";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";
import ThemeToggle from "./ThemeToggle";
import '../../assets/style/navbar.scss';

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [navbarOpen]);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <div className="logo-image-wrapper">
                        <img
                            src="/images/logo.png"
                            alt="E-Shop Logo"
                            className="logo-image"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                const fallback = e.target.nextElementSibling;
                                if (fallback) fallback.style.display = 'flex';
                            }}
                        />
                        <div className="logo-fallback">
                            <span className="logo-text">E-Shop</span>
                        </div>
                    </div>
                </Link>

                <ul className={`navbar-menu ${navbarOpen ? "navbar-menu-open" : ""}`}>
                    {navItems.map((item) => (
                        <li key={item.path} className="nav-item">
                            <Link
                                className={`nav-link ${path === item.path ? "nav-link-active" : ""}`}
                                to={item.path}
                                onClick={() => setNavbarOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                    <li className="nav-item cart-item">
                        <Link
                            className="nav-link cart-link"
                            to="/cart"
                            onClick={() => setNavbarOpen(false)}
                        >
                            <Badge
                                showZero
                                badgeContent={cart?.length || 0}
                                color="primary"
                                overlap="circular"
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            >
                                <FaShoppingCart className="cart-icon" />
                            </Badge>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <ThemeToggle />
                    </li>

                    {(user && user.id) ? (
                        <li className="nav-item">
                            <UserMenu />
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link
                                className="login-button"
                                to="/login"
                                onClick={() => setNavbarOpen(false)}
                            >
                                <FaSignInAlt className="login-icon" />
                                <span>Login</span>
                            </Link>
                        </li>
                    )}
                </ul>

                <button
                    className="mobile-toggle"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    aria-label={navbarOpen ? "Close menu" : "Open menu"}
                    aria-expanded={navbarOpen}
                >
                    {navbarOpen ? (
                        <RxCross2 className="toggle-icon" />
                    ) : (
                        <IoIosMenu className="toggle-icon" />
                    )}
                </button>
            </div>
        </div>
    )
}

export default Navbar;