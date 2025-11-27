import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-primary)', paddingTop: '80px', borderTop: '1px solid var(--border-light)' }}>
            <Section style={{ paddingBottom: '80px', paddingTop: 0 }}>
                <div className="container text-center" style={{ marginBottom: '80px' }}>
                    <h2 style={{ marginBottom: '24px' }}>
                        Sua empresa não precisa de mais trabalho. <br />
                        Ela precisa de <span className="text-gradient">menos esforço para gerar mais resultado.</span>
                    </h2>

                    <p style={{ fontSize: '20px', marginBottom: '40px' }}>
                        Vamos organizar sua operação e impulsionar seu crescimento?
                    </p>

                    <Button
                        variant="primary"
                        size="lg"
                        icon={ArrowRight}
                        style={{ boxShadow: '0 0 40px rgba(41, 151, 255, 0.2)' }}
                        onClick={() => window.open('https://wa.me/5511965751326?text=Ol%C3%A1%20vim%20da%20landing%20page', '_blank')}
                    >
                        Agendar diagnóstico gratuito
                    </Button>
                </div>

                <div className="container" style={{ borderTop: '1px solid var(--border-light)', paddingTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
                    <div className="flex-center" style={{ gap: '8px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontWeight: 'bold', color: 'white' }}>VX</span>
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '18px' }}>VX Solutions</span>
                    </div>

                    <div style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>
                        © {new Date().getFullYear()} VX Solutions. Todos os direitos reservados.
                    </div>

                    <div className="flex-center" style={{ gap: '16px' }}>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}><Twitter size={20} /></a>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}><Linkedin size={20} /></a>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}><Instagram size={20} /></a>
                    </div>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;
