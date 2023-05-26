

interface DotProps {
  isActive: boolean;
  onClick: () => void;
}

const Dot: React.FC<DotProps> = ({
  isActive,
  onClick,
}) => {
  return (
    <span
      className={`dot ${isActive ? "active-dot" : ""}`}
      onClick={onClick}
    ></span>
  );
};
export default Dot;