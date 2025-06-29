import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Calendar, Award, Target, BarChart3, LineChart } from 'lucide-react';

interface ProgressTrackingProps {
  setCurrentView: (view: string) => void;
}

export function ProgressTracking({ setCurrentView }: ProgressTrackingProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const periods = [
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'quarter', name: 'This Quarter' },
    { id: 'year', name: 'This Year' }
  ];

  const skillAreas = [
    { name: 'Active Listening', current: 85, previous: 78, target: 90 },
    { name: 'Empathy', current: 92, previous: 88, target: 95 },
    { name: 'Conflict Resolution', current: 76, previous: 71, target: 85 },
    { name: 'Assertiveness', current: 68, previous: 65, target: 80 },
    { name: 'Emotional Regulation', current: 83, previous: 79, target: 88 }
  ];

  const weeklyData = [
    { day: 'Mon', score: 78 },
    { day: 'Tue', score: 82 },
    { day: 'Wed', score: 85 },
    { day: 'Thu', score: 88 },
    { day: 'Fri', score: 91 },
    { day: 'Sat', score: 87 },
    { day: 'Sun', score: 89 }
  ];

  const achievements = [
    {
      title: "Communication Streak Master",
      description: "Completed 7 consecutive days of practice",
      earned: true,
      date: "2025-01-06"
    },
    {
      title: "Empathy Expert",
      description: "Achieved 90%+ empathy scores for 5 scenarios",
      earned: true,
      date: "2025-01-04"
    },
    {
      title: "Conflict Resolver",
      description: "Successfully completed 10 conflict scenarios",
      earned: false,
      progress: 7
    },
    {
      title: "Reflection Writer",
      description: "Wrote 20 thoughtful journal entries",
      earned: false,
      progress: 13
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
      </div>

      {/* Period Selection */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex space-x-2">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                selectedPeriod === period.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {period.name}
            </button>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-100">
        <div className="flex items-center space-x-3 mb-4">
          <TrendingUp className="w-6 h-6 text-green-600" />
          <h2 className="text-lg font-semibold text-green-900">Overall Progress</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">+12%</div>
            <div className="text-sm text-gray-600">Average EQ Score Improvement</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">23</div>
            <div className="text-sm text-gray-600">Scenarios Completed</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600">7</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Daily Scores Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <LineChart className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Daily EQ Scores</h3>
        </div>
        <div className="flex items-end space-x-2 h-32">
          {weeklyData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="bg-blue-600 rounded-t w-full transition-all duration-300 hover:bg-blue-700"
                style={{ height: `${(data.score / 100) * 100}%` }}
                title={`${data.score}%`}
              ></div>
              <div className="text-xs text-gray-600 mt-2">{data.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Areas */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <BarChart3 className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Skill Development</h3>
        </div>
        <div className="space-y-4">
          {skillAreas.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-600">
                    {skill.previous}% → <span className="text-green-600 font-semibold">{skill.current}%</span>
                  </span>
                  <span className="text-gray-500">Target: {skill.target}%</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.current}%` }}
                  ></div>
                </div>
                <div
                  className="absolute top-0 w-0.5 h-2 bg-green-500"
                  style={{ left: `${skill.target}%` }}
                  title={`Target: ${skill.target}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <Award className="w-5 h-5 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 border-2 ${
                achievement.earned
                  ? 'border-yellow-200 bg-yellow-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    achievement.earned
                      ? 'bg-yellow-100'
                      : 'bg-gray-100'
                  }`}
                >
                  <Award
                    className={`w-4 h-4 ${
                      achievement.earned
                        ? 'text-yellow-600'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-semibold ${
                      achievement.earned
                        ? 'text-yellow-900'
                        : 'text-gray-700'
                    }`}
                  >
                    {achievement.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      achievement.earned
                        ? 'text-yellow-800'
                        : 'text-gray-600'
                    }`}
                  >
                    {achievement.description}
                  </p>
                  {achievement.earned ? (
                    <div className="text-xs text-yellow-700 mt-1">
                      Earned on {new Date(achievement.date!).toLocaleDateString()}
                    </div>
                  ) : (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full"
                          style={{ width: `${(achievement.progress! / 10) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {achievement.progress}/10 progress
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Goals & Targets</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-green-900 font-medium">Complete daily challenges for 2 weeks</span>
            <span className="text-green-700 text-sm">7/14 days</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-900 font-medium">Reach 90% average EQ score</span>
            <span className="text-blue-700 text-sm">85% current</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <span className="text-purple-900 font-medium">Complete 50 practice scenarios</span>
            <span className="text-purple-700 text-sm">23/50 completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}