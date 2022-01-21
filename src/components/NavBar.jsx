import React from "react";
import { Link } from "react-router-dom";
export default function NavSection() {
    return (
        <React.Fragment>
            <div className="Navsection">
                <div className="nav-wrapper">
                    <div className="logo">
                        <h2>Carry Go</h2>
                    </div>
                    <div className="fullExtras">
                        <div className="links">
                            <Link to="/">Home</Link>
                            <Link to="#mid">Services</Link>
                            <Link to="/Tracking">Tracking</Link>
                            <Link to="#foo">Contacts</Link>
                            <Link to="#">About</Link>
                        </div>
                        <div className="extra">
                            <Link to="#">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
