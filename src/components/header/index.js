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
                            <li>Outras Fazendas</li>
                            <li>|</li>
                            <li>Fazenda</li>
                            <li>Café</li>
                            <li className='logout'>Sair</li>
                            
                        </ul>
                    </nav>
                </div>
            </AreaHeader>
        </>
    )
}

export default Header;