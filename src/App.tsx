import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AppLayout from "./components/layout/AppLayout";
import UploadPage from "./components/UploadPage";
import ProjectsPage from "./components/ProjectsPage";
import ConfigPage from "./components/ConfigPage";
import ChatPage from "./components/ChatPage";
import MindmapPage from "./components/MindmapPage";
import VoicePage from "./components/VoicePage";
import ResultPage from "./components/ResultPage";
import FeedbackPage from "./components/FeedbackPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page - no layout */}
        <Route path="/" element={<LandingPage />} />

        {/* App pages - with breadcrumb layout */}
        <Route element={<AppLayout />}>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/config" element={<ConfigPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/mindmap" element={<MindmapPage />} />
          <Route path="/voice" element={<VoicePage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
