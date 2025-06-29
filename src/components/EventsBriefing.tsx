import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Users, Briefcase, Globe, Clock, ExternalLink } from 'lucide-react';

interface EventsBriefingProps {
  setCurrentView: (view: string) => void;
}

export function EventsBriefing({ setCurrentView }: EventsBriefingProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events', icon: Globe },
    { id: 'workplace', name: 'Workplace', icon: Briefcase },
    { id: 'social', name: 'Social Trends', icon: Users },
    { id: 'communication', name: 'Communication', icon: TrendingUp }
  ];

  const events = [
    {
      id: 1,
      title: "Remote Work Communication Challenges Rise",
      category: "workplace",
      summary: "Recent studies show 67% of remote workers struggle with clear communication, leading to increased misunderstandings and project delays.",
      relevance: "Practice asynchronous communication skills and learn to over-communicate important details.",
      timeAgo: "2 hours ago",
      source: "Harvard Business Review",
      challengePrompt: "How would you ensure clarity when giving feedback over video call?"
    },
    {
      id: 2,
      title: "Gen Z Prefers Direct Communication in Professional Settings",
      category: "workplace",
      summary: "Research indicates younger professionals value straightforward, honest communication over traditional corporate diplomacy.",
      relevance: "Adapt your communication style to be more direct while maintaining empathy and respect.",
      timeAgo: "5 hours ago",
      source: "LinkedIn Workplace Report",
      challengePrompt: "Balance directness with tact when addressing performance issues with a Gen Z colleague."
    },
    {
      id: 3,
      title: "Mental Health Conversations Becoming Normalized",
      category: "social",
      summary: "73% of employees now feel comfortable discussing mental health at work, creating new communication opportunities and challenges.",
      relevance: "Learn appropriate responses and develop emotional intelligence for sensitive conversations.",
      timeAgo: "1 day ago",
      source: "Mental Health America",
      challengePrompt: "How would you respond if a colleague opens up about their anxiety during a team meeting?"
    },
    {
      id: 4,
      title: "AI Tools Changing Workplace Communication Expectations",
      category: "communication",
      summary: "Companies report that AI assistance is raising expectations for faster, more polished communication across all levels.",
      relevance: "Balance efficiency with authentic human connection in your communications.",
      timeAgo: "1 day ago",
      source: "MIT Technology Review",
      challengePrompt: "Maintain personal authenticity while meeting higher standards for written communication."
    },
    {
      id: 5,
      title: "Conflict Resolution Skills in High Demand",
      category: "workplace",
      summary: "HR departments report 40% increase in requests for conflict resolution training as hybrid work creates new interpersonal challenges.",
      relevance: "Develop mediation skills and learn to navigate complex team dynamics remotely.",
      timeAgo: "2 days ago",
      source: "SHRM Research",
      challengePrompt: "Mediate a disagreement between team members who have never met in person."
    },
    {
      id: 6,
      title: "Emotional Intelligence Linked to Career Success",
      category: "communication",
      summary: "New longitudinal study finds that emotional intelligence is a stronger predictor of career advancement than technical skills.",
      relevance: "Focus on developing empathy, self-awareness, and social skills for long-term success.",
      timeAgo: "3 days ago",
      source: "Journal of Applied Psychology",
      challengePrompt: "Demonstrate emotional intelligence when your project proposal is rejected in front of the team."
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(e => e.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Recent Events Briefing</h1>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100">
        <div className="flex items-center space-x-3 mb-3">
          <TrendingUp className="w-6 h-6 text-orange-600" />
          <h2 className="text-lg font-semibold text-orange-900">Stay Informed, Communicate Better</h2>
        </div>
        <p className="text-orange-800">
          Understanding current trends and events helps you communicate more effectively by providing relevant context 
          and helping you anticipate the communication challenges others might be facing.
        </p>
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
                    ? 'bg-orange-600 text-white'
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

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 flex-1">{event.title}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500 ml-4">
                <Clock className="w-4 h-4" />
                <span>{event.timeAgo}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{event.summary}</p>

            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Communication Relevance</h4>
              <p className="text-blue-800 text-sm">{event.relevance}</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-green-900 mb-2">Practice Challenge</h4>
              <p className="text-green-800 text-sm">{event.challengePrompt}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <ExternalLink className="w-4 h-4" />
                <span>Source: {event.source}</span>
              </div>
              <button
                onClick={() => setCurrentView('challenge')}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm font-medium"
              >
                Practice Scenario
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="font-semibold text-gray-900 mb-2">Want More Personalized Updates?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Get briefings tailored to your industry and communication goals
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          Customize Your Feed
        </button>
      </div>
    </div>
  );
}