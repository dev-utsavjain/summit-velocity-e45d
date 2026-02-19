import { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons?.[name] || Icons.HelpCircle;
  return <LucideIcon {...props} />;
};

const TaskCard = ({ task, onToggle, onEdit, onDelete }) => (
  <div className="bg-white/60 backdrop-blur-xl rounded-xl p-5 shadow-lg border border-white/30 relative overflow-hidden">
    <div className="flex items-start gap-4">
      <button
        onClick={() => onToggle(task.id)}
        className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          task.completed
            ? 'bg-[#5E6AD2] border-[#5E6AD2] text-white'
            : 'border-[#5E6AD2]/40 hover:border-[#5E6AD2]'
        }`}
      >
        {task.completed && <Icon name="Check" className="w-4 h-4" />}
      </button>
      <div className="flex-1">
        <p
          className={`font-semibold text-slate-800 ${
            task.completed ? 'line-through opacity-60' : ''
          }`}
        >
          {task.title}
        </p>
        <p className="text-sm text-slate-600 mt-1">{task.description}</p>
        {task.completedAt && (
          <p className="text-xs text-slate-500 mt-2">
            Completed {new Date(task.completedAt).toLocaleString()}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="text-slate-500 hover:text-[#5E6AD2] transition-colors"
        >
          <Icon name="Pencil" className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-slate-500 hover:text-red-500 transition-colors"
        >
          <Icon name="Trash2" className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active
        ? 'bg-[#5E6AD2] text-white shadow-md'
        : 'bg-white/40 text-slate-700 hover:bg-white/70'
    }`}
  >
    {label}
  </button>
);

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Design new landing page',
      description: 'Create wireframes and mockups for the new product launch',
      completed: false,
      createdAt: new Date(Date.now() - 86400000 * 3),
    },
    {
      id: 2,
      title: 'Implement authentication',
      description: 'Add JWT-based auth to the API endpoints',
      completed: true,
      completedAt: new Date(Date.now() - 86400000),
    },
    {
      id: 3,
      title: 'Write unit tests',
      description: 'Cover core business logic with Jest tests',
      completed: false,
      createdAt: new Date(Date.now() - 86400000 * 2),
    },
  ]);
  const [filter, setFilter] = useState('All');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editing, setEditing] = useState(null);

  const handleAdd = () => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      createdAt: new Date(),
    };
    setTasks([newTask, ...tasks]);
    setTitle('');
    setDescription('');
  };

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, completed: !t.completed, completedAt: !t.completed ? new Date() : null }
          : t
      )
    );
  };

  const handleEdit = (task) => {
    setEditing(task);
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleUpdate = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === editing.id ? { ...t, title, description } : t))
    );
    setEditing(null);
    setTitle('');
    setDescription('');
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filtered = tasks.filter((t) => {
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F2F5] via-white to-[#F0F2F5]">
      {/* Hero */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
            Task Dashboard
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Organize, track, and complete your tasks with clarity and style.
          </p>
          <div className="mt-8 mx-auto w-full max-w-3xl h-64 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format"
              alt="Dashboard workspace"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/1200x600/1a1a2e/eaeaea?text=Dashboard';
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="container mx-auto px-4 md:px-6 pb-24">
        {/* Add Task */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              {editing ? 'Edit Task' : 'Add New Task'}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]"
              />
              <input
                type="text"
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]"
              />
            </div>
            <div className="mt-4 flex gap-3">
              <button
                onClick={editing ? handleUpdate : handleAdd}
                className="px-6 py-2 rounded-full bg-[#5E6AD2] text-white font-medium shadow-md hover:bg-[#4A59C2] transition-all duration-300"
              >
                {editing ? 'Update Task' : 'Add Task'}
              </button>
              {editing && (
                <button
                  onClick={() => {
                    setEditing(null);
                    setTitle('');
                    setDescription('');
                  }}
                  className="px-6 py-2 rounded-full bg-white/70 text-slate-700 font-medium hover:bg-white transition-all duration-300"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats & Progress */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-800">{totalCount}</p>
                  <p className="text-sm text-slate-600">Total</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00D4AA]">{completedCount}</p>
                  <p className="text-sm text-slate-600">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#5E6AD2]">{totalCount - completedCount}</p>
                  <p className="text-sm text-slate-600">Active</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-800">{progress}%</p>
                <p className="text-sm text-slate-600">Progress</p>
              </div>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#5E6AD2] to-[#00D4AA] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="flex gap-3 justify-center">
            {['All', 'Active', 'Completed'].map((f) => (
              <FilterButton
                key={f}
                label={f}
                active={filter === f}
                onClick={() => setFilter(f)}
              />
            ))}
          </div>
        </div>

        {/* Task List */}
        <div className="max-w-3xl mx-auto grid gap-4">
          {filtered.length === 0 ? (
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl border border-white/30">
              <Icon name="ClipboardList" className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">No tasks here. Add one above!</p>
            </div>
          ) : (
            filtered.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={handleToggle}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}