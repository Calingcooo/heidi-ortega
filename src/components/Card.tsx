interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/* --- Sections --- */

export const CardHeader: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`p-4 border-b border-(--border) ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`p-4 border-t border-(--border) ${className}`}>
      {children}
    </div>
  );
};

/* --- Main Card --- */

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
          bg-(--card)
          rounded-(--radius)
          border border-(--border)
          ${className}
        `}
    >
      {children}
    </div>
  );
};

export default Card;
