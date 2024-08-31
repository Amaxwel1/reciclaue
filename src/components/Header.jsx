import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='container-header'>
            <div>
                <img className="img-header" src="/recicla2.png" alt="" />
            </div>
            <div className='options-header'>
                <div className='option-header'><a href='#'>Home</a></div>
                <div className='option-header'><a href='#'>Aprender a reciclar</a></div>
                <div className='option-header'><a href='#'>Quem somos</a></div>
                <div className='option-header'><a href='#'>Contato</a></div>
            </div>
            <div>
                <div className='option-header'>
                    <a className="login-btn" href="#"><img className="saida-icon" src='/saida.png'></img>Login</a>
                </div>
            </div>
        </div>
    )
}

export default Header;