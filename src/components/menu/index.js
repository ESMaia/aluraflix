import React from'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './buttonLink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Aluraflix"/>
            </a>
            <ButtonLink href="/" className="ButtonLink">Novo video</ButtonLink>
        </nav>
    );
}

export default Menu;