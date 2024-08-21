import React from 'react';
import '../styles/sobre.css';
import Header from '../components/Header';
import Image from 'next/image';
import fachadaImage from "../../public/fachada-pedralhaerp.jpg"
import historiaImage from "../../public/historia-pedralhaerp.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHeader } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';


export default function Sobre() {
    return (
        <>
            <Header />
            <div className="sobre-container">
                <header className="sobre-header">
                    <h1>Sobre a PedralhaERP</h1>
                    <p>Inovação e excelência em sistemas ERP desde 2005</p>
                </header>

                <section className="sobre-missao">
                    <div className="content-wrapper">
                        <div className="text-content">
                            <h2>Nossa Missão</h2>
                            <p>
                                Na PedralhaERP, nossa missão é transformar a gestão empresarial por meio de soluções ERP de alta qualidade,
                                que atendem às necessidades específicas de cada cliente. Desde 2005, temos nos dedicado a criar sistemas que
                                melhoram a eficiência e a produtividade das empresas em diversos setores.
                            </p>
                        </div>
                        <div className="image-content">
                            <Image src={fachadaImage} alt="Missão da Empresa" width={500} height={255} />
                        </div>
                    </div>
                </section>

                <section className="sobre-historia">
                    <div className="content-wrapper">
                        <div className="image-content">
                            <Image src={historiaImage} alt="História da Empresa" width={500} height={255} />
                        </div>
                        <div className="text-content">
                            <h2>Nossa História</h2>
                            <p>
                                Fundada em 2005 por Pedrangolango Barros, a PedralhaERP começou como uma pequena empresa focada em desenvolver
                                soluções ERP para empresas locais. Com o passar dos anos, expandimos nossa atuação e hoje atendemos clientes em
                                todo o país, oferecendo uma ampla gama de sistemas ERP que se adaptam às necessidades de cada negócio.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="sobre-produtos">
                    <h2>Nossos Produtos</h2>
                    <div className="product-grid">
                        <div className="product-item">
                            <FontAwesomeIcon icon={faBuilding} size='2x' className='icon' />
                            <h3>ERP para Indústrias</h3>
                            <p>Uma solução robusta para gerenciar a produção, logística e distribuição em indústrias de grande porte.</p>
                        </div>
                        <div className="product-item">
                            <FontAwesomeIcon icon={faShop} size='2x' className='icon' />
                            <h3>ERP para Comércio</h3>
                            <p>Facilite a gestão de vendas, estoque e relacionamento com o cliente em sua loja.</p>
                        </div>
                        <div className="product-item">
                            <FontAwesomeIcon icon={faDesktop} size='2x' className='icon' />
                            <h3>ERP para Serviços</h3>
                            <p>Otimize a gestão de projetos e recursos em empresas de serviços, garantindo a entrega de qualidade.</p>
                        </div>
                    </div>
                </section>

                <section className="sobre-equipe">
                    <h2>Nossa Equipe</h2>
                    <div className="equipe-grid">
                        <div className="equipe-item">
                            <FontAwesomeIcon icon={faUserGraduate} size='2x' className='icon' />
                            <h3>Pedrangolango Barros</h3>
                            <p>Fundador e CEO</p>
                        </div>
                        <div className="equipe-item">
                            <FontAwesomeIcon icon={faPeopleGroup} size='2x' className='icon' />
                            <h3>Equipe de Desenvolvimento</h3>
                            <p>Profissionais dedicados à criação de soluções inovadoras.</p>
                        </div>
                        <div className="equipe-item">
                            <FontAwesomeIcon icon={faHeadset} size='2x' className='icon' />
                            <h3>Equipe de Suporte</h3>
                            <p>Prontos para atender e solucionar qualquer necessidade dos clientes.</p>
                        </div>
                    </div>
                </section>

            </div>
            <footer className="sobre-footer">
                <p>&copy; 2024 PedralhaERP. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}
