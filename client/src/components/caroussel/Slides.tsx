import "../../_dist/Slide.css";

interface SlideProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}
const Slides: React.FC<SlideProps> = ({ isActive, children, onClick }) => {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} onClick={onClick}>
      {children}
    </div>
  );
};
export default Slides;
