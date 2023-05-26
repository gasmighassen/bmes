

interface SlideProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}
const Slide: React.FC<SlideProps> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} onClick={onClick}>
      {children}
    </div>
  );
};
export default Slide;