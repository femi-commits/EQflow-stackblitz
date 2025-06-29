import React from 'react';
import { Calendar, Target, TrendingUp, Award, MessageCircle, BookOpen, Zap } from 'lucide-react';

interface DashboardProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  userData: {
    streak: number;
    level: number;
    todayCompleted: boolean;
    weeklyScore: number;
    totalScenarios: number;
  };
}

export function Dashboard({ currentView, setCurrentView, userData }: DashboardProps) {
  const { streak, level, todayCompleted, weeklyScore, totalScenarios } = userData;

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome back!</h2>
            <p className="text-blue-100 mt-1">Ready to improve your communication skills today?</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{streak}</div>
            <div className="text-blue-200 text-sm">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div className="ml-3">
              <div className="text-lg font-semibold text-gray-900">Level {level}</div>
              <div className="text-sm text-gray-500">Communication Master</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <div className="text-lg font-semibold text-gray-900">{weeklyScore}%</div>
              <div className="text-sm text-gray-500">Weekly EQ Score</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
            <div className="ml-3">
              <div className="text-lg font-semibold text-gray-900">{totalScenarios}</div>
              <div className="text-sm text-gray-500">Scenarios Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Challenge */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Challenge</h3>
            {todayCompleted ? (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Completed ✓
              </span>
            ) : (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Pending
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">
            Practice active listening skills in a workplace conflict scenario based on today's trending workplace dynamics.
          </p>
          <button
            onClick={() => setCurrentView('challenge')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            {todayCompleted ? 'Review Challenge' : 'Start Challenge'}
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div 
            className="flex items-center space-x-3"
            onClick={() => setCurrentView('scenarios')}
          >
            <div className="bg-purple-100 p-2 rounded-lg">
              <MessageCircle className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Practice Scenarios</h4>
              <p className="text-sm text-gray-500">Interactive communication exercises</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div 
            className="flex items-center space-x-3"
            onClick={() => setCurrentView('journal')}
          >
            <div className="bg-teal-100 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Reflection Journal</h4>
              <p className="text-sm text-gray-500">Write and analyze your thoughts</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div 
            className="flex items-center space-x-3"
            onClick={() => setCurrentView('events')}
          >
            <div className="bg-red-100 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Events Briefing</h4>
              <p className="text-sm text-gray-500">Stay informed on recent trends</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div 
            className="flex items-center space-x-3"
            onClick={() => setCurrentView('progress')}
          >
            <div className="bg-indigo-100 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Progress Tracking</h4>
              <p className="text-sm text-gray-500">View your skill development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}