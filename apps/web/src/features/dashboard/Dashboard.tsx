import { motion } from "framer-motion";
import { Activity, CalendarClock, GraduationCap, ShieldCheck, Users } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "../../components/ui/card";

const readiness = [{ week: "W1", score: 48 }, { week: "W2", score: 56 }, { week: "W3", score: 63 }, { week: "W4", score: 72 }];
const activity = [{ name: "Academics", value: 78 }, { name: "Coding", value: 64 }, { name: "Career", value: 52 }, { name: "Projects", value: 81 }];
const events = ["Solved 100th LeetCode problem", "Submitted OS assignment", "Pushed React analytics dashboard", "AWS certification added"];

export function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid gap-6"
    >
      <div className="grid gap-6 lg:grid-cols-[1.6fr_0.8fr]">
        <Card className="p-6 glow-border bg-[#0b1019]/90 border-white/5">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-cyan-400">Student Digital Twin</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">Placement readiness is improving</h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                Atlas converts academic, coding, career, and productivity events into live readiness signals and weekly plans.
              </p>
            </div>
            <div className="rounded-full bg-emerald-500/10 p-3">
              <ShieldCheck className="h-8 w-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]" />
            </div>
          </div>
          <div className="h-64 mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={readiness} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="week" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Area type="monotone" dataKey="score" stroke="#22d3ee" strokeWidth={3} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6 bg-[#0b1019]/80 border-white/5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Today's Focus</h2>
          <div className="mt-6 grid gap-3">
            {["Complete OS assignment", "Practice dynamic programming", "Push latest GitHub project", "Revise AWS IAM"].map((x, i) => (
              <motion.div 
                key={x} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (i * 0.1) }}
                className="group flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-sm transition-all hover:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] cursor-pointer"
              >
                <span className="text-slate-200 group-hover:text-white transition-colors">{x}</span>
                <span className="rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">P{i + 1}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Readiness", "72", GraduationCap, "text-cyan-400", "bg-cyan-500/10"],
          ["Events", "184", Activity, "text-blue-400", "bg-blue-500/10"],
          ["Students at risk", "11", Users, "text-rose-400", "bg-rose-500/10"],
          ["Weekly reports", "38", CalendarClock, "text-fuchsia-400", "bg-fuchsia-500/10"]
        ].map(([label, value, Icon, colorClass, bgClass]: any, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
          >
            <Card className="p-5 flex items-center gap-4 bg-[#0b1019]/80 border-white/5 hover:border-white/10 transition-colors cursor-default">
              <div className={`rounded-full p-3 ${bgClass}`}>
                <Icon className={`h-6 w-6 ${colorClass}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">{label}</p>
                <p className="mt-1 text-2xl font-bold text-white tracking-tight">{value}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Card className="p-6 bg-[#0b1019]/80 border-white/5">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">Intelligence Mix</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activity} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                />
                <Bar dataKey="value" fill="#818cf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6 bg-[#0b1019]/80 border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">Timeline Engine</h2>
          <div className="grid gap-0 relative">
            <div className="absolute left-[5px] top-3 bottom-3 w-[2px] bg-white/5" />
            {events.map((event, i) => (
              <motion.div 
                key={event} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex gap-4 relative py-3 group cursor-pointer"
              >
                <div className="mt-1.5 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-[#0b1019] z-10 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                <div>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">{event}</p>
                  <p className="text-xs text-slate-500 mt-1">AI summary queued, twin projection updated</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
