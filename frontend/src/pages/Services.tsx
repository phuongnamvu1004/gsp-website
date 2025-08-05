import { Routes, Route } from "react-router-dom";
import Consulting from "../components/Services/Consulting";
import Maintenance from "../components/Services/Maintenance";

export default function Services() {
  return (
    <Routes>
      <Route path="consulting" element={<Consulting />} />
      <Route path="maintenance" element={<Maintenance />} />
    </Routes>
  );
}