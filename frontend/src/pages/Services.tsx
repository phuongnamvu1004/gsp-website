import { Routes, Route } from "react-router-dom";
import LiveEventProduction from "../components/ServicesPage/LiveEventProduction.tsx";
import SystemIntegration from "../components/ServicesPage/SystemIntegration.tsx";

export default function Services() {
  return (
    <Routes>
      <Route path="live-event-production" element={<LiveEventProduction />} />
      <Route path="system-integration" element={<SystemIntegration />} />
    </Routes>
  );
}