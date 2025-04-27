import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import powdryMildewImg from "../assets/MoreFeaturesImages/powdryMildew.jpg";
import yellowLeavesImg from "../assets/MoreFeaturesImages/yellowLeaves.jpg";
import stressIssueImg from "../assets/MoreFeaturesImages/stressIssue.jpg";

const quizQuestions = [
  {
    question: "What symptoms are you seeing on your plant?",
    options: [
      "Yellowing leaves",
      "Brown spots on leaves",
      "Wilting despite watering",
      "White powdery coating on leaves",
    ],
  },
  {
    question: "Which part of the plant is most affected?",
    options: ["Leaves", "Stem", "Roots", "Flowers"],
  },
  {
    question: "When did you first notice the symptoms?",
    options: ["Today", "A few days ago", "Over a week ago"],
  },
];

export default function DiseaseDiagnosisQuiz() {
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(""));
  const [showResult, setShowResult] = useState(false);
  const [diagnosis, setDiagnosis] = useState("");

  const handleOptionChange = (questionIdx, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIdx] = selectedOption;
    setAnswers(newAnswers);
  };
    
  const careTips = {
    "Powdery Mildew 🌿": {
      tips: [
        "Remove affected leaves immediately.",
        "Improve air circulation around the plant.",
        "Avoid overhead watering.",
        "Use a mild fungicide spray or neem oil.",
      ],
      image: powdryMildewImg,
    },
    "Nutrient Deficiency or Overwatering 🚿": {
      tips: [
        "Check soil moisture before watering.",
        "Ensure proper drainage in pots.",
        "Feed plant with a balanced liquid fertilizer.",
        "Trim off any yellowed or dead leaves.",
      ],
      image: yellowLeavesImg,
    },
    "General stress — check soil, light, and watering schedule.": {
      tips: [
        "Inspect soil for compactness or poor drainage.",
        "Adjust light exposure based on plant type.",
        "Ensure consistent watering (not too dry or soggy).",
        "Check for pests under leaves and stems.",
      ],
      image: stressIssueImg,
    },
  };
  
  

    // Simple mock logic for diagnosis
    const handleSubmit = () => {
        if (answers.includes("")) {
          alert("Please answer all questions.");
          return;
        }
      
        let result = "";
      
        if (answers[0] === "White powdery coating on leaves") {
          result = "Powdery Mildew 🌿";
        } else if (answers[0] === "Yellowing leaves") {
          result = "Nutrient Deficiency or Overwatering 🚿";
        } else {
          result = "General stress — check soil, light, and watering schedule.";
        }
      
        setDiagnosis(result);
        setShowResult(true);
      };

  return (
<div className="bg-gray-50 min-h-screen flex flex-col">
    <Navbar />

        <main className="flex-grow px-4 py-8 w-full max-w-4xl lg:px-12 mx-auto">
            <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-700">🌱 Disease Diagnosis Quiz</h2>

            <BackButton/>

            {quizQuestions.map((q, idx) => (
                <div key={idx} className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
                <div className="space-y-2">
                    {q.options.map((opt) => (
                    <label key={opt} className="block">
                        <input
                        type="radio"
                        name={`question-${idx}`}
                        value={opt}
                        checked={answers[idx] === opt}
                        onChange={() => handleOptionChange(idx, opt)}
                        className="mr-2"
                        />
                        {opt}
                    </label>
                    ))}
                </div>
                </div>
            ))}

            <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
                Get Diagnosis
            </button>

            {showResult && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">🩺 Result</h3>
              <p className="mb-4">{diagnosis}</p>

              {/* Show image */}
              {careTips[diagnosis]?.image && (
                <img
                  src={careTips[diagnosis].image}
                  alt={diagnosis}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}

              <div className="bg-white p-4 rounded shadow text-left">
                <h4 className="text-green-700 font-bold mb-2">🌱 Care Tips:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {careTips[diagnosis]?.tips.map((tip, idx) => (
                    <li key={idx} className="text-gray-700">{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          </div>

        </main>

    <Footer />
</div>
    
  );
  }
