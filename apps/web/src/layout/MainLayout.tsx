import { Brain, Search, Sparkles } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Digital Twin", path: "/digital-twin" },
  { name: "Timeline", path: "/timeline" },
  { name: "AI Mentor", path: "/ai-mentor" },
  { name: "Weekly Wrapped", path: "/wrapped" },
  { name: "Mentor View", path: "/mentor-view" },
];

export function MainLayout() {
  const location = useLocation();

  return (
    <main className="min-h-screen bg-[#060913] text-slate-100 flex">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-white/5 glass-panel p-5 lg:flex flex-col z-20">
        <div className="flex items-center gap-3 text-xl font-bold tracking-tight">
          <Brain className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <span className="text-white">Atlas</span>
        </div>
        <nav className="mt-8 flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.05)]"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/5 bg-[#060913]/80 px-5 backdrop-blur-xl">
          <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition-colors focus-within:border-cyan-500/50 focus-within:bg-white/10">
            <Search className="h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search students, events, skills..." 
              className="bg-transparent border-none outline-none w-full text-slate-200 placeholder:text-slate-500"
            />
          </div>
          <Button className="rounded-full gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-none shadow-[0_0_15px_rgba(34,211,238,0.3)] text-white">
            <Sparkles className="h-4 w-4" />
            Ask AI Mentor
          </Button>
        </header>

        <div className="flex-1 overflow-x-hidden p-5 md:p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
