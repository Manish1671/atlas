import { motion } from "framer-motion";
import { Bot, Lightbulb, MessageSquare, Send, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

const recommendations = [
  "You're struggling with System Design concepts. Focus on studying distributed systems this week.",
  "Your placement readiness score is 72. Completing 5 more LeetCode mediums will boost your algorithm proficiency.",
  "Your OS assignment is due in 3 days. Prioritize reviewing memory management before starting."
];

export function AiMentor() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-[1fr_350px]"
    >
      <div className="flex flex-col h-[calc(100vh-120px)]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-fuchsia-400" /> AI Mentor
          </h1>
          <p className="mt-2 text-slate-400">Your personalized academic and career guide powered by Gemini.</p>
        </div>

        <Card className="flex-1 flex flex-col bg-[#0b1019]/80 border-white/5 overflow-hidden glow-border">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(192,38,211,0.4)]">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-200 max-w-[80%]">
                <p>Hello! I'm your Atlas AI Mentor. I've analyzed your recent GitHub activity and LeetCode submissions.</p>
                <p className="mt-2">I noticed you're doing great with Dynamic Programming, but might need some review on Graph algorithms. Would you like me to generate a study plan for Graphs?</p>
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center shrink-0">
                <span className="text-white font-medium text-sm">ME</span>
              </div>
              <div className="bg-cyan-500/20 text-cyan-50 rounded-2xl rounded-tr-sm p-4 text-sm max-w-[80%]">
                Yes please! Give me a 3-day plan covering BFS, DFS, and Dijkstra.
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(192,38,211,0.4)]">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-200 max-w-[80%]">
                <p>Here is your 3-day Graph plan:</p>
                <ul className="mt-2 space-y-1 list-disc pl-4 text-slate-300">
                  <li><strong>Day 1:</strong> BFS & DFS Traversal basics.</li>
                  <li><strong>Day 2:</strong> Connected Components and Topological Sort.</li>
                  <li><strong>Day 3:</strong> Shortest Paths with Dijkstra's Algorithm.</li>
                </ul>
                <p className="mt-2">I've added these to your Timeline Engine focus queue!</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/5 bg-[#060913]/50">
            <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 pl-4 border border-white/10 focus-within:border-fuchsia-500/50 focus-within:bg-white/10 transition-colors">
              <MessageSquare className="w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Ask your mentor for advice..." 
                className="flex-1 bg-transparent border-none outline-none text-slate-200 text-sm py-2"
              />
              <Button className="rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white w-10 h-10 p-0 flex items-center justify-center shadow-[0_0_10px_rgba(192,38,211,0.3)]">
                <Send className="w-4 h-4 ml-[-2px]" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-6 pt-[88px]">
        <Card className="p-6 bg-[#0b1019]/80 border-white/5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" /> Proactive Insights
          </h2>
          <div className="grid gap-4">
            {recommendations.map((rec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300 leading-relaxed hover:bg-white/10 transition-colors cursor-default"
              >
                {rec}
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
