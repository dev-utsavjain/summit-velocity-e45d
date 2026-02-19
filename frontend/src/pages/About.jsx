import { useEffect } from 'react';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons?.[name] || Icons.HelpCircle;
  return <LucideIcon {...props} />;
};

const FeatureCard = ({ icon, title, text }) => (
  <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5E6AD2] to-[#00D4AA] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon name={icon} className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{text}</p>
  </div>
);

const StepCard = ({ number, title, text }) => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 rounded-full bg-[#5E6AD2] text-white flex items-center justify-center font-bold shadow-md">
      {number}
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  </div>
);

export default function About() {
  useEffect(() => {
    document.title = 'About – TaskFlow';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F2F5] via-white to-[#F0F2F5]">
      {/* Hero */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
            Meet TaskFlow
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            The intuitive task manager that blends powerful functionality with serene design. Built for clarity, speed, and focus.
          </p>
          <div className="mx-auto w-full max-w-4xl h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=800&fit=crop&auto=format"
              alt="Team collaboration"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/1600x800/1a1a2e/eaeaea?text=About+Hero';
              }}
            />
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to stay organized
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From quick capture to deep focus, TaskFlow adapts to your workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon="Zap"
              title="Instant Capture"
              text="Add tasks in seconds with natural input and smart suggestions."
            />
            <FeatureCard
              icon="BarChart3"
              title="Visual Progress"
              text="Track completion rates and celebrate milestones with live analytics."
            />
            <FeatureCard
              icon="Palette"
              title="Glassmorphism UI"
              text="A calming, translucent interface designed to reduce cognitive load."
            />
            <FeatureCard
              icon="Smartphone"
              title="Cross-Device Sync"
              text="Seamlessly move between desktop and mobile without missing a beat."
            />
            <FeatureCard
              icon="Lock"
              title="Privacy First"
              text="End-to-end encryption keeps your data secure and under your control."
            />
            <FeatureCard
              icon="Heart"
              title="Built with Care"
              text="Crafted by a small team passionate about productivity and design."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Three steps to clarity
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting started is easier than making coffee.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-10 md:gap-6">
            <StepCard
              number={1}
              title="Create a task"
              text="Type a title, hit Enter—done. Add notes, due dates, or tags if you like."
            />
            <StepCard
              number={2}
              title="Focus & work"
              text="Filter by today, priority, or project. Check off items as you finish."
            />
            <StepCard
              number={3}
              title="Review & repeat"
              text="Celebrate progress, archive completed work, and plan your next moves."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Need help?
              </h2>
              <p className="text-slate-600 mb-6">
                Our small support team is ready to assist. Reach out any time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="w-5 h-5 text-[#5E6AD2]" />
                  <a
                    href="mailto:hello@taskflow.app"
                    className="text-slate-700 hover:text-[#5E6AD2] transition-colors"
                  >
                    hello@taskflow.app
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="w-5 h-5 text-[#5E6AD2]" />
                  <span className="text-slate-700">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="w-5 h-5 text-[#5E6AD2]" />
                  <span className="text-slate-700">Responses within 24 h</span>
                </div>
              </div>
            </div>
            <div className="h-64 md:h-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                alt="Support team"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x600/1a1a2e/eaeaea?text=Support';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}