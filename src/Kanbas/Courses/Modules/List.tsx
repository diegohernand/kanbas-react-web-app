import React, { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV,} from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

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
      <ul className="list-group wd-modules" style={{color : "gray", cursor: "pointer"}}>
        
        <li className="list-group-item d-flex flex-row">
        <div className="d-flex flex-column" style={{flexGrow : 1}}>
        <input className="form-control" value={module.name} style={{marginBottom: "10px"}}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          className="form-control" onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        </div>
        <button className="btn btn-primary align-self-start" 
        onClick={() => dispatch(updateModule(module))}
        style={{marginLeft: "10px"}} >
                Update
        </button>
        <button className="btn btn-success align-self-start" 
                  onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                  Add</button>
        

      </li>

        {moduleList.filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
              <button className="btn btn-sm btn-danger float-end"
              onClick={() => dispatch(deleteModule(module._id))}>

              <i className="fa-solid fa-trash"></i>
            </button>
            <button className="btn btn-sm btn-success float-end" style={{color: "white"}}
              onClick={() => dispatch(setModule(module))}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any, index:any) => (
                  <li className="list-group-item" key={index}>
                    {lesson.name}
                    <span className="float-end">
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

