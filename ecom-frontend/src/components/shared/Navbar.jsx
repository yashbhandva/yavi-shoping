import { Badge } from "@mui/material";
import { useState } from "react";
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
    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="navbar-container">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    {/* Logo with image */}
                    <div className="logo-image-wrapper">
                        <img
                            src="/images/logo.png"
                            alt="E-Shop Logo"
                            className="logo-image"
                            onError={(e) => {
                                // Fallback if logo doesn't exist
                                e.target.style.display = 'none';
                                const fallback = e.target.nextElementSibling;
                                if (fallback) fallback.style.display = 'flex';
                            }}
                        />
                        {/* Fallback text logo */}
                        <div className="logo-fallback">
                            <span className="logo-text">E-Shop</span>
                        </div>
                    </div>
                </Link>

                {/* Rest of the code remains same */}
                <ul className={`navbar-menu ${navbarOpen ? "navbar-menu-open" : ""}`}>
                    {/* ... rest of menu items same as before ... */}

                    <li className="nav-item">
                       <Link
                            className={`nav-link ${path === "/" ? "nav-link-active" : ""}`}
                            to="/"
                            onClick={() => setNavbarOpen(false)}
                        >
                            Home
                       </Link>
                    </li>

                    <li className="nav-item">
                       <Link
                            className={`nav-link ${path === "/products" ? "nav-link-active" : ""}`}
                            to="/products"
                            onClick={() => setNavbarOpen(false)}
                        >
                            Products
                       </Link>
                    </li>

                    <li className="nav-item">
                       <Link
                            className={`nav-link ${path === "/about" ? "nav-link-active" : ""}`}
                            to="/about"
                            onClick={() => setNavbarOpen(false)}
                        >
                            About
                       </Link>
                    </li>

                    <li className="nav-item">
                       <Link
                            className={`nav-link ${path === "/contact" ? "nav-link-active" : ""}`}
                            to="/contact"
                            onClick={() => setNavbarOpen(false)}
                        >
                            Contact
                       </Link>
                    </li>

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