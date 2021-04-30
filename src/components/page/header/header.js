import React from 'react';
import '../../../css/main.css';


const Header = () => {
    return (
        <div>
            <header>
                <div className='container'>
                    <div className='row'>
                        <img src='/img/logo/logo.png' className='logo'/>
                        <span className='header-text'>Fox Page
                        </span>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;