import React from 'react';
import Section from './ui/Section';
import { Check } from 'lucide-react';

const TargetAudience = () => {
    const criteria = [
        "Têm operação ativa e processos internos",
        "Querem escalar com eficiência",
        "Desejam reduzir custos operacionais",
        "Precisam gerar resultados previsíveis",
        "Buscam organização e tempo de verdade"
    ];

    const sectors = [
        "Atendimento",
        "Serviços",
        "Indústria",
        "Comercial",
        "Projetos",
        "Operações"
    ];

    return (
        <Section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
            <div className="container">
                <h2>Quem atendemos</h2>

                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <div className="card">
                        <h3 style={{ marginBottom: '24px' }}>Empresas que:</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {criteria.map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <div style={{
                                        marginTop: '4px',
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        background: 'rgba(41, 151, 255, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Check size={12} color="var(--accent-blue)" />
                                    </div>
                                    <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '24px' }}>Setores de atuação:</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {sectors.map((sector, index) => (
                                <span
                                    key={index}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '100px',
                                        background: 'var(--bg-tertiary)',
                                        border: '1px solid var(--border-light)',
                                        color: 'var(--text-secondary)',
                                        cursor: 'default'
                                    }}
                                >
                                    {sector}
                                </span>
                            ))}
                        </div>

                        <div style={{
                            marginTop: '32px',
                            padding: '24px',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, rgba(41, 151, 255, 0.1), rgba(191, 90, 242, 0.1))',
                            border: '1px solid var(--border-light)'
                        }}>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                                Se sua empresa se encaixa nesses critérios, temos a solução ideal para o seu momento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TargetAudience;
