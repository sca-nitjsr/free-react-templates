import React from "react"
import './Container.css'
import ThemeCard from "./ThemeCard";

import theme1 from '../../images/theme1.jpeg';
import theme2 from '../../images/theme2.jpg';
import theme3 from '../../images/theme3.png';
import theme4 from '../../images/theme4.png';
import theme5 from '../../images/theme5.png';
import theme6 from '../../images/theme6.png';
import theme7 from '../../images/theme7.png';
import theme8 from '../../images/theme8.png';

const Container = () => {
    return (
        <div>
            <div className="heading">
                <h2>Latest React Templates & Components</h2>

            </div>
        <div className="cardContainer">
            <ThemeCard address={theme1} name={"Theme1 Heading"} />
            <ThemeCard address={theme2} name={"Theme2 Heading"} />
            <ThemeCard address={theme3} name={"Theme3 Heading"} />
            <ThemeCard address={theme4} name={"Theme4 Heading"} />
            <ThemeCard address={theme5} name={"Theme5 Heading"} />
            <ThemeCard address={theme6} name={"Theme6 Heading"} />
            <ThemeCard address={theme7} name={"Theme7 Heading"} />
            <ThemeCard address={theme8} name={"Theme8 Heading"} />
        </div>
        </div>
    )
};

export default Container;