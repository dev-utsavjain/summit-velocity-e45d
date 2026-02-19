import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons?.[name] || Icons.HelpCircle;
  return <LucideIcon {...props} />;
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon name="CheckCircle2" className="w-6 h-6 text-[#5E6AD2]" />
            <span className="text-slate-800 font-semibold">TaskHub</span>
          </div>
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} TaskHub. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}