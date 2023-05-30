import React, { useState } from "react";

interface ReadMoreProps {
  title: string;
  text: string;
  maxLength: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ title, text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <div className="bmes__service__detail">
      <h1 className="bmes__service_title">{title}</h1>
      <p>
        {displayText}{" "}
        {text.length > maxLength && (
          <span className="savoir__plus" onClick={toggleExpansion}>
            {isExpanded ? (
              <span className="moins">Moins</span>
            ) : (
              <span>.....</span>
            )}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
