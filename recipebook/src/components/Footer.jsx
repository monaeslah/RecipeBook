import React from 'react';
import '../app.css';

function Footer() {
    return (
        <footer className='footer'>
            <h3>
                <a
                    href='https://github.com/monaeslah/RecipeBook'
                    target="https://github.com/monaeslah/RecipeBook"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none', marginLeft: '300px' }}
                >
                    Check our repository - ©M.Y.M All right reserved
                </a>
            </h3>
        </footer>
    );
}

export default Footer;
