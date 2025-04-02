import React, { useEffect, useRef, useState } from "react";
import "./Working.css";
import discoveryIcon from "../../media/magnifying-glass.png";
import designIcon from "../../media/curve.png";
import developmentIcon from "../../media/development.png";
import deliveryIcon from "../../media/shuttle.png";

const steps = [
  {
    title: "Initial Discovery & Strategy",
    description:
      "We begin by learning about your business, exploring your objectives, and identifying the best digital solutions that align with your goals.",
    points: [
      "Business Analysis",
      "Stakeholder Interviews",
      "Solution Brainstorming",
      "Project Roadmap",
    ],
    icon: discoveryIcon,
  },
  {
    title: "Creative Design & UX Planning",
    description:
      "Our design team crafts intuitive user interfaces and experience flows, ensuring the product is both engaging and functional.",
    points: ["UI/UX Mockups", "Prototyping", "Experience Mapping"],
    icon: designIcon,
  },
  {
    title: "Agile Development & QA",
    description:
      "We build your product using clean, scalable code and conduct continuous testing to ensure reliability and performance.",
    points: ["Modular Coding", "Sprint Reviews", "Quality Assurance"],
    icon: developmentIcon,
  },
  {
    title: "Delivery, Documentation & Support",
    description:
      "We ensure a smooth launch of your product, provide comprehensive documentation, and deliver post-launch support and training.",
    points: [
      "Live Launch",
      "Technical Documentation",
      "User Onboarding",
      "Ongoing Support",
    ],
    icon: deliveryIcon,
  },
];

const Working = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map((ref) => {
        if (!ref) return Number.POSITIVE_INFINITY;
        const rect = ref.getBoundingClientRect();
        return Math.abs(rect.top - window.innerHeight / 2);
      });

      const closestIndex = offsets.indexOf(Math.min(...offsets));
      setCurrentStep(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="process-section">
      <div className="container-fluid">
        {/* Title and Subtitle */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <p className="process-subtitle-working">
              How We Turn Your Vision Into Reality.
            </p>
            <h2 className="section-title-working">Our Working Process</h2>
          </div>
        </div>

        <div className="row">
          {/* Left: Fixed Step Counter */}
          <div className="col-md-6 d-none d-md-flex justify-content-center">
            <div className="step-counter-box">
              <div className="step-counter-wrapper">
                <div className="progress-ring">
                  <svg className="ring" width="240" height="240">
                    <defs>
                      <linearGradient
                        id="blueGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#007bff" />
                        <stop offset="100%" stopColor="#00c6ff" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="ring-bg"
                      stroke="#eee"
                      strokeWidth="12"
                      fill="transparent"
                      r="114"
                      cx="120"
                      cy="120"
                    />
                    <circle
                      className="ring-progress"
                      stroke="rgb(40, 83, 214)"
                      strokeWidth="12"
                      fill="transparent"
                      r="114"
                      cx="120"
                      cy="120"
                      style={{
                        strokeDasharray: 716.28,
                        strokeDashoffset:
                          716.28 - (716.28 * (currentStep + 1)) / steps.length,
                      }}
                    />
                  </svg>
                </div>

                <p className="step-label">Step</p>
                <h2 className="step-progress">
                  {currentStep + 1}/{steps.length}
                </h2>
              </div>
            </div>
          </div>

          {/* Right: Scrollable Steps */}
          <div className="col-md-6">
            {steps.map((step, index) => (
              <section
                key={index}
                className={`step-section ${
                  currentStep === index ? "step-visible" : "step-hidden"
                }`}
                ref={(el) => (sectionRefs.current[index] = el)}
              >
                <div className="step-stack-item">
                  <img src={step.icon} alt={step.title} className="step-icon" />

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                  <ul className="step-points">
                    {step.points.map((point, i) => (
                      <li key={i}>+ {point}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
