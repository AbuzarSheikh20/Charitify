import React from "react";

export const MyButton = ({ label, width = "w-auto", className = "", style = {} }) => {
  return (
    <button
      className={`btn ${width} ${className}`}
      style={style}
    >
      {label}
    </button>
  );
};





export const SectionHeader = ({
  topText1 = "",
  topText2 = "",
  topText1Color = "#000000",
  topText2Color = "#00A676",
  mainHeading = "",
  mainHeadingColor = "#FF8363",
  description = "",
  descriptionColor = "#000000",
  align = "left",
  showLine = false,
  lineColor = "#000000",
  className = "",
}) => {
  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left";

  return (
    <div className={`max-w-4xl mx-auto ${alignment} ${className}`}>
      {/* Top Text with optional line */}

      {(topText1 || topText2) && (
        <div className={`flex gap-2 ${alignment === "text-center" ? "justify-center" : alignment === "text-right" ? "justify-end" : "justify-start"}`}>
          <div>
            {showLine && <div className="block w-16 h-[1px] mt-8" style={{ backgroundColor: lineColor }}></div>}
          </div>
          <div>
            <h3 className="h3">
              <span className={topText1Color}>{topText1}{" "}</span>
              <span className={topText2Color}>{topText2}</span>
            </h3>

            {/* Main Heading */}
            {mainHeading && (
              <h2 className="h2 text-[#FF8363] leading-snug mb-4">
                <span className={mainHeadingColor}>{mainHeading}</span>
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className="medium w-[550px] leading-relaxed">
                <span className={descriptionColor}>{description}</span>
              </p>
            )}

          </div>
        </div>
      )}
    </div>
  );
};
