import React from "react";

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <footer className="page-footer">
                <div className="footer-copyright footer">
                    <div className="container">{`Copyright © Random Blog ${year}`}</div>
                </div>
            </footer>
        </>
    );
};
