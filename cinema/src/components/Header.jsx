import React from 'react';


function Header() {
    return   (<nav className="red darken-4 navig">
                <div className="nav-wrapper">
                <a href="google.com" className="brand-logo right">Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                </div>
            </nav>)          
}






export {Header}