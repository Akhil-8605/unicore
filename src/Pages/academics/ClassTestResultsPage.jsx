import { useState } from 'react';
import { ArrowLeft, Download, Search, Filter, ChevronDown, BarChart2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ClassTestResultsPage.css';

const departments = [
    {
        id: "computer",
        name: "Computer Engineering",
        results: {
            "sem1": {
                ct1: [
                    {
                        subject: "Communication skills (English)",
                        subjectCode: "311303",
                        classAverage: 26.5,
                        highestMarks: 30,
                        date: "2024-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/english.pdf",
                        teacher: "Mr. Jadhav",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on technical writing",
                                "Practice professional communication",
                                "Work on presentation skills"
                            ]
                        }
                    },
                    {
                        subject: "Basic Mathematics",
                        subjectCode: "311302",
                        classAverage: 23.0,
                        highestMarks: 29,
                        date: "2023-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-mathematics.pdf",
                        teacher: "Mrs. Dixit",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in trigonometry",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Basic Science",
                        subjectCode: "311305",
                        classAverage: 28.0,
                        highestMarks: 30,
                        date: "2024-09-11",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-science.pdf",
                        teacher: "Ms. Mhetre",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on polymorphism",
                                "Practice chemical reactions",
                                "Work on chemical formula"
                            ]
                        }
                    }
                ],
                ct2: [
                    {
                        subject: "Communication skills (English)",
                        subjectCode: "311303",
                        classAverage: 26.5,
                        highestMarks: 30,
                        date: "2024-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/english.pdf",
                        teacher: "Mr. Jadhav",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on technical writing",
                                "Practice professional communication",
                                "Work on presentation skills"
                            ]
                        }
                    },
                    {
                        subject: "Basic Mathematics",
                        subjectCode: "311302",
                        classAverage: 25.5,
                        highestMarks: 29,
                        date: "2023-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-mathematics.pdf",
                        teacher: "Mrs. Dixit",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in trigonometry",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Basic Science",
                        subjectCode: "311305",
                        classAverage: 28.0,
                        highestMarks: 30,
                        date: "2024-09-11",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-science.pdf",
                        teacher: "Ms. Mhetre",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on polymorphism",
                                "Practice chemical reactions",
                                "Work on chemical formula"
                            ]
                        }
                    }
                ]
            },
            "sem2": {
                ct1: [
                    {
                        subject: "Applied Mathematics",
                        subjectCode: "311301",
                        classAverage: 27.8,
                        highestMarks: 28,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/computer/sem2/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in integration",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Programming in C",
                        subjectCode: "312303",
                        classAverage: 25.5,
                        highestMarks: 29,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/computer/sem2/ct1/programming-in-c.pdf",
                        teacher: "Mr. Rashinkar",
                        teacherFeedback: {
                            suggestions: [
                                "Practice more with pointers",
                                "Work on complex programs",
                                "Focus on code optimization"
                            ]
                        }
                    },
                    {
                        subject: "Basic Electrical and Electronic",
                        subjectCode: "312302",
                        classAverage: 27.2,
                        highestMarks: 29,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/computer/sem2/ct1/digital-electronics.pdf",
                        teacher: "Mr. Nimbalkar",
                        teacherFeedback: {
                            suggestions: [
                                "Practice more with digital circuits.",
                                "Work on project design.",
                                "focus on basic concepts"
                            ]
                        }
                    }
                ],
                ct2: [
                    {
                        subject: "Applied Mathematics",
                        subjectCode: "311301",
                        classAverage: 27.8,
                        highestMarks: 29,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/computer/sem2/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in integration",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Programming in C",
                        subjectCode: "312303",
                        classAverage: 26.8,
                        highestMarks: 29,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/computer/sem2/ct2/programming-in-c.pdf",
                        teacher: "Mr. Rashinkar",
                        teacherFeedback: {
                            suggestions: [
                                "Practice more with pointers",
                                "Work on complex programs",
                                "Focus on code optimization"
                            ]
                        }
                    },
                    {
                        subject: "Basic Electrical and Electronic",
                        subjectCode: "312302",
                        classAverage: 27.2,
                        highestMarks: 30,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/computer/sem2/ct1/digital-electronics.pdf",
                        teacher: "Mr. Nimbalkar",
                        teacherFeedback: {
                            suggestions: [
                                "Practice more with digital circuits.",
                                "Work on project design.",
                                "focus on numericals"
                            ]
                        }
                    }
                ]
            },
            "sem3":{
                ct1: [
                    {
                        subject: "Database Management system",
                        subjectCode: "313302",
                        classAverage: 26.3,
                        highestMarks: 28,
                        date: "2024-08-28",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1VXcJVHmfNDdP5bzs4bekaTE5PRWCe1P1/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Shaikh",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on sql Queries",
                                "Focus on Normalization",
                                "Focus on transaction and ACID properties"
                            ]
                        }
                    },
                    {
                        subject: "Data structure using C",
                        subjectCode: "313301",
                        classAverage: 26.3,
                        highestMarks: 29,
                        date: "2024-08-28",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1VXcJVHmfNDdP5bzs4bekaTE5PRWCe1P1/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Mr. Gade",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on array",
                                "Focus on stack programs",
                                "Focus on queue operations"
                            ]
                        }
                    },
                    {
                        subject: "Digital Techniques",
                        subjectCode: "313303",
                        classAverage: 27.5,
                        highestMarks: 29,
                        date: "2024-08-29",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1VXcJVHmfNDdP5bzs4bekaTE5PRWCe1P1/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Rajmane",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on conversions",
                                "focus on number system",
                                "focus on compliments"
                            ]
                        }
                    },
                    {
                        subject: "Object oriented programming using C++",
                        subjectCode: "313304",
                        classAverage: 27.3,
                        highestMarks: 29,
                        date: "2024-08-29",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1VXcJVHmfNDdP5bzs4bekaTE5PRWCe1P1/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Mr. Rashinkar",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on classes and objects",
                                "Focus on encapsulation",
                                "Focus on constructors and destructors"
                            ]
                        }
                    }
                ],
                ct2: [
                    {
                        subject: "Database Management system",
                        subjectCode: "313302",
                        classAverage: 26.3,
                        highestMarks: 30,
                        date: "2024-11-12",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1VXcJVHmfNDdP5bzs4bekaTE5PRWCe1P1/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Shaikh",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on SQL and NoSQL databases",
                                "Focus on Procedure",
                                "Focus on Triggers"
                            ]
                        }
                    },
                    {
                        subject: "Data structure using C",
                        subjectCode: "313301",
                        classAverage: 26.3,
                        highestMarks: 28,
                        date: "2024-11-12",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1VXcJVHmfNDdP5bzs4bekaTE5PRWCe1P1/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Mr. Gade",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on trees",
                                "Focus on Graphs",
                                "Focus on Searching and Sorting techniques"
                            ]
                        }
                    },
                    {
                        subject: "Digital Techniques",
                        subjectCode: "313303",
                        classAverage: 26.5,
                        highestMarks: 30,
                        date: "2024-11-13",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1VXcJVHmfNDdP5bzs4bekaTE5PRWCe1P1/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Rajmane",
                        teacherFeedback: {
                            suggestions: [
                                "Practice K-Map",
                                "Practice SOP and POS Forms",
                                "Practice Combimnational Circuits"
                            ]
                        }
                    },
                    {
                        subject: "Object oriented programming using C++",
                        subjectCode: "313304",
                        classAverage: 27.3,
                        highestMarks: 28,
                        date: "2024-11-13",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1VXcJVHmfNDdP5bzs4bekaTE5PRWCe1P1/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Mr. Rashinkar",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Friend Functions and Classes",
                                "Focus on operator overloading",
                                "Focus on File Handelling"
                            ]
                        }
                    }
                ]
            },
            "sem4":{
                ct1:[
                    {
                        subject: "Data Communication and computer network",
                        subjectCode: "314318",
                        classAverage: 27.1,
                        highestMarks: 29,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/electronics/sem4/ct1/analog-electronics.pdf",
                        teacher: "Ms. Kawale",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Basic terminology",
                                "Focus on types of signals ",
                                "Focus on digital communication"
                            ]
                        }  
                    },
                    {
                        subject: "Microprocessor programming",
                        subjectCode: "314321",
                        classAverage: 26.8,
                        highestMarks: 29,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/electronics/sem4/ct1/analog-electronics.pdf",
                        teacher: "Ms. kamtam",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Architecture",
                                "Focus on instruction set",
                                "Focus on Addresing modes"
                            ]
                        }
                    },
                    {
                        subject: "Java Programming",
                        subjectCode: "314317",
                        classAverage: 27.0,
                        highestMarks: 29,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/electronics/sem4/ct1/analog-electronics.pdf",
                        teacher: "Ms. Shaikh",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Control statements",
                                "Focus on oop concepts",
                                "Focus on classes and objects"
                            ]
                        }
                    },
                    {
                        subject: "Environmental Education and sustainability",
                        subjectCode: "314301",
                        classAverage: 27.4,
                        highestMarks: 29,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/electronics/sem4/ct1/analog-electronics.pdf",
                        teacher: "Ms. Rajmane",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Ecosystem and Ecology",
                                "Focus on Biodiversity and conservation",
                                "Focus on Natural Resources"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Data Communication and computer network",
                        subjectCode: "314318",
                        classAverage: 27.1,
                        highestMarks: 29,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/electronics/sem4/ct1/analog-electronics.pdf",
                        teacher: "Ms. Kawale",
                        teacherFeedback: {
                            suggestions: [
                                "focus on transmission media",
                                "focus on data encoding",
                                "Focus on models"
                            ]
                        }  
                    },
                    {
                        subject: "Microprocessor programming",
                        subjectCode: "314321",
                        classAverage: 26.8,
                        highestMarks: 29,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/electronics/sem4/ct1/analog-electronics.pdf",
                        teacher: "Ms. kamtam",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on memory and stack operations",
                                "Focus on segementation",
                                "Focus on pipelining"
                            ]
                        }
                    },
                    {
                        subject: "Java Programming",
                        subjectCode: "314317",
                        classAverage: 27.0,
                        highestMarks: 29,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/electronics/sem4/ct1/analog-electronics.pdf",
                        teacher: "Ms. Shaikh",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on exception handelling",
                                "Focus on File handelling",
                                "Focus on multithreading"
                            ]
                        }
                    },
                    {
                        subject: "Environmental Education and sustainability",
                        subjectCode: "314301",
                        classAverage: 27.4,
                        highestMarks: 29,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/electronics/sem4/ct1/analog-electronics.pdf",
                        teacher: "Ms. Rajmane",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on GLobal Warming",
                                "Focus on Deforetation and Aforestation",
                                "Focus on Renewable Energy"
                            ]
                        }
                    }
                ]
            },
            "sem5":{
                ct1:[
                    {
                        subject: "Operating System",
                        subjectCode: "22516",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2024-08-28",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Asade",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Functions of os",
                                "Focus on Types of os",
                                "Focus on System calls"
                            ]
                        }
                    },
                    {
                        subject: "Client Side Scripting",
                        subjectCode: "22519",
                        classAverage: 17.0,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Mr. Gavasane",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on control structure",
                                "Focus on functions",
                                "Focus on DOM manipulation"
                            ]
                        }
                    },
                    {
                        subject: "Software testing",
                        subjectCode: "22518",
                        classAverage: 18.0,
                        highestMarks: 19,
                        date: "2024-08-29",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Nadaf",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on types of testing",
                                "Focus on software tesing life cycle",
                                "Focus on levels of testing"
                            ]
                        }
                    },
                    {
                        subject: "Advance Java Programming",
                        subjectCode: "22517",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2024-08-29",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Birajdar",
                        teacherFeedback: {
                            suggestions: [
                                "Study Applets methods",
                                "Study Swing methods",
                                "Study Event Handelling"
                            ]
                        }
                    },
                    {
                        subject: "Environmental Studies",
                        subjectCode: "22447",
                        classAverage: 16.0,
                        highestMarks: 20,
                        date: "2024-08-30",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Mhetre",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Ecosystem and Ecology",
                                "Focus on Biodiversity and conservation",
                                "Focus on Natural Resources"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Operating System",
                        subjectCode: "22516",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Asade",
                        teacherFeedback: {
                            suggestions: [
                                "study Processes vs threads",
                                "Study Context switching",
                                "practice numericals on processes"
                            ]
                        }
                    },
                    {
                        subject: "Client Side Scripting",
                        subjectCode: "22519",
                        classAverage: 15.5,
                        highestMarks: 19,
                        date: "2024-11-12",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Mr. Gavasane",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Event Handelling",
                                "Focus on Array Methods",
                                "Focus on Error handelling"
                            ]
                        }
                    },
                    {
                        subject: "Software testing",
                        subjectCode: "22518",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2024-11-13",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Nadaf",
                        teacherFeedback: {
                            suggestions: [
                                "Study V model",
                                "Black and White Box testing",
                                "Study Defect Life cycle"
                            ]
                        }
                    },
                    {
                        subject: "Advance Java Programming",
                        subjectCode: "22517",
                        classAverage: 16.0,
                        highestMarks: 19,
                        date: "2024-11-13",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Birajdar",
                        teacherFeedback: {
                            suggestions: [
                                "Study networking and port numbers",
                                "Focus on Database operation",
                                "Focus on Servlets"
                            ]
                        }
                    },
                    {
                        subject: "Environmental Studies",
                        subjectCode: "22447",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2024-11-14",
                        pdfUrl: "https://docs.google.com/spreadsheets/d/1RSVgx0DwquKJN4zeSsrBmjTSb9b-pQU4/edit?usp=drive_link&ouid=102384131522933535464&rtpof=true&sd=true",
                        teacher: "Ms. Mhetre",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on GLobal Warming",
                                "Focus on Deforetation and Aforestation",
                                "Focus on Renewable Energy"
                            ]
                        }
                    }
                ]
            },
            "sem6":{
                ct1:[   
                    {
                        subject: "Emerging Trends in IT",
                        subjectCode: "22618",
                        classAverage: 16.5,
                        highestMarks: 19,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Ms. Asade",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Basic Concepts",
                                "Focus on AI basic concepts"
                            ]
                        }
                    },
                    {
                        subject: "Mobile Application Development",
                        subjectCode: "22617",
                        classAverage: 15.0,
                        highestMarks: 18,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Mr. Gade",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on principles",
                                "Focus on Respponsive designing"
                            ]
                        }
                    },
                    {
                        subject: "Management",
                        subjectCode: "22509",
                        classAverage: 17.5,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Ms. hbhjs",
                        teacherFeedback: {
                            suggestions: [
                                "Focus Principles of management",
                                "Focus Business and organizational structure",
                                "Focus Leadership and Development"
                            ]
                        }
                    },
                    {
                        subject: "Programming with python",
                        subjectCode: "22616",
                        classAverage: 19.0,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Ms. jbvdhjz",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on syntax and operators",
                                "Focus on loops and functions",
                                "Focus on control flow"
                            ]
                        }
                    },
                    {
                        subject: "Web page development using php",
                        subjectCode: "22619",
                        classAverage: 19.0,
                        highestMarks: 20,
                        date: "2025-02-12",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Ms. Shaikh",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on variables and data types",
                                "Focus on conditional statements",
                                "Focus on loops"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Emerging Trends in IT",
                        subjectCode: "22618",
                        classAverage: 16.5,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Ms. Asade",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on natural language processing",
                                "Focus on Deep Learning",
                                "Focus on Generative AI"
                            ]
                        }
                    },
                    {
                        subject: "Mobile Application Development",
                        subjectCode: "22617",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Mr. Gade",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Activity life cycle",
                                "Focus on XML layouts",
                                "Focus on recycler views"
                            ]
                        }
                    },
                    {
                        subject: "Management",
                        subjectCode: "22509",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Ms. hbhjs",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Human Resource Management",
                                "Focus on marketing management",
                                "Focus on Financial management"
                            ]
                        }
                    },
                    {
                        subject: "Programming with python",
                        subjectCode: "22616",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Ms. jbvdhjz",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Regular expression",
                                "Focus on List and tuples",
                                "Focus on Dictionaries and sets"
                            ]
                        }
                    },
                    {
                        subject: "Web page development using php",
                        subjectCode: "22619",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2025-04-11",
                        pdfUrl: "/pdfs/electronics/sem6/ct1/microprocessor.pdf",
                        teacher: "Ms. Shaikh",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on handelling requests",
                                "Focus on Form validation",
                                "Focus on file uploads"
                            ]
                        }
                    }
                ]
            }
        }
    },
    {
        id: "electronics",
        name: "Electronics Engineering",
        results: {
            "sem1": {
                ct1: [
                    {
                        subject: "Communication skills (English)",
                        subjectCode: "311303",
                        classAverage: 16.5,
                        highestMarks: 20,
                        date: "2024-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/english.pdf",
                        teacher: "Mr. Jadhav",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on technical writing",
                                "Practice professional communication",
                                "Work on presentation skills"
                            ]
                        }
                    },
                    {
                        subject: "Basic Mathematics",
                        subjectCode: "311302",
                        classAverage: 15.5,
                        highestMarks: 20,
                        date: "2023-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-mathematics.pdf",
                        teacher: "Mrs. Dixit",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in trigonometry",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Basic Science",
                        subjectCode: "311305",
                        classAverage: 18.0,
                        highestMarks: 20,
                        date: "2024-09-11",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-science.pdf",
                        teacher: "Ms. Mhetre",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on polymorphism",
                                "Practice chemical reactions",
                                "Work on chemical formula"
                            ]
                        }
                    }
                ],
                ct2: [
                    {
                        subject: "Communication skills (English)",
                        subjectCode: "311303",
                        classAverage: 16.5,
                        highestMarks: 20,
                        date: "2024-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/english.pdf",
                        teacher: "Mr. Jadhav",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on technical writing",
                                "Practice professional communication",
                                "Work on presentation skills"
                            ]
                        }
                    },
                    {
                        subject: "Basic Mathematics",
                        subjectCode: "311302",
                        classAverage: 15.5,
                        highestMarks: 20,
                        date: "2023-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-mathematics.pdf",
                        teacher: "Mrs. Dixit",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in trigonometry",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Basic Science",
                        subjectCode: "311305",
                        classAverage: 18.0,
                        highestMarks: 20,
                        date: "2024-09-11",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-science.pdf",
                        teacher: "Ms. Mhetre",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on polymorphism",
                                "Practice chemical reactions",
                                "Work on chemical formula"
                            ]
                        }
                    }
                ]
            },
            "sem2":{
                ct1:[
                    {
                        subject: "Applied Mathematics",
                        subjectCode: "312301",
                        classAverage: 17.8,
                        highestMarks: 19,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/electronics/sem2/ct1/electrical-engineering.pdf",
                        teacher: "Ms. Dixit G.G.",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing problem-solving.",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Basic Electronics",
                        subjectCode: "312314",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/electronics/sem2/ct1/digital-electronics.pdf",
                        teacher: "Ms. Mhetre S.C.",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing numericals.",
                                "Focus on laws",
                                "Focus on types of circuits"
                            ]
                        }
                    },
                    {
                        subject: "ELEMENTS OF ELECTRICAL ENGINEERING",
                        subjectCode: "312315",
                        classAverage: 17.2,
                        highestMarks: 19,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/electronics/sem2/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Donthul",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on electric charge and current.",
                                "Focus on voltage and resistence"
                            ]
                        }
                    },
                    {
                        subject: "ELECTRONIC MATERIALS & COMPONENTS",
                        subjectCode: "312316",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/electronics/sem2/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. abc",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on conductors and insulators",
                                "Focus on crystal structure",
                                "Focus on bonding"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Applied Mathematics",
                        subjectCode: "312301",
                        classAverage: 17.8,
                        highestMarks: 19,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/electronics/sem2/ct1/electrical-engineering.pdf",
                        teacher: "Ms. Dixit G.G.",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing problem-solving.",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Basic Electronics",
                        subjectCode: "312314",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/electronics/sem2/ct1/digital-electronics.pdf",
                        teacher: "Ms. Mhetre S.C.",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on different components",
                                "Focus on working with different components",
                                "Focus on diodes"
                            ]
                        }
                    },
                    {
                        subject: "ELEMENTS OF ELECTRICAL ENGINEERING",
                        subjectCode: "312315",
                        classAverage: 17.2,
                        highestMarks: 19,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/electronics/sem2/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Donthul",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing numerical.",
                                "Focus on laws"
                            ]
                        }
                    },
                    {
                        subject: "ELECTRONIC MATERIALS & COMPONENTS",
                        subjectCode: "312316",
                        classAverage: 17.5,
                        highestMarks: 19,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/electronics/sem2/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. abc",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on dieelectric materials",
                                "Focus on magnetic materials"
                            ]
                        }
                    }
                ]
            },
            "sem3":{
                ct1:[
                    {
                        subject: "Analog Electronics",
                        subjectCode: "313324",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "/pdfs/mechanical/sem3/ct1/control-systems.pdf",
                        teacher: "Ms. Gopal",
                        teacherFeedback: {
                            suggestions: [
                                "Study resistors and capacitors",
                                "study diodes and rectifiers",
                                "Study transistors"
                            ]
                        }
                    },
                    {
                        subject: "Circuits and networks",
                        subjectCode: "313325",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "/pdfs/mechanical/sem3/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing problem-solving.",
                                "focus on ohms law",
                                "Focus on power and energy in circuits"
                            ]
                        }
                    },
                    {
                        subject: "Digital Techniques",
                        subjectCode: "313303",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-08-29",
                        pdfUrl: "/pdfs/mechanical/sem3/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on conversions",
                                "focus on number system",
                                "focus on compliments"
                            ]
                        }
                    },
                    {
                        subject: "Principles of electronic communication",
                        subjectCode: "313326",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2024-08-29",
                        pdfUrl: "/pdfs/mechanical/sem3/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "focus on types of communication",
                                "Focus on modulation and demodulation"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Analog Electronics",
                        subjectCode: "313324",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "/pdfs/mechanical/sem3/ct1/control-systems.pdf",
                        teacher: "Ms. Gopal",
                        teacherFeedback: {
                            suggestions: [
                                "Study amplifiers",
                                "Study MOSFET and JFET",
                                "Study regulators"
                            ]
                        }
                    },
                    {
                        subject: "Circuits and networks",
                        subjectCode: "313325",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "/pdfs/mechanical/sem3/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing problem-solving.",
                                "Study series and parallel circuits"
                            ]
                        }
                    },
                    {
                        subject: "Digital Techniques",
                        subjectCode: "313303",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-11-13",
                        pdfUrl: "/pdfs/mechanical/sem3/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Practice K-Map",
                                "Practice SOP and POS Forms",
                                "Practice Combimnational Circuits"
                            ]
                        }
                    },
                    {
                        subject: "Principles of electronic communication",
                        subjectCode: "313326",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2024-11-13",
                        pdfUrl: "/pdfs/mechanical/sem3/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on analog communication",
                                "Focus on digital communication"
                            ]
                        }
                    }
                ]
            },
            "sem4":{
                ct1:[
                    {
                        subject: "Consumer Electronics Systems",
                        subjectCode: "314327",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/thermodynamics.pdf",
                        teacher: "Ms. Gopal",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on basic electronic components",
                                "Focus on Microcontrollers & Microprocessors"
                            ]
                        }
                    },
                    {
                        subject: "Digital Communication Systems",
                        subjectCode: "314326",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Analog and Digital communication",
                                "Focus on channel types"
                            ]
                        }
                    },
                    {
                        subject: "Environmental Education and sustainability",
                        subjectCode: "314301",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Ecosystem and Ecology",
                                "Focus on Biodiversity and conservation",
                                "Focus on Natural Resources"
                            ]
                        }
                    },
                    {
                        subject: "Microcontroller and applications",
                        subjectCode: "314328",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on architecture.",
                                "Focus on components and peripherals"
                            ]
                        }
                    },
                    {
                        subject: "Basic Power Electronics",
                        subjectCode: "324309",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2025-02-12",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on semiconducting devices",
                                "Focus on converters",
                                "focus on rectifiers"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Consumer Electronics Systems",
                        subjectCode: "314327",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/thermodynamics.pdf",
                        teacher: "Ms. Gopal",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Power Supplies & Battery Technologies",
                                "Focus on Analog & Digital Circuits"
                            ]
                        }
                    },
                    {
                        subject: "Digital Communication Systems",
                        subjectCode: "314326",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing Encoding techniques",
                                "practice compounding techniques"
                            ]
                        }
                    },
                    {
                        subject: "Environmental Education and sustainability",
                        subjectCode: "314301",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Global Warming",
                                "Focus on Deforetation and Aforestation",
                                "Focus on Renewable Energy"
                            ]
                        }
                    },
                    {
                        subject: "Microcontroller and applications",
                        subjectCode: "314328",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on communication protocols",
                                "Focus on programming"
                            ]
                        }
                    },
                    {
                        subject: "Basic Power Electronics",
                        subjectCode: "324309",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2025-04-11",
                        pdfUrl: "/pdfs/mechanical/sem4/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on choppers",
                                "Focus on inverters",
                                "Focus in applications"
                            ]
                        }
                    }
                ]
            },
            "sem5":{
                ct1:[
                    {
                        subject: "Control Systems and PLC",
                        subjectCode: "22531",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on types of control systems",
                                "Focus on time domain analysis"
                            ]
                        }
                    },
                    {
                        subject: "Embedded Systems",
                        subjectCode: "22532",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on real time systems",
                                "Focus on hardware components"
                            ]
                        }
                    },
                    {
                        subject: "Environmental Studies",
                        subjectCode: "22447",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2024-08-29",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Ecosystem and Ecology",
                                "Focus on Biodiversity and conservation",
                                "Focus on Natural Resources"
                            ]
                        }
                    },
                    {
                        subject: "Mobile and wireless comunication",
                        subjectCode: "22533",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-08-29",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/thermodynamics.pdf",
                        teacher: "Ms. Gopal",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Protocols & Standards.",
                                "Focus on Wireless Security & Emerging Trends",
                                "Focus on Future Trends"
                            ]
                        }
                    },
                    {
                        subject: "Industrial Automation",
                        subjectCode: "22534",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-08-30",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on PLC programming.",
                                "Focus SCADA System Architecture"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Control Systems and PLC",
                        subjectCode: "22531",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on frequency domain analysis",
                                "Focus on stability analysis"
                            ]
                        }
                    },
                    {
                        subject: "Embedded Systems",
                        subjectCode: "22532",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on software",
                                "Focus on programming",
                                "Focus on interrupts and timers"
                            ]
                        }
                    },
                    {
                        subject: "Environmental Studies",
                        subjectCode: "22447",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2024-11-13",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Ecosystem and Ecology",
                                "Focus on Biodiversity and conservation",
                                "Focus on Natural Resources"
                            ]
                        }
                    },
                    {
                        subject: "Mobile and wireless comunication",
                        subjectCode: "22533",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-11-13",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/thermodynamics.pdf",
                        teacher: "Ms. Gopal",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on multiple access techniques",
                                "Focus on wireless communication",
                                "Focus on Mobile Network Architectures"
                            ]
                        }
                    },
                    {
                        subject: "Industrial Automation",
                        subjectCode: "22534",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-11-14",
                        pdfUrl: "/pdfs/mechanical/sem5/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "understand Communication Protocols",
                                "study Industrial IoT (IIoT) & Smart Manufacturing"
                            ]
                        }
                    }
                ]
            },
            "sem6":{
                ct1:[
                    {   
                        subject: "Computer Networking and data communication",
                        subjectCode: "22634",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/mechanical/sem6/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Basic terminology",
                                "Focus on types of signals ",
                                "Focus on digital communication"
                            ]
                        }
                    },
                    {
                        subject: "Emerging trends in Electronics",
                        subjectCode: "22636",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/mechanical/sem6/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on IoT devices",
                                "Focus on 5g technology"
                            ]
                        }
                    },
                    {
                        subject: "Management",
                        subjectCode: "22509",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/mechanical/sem6/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus Principles of management",
                                "Focus Business and organizational structure",
                                "Focus Leadership and Development"
                            ]
                        }
                    },
                    {
                        subject: "Mechatronics",
                        subjectCode: "22643",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/mechanical/sem6/ct1/thermodynamics.pdf",
                        teacher: "Ms. Gopal",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on sensors and actuator",
                                "Focus on microcontrollers",
                                "Focus on control systems"
                            ]
                        }
                    }
                ],
                ct2:[
                    {   
                        subject: "Computer Networking and data communication",
                        subjectCode: "22634",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/mechanical/sem6/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Basic terminology",
                                "Focus on types of signals ",
                                "Focus on digital communication"
                            ]
                        }
                    },
                    {
                        subject: "Emerging trends in Electronics",
                        subjectCode: "22636",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/mechanical/sem6/ct1/mechanical-engineering.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on AI in electronics",
                                "Focus on Quantum computing"
                            ]
                        }
                    },
                    {
                        subject: "Management",
                        subjectCode: "22509",
                        classAverage: 18.2,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/mechanical/sem6/ct1/fluid-mechanics.pdf",
                        teacher: "Ms. Raghu",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Human Resource Management",
                                "Focus on marketing management",
                                "Focus on Financial management"
                            ]
                        }
                    },
                    {
                        subject: "Mechatronics",
                        subjectCode: "22643",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/mechanical/sem6/ct1/thermodynamics.pdf",
                        teacher: "Ms. Gopal",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on mechanical system and robotics",
                                "Focus on signal processing and communication",
                                "Focus on AI in mechatronics"
                            ]
                        }
                    }
                ]
            }
        }
    },
    {
        id: "mechanical",
        name: "Mechanical Engineering",
        results:{
            "sem1": {
                ct1:[
                    {
                        subject: "Communication skills (English)",
                        subjectCode: "311303",
                        classAverage: 16.5,
                        highestMarks: 20,
                        date: "2024-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/english.pdf",
                        teacher: "Mr. Jadhav",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on technical writing",
                                "Practice professional communication",
                                "Work on presentation skills"
                            ]
                        }
                    },
                    {
                        subject: "Basic Mathematics",
                        subjectCode: "311302",
                        classAverage: 15.5,
                        highestMarks: 20,
                        date: "2023-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-mathematics.pdf",
                        teacher: "Mrs. Dixit",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in trigonometry",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Basic Science",
                        subjectCode: "311305",
                        classAverage: 18.0,
                        highestMarks: 20,
                        date: "2024-09-11",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-science.pdf",
                        teacher: "Ms. Mhetre",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on polymorphism",
                                "Practice chemical reactions",
                                "Work on chemical formula"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Communication skills (English)",
                        subjectCode: "311303",
                        classAverage: 16.5,
                        highestMarks: 20,
                        date: "2024-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/english.pdf",
                        teacher: "Mr. Jadhav",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on technical writing",
                                "Practice professional communication",
                                "Work on presentation skills"
                            ]
                        }
                    },
                    {
                        subject: "Basic Mathematics",
                        subjectCode: "311302",
                        classAverage: 15.5,
                        highestMarks: 20,
                        date: "2023-09-10",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-mathematics.pdf",
                        teacher: "Mrs. Dixit",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in trigonometry",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Basic Science",
                        subjectCode: "311305",
                        classAverage: 18.0,
                        highestMarks: 20,
                        date: "2024-09-11",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-science.pdf",
                        teacher: "Ms. Mhetre",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on polymorphism",
                                "Practice chemical reactions",
                                "Work on chemical formula"
                            ]
                        }
                    }
                ]
            },
            "sem2":{
                ct1:[
                    {
                        subject: "Applied Mathematics",
                        subjectCode: "312301",
                        classAverage: 17.8,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/computer/sem2/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing problem-solving.",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Applied Science",
                        subjectCode: "311308",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/computer/sem2/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on thermodynamics",
                                "Practice optics and waves",
                                "Work on chemical reactions"
                            ]
                        }
                    },
                    {
                        subject: "Engineering Drawing",
                        subjectCode: "312311",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/computer/sem2/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on orthographic projection",
                                "Practice isometric projection",
                                "Work on Dimensioning rules"
                            ]
                        }
                    },
                    {
                        subject: "Engineering Mechanics",
                        subjectCode: "312312",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/computer/sem2/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Newtons laws",
                                "remember units and dimensions",
                                "Work on numericals"
                            ]
                        }
                    },
                    {
                        subject: "Manufacturing Technology",
                        subjectCode: "312313",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-02-12",
                        pdfUrl: "/pdfs/computer/sem2/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Fundamentals",
                                "Understand casting process",
                                "Work on forming process"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Applied Mathematics",
                        subjectCode: "311301",
                        classAverage: 17.8,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/computer/sem2/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing problem-solving.",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    },
                    {
                        subject: "Applied Science",
                        subjectCode: "311308",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/computer/sem2/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on thermodynamics",
                                "Practice optics and waves",
                                "Work on chemical reactions"
                            ]
                        }
                    },
                    {
                        subject: "Engineering Drawing",
                        subjectCode: "312311",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/computer/sem2/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on orthographic projection",
                                "Practice isometric projection",
                                "Work on Dimensioning rules"
                            ]
                        }
                    },
                    {
                        subject: "Engineering Mechanics",
                        subjectCode: "312312",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/computer/sem2/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on kinemetics",
                                "remember formulaes",
                                "Work on complex numericals"
                            ]
                        }
                    },
                    {
                        subject: "Manufacturing Technology",
                        subjectCode: "312313",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-04-11",
                        pdfUrl: "/pdfs/computer/sem2/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on machining",
                                "Practice Material removal",
                                "Work on joining and welding processes"
                            ]
                        }
                    }
                ]
            },
            "sem3":{
                ct1:[
                    {
                        subject: "FLUID MECHANICS AND MACHINERY",
                        subjectCode: "311309",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "/pdfs/computer/sem3/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on properties of fluid",
                                "Understand flow analysis",
                                "Work on turbo machinary"
                            ]
                        }
                    },
                    {
                        subject: "Production Drawing",
                        subjectCode: "313311",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "/pdfs/computer/sem3/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more Basics",
                                "Practice Surface finish symbols",
                                "Work on Assembly and detail drawing"
                            ]
                        }
                    },
                    {
                        subject: "Strength of materials",
                        subjectCode: "313308",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-08-29",
                        pdfUrl: "/pdfs/computer/sem3/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on modules(Youngs,bulk,etc)",
                                "Practice axial loading",
                                "Work on Energy methods"
                            ]
                        }
                    },
                    {
                        subject: "Thermal Engineering",
                        subjectCode: "313310",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-08-29",
                        pdfUrl: "/pdfs/computer/sem3/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on laws",
                                "Practice equation of state",
                                "Work on heat transfer mechanism"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "FLUID MECHANICS AND MACHINERY",
                        subjectCode: "311309",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "/pdfs/computer/sem3/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on properties of fluid",
                                "Understand flow analysis",
                                "Work on turbo machinary"
                            ]
                        }
                    },
                    {
                        subject: "Production DRAWING",
                        subjectCode: "313311",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "/pdfs/computer/sem3/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more Basics",
                                "Practice Surface finish symbols",
                                "Work on Assembly and detail drawing"
                            ]
                        }
                    },
                    {
                        subject: "Strength of materials",
                        subjectCode: "313308",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-11-13",
                        pdfUrl: "/pdfs/computer/sem3/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on modules(Youngs,bulk,etc)",
                                "Practice axial loading",
                                "Work on Energy methods"
                            ]
                        }
                    },
                    {
                        subject: "Thermal Engineering",
                        subjectCode: "313310",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-11-13",
                        pdfUrl: "/pdfs/computer/sem3/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on laws",
                                "Practice equation of state",
                                "Work on heat transfer mechanism"
                            ]
                        }
                    }
                ]
            },
            "sem4":{
                ct1:[
                    {
                        subject: "Environmental Education and sustainability",
                        subjectCode: "314301",
                        classAverage: 17.8,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/computer/sem4/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Ecosystem and Ecology",
                                "Focus on Biodiversity and conservation",
                                "Focus on Natural Resources"
                            ]
                        }
                    },
                    {
                        subject: "Metrology and measurement",
                        subjectCode: "313316",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/computer/sem4/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on types of metrology",
                                "remember International system of units",
                                "Work on methods to reduce errors"
                            ]
                        }
                    },
                    {
                        subject: "Mechanical Engineering materials",
                        subjectCode: "313317",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/computer/sem4/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Structure of materials",
                                "Practice Crystallography",
                                "Work on Grain Structure & Grain Boundaries"
                            ]
                        }
                    },
                    {
                        subject: "Production processes",
                        subjectCode: "314340",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/computer/sem4/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on types of manufacturing",
                                "Practice casting processes",
                                "Work on manufacturing and production"
                            ]
                        }
                    },
                    {
                        subject: "Theory of machines",
                        subjectCode: "313313",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-02-12",
                        pdfUrl: "/pdfs/computer/sem4/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Kinematics vs Dynamics",
                                "Practice Inversions of Mechanisms",
                                "Work on Types of Mechanisms"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Environmental Education and sustainability",
                        subjectCode: "314301",
                        classAverage: 17.8,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/computer/sem4/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Ecosystem and Ecology",
                                "Focus on Biodiversity and conservation",
                                "Focus on Natural Resources"
                            ]
                        }
                    },
                    {
                        subject: "Metrology and measurement",
                        subjectCode: "313316",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/computer/sem4/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on types of metrology",
                                "remember International system of units",
                                "Work on methods to reduce errors"
                            ]
                        }
                    },
                    {
                        subject: "Mechanical Engineering materials",
                        subjectCode: "313317",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/computer/sem4/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                               "Focus more on Structure of materials",
                                "Practice Crystallography",
                                "Work on Grain Structure & Grain Boundaries"
                            ]
                        }
                    },
                    {
                        subject: "Production processes",
                        subjectCode: "314340",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/computer/sem4/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on types of casting",
                                "Practice patterns and molds",
                                "Work on defect in casting"
                            ]
                        }
                    },
                    {
                        subject: "Theory of machines",
                        subjectCode: "313313",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-04-11",
                        pdfUrl: "/pdfs/computer/sem4/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Gear trains",
                                "Practice areciprocating of masses",
                                "Work on gyroscopic motion"
                            ]
                        }
                    }
                ]
            },
            "sem5":{
                ct1:[
                    {
                        subject: "Advance Manufacturing processes",
                        subjectCode: "22563",
                        classAverage: 17.8,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "/pdfs/computer/sem5/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Automation & Smart Manufacturing",
                                "study Industry 4.0 & Industrial Internet of Things (IIoT)",
                                "Work on Sustainable & Green Manufacturing"
                            ]
                        }
                    },
                    {
                        subject: "Elements of machine design",
                        subjectCode: "22564",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-08-28",
                        pdfUrl: "/pdfs/computer/sem5/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Design process",
                                "Practice Factors Affecting Design",
                                "Work on Stress & Strain Analysis"
                            ]
                        }
                    },
                    {
                        subject: "Management",
                        subjectCode: "22509",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2024-08-29",
                        pdfUrl: "/pdfs/computer/sem5/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Human Resource Management",
                                "Focus on marketing management",
                                "Focus on Financial management"
                            ]
                        }
                    },
                    {
                        subject: "Power engineering and refrigeration",
                        subjectCode: "22562",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2024-08-29",
                        pdfUrl: "/pdfs/computer/sem5/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                               "Focus more on thermodynamics",
                                "Practice Combined Cycle Power Plants",
                                "Work on Brayton Cycle"
                            ]
                        }
                    },
                    {
                        subject: "Power plant engineering",
                        subjectCode: "22566",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-08-30",
                        pdfUrl: "/pdfs/computer/sem5/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                               "Focus more on thermodynamics",
                                "Practice Combined Cycle Power Plants",
                                "Work on Brayton Cycle"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Advance Manufacturing processes",
                        subjectCode: "22563",
                        classAverage: 17.8,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "/pdfs/computer/sem5/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Additive manufacturing",
                                "Practice micro and nano manufacturing",
                                "Work on advance welding processes"
                            ]
                        }
                    },
                    {
                        subject: "Elements of machine design",
                        subjectCode: "22564",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2024-11-12",
                        pdfUrl: "/pdfs/computer/sem5/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Design process",
                                "Practice Factors Affecting Design",
                                "Work on Stress & Strain Analysis"
                            ]
                        }
                    },
                    {
                        subject: "Management",
                        subjectCode: "22509",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2024-11-13",
                        pdfUrl: "/pdfs/computer/sem5/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus on Human Resource Management",
                                "Focus on marketing management",
                                "Focus on Financial management"
                            ]
                        }
                    },
                    {
                        subject: "Power engineering and refrigeration",
                        subjectCode: "22562",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2024-11-13",
                        pdfUrl: "/pdfs/computer/sem5/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on thermodynamics",
                                "Practice Combined Cycle Power Plants",
                                "Work on Brayton Cycle"
                            ]
                        }
                    },
                    {
                        subject: "Power plant engineering",
                        subjectCode: "22566",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2024-11-14",
                        pdfUrl: "/pdfs/computer/sem5/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                               "Focus more on thermodynamics",
                                "Practice Combined Cycle Power Plants",
                                "Work on Brayton Cycle"
                            ]
                        }
                    }
                ]
            },
            "sem6":{
                ct1:[
                    {
                        subject: "Automobile Engineering",
                        subjectCode: "22656",
                        classAverage: 17.8,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/computer/sem6/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on classification",
                                "Practice vehical layouts",
                                "Work on SI vs CI Engines"
                            ]
                        }
                    },
                    {
                        subject: "Emerging trends in Mechanical engineering",
                        subjectCode: "22652",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-02-10",
                        pdfUrl: "/pdfs/computer/sem6/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Internet of Things",
                                "Practice Big Data & Analytics",
                                "Work on Cyber-Physical Systems"
                            ]
                        }
                    },
                    {
                        subject: "Industrial Engineering and Quality Control",
                        subjectCode: "22657",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/computer/sem5/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Production System Types",
                                "Practice Forecasting Methods",
                                "Work on Inventory Control Techniques"
                            ]
                        }
                    },
                    {
                        subject: "Industrial Hydraulics and pneumatics",
                        subjectCode: "22655",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-02-11",
                        pdfUrl: "/pdfs/computer/sem6/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Hydraulic Systems & Components",
                                "Practice Pneumatic Systems & Components",
                                "Work on Hydraulic & Pneumatic Circuit Design"
                            ]
                        }
                    },
                    {
                        subject: "Computer Integrated Manufacturing",
                        subjectCode: "22658",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2025-02-12",
                        pdfUrl: "/pdfs/computer/sem6/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Computer aided design",
                                "Practice Geometric Modeling Techniques",
                                "Work on CAD File Formats"
                            ]
                        }
                    }
                ],
                ct2:[
                    {
                        subject: "Automobile Engineering",
                        subjectCode: "22656",
                        classAverage: 17.8,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/computer/sem6/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on classification",
                                "Practice vehical layouts",
                                "Work on SI vs CI Engines"
                            ]
                        }
                    },
                    {
                        subject: "Emerging trends in Mechanical engineering",
                        subjectCode: "22652",
                        classAverage: 18.5,
                        highestMarks: 20,
                        date: "2025-04-09",
                        pdfUrl: "/pdfs/computer/sem6/ct1/digital-electronics.pdf",
                        teacher: "Mr. Kishore",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Micro & Nano Manufacturing",
                                "Practice Non-Traditional Machining",
                                "Work on Additive Manufacturing"
                            ]
                        }
                    },
                    {
                        subject: "Industrial Engineering and Quality Control",
                        subjectCode: "22657",
                        classAverage: 19.2,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/computer/sem5/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Scheduling & Sequencing",
                                "Practice Linear Programming",
                                "Work on Network Analysis"
                            ]
                        }
                    },
                    {
                        subject: "Industrial Hydraulics and pneumatics",
                        subjectCode: "22655",
                        classAverage: 18.8,
                        highestMarks: 20,
                        date: "2025-04-10",
                        pdfUrl: "/pdfs/computer/sem6/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Hydraulic Systems & Components",
                                "Practice Pneumatic Systems & Components",
                                "Work on Hydraulic & Pneumatic Circuit Design"
                            ]
                        }
                    },
                    {
                        subject: "Computer Integrated Manufacturing",
                        subjectCode: "22658",
                        classAverage: 19.5,
                        highestMarks: 20,
                        date: "2025-04-11",
                        pdfUrl: "/pdfs/computer/sem6/ct1/computer-organization.pdf",
                        teacher: "Mr. Prasanna",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on Computer aided design",
                                "Practice Geometric Modeling Techniques",
                                "Work on CAD File Formats"
                            ]
                        }
                    }
                ]
            }
        }
    }
]

export default function ClassTestResults() {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedTest, setSelectedTest] = useState('ct1');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(true);

    const semesters = ['sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6'];

    const openPdf = (url, title = 'Document Preview') => {
        const previewUrl = `/academic-preview?pdf=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(url, '_blank');
    };

    const filteredResults =
        selectedDepartment && selectedTest && selectedSemester
            ? departments
                .find((d) => d.id === selectedDepartment)
                ?.results[selectedSemester][selectedTest]
                .filter(
                    (result) =>
                        result.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.subjectCode.includes(searchQuery)
                )
            : [];

    const getSubjectPerformanceData = (departmentId, semester, test) => {
        const department = departments.find((d) => d.id === departmentId);
        if (!department || !department.results[semester] || !department.results[semester][test]) {
            return [];
        }
        return department.results[semester][test]
            .map((result) => ({
                subject: result.subject,
                average: result.classAverage,
            }))
            .sort((a, b) => b.average - a.average);
    };
    const [showChart, setShowChart] = useState(false);

    return (
        <div className="class-test-results-page">
            {/* Header */}
            <header className="results-page-page-header">
                <div className="results-page-header-content">
                    <button onClick={()=>{
                        window.history.back();
                    }} className="results-page-back-button">
                        <ArrowLeft className="results-page-button-icon" />
                    </button>
                    <h1>Class Test Results</h1>
                </div>
            </header>

            <main className="results-page-main-content">
                {/* Search and Filters */}
                <div className="results-page-search-filters-section">
                    <div className="results-page-search-box">
                        <Search className="results-page-search-icon" />
                        <input
                            type="text"
                            placeholder="Search by subject name or code..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="results-page-filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                            <Filter className="results-page-button-icon" />
                            Filters
                            <ChevronDown className={`results-page-button-icon ${showFilters ? 'rotate' : ''}`} />
                        </button>
                    </div>

                    {showFilters && (
                        <div className="results-page-filters-panel">
                            <div className="results-page-filter-controls">
                                {/* Performance Chart Toggle Button */}
                                {selectedDepartment && selectedSemester && selectedTest && filteredResults?.length > 0 && (
                                        <div className="results-page-chart-toggle-section">
                                            <button className={`results-page-toggle-button ${showChart ? 'active': ''}`} onClick={() => setShowChart(!showChart)}>
                                                {showChart ? 'Hide Comparison' : 'View Comparison'}
                                            </button>
                                        </div>
                                    )}
                                    
                                <select
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    className="results-page-filter-select"
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((dept) => (
                                        <option key={dept.id} value={dept.id}>
                                            {dept.name}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    value={selectedSemester}
                                    onChange={(e) => setSelectedSemester(e.target.value)}
                                    className="results-page-filter-select"
                                    disabled={!selectedDepartment}
                                >
                                    <option value="">Select Semester</option>
                                    {semesters.map((sem) => (
                                        <option key={sem} value={sem}>
                                            Semester {sem.replace('sem', '')}
                                        </option>
                                    ))}
                                </select>

                                <div className="results-page-test-toggle">
                                    <button
                                        className={`results-page-toggle-button ${selectedTest === 'ct1' ? 'active' : ''}`}
                                        onClick={() => setSelectedTest('ct1')}
                                    >
                                        Class Test 1
                                    </button>
                                    <button
                                        className={`results-page-toggle-button ${selectedTest === 'ct2' ? 'active' : ''}`}
                                        onClick={() => setSelectedTest('ct2')}
                                    >
                                        Class Test 2
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                {/* Performance Chart */}
                {showChart && selectedDepartment && selectedSemester && selectedTest && filteredResults?.length > 0 && (
                    <div className="results-page-performance-chart-section">
                        <h2>
                            <BarChart2 className="results-page-section-icon" />
                            Subject Performance Comparison
                        </h2>
                        <div className="results-page-chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={getSubjectPerformanceData(selectedDepartment, selectedSemester, selectedTest)}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="subject" />
                                    <YAxis domain={[0, 20]} />
                                    <Tooltip
                                        formatter={(value) => [`${value} marks`, 'Class Average']}
                                        labelStyle={{ color: '#2c3e50' }}
                                        contentStyle={{
                                            background: '#ffffff',
                                            border: '1px solid #e9ecef',
                                            borderRadius: '8px',
                                            padding: '8px',
                                        }}
                                    />
                                    <Bar dataKey="average" fill="#007bff" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}

                {/* Results Grid */}
                <div className="results-page-results-grid">
                    {filteredResults?.map((result) => (
                        <div key={result.subjectCode} className="results-page-result-card">
                            <div className="results-page-result-header">
                                <h3>{result.subject}</h3>
                                <span className="results-page-subject-code">{result.subjectCode}</span>
                            </div>
                            <div className="results-page-result-stats">
                                <div className="results-page-stat-item">
                                    <span className="results-page-stat-label">Class Average</span>
                                    <span className="results-page-stat-value">{result.classAverage}</span>
                                </div>
                                <div className="results-page-stat-item">
                                    <span className="results-page-stat-label">Highest Marks</span>
                                    <span className="results-page-stat-value">{result.highestMarks}</span>
                                </div>
                            </div>
                            <div className="results-page-teacher-section">
                                <div className="results-page-teacher-info">
                                    <GraduationCap className="results-page-teacher-icon" />
                                    <span>{result.teacher}</span>
                                </div>
                                <div className="results-page-feedback-section">
                                    <h4>Teacher's Feedback</h4>
                                    <div className="results-page-feedback-content">
                                        <div className="results-page-feedback-category">
                                            <h5>Suggestions for Improvement</h5>
                                            <ul>
                                                {result.teacherFeedback.suggestions.map((suggestion, index) => (
                                                    <li key={index}>{suggestion}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="results-page-download-button"
                                onClick={() =>
                                    openPdf(result.pdfUrl, `${result.subject} - ${selectedTest.toUpperCase()} Result`)
                                }
                            >
                                <Download className="results-page-button-icon" />
                                Download Result
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {selectedDepartment && (!filteredResults || filteredResults.length === 0) && (
                    <div className="results-page-empty-state">
                        <h2>No results found</h2>
                        <p>Try adjusting your filters or search query</p>
                    </div>
                )}
            </main>
        </div>
    );
}
