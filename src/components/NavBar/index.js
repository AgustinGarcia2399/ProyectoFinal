import React from 'react';
import './styles.css';
import logo from './logomarca.png'

const NavBar = ({carrito}) => {
    return(
        <div id='navBar'>
            <div id='logo'>
                <img src={logo} alt='logo'/>
                <p id='wolf'>The Wolf</p>
            </div>
            <div  id="categorias">
                <ul>
                    <li className='categoria'><a href='#'>REMERAS</a></li>
                    <li className='categoria'><a href='#'>PANTALONES</a></li>
                    <li className='categoria'><a href='#'>ZAPATOS</a></li>
                    <li className='categoria'><a href='#'>SOMBREROS</a></li>
                </ul>
            </div>
            {carrito}
        </div>
    )
}
export default NavBar;
