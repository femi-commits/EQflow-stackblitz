import React, { useState } from 'react';
import { ArrowLeft, Play, Star, Users, Briefcase, Heart, Home } from 'lucide-react';

interface ScenariosProps {
  setCurrentView: (view: string) => void;
}

export function Scenarios({ setCurrentView }: ScenariosProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedScenario, setSelectedScenario] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Scenarios', icon: Star },
    { id: 'workplace', name: 'Workplace', icon: Briefcase },
    { id: 'personal', name: 'Personal', icon: Heart },
    { id: 'family', name: 'Family', icon: Home },
    { id: 'social', name: 'Social', icon: Users }
  ];

  const scenarios = [
    {
      id: 1,
      title: "Difficult Feedback Conversation",
      category: "workplace",
      difficulty: "Advanced",
      duration: "15 min",
      description: "Practice delivering constructive feedback to a defensive team member.",
      completed: true,
      score: 88
    },
    {
      id: 2,
      title: "Family Disagreement",
      category: "family",
      difficulty: "Intermediate",
      duration: "12 min",
      description: "Navigate a heated discussion about family decisions with empathy.",
      completed: false,
      score: null
    },
    {
      id: 3,
      title: "Friend in Crisis",
      category: "personal",
      difficulty: "Beginner",
      duration: "10 min",
      description: "Support a friend going through a difficult time with active listening.",
      completed: true,
      score: 92
    },
    {
      id: 4,
      title: "Networking Event",
      category: "social",
      difficulty: "Intermediate",
      duration: "8 min",
      description: "Practice meaningful conversations in professional networking settings.",
      completed: false,
      score: null
    },
    {
      id: 5,
      title: "Team Conflict Resolution",
      category: "workplace",
      difficulty: "Advanced",
      duration: "20 min",
      description: "Mediate between conflicting team members to find common ground.",
      completed: false,
      score: null
    },
    {
      id: 6,
      title: "Romantic Relationship Communication",
      category: "personal",
      difficulty: "Intermediate",
      duration: "15 min",
      description: "Practice expressing needs and boundaries in intimate relationships.",
      completed: true,
      score: 76
    }
  ];

  const filteredScenarios = selectedCategory === 'all' 
    ? scenarios 
    : scenarios.filter(s => s.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedScenario) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedScenario(null)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{selectedScenario.title}</h1>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-gray-700 mb-4">{selectedScenario.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Duration: {selectedScenario.duration}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedScenario.difficulty)}`}
                >
                  {selectedScenario.difficulty}
                </span>
              </div>
            </div>
            {selectedScenario.completed && (
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">{selectedScenario.score}%</div>
                <div className="text-sm text-gray-500">Last Score</div>
              </div>
            )}
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Scenario Preview</h3>
            <p className="text-blue-800">
              You're about to enter an interactive scenario where you'll practice real-time communication skills. 
              You'll be presented with various situations and need to choose appropriate responses while being 
              evaluated on emotional intelligence, empathy, and communication effectiveness.
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentView('challenge')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>{selectedScenario.completed ? 'Practice Again' : 'Start Scenario'}</span>
            </button>
            <button
              onClick={() => setSelectedScenario(null)}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Back to Scenarios
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
        <h1 className="text-2xl font-bold text-gray-900">Practice Scenarios</h1>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredScenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
            onClick={() => setSelectedScenario(scenario)}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{scenario.title}</h3>
              {scenario.completed && (
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{scenario.score}%</div>
                  <div className="text-xs text-gray-500">Completed</div>
                </div>
              )}
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">{scenario.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(scenario.difficulty)}`}
                >
                  {scenario.difficulty}
                </span>
                <span className="text-xs text-gray-500">{scenario.duration}</span>
              </div>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium flex items-center space-x-1">
                <Play className="w-3 h-3" />
                <span>{scenario.completed ? 'Retry' : 'Start'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}