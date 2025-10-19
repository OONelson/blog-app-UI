import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      title: "Read Between the Lines",
      description:
        "Where every word finds its reader, and every reader finds their story.",
      illustration: (
        <svg viewBox="0 0 240 240" className="w-full h-full">
          <g opacity="0.15">
            <rect
              x="60"
              y="40"
              width="50"
              height="70"
              rx="2"
              fill="#fc8804"
              transform="rotate(-15 85 75)"
            />
            <rect
              x="130"
              y="50"
              width="50"
              height="70"
              rx="2"
              fill="#fc8804"
              transform="rotate(12 155 85)"
            />
          </g>

          <path
            d="M 80 100 Q 120 95 120 140 L 120 180 Q 120 175 80 180 Z"
            fill="#fc8804"
            opacity="0.25"
          />
          <path
            d="M 120 100 Q 160 95 160 140 L 160 180 Q 160 175 120 180 Z"
            fill="#fc8804"
            opacity="0.35"
          />

          <line
            x1="90"
            y1="115"
            x2="110"
            y2="115"
            stroke="#fc8804"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <line
            x1="90"
            y1="125"
            x2="110"
            y2="125"
            stroke="#fc8804"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <line
            x1="90"
            y1="135"
            x2="105"
            y2="135"
            stroke="#fc8804"
            strokeWidth="1.5"
            opacity="0.5"
          />

          <line
            x1="130"
            y1="115"
            x2="150"
            y2="115"
            stroke="#fc8804"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <line
            x1="130"
            y1="125"
            x2="150"
            y2="125"
            stroke="#fc8804"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <line
            x1="130"
            y1="135"
            x2="145"
            y2="135"
            stroke="#fc8804"
            strokeWidth="1.5"
            opacity="0.5"
          />

          <circle cx="50" cy="80" r="2" fill="#fc8804" opacity="0.4" />
          <circle cx="190" cy="90" r="2" fill="#fc8804" opacity="0.4" />
          <circle cx="70" cy="160" r="1.5" fill="#fc8804" opacity="0.3" />
          <circle cx="170" cy="165" r="1.5" fill="#fc8804" opacity="0.3" />
        </svg>
      ),
    },
    {
      title: "Ink Your Thoughts",
      description:
        "Turn blank pages into masterpieces. Your story deserves to be told.",
      illustration: (
        <svg viewBox="0 0 240 240" className="w-full h-full">
          {/* Paper with curl */}
          <path
            d="M 70 60 L 170 60 L 170 170 Q 165 175 160 170 L 70 170 Z"
            fill="#fc8804"
            opacity="0.12"
          />
          <path
            d="M 160 170 Q 165 175 170 170 L 170 160 Q 165 165 160 170 Z"
            fill="#fc8804"
            opacity="0.25"
          />

          <line
            x1="85"
            y1="85"
            x2="155"
            y2="85"
            stroke="#fc8804"
            strokeWidth="2"
            opacity="0.15"
          />
          <line
            x1="85"
            y1="100"
            x2="155"
            y2="100"
            stroke="#fc8804"
            strokeWidth="2"
            opacity="0.15"
          />
          <line
            x1="85"
            y1="115"
            x2="145"
            y2="115"
            stroke="#fc8804"
            strokeWidth="2"
            opacity="0.15"
          />
          <line
            x1="85"
            y1="130"
            x2="155"
            y2="130"
            stroke="#fc8804"
            strokeWidth="2"
            opacity="0.15"
          />

          <g transform="translate(140, 130) rotate(45)">
            <ellipse cx="0" cy="0" rx="3" ry="8" fill="#fc8804" opacity="0.5" />
            <path d="M -2 -8 L 0 -25 L 2 -8 Z" fill="#fc8804" opacity="0.6" />
            <line
              x1="0"
              y1="-8"
              x2="0"
              y2="-25"
              stroke="#fc8804"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </g>

          <circle cx="100" cy="150" r="2.5" fill="#fc8804" opacity="0.3" />
          <circle cx="110" cy="155" r="1.5" fill="#fc8804" opacity="0.25" />
          <circle cx="95" cy="158" r="1" fill="#fc8804" opacity="0.2" />

          <text
            x="180"
            y="100"
            fontSize="20"
            fill="#fc8804"
            opacity="0.2"
            fontFamily="serif"
          >
            A
          </text>
          <text
            x="55"
            y="140"
            fontSize="16"
            fill="#fc8804"
            opacity="0.15"
            fontFamily="serif"
          >
            W
          </text>
        </svg>
      ),
    },
    {
      title: "Join the Narrative",
      description:
        "Become part of a tapestry woven from countless voices and stories.",
      illustration: (
        <svg viewBox="0 0 240 240" className="w-full h-full">
          <circle
            cx="120"
            cy="80"
            r="25"
            fill="none"
            stroke="#fc8804"
            strokeWidth="2"
            opacity="0.25"
          />
          <circle
            cx="90"
            cy="120"
            r="25"
            fill="none"
            stroke="#fc8804"
            strokeWidth="2"
            opacity="0.25"
          />
          <circle
            cx="150"
            cy="120"
            r="25"
            fill="none"
            stroke="#fc8804"
            strokeWidth="2"
            opacity="0.25"
          />
          <circle
            cx="120"
            cy="155"
            r="25"
            fill="none"
            stroke="#fc8804"
            strokeWidth="2"
            opacity="0.25"
          />

          <circle cx="120" cy="120" r="20" fill="#fc8804" opacity="0.15" />

          <g opacity="0.4">
            <circle cx="120" cy="75" r="8" fill="#fc8804" />
            <path d="M 112 85 Q 120 88 128 85" fill="#fc8804" />
          </g>

          <g opacity="0.4">
            <circle cx="90" cy="115" r="8" fill="#fc8804" />
            <path d="M 82 125 Q 90 128 98 125" fill="#fc8804" />
          </g>

          <g opacity="0.4">
            <circle cx="150" cy="115" r="8" fill="#fc8804" />
            <path d="M 142 125 Q 150 128 158 125" fill="#fc8804" />
          </g>

          <g opacity="0.4">
            <circle cx="120" cy="150" r="8" fill="#fc8804" />
            <path d="M 112 160 Q 120 163 128 160" fill="#fc8804" />
          </g>

          <circle cx="105" cy="95" r="2" fill="#fc8804" opacity="0.5" />
          <circle cx="135" cy="95" r="2" fill="#fc8804" opacity="0.5" />
          <circle cx="105" cy="138" r="2" fill="#fc8804" opacity="0.5" />
          <circle cx="135" cy="138" r="2" fill="#fc8804" opacity="0.5" />
        </svg>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleGetStarted();
    }
  };

  const handleGetStarted = () => {
    alert("Your story begins now ✨");
    navigate("/blogs");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="text-2xl font-serif italic text-black">
              No name
            </span>
          </div>
        </div>

        <div className="mb-16">
          <div
            className="w-60 h-60 mx-auto mb-16 transition-all duration-500 ease-out"
            style={{ transform: `scale(${currentStep === 1 ? 1.05 : 1})` }}
          >
            {steps[currentStep].illustration}
          </div>

          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 border border-black text-xs tracking-widest uppercase">
              Step {currentStep + 1} of {steps.length}
            </div>

            <h2 className="text-5xl font-serif italic text-black leading-tight">
              {steps[currentStep].title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto pt-2">
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-16">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`transition-all duration-500 ${
                index === currentStep
                  ? "w-12 h-1 bg-orange-500"
                  : index < currentStep
                  ? "w-1 h-1 bg-orange-500"
                  : "w-1 h-1 bg-gray-300 hover:bg-orange-100"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex-1 border-2 border-orange-500 text-orange-600 font-medium py-4 px-8 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Back
            </button>
          )}

          <button
            onClick={handleNext}
            className={`${
              currentStep > 0 ? "flex-1" : "w-full"
            } bg-orange-500 text-white font-medium py-4 px-8 hover:bg-orange-600 transition-all duration-300 relative overflow-hidden group`}
          >
            <span className="relative z-10">
              {currentStep < steps.length - 1
                ? "Continue"
                : "Begin Your Journey"}
            </span>
          </button>
        </div>

        {currentStep === 0 && (
          <button
            onClick={handleGetStarted}
            className="w-full text-gray-400 hover:text-orange-500 text-sm font-medium py-4 transition-colors duration-200 mt-4"
          >
            Skip introduction
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingPage;
