import { motion } from "framer-motion";
import { BookOpen, Briefcase, Code2, GraduationCap, Star } from "lucide-react";
import { Card } from "../../components/ui/card";

const timelineEvents = [
  {
    id: 1,
    title: "Solved 100th LeetCode Problem",
    type: "coding",
    date: "Today, 10:45 AM",
    description: "Successfully implemented DP solution for 'Longest Palindromic Substring'.",
    icon: Code2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    lineColor: "bg-blue-500/30"
  },
  {
    id: 2,
    title: "Submitted OS Assignment",
    type: "academic",
    date: "Yesterday, 11:30 PM",
    description: "Completed memory management simulation with 95% accuracy.",
    icon: BookOpen,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    lineColor: "bg-emerald-500/30"
  },
  {
    id: 3,
    title: "AWS Certification Added",
    type: "career",
    date: "Aug 1, 2026",
    description: "AWS Certified Solutions Architect – Associate credential verified.",
    icon: Briefcase,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    lineColor: "bg-purple-500/30"
  },
  {
    id: 4,
    title: "Semester 5 Started",
    type: "milestone",
    date: "Jul 25, 2026",
    description: "Enrolled in Advanced Database Systems, Cloud Computing, and AI.",
    icon: GraduationCap,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    lineColor: "bg-amber-500/30"
  },
  {
    id: 5,
    title: "Won Hackathon Stage 2",
    type: "achievement",
    date: "Jul 15, 2026",
    description: "Qualified for the final round of the Adobe Hackathon.",
    icon: Star,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    lineColor: "bg-rose-500/30"
  }
];

export function TimelineView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">Event Timeline</h1>
        <p className="mt-3 text-slate-400">A chronological record of your academic, coding, and career milestones.</p>
      </div>

      <Card className="p-8 bg-[#0b1019]/80 border-white/5 relative overflow-hidden glow-border">
        <div className="absolute top-0 right-0 p-32 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-slate-800" />
          
          <div className="grid gap-10">
            {timelineEvents.map((event, i) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="relative flex gap-6 group"
              >
                <div className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${event.bgColor} border border-white/5 shadow-xl transition-transform group-hover:scale-110`}>
                  <event.icon className={`h-6 w-6 ${event.color}`} />
                </div>
                
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">{event.title}</h3>
                    <span className="text-sm text-slate-500">{event.date}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${event.color} ${event.bgColor} ring-white/10`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
