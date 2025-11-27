import React from 'react';
import Button from './ui/Button';
import Section from './ui/Section';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Effects */}
            <div className="hero-bg-glow hero-glow-blue" />
            <div className="hero-bg-glow hero-glow-purple" />

            <div className="container text-center relative z-10">
                <div className="hero-badge fade-in">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-gray-300 font-medium tracking-wide">VX Solutions</span>
                </div>

                <h1 className="fade-in" style={{ transitionDelay: '0.1s' }}>
                    Transforme sua operação com <br />
                    <span className="text-gradient">automação e IA</span>
                </h1>

                <p className="fade-in" style={{ maxWidth: '600px', margin: '0 auto 40px', transitionDelay: '0.2s' }}>
                    Sistemas e agentes inteligentes que assumem processos repetitivos, eliminam erros e liberam o seu time para focar no que realmente importa: crescer.
                </p>

                <div className="fade-in" style={{ transitionDelay: '0.3s' }}>
                    <Button
                        variant="primary"
                        size="lg"
                        icon={ArrowRight}
                        onClick={() => window.open('https://wa.me/5511965751326?text=Ol%C3%A1%20vim%20da%20landing%20page', '_blank')}
                    >
                        Agendar diagnóstico gratuito
                    </Button>
                </div>


            </div>
        </section>
    );
};

export default Hero;
