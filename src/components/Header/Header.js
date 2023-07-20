import React from "react"
import './Header.css'
import { Fragment } from "react";

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="headerLinks">
                    <a href="/">Home</a>
                    <a href="/templates">Templates</a>
                    <a href="/components">Components</a>
                    <a href="/popular">Popular</a>
                    <a href="/favourites">Favourites</a>
                    <a href="/contributors">Contributors</a>
                </div>
            </div>
        </Fragment>

    )
};

export default Header;