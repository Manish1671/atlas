import { motion } from "framer-motion";
import { Activity, Code, Database, Globe, Network, ShieldCheck, Zap } from "lucide-react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card } from "../../components/ui/card";

const skillData = [
  { subject: 'Algorithms', A: 85, fullMark: 100 },
  { subject: 'System Design', A: 65, fullMark: 100 },
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 75, fullMark: 100 },
  { subject: 'DevOps', A: 60, fullMark: 100 },
  { subject: 'Communication', A: 80, fullMark: 100 },
];

export function DigitalTwin() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid gap-6"
    >
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Student Digital Twin</h1>
        <p className="mt-2 text-slate-400">A live projection of your skills, readiness, and growth trajectory.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="p-6 bg-[#0b1019]/80 border-white/5 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Skill Radar</h2>
          <div className="h-80 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Radar name="Student" dataKey="A" stroke="#22d3ee" fill="#06b6d4" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="grid gap-6 grid-rows-[auto_1fr]">
          <Card className="p-6 bg-gradient-to-br from-[#0b1019] to-slate-900/50 border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Current Status</h2>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-5xl font-bold text-white tracking-tighter">Level 4</span>
                  <span className="text-emerald-400 font-medium mb-1 flex items-center gap-1">
                    <Activity className="w-4 h-4" /> Trending up
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Globe className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Experience to Level 5</span>
                <span>8,450 / 10,000 XP</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "84.5%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-[#0b1019]/80 border-white/5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Competency Breakdown</h2>
            <div className="grid gap-4">
              {[
                { title: "Core Fundamentals", icon: Database, progress: 90, color: "from-emerald-400 to-teal-500" },
                { title: "Frontend Engineering", icon: Code, progress: 85, color: "from-blue-400 to-indigo-500" },
                { title: "System Architecture", icon: Network, progress: 65, color: "from-orange-400 to-rose-500" },
                { title: "Security & Best Practices", icon: ShieldCheck, progress: 40, color: "from-slate-400 to-slate-500" }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="group flex items-center gap-4"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <item.icon className="w-5 h-5 text-slate-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-200">{item.title}</span>
                      <span className="text-slate-400">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
