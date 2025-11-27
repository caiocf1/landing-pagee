import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { ArrowRight, TrendingUp, PieChart, Wallet } from 'lucide-react';

const SocialProof = () => {
    const stats = [
        {
            icon: TrendingUp,
            value: "90%",
            label: "Eficiência real",
            description: "Reduzimos tempo de tarefas repetitivas em até 90%."
        },
        {
            icon: PieChart,
            value: "Dados",
            label: "Crescimento",
            description: "Indicadores claros para decisões melhores."
        },
        {
            icon: Wallet,
            value: "+Margem",
            label: "Financeiro saudável",
            description: "Mais margem, menos custos operacionais."
        }
    ];

    return (
        <Section>
            <div className="container text-center">
                <div className="grid grid-3" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{ padding: '32px' }}>
                            <div style={{ fontSize: '64px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{stat.value}</div>
                            <div style={{ fontSize: '20px', fontWeight: 500, color: 'var(--accent-blue)', marginBottom: '16px' }}>{stat.label}</div>
                            <p>{stat.description}</p>
                        </div>
                    ))}
                </div>

                <div className="card" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', background: 'var(--bg-secondary)' }}>
                    <p style={{ fontSize: '20px', color: 'white', marginBottom: '24px' }}>Quer ver na prática?</p>
                    <Button variant="secondary" size="lg" icon={ArrowRight} onClick={() => window.open('https://docs.google.com/document/d/1krhrw-lJbZPiWC-YRb6jmZzNAxCgCrUq5b6GuRUYp6g/edit?tab=t.0#heading=h.ya728pxfsskx', '_blank')}>
                        Confira nosso portfólio de projetos
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default SocialProof;
