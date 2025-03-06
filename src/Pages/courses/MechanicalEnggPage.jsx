import React, { useState } from 'react';
import { Download } from 'lucide-react';
import './CoursePage.css';
import dummyPerson from '../../Images/PersonDummy.png';

import meEven from '../../Documents/me-even-time-table.pdf';

const mechanicalCourseData = {
    title: 'Mechanical Engineering',
    description:
        "Mechanical Engineering deals with the design and production of machines, tools, and plays an important role in the automobile, railway, and aerospace sectors. The department has a team of highly qualified and experienced faculty dedicated to creating smart technocrats ready to meet global challenges. It is equipped with advanced laboratories featuring modern machinery like VMC and CNC machining centers.",
    image:
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200',
    vision:
        'To prepare competent mechanical engineers by enhancing technical knowledge and skills to cater to industry & society needs',
    mission: [
        `Mission 1: To offer quality technical education through an effective teaching-learning process and industry interaction.`,
        `Mission 2: To inculcate ethical values and professional skills in students by providing training and workshops.`,
        `Mission 3: To furnish opportunities for lifelong learning through co-curricular and extra-curricular activities.`,
        `
            Program Educational Objectives (PEOs)<br/><br/>
    
        PEO1: Provide socially responsible, environment friendly solutions to Mechanical Engineering related broad-based problems adapting professional ethics.<br/>
    
        PEO2: Adapt state-of-the-art Mechanical Engineering technologies to work in multi-disciplinary work environments.<br/>
    
        PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.<br/><br/>
    
        Programme Outcomes (POs)<br/><br/>
    
        PO1: Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve problems.<br/>
    
        PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.<br/>
    
        PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems or processes to meet specified needs.<br/>
    
        PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and techniques to conduct standard tests and measurements.<br/>
    
        PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in the context of society, sustainability, and ethical practices.<br/>
    
        PO6: Project Management: Use engineering management principles individually or as a team to manage projects and effectively communicate about engineering activities.<br/>
    
        PO7: Life-long learning: Engage in continuous updating of knowledge and skills in response to technological changes.<br/><br/>
    
        Program Specific Outcomes (PSOs)<br/><br/>
    
        PSO1: Modern Software Usage: Use state-of-the-art software for design, drafting, manufacturing, and documentation of mechanical components.<br/>
    
        PSO2: Machine Maintenance: Maintain and select appropriate machines, equipment, and instruments in the field of Mechanical Engineering.<br/>
    
        PSO3: Process Management: Manage mechanical processes through effective selection, scheduling, and operational techniques.`,
    ],
    faculty: [
        { name: 'Mr. Bagale M G (HOD)', position: 'B.E (Mech), Lecturer Exp. 25 Yrs' },
        { name: 'Mr. Tirthkar R N', position: 'B.E (Mech), Lecturer Exp. 22 Yrs' },
        { name: 'Mr. Shinde D V', position: 'M.E Design, Lecturer Exp. 21 Yrs' },
        { name: 'Mr. Thalange S S', position: 'M.E Design, Lecturer Exp. 19 Yrs' },
    ],
    labs: [
        {
            name: 'CAD/CAM Lab',
            image:
                'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Manufacturing Lab',
            image:
                'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=400',
        },
    ],
    timetablePdfEven: meEven,
    timetablePdfOdd: meEven,
};

const MechanicalPage = () => {
    const [activeSection, setActiveSection] = useState('vision');

    return (
        <div className="course-page">
            <div className="course-page-course-container">
                <div className="course-page-course-header">
                    <h1 className="course-page-course-title">{mechanicalCourseData.title}</h1>
                    <img
                        src={mechanicalCourseData.image}
                        alt={mechanicalCourseData.title}
                        className="course-page-course-image"
                    />
                    <p>{mechanicalCourseData.description}</p>
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
                            <p>{mechanicalCourseData.vision}</p>
                            <h3>Mission</h3>
                            <ul className="course-page-objectives-list">
                                {mechanicalCourseData.mission.map((item, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeSection === 'faculty' && (
                        <div>
                            <h2 className="course-page-section-title">Our Faculty</h2>
                            <div className="course-page-faculty-grid">
                                {mechanicalCourseData.faculty.map((faculty, index) => (
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
                                {mechanicalCourseData.labs.map((lab, index) => (
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
                                    window.open(mechanicalCourseData.timetablePdfEven);
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
                                    window.open(mechanicalCourseData.timetablePdfOdd);
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

export default MechanicalPage;