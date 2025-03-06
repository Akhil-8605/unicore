import React, { useState } from 'react';
import { Download } from 'lucide-react';
import './CoursePage.css';
import dummyPerson from '../../Images/PersonDummy.png';

import coEven from '../../Documents/co-even-time-table.pdf';
import coOdd from '../../Documents/co-odd-time-table.pdf';

const computerCourseData = {
    title: 'Computer Engineering',
    description:
        "The department of Computer Engineering is concerned with the theory, design, development and application of computer systems. Continuous improvement in quality, developing confidence for self and lifelong learning are the highest priorities adhered during the duration of the course. The faculty members are well experienced in teaching and they regularly attend conferences, seminars, faculty development programs, and industry organized workshops to develop in-depth knowledge of computer science disciplines and encourage project-based learning.",
    image:
        'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1200',
    vision:
        'To prepare competent computer engineers with recent technology to serve the industry & society',
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
        { name: 'Mr. Kawale S. M. (HOD)', position: 'M.E (CSE), Lecturer Exp. 14 Yrs.' },
        { name: 'Mr. Rashinkar V. V.', position: 'B.E (IT) Lecturer Exp. 11 Yrs.' },
        { name: 'Mr. Gada B. N.', position: 'B.E (IT) Lecturer Exp. 10 Yrs.' },
        { name: 'Mrs. Asade A. A.', position: 'B.E (CSE) Lecturer Exp. 2 Yrs.' },
    ],
    labs: [
        {
            name: 'Programming Lab',
            image:
                'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Networking Lab',
            image:
                'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400',
        },
    ],
    timetablePdfEven: coEven,
    timetablePdfOdd: coOdd,
};

const ComputerEnggPage = () => {
    const [activeSection, setActiveSection] = useState('vision');

    return (
        <div className="course-page">
            <div className="course-page-course-container">
                <div className="course-page-course-header">
                    <h1 className="course-page-course-title">{computerCourseData.title}</h1>
                    <img
                        src={computerCourseData.image}
                        alt={computerCourseData.title}
                        className="course-page-course-image"
                    />
                    <p>{computerCourseData.description}</p>
                </div>

                <div className="course-page-course-nav">
                    <button
                        className={`course-page-nav-item ${activeSection === 'vision' ? 'active' : ''}`}
                        onClick={() => setActiveSection('vision')}
                    >
                        Vision / Mission
                    </button>
                    <button
                        className={`course-page-nav-item ${activeSection === 'faculty' ? 'active' : ''}`}
                        onClick={() => setActiveSection('faculty')}
                    >
                        Faculty
                    </button>
                    <button
                        className={`course-page-nav-item ${activeSection === 'labs' ? 'active' : ''}`}
                        onClick={() => setActiveSection('labs')}
                    >
                        Laboratories
                    </button>
                    <button
                        className={`course-page-nav-item ${activeSection === 'timetable' ? 'active' : ''}`}
                        onClick={() => setActiveSection('timetable')}
                    >
                        Time Table
                    </button>
                </div>

                <div className="course-page-section-content">
                    {activeSection === 'vision' && (
                        <div className="course-page-vision-mission">
                            <h2 className="course-page-section-title">Vision & Mission</h2>
                            <h3>Vision</h3>
                            <p>{computerCourseData.vision}</p>
                            <h3>Mission</h3>
                            <ul className="course-page-objectives-list">
                                {computerCourseData.mission.map((item, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeSection === 'faculty' && (
                        <div>
                            <h2 className="course-page-section-title">Our Faculty</h2>
                            <div className="course-page-faculty-grid">
                                {computerCourseData.faculty.map((faculty, index) => (
                                    <div key={index} className="course-page-faculty-card">
                                        <img
                                            src={dummyPerson}
                                            alt={faculty.name}
                                            className="course-page-faculty-image"
                                        />
                                        <div className="course-page-faculty-info">
                                            <h3 className="course-page-faculty-name">{faculty.name}</h3>
                                            <p className="course-page-faculty-position">{faculty.position}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'labs' && (
                        <div>
                            <h2 className="course-page-section-title">Our Laboratories</h2>
                            <div className="course-page-lab-grid">
                                {computerCourseData.labs.map((lab, index) => (
                                    <div key={index} className="course-page-lab-card">
                                        <img src={lab.image} alt={lab.name} className="course-page-lab-image" />
                                        <div className="course-page-lab-info">
                                            <h3 className="course-page-lab-name">{lab.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'timetable' && (
                        <div className="course-page-timetable-section">
                            <h2 className="course-page-section-title">Time Table</h2>
                            <a
                                onClick={() => {
                                    window.open(computerCourseData.timetablePdfEven);
                                }}
                                className="course-page-download-button"
                                style={{ marginRight: '1rem' }}
                                download
                            >
                                <Download size={20} />
                                Even Semester Time Table 2024-25
                            </a>
                            <a
                                onClick={() => {
                                    window.open(computerCourseData.timetablePdfOdd);
                                }}
                                className="course-page-download-button"
                                download
                            >
                                <Download size={20} />
                                Odd Semester Time Table 2024-25
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ComputerEnggPage;
