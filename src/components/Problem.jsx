import React from 'react';
import Section from './ui/Section';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const Problem = () => {
    return (
        <Section className="bg-[var(--bg-secondary)]">
            <div className="container">
                <h2>O problema que resolvemos</h2>

                <div className="grid grid-3" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                    <div className="card text-center">
                        <div className="flex-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                            <Clock size={40} color="#ef4444" />
                        </div>
                        <h3>Tempo Perdido</h3>
                        <p>Atendimento lento e tarefas manuais que consomem horas preciosas da equipe.</p>
                    </div>

                    <div className="card text-center">
                        <div className="flex-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                            <AlertTriangle size={40} color="#f97316" />
                        </div>
                        <h3>Erros Operacionais</h3>
                        <p>Planilhas quebradas, dados perdidos e retrabalho constante.</p>
                    </div>

                    <div className="card text-center">
                        <div className="flex-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                            <TrendingDown size={40} color="#9ca3af" />
                        </div>
                        <h3>Custo Invisível</h3>
                        <p>Falta de visibilidade que custa dinheiro e clientes todos os dias.</p>
                    </div>
                </div>

                <div className="card" style={{ background: 'var(--bg-tertiary)', padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                    <p style={{ fontSize: '24px', color: 'white', marginBottom: '16px' }}>
                        Nós entramos aqui.
                    </p>
                    <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Criamos <span style={{ color: 'white', fontWeight: 600 }}>soluções de automação sob medida</span> que organizam operações inteiras, aumentam eficiência e reduzem custos desde o primeiro mês.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Problem;
