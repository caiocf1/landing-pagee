import React from 'react';
import Section from './ui/Section';
import { Search, Code2, Rocket } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            title: "Diagnóstico",
            description: "Entendemos seus processos e identificamos gargalos que custam tempo e dinheiro."
        },
        {
            icon: Code2,
            title: "Projeto e Implementação",
            description: "Construímos agentes e sistemas que eliminam os gargalos identificados."
        },
        {
            icon: Rocket,
            title: "Evolução Contínua",
            description: "Ajustes, suporte e melhorias constantes conforme seu negócio cresce."
        }
    ];

    return (
        <Section>
            <div className="container text-center">
                <h2>Como funciona</h2>

                <div className="grid grid-3" style={{ position: 'relative' }}>
                    {/* Connector Line */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '48px',
                            left: '0',
                            width: '100%',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, var(--accent-blue), transparent)',
                            opacity: 0.3,
                            zIndex: 0
                        }}
                        className="hidden-mobile"
                    />

                    {steps.map((step, index) => (
                        <div key={index} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div
                                className="flex-center"
                                style={{
                                    width: '96px',
                                    height: '96px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-light)',
                                    marginBottom: '24px',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                                }}
                            >
                                <step.icon size={40} color="var(--accent-blue)" />
                            </div>

                            <div className="card" style={{ width: '100%', height: '100%' }}>
                                <div style={{ fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '8px' }}>0{index + 1}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default HowItWorks;
