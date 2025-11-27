import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  onClick,
  ...props
}) => {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      className={`btn ${variantClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;
