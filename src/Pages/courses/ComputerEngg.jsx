import { useState } from "react"
import { Download, Users, Calendar } from "lucide-react"
import "./CoursePage.css"

import dummyPerson from "../../Images/PersonDummy.png"

// Note: In a real implementation, you would import these from your actual files
const coEven = "/documents/co-even-time-table.pdf"
const coOdd = "/documents/co-odd-time-table.pdf"

const computerCourseData = {
  title: "Computer Engineering",
  description:
    "The department of Computer Engineering is concerned with the theory, design, development and application of computer systems. Continuous improvement in quality, developing confidence for self and lifelong learning are the highest priorities adhered during the duration of the course. The faculty members are well experienced in teaching and they regularly attend conferences, seminars, faculty development programs, and industry organized workshops to develop in-depth knowledge of computer science disciplines and encourage project-based learning.",
  image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1200",
  vision: "To prepare competent computer engineers with recent technology to serve the industry & society",
  mission: [
    `Mission 1: To impart the knowledge and hands on experience on recent technologies.`,
    `Mission 2: To imbibe professional skills and ethical responsibilities in students.`,
    `Mission 3: To prepare students to be continuous learners in a connected world.`,
    `Program Educational Objectives (PEOs)<br/><br/>
    
    PEO1: Provide socially responsible, environment friendly solutions to Computer Engineering related broad-based problems adapting professional ethics.<br/>
    
    PEO2: Adapt state-of-the-art Computer Engineering broad-based technologies to work in a multi-disciplinary work environment.<br/>
    
    PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.<br/><br/>
    
    Programme Outcomes (POs)<br/><br/>
    
    PO1: Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.<br/>
    
    PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.<br/>
    
    PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.<br/>
    
    PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate techniques to conduct standard tests and measurements.<br/>
    
    PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.<br/>
    
    PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.<br/>
    
    PO7: Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes.<br/><br/>
    
    Program Specific Outcomes (PSOs)<br/>
    
    PSO1: Computer Software and Hardware Usage: Use state-of-the-art technologies for operation and application of computer software and hardware.<br/>
    
    PSO2: Computer Engineering Maintenance: Maintain computer engineering related software and hardware systems.`,
  ],
  faculty: [
    { name: "Mr. Kawale S. M. (HOD)", position: "M.E (CSE), Lecturer Exp. 14 Yrs." },
    { name: "Mr. Rashinkar V. V.", position: "B.E (IT) Lecturer Exp. 11 Yrs." },
    { name: "Mr. Gada B. N.", position: "B.E (IT) Lecturer Exp. 10 Yrs." },
    { name: "Mrs. Asade A. A.", position: "B.E (CSE) Lecturer Exp. 2 Yrs." },
  ],
  labs: [
    {
      name: "Programming Lab",
      description: "State-of-the-art facility for learning programming languages and software development.",
      image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Networking Lab",
      description: "Advanced equipment for network configuration, security testing, and protocol analysis.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
    },
  ],
  timetablePdfEven: coEven,
  timetablePdfOdd: coOdd,
}

export default function ComputerEnggPage() {
  const [activeTab, setActiveTab] = useState("vision")

  return (
    <div className="courses-page-page-container">
      {/* Hero Section */}
      <div className="courses-page-hero-section">
        <div className="courses-page-hero-overlay"></div>
        <img
          src={computerCourseData.image || "/placeholder.svg"}
          alt="Computer Engineering Department"
          className="courses-page-hero-image"
        />
        <div className="courses-page-hero-content">
          <span className="courses-page-department-badge">Department</span>
          <h1 className="courses-page-hero-title">{computerCourseData.title}</h1>
          <p className="courses-page-hero-subtitle">Empowering future engineers with cutting-edge technology and practical skills</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="courses-page-main-content">
        {/* Department Overview */}
        <div className="courses-page-section courses-page-overview-section">
          <div className="courses-page-section-header">
            <div className="courses-page-section-indicator"></div>
            <h2 className="courses-page-section-title">Department Overview</h2>
          </div>
          <div className="courses-page-card">
            <div className="courses-page-card-content">
              <p className="courses-page-description-text">{computerCourseData.description}</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="courses-page-tabs-container">
          <div className="courses-page-tabs-list">
            <button
              className={`courses-page-tab-button ${activeTab === "vision" ? "courses-page-active" : ""}`}
              onClick={() => setActiveTab("vision")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="courses-page-tab-icon"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
                <path d="M12 11.5V20" />
                <path d="m9 13 3-1.5 3 1.5" />
              </svg>
              <span className="courses-page-tab-text">Vision & Mission</span>
            </button>
            <button
              className={`courses-page-tab-button ${activeTab === "faculty" ? "courses-page-active" : ""}`}
              onClick={() => setActiveTab("faculty")}
            >
              <Users className="courses-page-tab-icon" />
              <span className="courses-page-tab-text">Faculty</span>
            </button>
            <button
              className={`courses-page-tab-button ${activeTab === "labs" ? "courses-page-active" : ""}`}
              onClick={() => setActiveTab("labs")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="courses-page-tab-icon"
              >
                <path d="M10 2v7.31" />
                <path d="M14 9.3V1.99" />
                <path d="M8.5 2h7" />
                <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                <path d="M5.58 16.5h12.85" />
              </svg>
              <span className="courses-page-tab-text">Labs</span>
            </button>
            <button
              className={`courses-page-tab-button ${activeTab === "timetable" ? "courses-page-active" : ""}`}
              onClick={() => setActiveTab("timetable")}
            >
              <Calendar className="courses-page-tab-icon" />
              <span className="courses-page-tab-text">Timetable</span>
            </button>
          </div>

          <div className="courses-page-tab-content">
            {/* Vision & Mission Tab */}
            {activeTab === "vision" && (
              <div className="courses-page-card">
                <div className="courses-page-card-header">
                  <h3 className="courses-page-card-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="courses-page-card-icon"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
                      <path d="M12 11.5V20" />
                      <path d="m9 13 3-1.5 3 1.5" />
                    </svg>
                    Vision & Mission
                  </h3>
                  <p className="courses-page-card-description">Our guiding principles and objectives</p>
                </div>
                <div className="courses-page-card-content">
                  <div className="courses-page-vision-box">
                    <h3 className="courses-page-vision-title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="courses-page-vision-icon"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="2" x2="12" y2="4" />
                        <line x1="12" y1="20" x2="12" y2="22" />
                        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                        <line x1="2" y1="12" x2="4" y2="12" />
                        <line x1="20" y1="12" x2="22" y2="12" />
                        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                      </svg>
                      Vision
                    </h3>
                    <p className="courses-page-vision-text">{computerCourseData.vision}</p>
                  </div>

                  <div className="courses-page-mission-section">
                    <h3 className="courses-page-mission-title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="courses-page-mission-icon"
                      >
                        <path d="M12 2l4 4-4 4 4 4-4 4 4 4-4 4" />
                        <path d="M8 18h8" />
                        <path d="M8 12h8" />
                        <path d="M8 6h8" />
                      </svg>
                      Mission
                    </h3>
                    <div className="courses-page-mission-content">
                      {computerCourseData.mission.map((item, index) => (
                        <div key={index} className="courses-page-mission-item">
                          <div dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Faculty Tab */}
            {activeTab === "faculty" && (
              <div className="courses-page-card">
                <div className="courses-page-card-header">
                  <h3 className="courses-page-card-title">
                    <Users className="courses-page-card-icon" />
                    Our Faculty
                  </h3>
                  <p className="courses-page-card-description">Meet our experienced teaching staff</p>
                </div>
                <div className="courses-page-card-content">
                  <div className="courses-page-faculty-grid">
                    {computerCourseData.faculty.map((faculty, index) => (
                      <div key={index} className="courses-page-faculty-card">
                        <div className="courses-page-faculty-image-container">
                          <img src={dummyPerson || "/placeholder.svg"} alt={faculty.name} className="courses-page-faculty-image" />
                          <div className="courses-page-faculty-overlay"></div>
                        </div>
                        <div className="courses-page-faculty-info">
                          <h3 className="courses-page-faculty-name">{faculty.name}</h3>
                          <p className="courses-page-faculty-position">{faculty.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Labs Tab */}
            {activeTab === "labs" && (
              <div className="courses-page-card">
                <div className="courses-page-card-header">
                  <h3 className="courses-page-card-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="courses-page-card-icon"
                    >
                      <path d="M10 2v7.31" />
                      <path d="M14 9.3V1.99" />
                      <path d="M8.5 2h7" />
                      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                      <path d="M5.58 16.5h12.85" />
                    </svg>
                    Our Laboratories
                  </h3>
                  <p className="courses-page-card-description">State-of-the-art facilities for practical learning</p>
                </div>
                <div className="courses-page-card-content">
                  <div className="courses-page-labs-grid">
                    {computerCourseData.labs.map((lab, index) => (
                      <div key={index} className="courses-page-lab-card">
                        <div className="courses-page-lab-image-container">
                          <img src={lab.image || "/placeholder.svg"} alt={lab.name} className="courses-page-lab-image" />
                          <div className="courses-page-lab-overlay"></div>
                          <div className="courses-page-lab-info">
                            <h3 className="courses-page-lab-name">{lab.name}</h3>
                            <p className="courses-page-lab-description">{lab.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Timetable Tab */}
            {activeTab === "timetable" && (
              <div className="courses-page-card">
                <div className="courses-page-card-header">
                  <h3 className="courses-page-card-title">
                    <Calendar className="courses-page-card-icon" />
                    Time Table
                  </h3>
                  <p className="courses-page-card-description">Download semester timetables</p>
                </div>
                <div className="courses-page-card-content courses-page-timetable-content">
                  <button
                    className="courses-page-download-button courses-page-even-button"
                    onClick={() => window.open(computerCourseData.timetablePdfEven)}
                  >
                    <Download className="courses-page-download-icon" />
                    Even Semester Time Table 2024-25
                  </button>

                  <button
                    className="courses-page-download-button courses-page-odd-button"
                    onClick={() => window.open(computerCourseData.timetablePdfOdd)}
                  >
                    <Download className="courses-page-download-icon" />
                    Odd Semester Time Table 2024-25
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
