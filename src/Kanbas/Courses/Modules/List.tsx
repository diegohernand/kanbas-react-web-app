import React, { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="d-flex flex-column">
    <div style={{paddingTop: 10, textAlign: "center" }}>
        <button className="btn btn-custom">Collapse All</button>
        <button className="btn btn-custom">View Progress</button>
        <select style={{ backgroundColor: "#f8f9fa", color: "#212529", border: "1px solid #ced4da", borderRadius: "3px", padding: "3px 8px", cursor: "pointer", fontSize: "14px" }}>
            <option>Publish All</option>
        </select>
        <button className="btn btn-custom-red">+ Module</button>
        <button className="btn btn-custom">⋮</button>
    </div>
    <hr></hr>
      <ul className="list-group wd-modules" style={{color : "gray"}}>
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;

