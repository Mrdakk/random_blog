import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper header">
                    <p className="brand-logo">Random Blog</p>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <Link className="link" to="/">
                                Home
              </Link>
                        </li>
                        <li>
                            <Link className="link" to="/authors">
                                Authors
              </Link>
                        </li>
                        <li>
                            <Link className="link" to="/about">
                                About
              </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
