import React, { useState } from 'react';

interface AdminSecurityTabProps {
  onChangeAdminPassword?: (newPassword: string) => void;
}

export const AdminSecurityTab: React.FC<AdminSecurityTabProps> = ({ onChangeAdminPassword }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword) {
      setMessage('Please enter a new password.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    if (onChangeAdminPassword) {
      onChangeAdminPassword(newPassword);
      setMessage('Admin password updated successfully!');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setMessage('Password update handler not configured.');
    }
  };

  return (
    <div className="space-y-6 p-6 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800">
      <h2 className="text-2xl font-bold border-b border-slate-800 pb-3">Executive Security Settings</h2>
      
      {/* Password Management */}
      <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
        <h3 className="text-lg font-semibold text-slate-300">Update Executive Password</h3>
        {message && (
          <div className="p-3 text-sm rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
            {message}
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-400">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-400">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
            placeholder="Confirm new password"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded font-medium text-white transition-colors"
        >
          Update Password
        </button>
      </form>

      {/* Secret Gateway Guide */}
      <div className="mt-8 pt-6 border-t border-slate-800">
        <h3 className="text-lg font-semibold text-slate-300 mb-2">Secret Executive Gateway Guide</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          To access the secret executive portal, click the primary application logo <strong>10 times consecutively</strong>. This secret gateway allows quick bypass authentication for authorized system administrators.
        </p>
      </div>
    </div>
  );
};
import React, { useState } from 'react';

export const AIManagerTab: React.FC = () => {
  const [command, setCommand] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    setLoading(true);

    setTimeout(() => {
      setAiOutput(`Processed AI Command: "${command}". Optimization complete.`);
      setLoading(false);
    }, 1000);
  };

  const handleGenerateReport = () => {
    setLoading(true);
    setTimeout(() => {
      setAiOutput("AI Sports Report: High-intensity match with tactical setups leading to key breakthroughs late in the second half.");
      setLoading(false);
    }, 1200);
  };

  const handleGenerateIdeas = () => {
    setLoading(true);
    setTimeout(() => {
      setAiOutput("Expansion Ideas:\n1. 64-team single elimination knockout format.\n2. Regional group stage bracket expansion.");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 p-6 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800">
      <h2 className="text-2xl font-bold border-b border-slate-800 pb-3">AI Management Console</h2>

      {/* Natural Language Commands */}
      <form onSubmit={handleRunCommand} className="space-y-4">
        <label className="block text-sm font-medium text-slate-400">Natural Language AI Command</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="e.g., Generate summary for top 5 scorers..."
            className="flex-1 px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded font-medium text-white transition-colors"
          >
            Execute Command
          </button>
        </div>
      </form>

      {/* Generators */}
      <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
        <button
          onClick={handleGenerateReport}
          disabled={loading}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded font-medium text-white transition-colors"
        >
          Generate AI Match Report
        </button>
        <button
          onClick={handleGenerateIdeas}
          disabled={loading}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded font-medium text-white transition-colors"
        >
          Generate Expansion Ideas
        </button>
      </div>

      {/* Output Display */}
      <div className="mt-4 p-4 bg-slate-950 rounded border border-slate-800 min-h-[120px]">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">AI Output Log</h4>
        {loading ? (
          <p className="text-indigo-400 animate-pulse">Processing request...</p>
        ) : (
          <pre className="text-slate-300 text-sm whitespace-pre-wrap font-mono">{aiOutput || 'No active output.'}</pre>
        )}
      </div>
    </div>
  );
};
import React, { useState } from 'react';

export const CinematicIntroTab: React.FC = () => {
  const [bgUrl, setBgUrl] = useState('');
  const [overlayText, setOverlayText] = useState('WELCOME TO THE LEAGUE');
  const [audioVolume, setAudioVolume] = useState(80);

  return (
    <div className="space-y-6 p-6 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800">
      <h2 className="text-2xl font-bold border-b border-slate-800 pb-3">Cinematic Intro Settings</h2>

      {/* Configuration Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-400">4K Background Video/Image URL</label>
            <input
              type="text"
              value={bgUrl}
              onChange={(e) => setBgUrl(e.target.value)}
              placeholder="https://example.com/media.mp4"
              className="w-full px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-400">Custom Overlay Text</label>
            <input
              type="text"
              value={overlayText}
              onChange={(e) => setOverlayText(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-400">Audio Volume ({audioVolume}%)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={audioVolume}
              onChange={(e) => setAudioVolume(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>
        </div>

        {/* Interactive Live Preview */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-400">Interactive Live Preview</label>
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-slate-800 flex items-center justify-center">
            {bgUrl ? (
              <img src={bgUrl} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-indigo-950 opacity-80" />
            )}
            <h1 className="relative z-10 text-2xl font-extrabold tracking-widest text-center px-4 uppercase text-white drop-shadow-md">
              {overlayText || 'YOUR TITLE'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';

interface ContentItem {
  id: string;
  title: string;
  category: string;
  caption: string;
}

export const ContentManagerTab: React.FC = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('News Bulletin');
  const [caption, setCaption] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newItem: ContentItem = {
      id: Date.now().toString(),
      title,
      category,
      caption,
    };

    setItems([newItem, ...items]);
    setTitle('');
    setCaption('');
  };

  return (
    <div className="space-y-6 p-6 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800">
      <h2 className="text-2xl font-bold border-b border-slate-800 pb-3">CMS & Editorial Manager</h2>

      {/* Editor Publishing Form */}
      <form onSubmit={handleAddItem} className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-400">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
            placeholder="Headline title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-400">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="News Bulletin">News Bulletin</option>
            <option value="Regulation">Regulation</option>
            <option value="Media Photo Studio">Media Photo Studio</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-400">Caption / Summary</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
            placeholder="Write content details..."
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded font-medium text-white transition-colors"
        >
          Publish Article
        </button>
      </form>

      {/* Published List */}
      <div className="mt-8 pt-6 border-t border-slate-800">
        <h3 className="text-lg font-semibold text-slate-300 mb-4">Published Items</h3>
        {items.length === 0 ? (
          <p className="text-slate-500 text-sm">No items published yet.</p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <span className="text-xs px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                    {item.category}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{item.caption}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
import React, { useState } from 'react';

interface Section {
  id: string;
  name: string;
  visible: boolean;
}

export const HomepageManagerTab: React.FC = () => {
  const [bannerText, setBannerText] = useState('');
  const [sections, setSections] = useState<Section[]>([
    { id: '1', name: 'Spotlight Banner', visible: true },
    { id: '2', name: 'Fixtures & Results', visible: true },
    { id: '3', name: 'League Standings', visible: true },
    { id: '4', name: 'Top Scorers', visible: true },
  ]);

  const toggleVisibility = (id: string) => {
    setSections(sections.map(sec => sec.id === id ? { ...sec, visible: !sec.visible } : sec));
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= sections.length) return;
    const updated = [...sections];
    const [movedItem] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, movedItem);
    setSections(updated);
  };

  return (
    <div className="space-y-6 p-6 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800">
      <h2 className="text-2xl font-bold border-b border-slate-800 pb-3">Homepage Architecture</h2>

      {/* Custom Spotlight Banner */}
      <div className="space-y-2 max-w-md">
        <label className="block text-sm font-medium text-slate-400">Custom Spotlight Banner Text</label>
        <input
          type="text"
          value={bannerText}
          onChange={(e) => setBannerText(e.target.value)}
          placeholder="e.g., Finals Registration Now Open!"
          className="w-full px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
        />
      </div>

      {/* Drag & Reorder Priority List */}
      <div className="pt-4 border-t border-slate-800">
        <h3 className="text-lg font-semibold text-slate-300 mb-3">Section Layout & Priority</h3>
        <div className="space-y-2 max-w-md">
          {sections.map((section, idx) => (
            <div key={section.id} className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
              <span className={section.visible ? 'text-white' : 'text-slate-500 line-through'}>
                {section.name}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleVisibility(section.id)}
                  className={`px-2 py-1 text-xs rounded ${section.visible ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-700 text-slate-400'}`}
                >
                  {section.visible ? 'Visible' : 'Hidden'}
                </button>
                <button
                  onClick={() => moveSection(idx, 'up')}
                  disabled={idx === 0}
                  className="px-2 py-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 rounded text-xs"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveSection(idx, 'down')}
                  disabled={idx === sections.length - 1}
                  className="px-2 py-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 rounded text-xs"
                >
                  ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  visible: boolean;
}

export const NavigationManagerTab: React.FC = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { id: '1', label: 'Home', visible: true },
    { id: '2', label: 'Fixtures', visible: true },
    { id: '3', label: 'Standings', visible: true },
    { id: '4', label: 'Stats', visible: true },
    { id: '5', label: 'Media', visible: false },
  ]);

  const toggleVisibility = (id: string) => {
    setNavItems(navItems.map(item => item.id === id ? { ...item, visible: !item.visible } : item));
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= navItems.length) return;
    const updated = [...navItems];
    const [movedItem] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, movedItem);
    setNavItems(updated);
  };

  return (
    <div className="space-y-6 p-6 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800">
      <h2 className="text-2xl font-bold border-b border-slate-800 pb-3">Navigation Manager</h2>
      
      <div className="space-y-2 max-w-md">
        {navItems.map((item, idx) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
            <span className={item.visible ? 'text-white font-medium' : 'text-slate-500 line-through'}>
              {item.label}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleVisibility(item.id)}
                className={`px-2 py-1 text-xs rounded ${item.visible ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-700 text-slate-400'}`}
              >
                {item.visible ? 'Shown' : 'Hidden'}
              </button>
              <button
                onClick={() => moveItem(idx, 'up')}
                disabled={idx === 0}
                className="px-2 py-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 rounded text-xs"
              >
                ↑
              </button>
              <button
                onClick={() => moveItem(idx, 'down')}
                disabled={idx === navItems.length - 1}
                className="px-2 py-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 rounded text-xs"
              >
                ↓
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
