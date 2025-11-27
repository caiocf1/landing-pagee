import React from 'react';
import Section from './ui/Section';
import { CheckCircle2 } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        "Mais clientes atendidos em menos tempo",
        "Equipe focada no que realmente gera lucro",
        "Visibilidade total da operação",
        "Menos erros e retrabalho",
        "Crescimento sem aumentar o time",
        "Padronização + previsibilidade de resultados",
        "Tempo livre para pensar estrategicamente"
    ];

    return (
        <Section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-3xl)' }}>
                    <div>
                        <h2 style={{ textAlign: 'left', marginBottom: 'var(--spacing-md)' }}>
                            Por que escolher a <br />
                            <span className="text-gradient">VX Solutions?</span>
                        </h2>
                        <p style={{ fontSize: '20px', maxWidth: '480px' }}>
                            Não entregamos apenas software. Entregamos uma nova forma de operar, onde a tecnologia trabalha para você, e não o contrário.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '16px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-light)'
                                }}
                            >
                                <CheckCircle2 size={24} color="var(--accent-blue)" />
                                <span style={{ fontSize: '18px', fontWeight: 500 }}>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
