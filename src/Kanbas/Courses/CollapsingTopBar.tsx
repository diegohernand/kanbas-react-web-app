function CollapsingTopBar() {
    return (
        <div className="d-block d-md-none">
      <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'rgb(181, 40, 40)' }}>Kanbas Navigation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul className="wd-modal-nav">
              <li className="wd-account-icon">
                  <a href="/Kanbas/Account/Profile/screen.html">
                      <i className="fa-solid fa-user"></i>
                   Account</a>
                </li>
                <li>
                  <a href="/Kanbas/Dashboard/screen.html">
                    <i className="fa fa-tachometer"></i> Dashboard</a>
                </li>
                <li className="wd-active"><a href="/Kanbas/Courses/Home/screen.html">
                   <i className="fa-solid fa-book"></i> Courses</a>
                 </li>
                <li><a href="#"><i className="fa fa-calendar"></i> Calendar</a></li>
                <li><a href="#"><i className="fa-solid fa-inbox"></i> Inbox</a></li>
                <li><a href="#"><i className="fa-regular fa-clock"></i> History</a></li>
                <li><a href="#">
                  <i className="fa-solid fa-tv"></i> Studio</a></li>
                <li><a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i> Commons </a></li>
                <li><a href="#"><i className="fa-solid fa-circle-question"></i> Help</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar border-bottom border-body" style={{ padding: '0%', minHeight: '80px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor: 'black' }} data-bs-theme="dark">
        <div className="container-fluid" style={{ padding: '0%' }}>
          <button type="button" className="navbar-toggler" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ transform: 'translate(8px, 0px)' }}>
          <i className="fa-solid fa-bars" style={{color: "white"}}></i>
          </button>
          <h6 style={{ color: 'white', margin: 'auto' }}>
            CS4550
          </h6>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ transform: 'translate(-8px, 0px)', color: 'white' }}>
          <i className="fa-solid fa-chevron-down"></i>
          <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: 'white' }}>
            <ul className="wd-collapse-nav">
            <li className="wd-active"> 
                <a href="/Kanbas/Courses/Home/screen.html"> 
                  <i className="fa-solid fa-house"></i>
                  Home</a></li>
              <li>
                <a href="/Kanbas/Courses/Modules/screen.html">
                  <i className="fa-solid fa-circle-nodes"></i> Modules</a>
              </li>
              <li><a href="http://piazza.com">
                <i className="fa-solid fa-plug"></i> Piazza</a></li>
              <li><a href="#">
                <i className="fa-solid fa-plug"></i> Zoom Meetings</a></li>
              <li>
                <a href="/Kanbas/Courses/Assignments/screen.html">
                  <i className="fa-regular fa-pen-to-square"></i> Assignments</a>
              </li>
              <li><a href="#">
                <i className="fa-solid fa-rocket"></i> Quizzes</a></li>
              <li><a href="/Kanbas/Courses/Grades/screen.html">
                <i className="fa-regular fa-square-check"></i> Grades</a></li>
              <li><a href="#">
                <i className="fa-solid fa-user-group"></i> People</a></li>
                <li><a href="#">
                    <i className="fa-solid fa-plug"></i> Panopto Video &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>
                <li><a href="#">
                  <i className="fa-regular fa-comments"></i> Discuissions &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>
              <li><a href="#">
                <i className="fa-solid fa-bullhorn"></i> Announcements &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>
              <li><a href="#">
                <i className="fa-regular fa-file-lines"></i> Pages &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>
              <li><a href="#">
                <i className="fa-regular fa-folder"></i> Files &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>
              <li><a href="#">
                <i className="fa-solid fa-clipboard-list"></i> Rubrics &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>
              <li><a href="#">
                <i className="fa-solid fa-bullseye"></i> Outcomes &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>     
             <li><a href="#">
              <i className="fa-regular fa-circle"></i> Collaborations &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>
            <li><a href="#">
              <i className="fa-regular fa-file-lines"></i> Syllabus &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-regular fa-eye-slash" style={{color: "rgb(117, 117, 117)"}}></i></a></li>  
            <li><a href="#">
              <i className="fa-solid fa-plug"></i> Progress Reports (EAB Navigate)</a></li>
            <li><a href="#">
              <i className="fa-solid fa-gear"></i> Settings</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}

export default CollapsingTopBar;