import '../styles/contatos.css'
import Header from "../components/Header";


export default function Page() {
    return (
        <>
            <Header />

            <main className="contact-page">
                <section className="contact-header">
                    <h1>Entre em Contato Conosco</h1>
                    <p>Estamos aqui para ajudar! Preencha o formulário abaixo ou entre em contato através de nossos canais.</p>
                </section>

                <section className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" name="name" placeholder="Seu Nome" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Seu Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem:</label>
                            <textarea id="message" name="message" placeholder="Sua Mensagem" required></textarea>
                        </div>
                        <button type="submit" className="primary-button">Enviar</button>
                    </form>
                </section>

                <section className="contact-info">
                    <h2>Informações de Contato</h2>
                    <p>Email: contato@pedralhaerp.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                    <p>Endereço: Rua Pedrangolango, 123, Pedrangolândia - SP, Pedrongo</p>
                </section>
            </main>

        </>
    );
}
