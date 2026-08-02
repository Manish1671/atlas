import { Route, Routes } from "react-router-dom";
import { AiMentor } from "../features/ai-mentor/AiMentor";
import { Dashboard } from "../features/dashboard/Dashboard";
import { DigitalTwin } from "../features/digital-twin/DigitalTwin";
import { MentorView } from "../features/mentor-view/MentorView";
import { TimelineView } from "../features/timeline/TimelineView";
import { WeeklyWrapped } from "../features/wrapped/WeeklyWrapped";
import { MainLayout } from "../layout/MainLayout";

export function App() { 
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/digital-twin" element={<DigitalTwin />} />
        <Route path="/timeline" element={<TimelineView />} />
        <Route path="/ai-mentor" element={<AiMentor />} />
        <Route path="/wrapped" element={<WeeklyWrapped />} />
        <Route path="/mentor-view" element={<MentorView />} />
      </Route>
    </Routes>
  ); 
}
