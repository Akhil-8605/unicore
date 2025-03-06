import React, { useState } from 'react';
import { Download } from 'lucide-react';
import './CoursePage.css';
import dummyPerson from '../../Images/PersonDummy.png';

import ejEven from '../../Documents/ej-even-time-table.pdf';
import ejOdd from '../../Documents/ej-odd-time-table.pdf';

const electronicsCourseData = {
    title: 'Electronics And Telecommunication Engineering',
    description:
        "The department of Electronics & Telecommunication Engineering strives for excellence in education so that students can establish themselves as world-class technicians and practicing engineers. The department boasts good infrastructure and fully developed labs that empower students with the proficiency and knowledge required to excel in the dynamic field of electronics and technology, while also preparing them for higher education and industry challenges.",
    image:
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200',
    vision:
        'To prepare proficient engineers with technological advancement in Electronics and Telecommunication Engineering to meet industry and social needs',
    mission: [
        `Mission 1: To offer modern educational aids, laboratories along with industry interaction.`,
        `Mission 2: To enable students to strengthen their soft skills through co-curricular and extra-curricular activities.`,
        `Mission 3: To encourage lifelong learning for better career opportunities.`,
        `Program Educational Objectives (PEOs)<br/><br/>
    
    PEO1: Provide socially responsible, environment friendly solutions to Electronics and Telecommunication Engineering related broad-based problems adapting professional ethics.<br/>
    
    PEO2: Adapt state-of-the-art Electronics and Telecommunication Engineering broad-based technologies to work in multi-disciplinary work environments.<br/>
    
    PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.<br/><br/>
    
    Programme Outcomes (POs)<br/><br/>
    
    PO1: Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.<br/>
    
    PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.<br/>
    
    PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of system components or processes to meet specified needs.<br/>
    
    PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate techniques to conduct standard tests and measurements.<br/>
    
    PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in the context of society, sustainability, environment and ethical practices.<br/>
    
    PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.<br/>
    
    PO7: Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes.<br/><br/>
    
    Program Specific Outcomes (PSOs)<br/><br/>
    
    PSO1: Electronics and Telecommunication System: Maintain various types of Electronics & Telecommunication Systems.<br/>
    
    PSO2: EDA Tools Usage: Use EDA tools to develop simple Electronics and Telecommunication Engineering related circuits.`,
    ],
    faculty: [
        { name: 'Mr. Choudhari A V (HOD)', position: 'M.Tech ES, Lecturer Exp. 17 Yrs.' },
        { name: 'Mr. Nimbalkar G C', position: 'M.E (EE) Lecturer Exp. 25 Yrs.' },
        { name: 'Mr. Patki A D', position: 'B.E, M.E (E&TC), Lecturer Exp. 21 Yrs' },
        { name: 'Mrs. Konade S B', position: 'B.E (CSE) Lecturer Exp. 4 Yrs' },
    ],
    labs: [
        {
            name: 'Electronics Lab',
            image:
                'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Communication Lab',
            image:
                'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=400',
        },
    ],
    timetablePdfEven: ejEven,
    timetablePdfOdd: ejOdd,
};

const ElectronicsPage = () => {
    const [activeSection, setActiveSection] = useState('vision');

    return (
        <div className="course-page">
            <div className="course-page-course-container">
                <div className="course-page-course-header">
                    <h1 className="course-page-course-title">{electronicsCourseData.title}</h1>
                    <img
                        src={electronicsCourseData.image}
                        alt={electronicsCourseData.title}
                        className="course-page-course-image"
                    />
                    <p>{electronicsCourseData.description}</p>
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
                            <p>{electronicsCourseData.vision}</p>
                            <h3>Mission</h3>
                            <ul className="course-page-objectives-list">
                                {electronicsCourseData.mission.map((item, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeSection === 'faculty' && (
                        <div>
                            <h2 className="course-page-section-title">Our Faculty</h2>
                            <div className="course-page-faculty-grid">
                                {electronicsCourseData.faculty.map((faculty, index) => (
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
                                {electronicsCourseData.labs.map((lab, index) => (
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
                                    window.open(electronicsCourseData.timetablePdfEven);
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
                                    window.open(electronicsCourseData.timetablePdfOdd);
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

export default ElectronicsPage;
