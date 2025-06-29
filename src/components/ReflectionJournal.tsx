import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Calendar, MessageSquare, Lightbulb, Plus } from 'lucide-react';

interface ReflectionJournalProps {
  setCurrentView: (view: string) => void;
}

export function ReflectionJournal({ setCurrentView }: ReflectionJournalProps) {
  const [selectedEntry, setSelectedEntry] = useState<any>(null);
  const [newEntry, setNewEntry] = useState('');
  const [showNewEntry, setShowNewEntry] = useState(false);

  const entries = [
    {
      id: 1,
      date: '2025-01-08',
      title: 'Team Meeting Reflection',
      content: 'Today I practiced active listening during our team standup. I noticed I was interrupting less and asking more clarifying questions. The team seemed more engaged when I gave them space to fully express their ideas.',
      insights: ['Improved active listening', 'Better question asking', 'Increased team engagement'],
      eqScore: 85
    },
    {
      id: 2,
      date: '2025-01-07',
      title: 'Difficult Conversation with Sarah',
      content: 'Had to address Sarah\'s missed deadlines. I approached it with empathy first, asking about her workload and challenges. She opened up about personal stress. We found solutions together instead of me just pointing out problems.',
      insights: ['Empathy-first approach', 'Problem-solving together', 'Creating safe space'],
      eqScore: 92
    },
    {
      id: 3,
      date: '2025-01-06',
      title: 'Networking Event Experience',
      content: 'Attended the industry meetup. I focused on asking genuine questions about others\' work instead of talking about myself. Made more meaningful connections. Still felt some anxiety, but managed it better.',
      insights: ['Genuine curiosity', 'Less self-focused', 'Better anxiety management'],
      eqScore: 78
    }
  ];

  const handleSubmitEntry = () => {
    if (newEntry.trim()) {
      // In a real app, this would save to backend
      setNewEntry('');
      setShowNewEntry(false);
    }
  };

  if (selectedEntry) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedEntry(null)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{selectedEntry.title}</h1>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{new Date(selectedEntry.date).toLocaleDateString()}</span>
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              EQ Score: {selectedEntry.eqScore}%
            </div>
          </div>

          <div className="prose prose-gray max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed">{selectedEntry.content}</p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-4 h-4 text-green-600" />
              <h3 className="font-semibold text-green-900">Key Insights</h3>
            </div>
            <ul className="space-y-2">
              {selectedEntry.insights.map((insight: string, index: number) => (
                <li key={index} className="flex items-center space-x-2 text-green-800">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span className="text-sm">{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setSelectedEntry(null)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Back to Journal
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showNewEntry) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setShowNewEntry(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">New Reflection</h1>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="mb-4">
            <label htmlFor="reflection" className="block text-sm font-medium text-gray-700 mb-2">
              What communication experience would you like to reflect on today?
            </label>
            <textarea
              id="reflection"
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              rows={8}
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your communication experience, what went well, what could be improved, and how you felt during the interaction..."
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Reflection Tips</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Focus on specific situations rather than general observations</li>
              <li>• Consider both your emotions and the other person's perspective</li>
              <li>• Think about what you learned and how you might apply it next time</li>
              <li>• Be honest about challenges as well as successes</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleSubmitEntry}
              disabled={!newEntry.trim()}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
            >
              Save Reflection
            </button>
            <button
              onClick={() => setShowNewEntry(false)}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Reflection Journal</h1>
        </div>
        <button
          onClick={() => setShowNewEntry(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Entry</span>
        </button>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-100">
        <div className="flex items-center space-x-3 mb-3">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-lg font-semibold text-purple-900">Daily Reflection Practice</h2>
        </div>
        <p className="text-purple-800 mb-4">
          Regular reflection helps you identify patterns, celebrate progress, and develop deeper emotional intelligence. 
          Write about your communication experiences to gain insights and improve your skills.
        </p>
        <div className="bg-white rounded-lg p-3">
          <div className="text-sm text-gray-600">
            <strong>This week:</strong> 3 entries • Average EQ Score: 85%
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
            onClick={() => setSelectedEntry(entry)}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{entry.title}</h3>
              <div className="flex items-center space-x-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  {entry.eqScore}%
                </span>
                <span className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString()}</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {entry.content.length > 150 ? `${entry.content.substring(0, 150)}...` : entry.content}
            </p>
            
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500">{entry.insights.length} key insights</span>
            </div>
          </div>
        ))}
      </div>

      {entries.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No entries yet</h3>
          <p className="text-gray-600 mb-4">Start your reflection journey by writing about a recent communication experience.</p>
          <button
            onClick={() => setShowNewEntry(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Write First Entry
          </button>
        </div>
      )}
    </div>
  );
}