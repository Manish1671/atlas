import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Filter, Search, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

const students = [
  { id: 1, name: "Alex Chen", readiness: 85, risk: "Low", trend: "+5", lastActive: "2 hours ago" },
  { id: 2, name: "Sarah Johnson", readiness: 42, risk: "High", trend: "-12", lastActive: "3 days ago" },
  { id: 3, name: "Michael Chang", readiness: 68, risk: "Medium", trend: "+2", lastActive: "1 day ago" },
  { id: 4, name: "Emily Rodriguez", readiness: 92, risk: "Low", trend: "+1", lastActive: "Just now" },
  { id: 5, name: "David Kim", readiness: 38, risk: "Critical", trend: "-8", lastActive: "5 days ago" },
];

export function MentorView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid gap-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Mentor Command Center</h1>
          <p className="mt-2 text-slate-400">Monitor student progress, identify risks, and send targeted interventions.</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="bg-cyan-600 hover:bg-cyan-500 text-white border-none shadow-[0_0_15px_rgba(8,145,178,0.4)]">
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-5 bg-[#0b1019]/80 border-white/5">
          <p className="text-sm font-medium text-slate-400">Total Cohort</p>
          <p className="mt-2 text-3xl font-bold text-white">124</p>
        </Card>
        <Card className="p-5 bg-rose-500/5 border-rose-500/20">
          <p className="text-sm font-medium text-rose-400">At Risk / Critical</p>
          <p className="mt-2 text-3xl font-bold text-rose-100">11</p>
        </Card>
        <Card className="p-5 bg-emerald-500/5 border-emerald-500/20">
          <p className="text-sm font-medium text-emerald-400">Placement Ready</p>
          <p className="mt-2 text-3xl font-bold text-emerald-100">45</p>
        </Card>
      </div>

      <Card className="bg-[#0b1019]/80 border-white/5 overflow-hidden glow-border">
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <h2 className="font-semibold text-white">Student Roster</h2>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="bg-white/5 border border-white/10 rounded-md pl-9 pr-4 py-1.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-400">
              <tr>
                <th className="px-5 py-3 font-medium">Student</th>
                <th className="px-5 py-3 font-medium">Readiness Score</th>
                <th className="px-5 py-3 font-medium">Risk Level</th>
                <th className="px-5 py-3 font-medium">Last Active</th>
                <th className="px-5 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-400" />
                      </div>
                      <span className="font-medium text-slate-200">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[100px] h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${student.readiness > 70 ? 'bg-emerald-400' : student.readiness > 40 ? 'bg-amber-400' : 'bg-rose-500'}`}
                          style={{ width: `${student.readiness}%` }}
                        />
                      </div>
                      <span className="text-slate-300 w-6">{student.readiness}</span>
                      <span className={`text-xs ${student.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {student.trend}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset
                      ${student.risk === 'Critical' ? 'bg-rose-500/10 text-rose-400 ring-rose-500/20' : 
                        student.risk === 'High' ? 'bg-orange-500/10 text-orange-400 ring-orange-500/20' : 
                        student.risk === 'Medium' ? 'bg-amber-500/10 text-amber-400 ring-amber-500/20' : 
                        'bg-emerald-500/10 text-emerald-400 ring-emerald-500/20'}`}
                    >
                      {['Critical', 'High'].includes(student.risk) && <AlertCircle className="w-3 h-3" />}
                      {student.risk}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-400">{student.lastActive}</td>
                  <td className="px-5 py-4 text-right">
                    <Button className="h-8 px-3 bg-transparent text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 shadow-none border-none">
                      View Profile <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  );
}
