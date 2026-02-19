import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons?.[name] || Icons.HelpCircle;
  return <LucideIcon {...props} />;
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon name="CheckCircle2" className="w-7 h-7 text-[#5E6AD2]" />
          <span className="text-xl font-bold text-slate-900">TaskHub</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-slate-700 hover:text-[#5E6AD2] transition-colors font-medium">
            Home
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-slate-700 hover:text-[#5E6AD2] transition-colors">
            <Icon name="BarChart3" className="w-5 h-5" />
          </button>
          <button className="text-slate-700 hover:text-[#5E6AD2] transition-colors">
            <Icon name="Settings" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}