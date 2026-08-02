import { motion } from "framer-motion";
import { Award, Flame, Play, Share2, TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/button";

export function WeeklyWrapped() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center -mt-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm relative group"
      >
        {/* Background glow effects */}
        <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
        
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/20">
          <div className="p-8 pb-12 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-white tracking-widest uppercase mb-1 opacity-80">Atlas Wrapped</h2>
            <p className="text-slate-400 text-sm mb-8">Week of Aug 1, 2026</p>
            
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              className="w-24 h-24 bg-gradient-to-br from-rose-400 to-fuchsia-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.6)] mb-6"
            >
              <Flame className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-fuchsia-200 tracking-tight mb-2">
              Unstoppable.
            </h1>
            <p className="text-rose-200/80 mb-10">You're in the top 5% of active learners this week.</p>
            
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg"><TrendingUp className="w-5 h-5 text-blue-400"/></div>
                  <div className="text-left"><p className="text-xs text-slate-400">Readiness Score</p><p className="font-semibold text-white">+8 Points</p></div>
                </div>
                <span className="text-xl font-bold text-blue-400">72</span>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg"><Award className="w-5 h-5 text-emerald-400"/></div>
                  <div className="text-left"><p className="text-xs text-slate-400">Problems Solved</p><p className="font-semibold text-white">Dynamic Prog.</p></div>
                </div>
                <span className="text-xl font-bold text-emerald-400">14</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 p-4 flex justify-between items-center">
            <Button className="bg-white/20 hover:bg-white/30 text-white border-none shadow-none gap-2 rounded-full px-6">
              <Play className="w-4 h-4 fill-current" /> Replay
            </Button>
            <Button className="bg-white hover:bg-slate-100 text-slate-900 border-none shadow-none gap-2 rounded-full px-6 font-semibold">
              <Share2 className="w-4 h-4" /> Share
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
