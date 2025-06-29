import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, MessageSquare, CheckCircle } from 'lucide-react';

interface DailyChallengeProps {
  setCurrentView: (view: string) => void;
}

export function DailyChallenge({ setCurrentView }: DailyChallengeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<string[]>(['', '', '']);
  const [showResults, setShowResults] = useState(false);

  const challenge = {
    title: "Workplace Conflict Resolution",
    context: "Based on recent workplace dynamics trends, you'll practice navigating a sensitive team disagreement.",
    scenario: "Your team is divided on a project approach. Two senior colleagues have opposing views and tensions are rising during the meeting.",
    steps: [
      {
        title: "Initial Response",
        prompt: "How would you initially address the tension in the room?",
        placeholder: "Describe your immediate action and tone..."
      },
      {
        title: "Active Listening",
        prompt: "One colleague becomes defensive. How do you demonstrate active listening?",
        placeholder: "Explain your listening strategy and response..."
      },
      {
        title: "Finding Common Ground",
        prompt: "How would you help both parties find a collaborative solution?",
        placeholder: "Describe your approach to building consensus..."
      }
    ]
  };

  const handleResponseChange = (stepIndex: number, value: string) => {
    const newResponses = [...responses];
    newResponses[stepIndex] = value;
    setResponses(newResponses);
  };

  const handleComplete = () => {
    setShowResults(true);
  };

  const eqScores = [85, 78, 92]; // Mock scores for each response

  if (showResults) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Challenge Results</h1>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-xl font-semibold text-green-900">Challenge Completed!</h2>
              <p className="text-green-700">Great work on today's scenario practice</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Overall EQ Score</h3>
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-green-600">85%</div>
              <div className="text-sm text-gray-600">Above Average - Keep improving!</div>
            </div>
          </div>

          <div className="space-y-4">
            {challenge.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{step.title}</h4>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    {eqScores[index]}%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{step.prompt}</p>
                <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                  <strong>Your response:</strong> {responses[index] || 'No response provided'}
                </div>
                <div className="mt-2 text-sm text-blue-600">
                  <strong>Feedback:</strong> {
                    index === 0 ? "Good emotional awareness. Consider acknowledging the tension more directly." :
                    index === 1 ? "Excellent active listening approach. Your empathy shows well." :
                    "Outstanding collaborative mindset. You effectively bridge different perspectives."
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => setCurrentView('dashboard')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => setCurrentView('scenarios')}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Practice More Scenarios
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Daily Challenge</h1>
      </div>

      {/* Challenge Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">{challenge.title}</h2>
        <p className="text-blue-800 mb-4">{challenge.context}</p>
        
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Users className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Scenario</h3>
              <p className="text-gray-700">{challenge.scenario}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm text-gray-600">{currentStep + 1} of {challenge.steps.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / challenge.steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Current Step */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <MessageSquare className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{challenge.steps[currentStep].title}</h3>
        </div>
        
        <p className="text-gray-700 mb-4">{challenge.steps[currentStep].prompt}</p>
        
        <textarea
          value={responses[currentStep]}
          onChange={(e) => handleResponseChange(currentStep, e.target.value)}
          placeholder={challenge.steps[currentStep].placeholder}
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-4 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Previous
          </button>
          
          {currentStep === challenge.steps.length - 1 ? (
            <button
              onClick={handleComplete}
              disabled={!responses[currentStep].trim()}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
            >
              Complete Challenge
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(Math.min(challenge.steps.length - 1, currentStep + 1))}
              disabled={!responses[currentStep].trim()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
}