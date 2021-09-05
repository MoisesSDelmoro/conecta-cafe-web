import React from 'react';
import { AreaHeader } from './styled';
import logo from '../../assets/logo2w.png';

function Header() {
    return (
        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>

                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Fazendas</li>
                            <li>Sair</li>
                            
                        </ul>
                    </nav>
                </div>
            </AreaHeader>
        </>
    )
}

export default Header;