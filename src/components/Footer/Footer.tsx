import React from "react";
import Links from "../Links/Links";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row d-flex align-items-center h-100 w-100">
                <div className="col-9">
                    <p className="licence">© 2021 Maria Tsalapova</p>
                </div>
                <div className="col-3 d-flex" style={{gap: 20}}>
                    <Links/>
                </div>
            </div>
        </footer>
    )
}

export default Footer