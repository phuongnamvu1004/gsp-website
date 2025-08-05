import { Routes, Route } from "react-router-dom";
import BasicCourses from "../components/CoursesPage/BasicCourses";
import AdvancedCourses from "../components/CoursesPage/AdvancedCourses";

export default function Services() {
  return (
    <Routes>
      <Route path="basic" element={<BasicCourses />} />
      <Route path="advanced" element={<AdvancedCourses />} />
    </Routes>
  );
}