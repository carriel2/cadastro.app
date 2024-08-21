import Link from 'next/link';
// import '../styles/globals.css'
// import '../styles/header.css'
// import '../styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className="land-page">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
          <div>
            <section className="hero-section">
              <h1>Bem-vindo ao PedralhaERP!</h1>
              <p>
                Transforme a forma como você gerencia sua empresa com nosso software ERP intuitivo e poderoso.
                Experimente hoje mesmo e veja a diferença.
              </p>
              <div className="cta-buttons">
                <Link href="/pages/cadastro" className="primary-button">Comece Agora</Link>
                <Link href="/pages/sobre" className="secondary-button">Saiba Mais</Link>
              </div>
            </section>
          </div>
          <div>
            <section className="hero-section">
              <h1>Aplicativo para lançamentos de Pedido - Canatiba Têxtil</h1>
              <p>
                Conheça nosso novo APP desenvolvido em parceria com a empresa Canatiba Têxtil.
              </p>
              <div className="cta-buttons">
                <Link href="https://canatiba.com.br/" className="primary-button">Saiba Mais</Link>
              </div>
            </section>
          </div>
          <div>
            <section className='hero-section'>
              <h1> Integração de Maquinário - Indústrias Romi </h1>
              <p>
                Conheça nossa nova integração de maquinários para as Indústrias Romi.
                Desenvolvido em parceria com o sindicato dos metalúrgicos e grandes empresas da área.
              </p>
              <div className="cta-buttons">
                <Link href="https://romi.com/" className="primary-button">Saiba Mais</Link>
              </div>
            </section>
          </div>
          <div>
            <section className='hero-section'>
              <h1> Participe de nossa equipe! </h1>
              <p>
                Como pioneiros na área, a equipe do PedralhaERP está sempre em constante aprimoramento, gostaria de participar de nossa equipe?
                Clique no botão abaixo para entrar no nosso portal de vagas.
              </p>
              <div className="cta-buttons">
                <Link href="https://romi.com/" className="primary-button">Saiba Mais</Link>
              </div>
            </section>
          </div>

        </Carousel>

        <section className="features-section">
          <h2>Características Principais</h2>
          <div className="features">
            <div className="feature">
              <FontAwesomeIcon icon={faCogs} color='#FCA311' size='2xl' />
              <h3>Automação</h3>
              <p>Automatize processos e reduza o tempo gasto com tarefas manuais.</p>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faChartLine} color='#FCA311' size='2xl' />
              <h3>Análise Avançada</h3>
              <p>Obtenha insights detalhados sobre o desempenho da sua empresa.</p>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faUsers} color='#FCA311' size='2xl' />
              <h3>Gestão de Equipes</h3>
              <p>Gerencie sua equipe com facilidade e acompanhe o progresso de projetos.</p>
            </div>
          </div>
        </section>

        <section className="products-section">
          <h2>Nossos Produtos</h2>
          <div className="products">
            <div className="product">
              <h3>Sistemas Romi S.A</h3>
              <p>Nosso sistema desenvolvido especialmente para nossa parceria com as Industrias Romi.</p>
              <a className="primary-button" href="https://www.romi.com/" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
            </div>
            <div className="product">
              <h3>Sistemas Canatiba Têxtil</h3>
              <p>Nosso sistema desenvolvido especialmente para nossa parceria com a CANATIBA Têxtil.</p>
              <a className="primary-button" href="https://canatiba.com.br/" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>O que Nossos Clientes Dizem</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"O PedralhaERP transformou a nossa gestão e trouxe eficiência para nossa empresa."</p>
              <cite>- Andrezes, Front-End Dev Canatiba</cite>
            </div>
            <div className="testimonial">
              <p>"Uma ferramenta incrível, fácil de usar e muito poderosa. Recomendo a todos!"</p>
              <cite>- Vitrango, Back-End Dev Canatiba</cite>
            </div>
            <div className="testimonial">
              <p>"O PedralhaERP simplesmente transformou o desempenho da minha equipe. Super recomendado!"</p>
              <cite>- Deninho, Chefinho Desenvolvimento Canatiba</cite>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
