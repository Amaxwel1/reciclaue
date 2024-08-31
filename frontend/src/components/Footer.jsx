import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-footer'>
            <div><img className='logo' src="/recicla2.png" alt="" /></div>
            <div className='container-content'>
                <div className='container-endereco'>
                    <div className='endereco'>
                        <img src="/local.png" alt="" />
                        <h4>Endereço</h4>
                    </div>
                    <div>
                        <h4 className="branco">
                            QS 07, Lote 01, Taguatinga Sul - Taguatinga, Brasília - DF, 71966-700
                        </h4>
                    </div>
                </div>
                <div className='container-menu'>
                    <h4>Menu: </h4>
                    <div>
                        <h4 className='menu-option branco'>Contato</h4>
                        <h4 className='menu-option branco'>Home</h4>
                        <h4 className='menu-option branco'>Aprenda a reciclar</h4>
                    </div>
                </div>
                <div className='container-contato'>
                    <div className='footer-option'>
                        <img src="/Telephone.png" alt="" />
                        <h4 className="branco">(61) 99999-8888</h4>
                    </div>
                    <div className='footer-option'>
                        <img src="/Mail.png" alt="" />
                        <h4 className="branco">Email: reciclaue@gmail.com</h4>
                    </div>
                    <div className='footer-option'>
                        <img src="/Clock.png" alt="" />
                        <h4 className="branco">Horário de atendimento seg a sex - 09h às 18h</h4>
                    </div>
                </div>
                <div className='redes-sociais'>
                    <h4>Redes Sociais</h4>
                    <img src="/sociais.png" alt="" />
                </div>
            </div>
            <div className='direitos'>
                <h4>Recicla Ué - Todos os direitos reservados</h4>
            </div>
        </div>
    )
}

export default Footer;