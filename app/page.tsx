'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Wand2, Download, Target, Briefcase, Building, Award, Zap, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react';

const TONES = [
  { name: 'Professional', icon: '💼', desc: 'Corporate & formal' },
  { name: 'Enthusiastic', icon: '🚀', desc: 'Energetic & eager' },
  { name: 'Confident', icon: '💪', desc: 'Bold & assertive' },
  { name: 'Creative', icon: '🎨', desc: 'Unique & memorable' },
  { name: 'Sincere', icon: '💝', desc: 'Genuine & heartfelt' },
  { name: 'Technical', icon: '⚙️', desc: 'Skill-focused' },
];

const FEATURES = [
  { icon: Target, title: 'Job-Specific Tailoring', description: 'AI analyzes job descriptions to highlight your most relevant qualifications.', color: 'from-purple-500 to-indigo-600' },
  { icon: Wand2, title: 'AI-Powered Writing', description: 'Transform your experience into compelling narratives that capture attention.', color: 'from-blue-500 to-cyan-600' },
  { icon: Building, title: 'Company Research', description: 'Automatically incorporates company values and culture into your letter.', color: 'from-green-500 to-emerald-600' },
  { icon: Award, title: 'Achievement Focus', description: 'Highlights your accomplishments with quantifiable results.', color: 'from-amber-500 to-orange-600' },
  { icon: Zap, title: 'Instant Generation', description: 'Get a polished cover letter in under 60 seconds.', color: 'from-red-500 to-rose-600' },
  { icon: Download, title: 'Multiple Formats', description: 'Export as PDF, DOCX, or copy directly to clipboard.', color: 'from-indigo-500 to-purple-600' },
];

const STATS = [
  { value: '30K+', label: 'Letters Generated' },
  { value: '40%', label: 'Higher Response Rate' },
  { value: '< 1 min', label: 'Generation Time' },
  { value: '2 credits', label: 'Per Letter' },
];

export default function CoverLetterPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [jobUrl, setJobUrl] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Cover Letter Generator</span>
                <span className="text-emerald-400 text-xs block -mt-1">by Javari AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white">How It Works</a>
              <a href="/create" className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg">Create Letter</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Cover Letters</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Stand Out From
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">The Competition</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Create personalized, compelling cover letters tailored to each job. AI writes, you land interviews.
          </motion.p>

          {/* Input */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                placeholder="Paste job posting URL or describe the role..."
                className="w-full px-6 py-4 pr-32 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg flex items-center gap-2">
                <Wand2 className="w-4 h-4" />
                Generate
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">2 credits per letter • Customize tone & style</p>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tones */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Tone</h2>
            <p className="text-gray-400">Match your letter to the company culture</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TONES.map((tone, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-emerald-500/50 transition cursor-pointer group">
                <div className="text-3xl mb-2">{tone.icon}</div>
                <div className="font-medium text-white group-hover:text-emerald-400 transition">{tone.name}</div>
                <div className="text-xs text-gray-500">{tone.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Smart Cover Letters</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">AI that understands what hiring managers want to see.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Dream Job Awaits</h2>
          <p className="text-xl text-gray-400 mb-8">Create a cover letter that gets you noticed.</p>
          <a href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl">
            Generate My Letter <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-semibold">Cover Letter Generator</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} CR AudioViz AI, LLC.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
