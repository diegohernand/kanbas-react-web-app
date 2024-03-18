import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import { Link } from "react-router-dom";
import { FaGlasses } from "react-icons/fa";
import Modules from "./Modules";
import "./index.css";
import CollapsingTopBar from "./CollapsingTopBar";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const shortPath = useLocation().pathname.split("/").pop();
  return (
    <div className="d-flex flex-column">
        <CollapsingTopBar/>
    <div className="d-none d-md-block flex-shrink-0">
    <div style={{ marginLeft: "20px", marginTop: "10px", color: "red" }}>
        <HiMiniBars3 /> 
        <Link to={`/courses/${courseId}`} style={{marginLeft: "10px", color: "red", textDecoration: "none"}}>
          {course?.number} {course?.name}
        </Link >
        <span style={{ color: "black" }}>&nbsp;&gt;</span>
        <span style={{color: "black", "marginLeft": "5px"}} >{shortPath}</span> 
      </div>
              {/* Student View Button */}
      <div style={{ position: "absolute", top: "10px", right: "20px" }}>
        <button className="text-end"><FaGlasses/>&nbsp;Student View</button>
      </div>
      </div>

    <hr />
    <div className="d-flex flex-row">
    <CourseNavigation />
        <div
            className="overflow-y-scroll bottom-0 end-0"
            style={{ left: "320px", top: "50px", paddingRight: "20px", paddingLeft: "30px", width: "100%"}}
        >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Zoom" element={<h1>Zoom</h1>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                <Route path="Grades" element={<h1>Grades</h1>} />
                <Route path="People" element={<h1>People</h1>} />
            </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;

