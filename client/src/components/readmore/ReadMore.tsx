import React, { useState } from "react";
import ButtonBmes from "../button/ButtonBmes";

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
        {displayText}
        {isExpanded ? "" : "..."}{" "}
      </p>
      {text.length > maxLength && (
        <ButtonBmes onClick={toggleExpansion}>
          {isExpanded ? "Moins" : "En savoir plus"}
        </ButtonBmes>
      )}
    </div>
  );
};

export default ReadMore;
