import React from 'react';
import Section from './ui/Section';
import { Bot, LayoutDashboard, Workflow } from 'lucide-react';

const Solutions = () => {
    const solutions = [
        {
            icon: Bot,
            title: "Agentes Inteligentes",
            description: "Atendem, respondem, qualificam, coletam dados e alimentam seu sistema sem intervenção humana."
        },
        {
            icon: LayoutDashboard,
            title: "Sistemas Centralizados",
            description: "Uma única plataforma para controlar atendimento, tarefas, processos, indicadores e resultados."
        },
        {
            icon: Workflow,
            title: "Automação de Processos",
            description: "Tudo conecta. Tudo conversa. Tudo funciona no piloto automático."
        }
    ];

    return (
        <Section className="bg-[var(--bg-primary)]">
            <div className="container">
                <h2>O que entregamos</h2>

                <div className="grid grid-3">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{ padding: '40px 32px' }}
                        >
                            <div
                                className="flex-center"
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '16px',
                                    background: 'rgba(41, 151, 255, 0.1)',
                                    marginBottom: '24px'
                                }}
                            >
                                <solution.icon size={32} color="var(--accent-blue)" />
                            </div>

                            <h3>{solution.title}</h3>
                            <p>{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Solutions;
