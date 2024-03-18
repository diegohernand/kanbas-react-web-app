import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaArrowRight, FaTv, FaQuestionCircle, FaRegQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
        { label: "Courses",   icon: <FaBook className="fs-2" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox",     icon: <FaInbox className="fs-2" />  },
        { label: "History",   icon: <FaClock className="fs-2" /> },
        { label: "Studio",    icon: <FaTv className="fs-2" />  },
        { label: "Commons",   icon: <FaArrowRight className="fs-2" />  },
        { label: "Help",      icon: <FaRegQuestionCircle className="fs-2" />  },
    ];
    const { pathname } = useLocation();
    return (
        <div className="d-none d-md-block flex-shrink-0">
        <ul className="wd-kanbas-navigation">
            <li className="fs-40">
                <Link to="http://northeastern.edu" style={{ fontSize: "40px" }}>
                <span style={{ color: "red" }}>N</span>
                </Link>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}>
                        <span style={{ color: "red" }}>{link.icon}</span>
                        <div>{link.label}</div>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    );
}
export default KanbasNavigation;

