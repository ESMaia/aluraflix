import React from'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';
import ButtonLink from '../buttonLink';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Aluraflix"/>
            </Link>
            <ButtonLink as={Link} to="/cadastro/video" className="ButtonLink">Novo video</ButtonLink>
        </nav>
    );
}

export default Menu;