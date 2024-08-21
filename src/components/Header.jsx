import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'


export default function Header() {
    const pathname = usePathname()
    const rotas = [
        { 'href': '/', 'classe-ativo': () => pathname == '/' ? 'ativo' : '', 'label': 'Home' },
        { 'href': '/contatos', 'classe-ativo': () => pathname == '/contatos' ? 'ativo' : '', 'label': 'Contato' },
        { 'href': '/sobre', 'classe-ativo': () => pathname == '/sobre' ? 'ativo' : '', 'label': 'Sobre' },
    ]


    return (
        <header className="header">
            <Link href="/" className="logo">PedralhaERP</Link>
            <nav className="header-right">
                <div className="nav-menu">
                    {rotas.map((item) => <Link className={item['classe-ativo']()} href={item.href}>{item.label}</Link>
                    )}
                </div>
                <div className="actions">
                    <FontAwesomeIcon icon={faMagnifyingGlass} color='#FCA311' size='2xl' />
                    <input type="search" placeholder="Busque Aqui" id="search-bar-input" />
                    <Link className="secondary-button" href="./login.html">Login</Link>
                    <Link className="primary-button" href="./cadastro.html">Cadastrar</Link>
                </div>
            </nav>
        </header>
    );
}

