import { useState, useRef, useEffect } from 'react';
import { BookOpen, Calendar, FileText, GraduationCap, Users, Library, Mail, Clock, ChevronRight, BarChart2, BookMarked, UserCheck, icons } from 'lucide-react';
import './QuickAccessSection.css';

const stats = [
    { label: 'Active Students', value: '12,450', icon: Users, trend: '+5%' },
    { label: 'Faculty Members', value: '840', icon: GraduationCap, trend: '+2%' },
    { label: 'Courses Offered', value: '1,200', icon: BookOpen, trend: '+8%' },
    { label: 'Research Papers', value: '3,280', icon: FileText, trend: '+12%' }
];

const quickLinks = [
    {
        title: 'Student Portal',
        icon: UserCheck,
        description: 'View grades, attendance, and academic progress',
        link: '/student-portal'
    },
    {
        title: 'Academics',
        icon: BookOpen,
        description: 'Explore academic programs, and resources for your studies',
        link: '/academics'
    },
    {
        title: 'Library Resources',
        icon: Library,
        description: 'Access digital library and research materials',
        link: '/library'
    },

    {
        title: 'Academic Calendar',
        icon: Calendar,
        description: 'Important dates and academic schedule',
        link: '/academic-calendar'
    },
    {
        title: 'Class Schedule',
        icon: Clock,
        description: 'View and manage your daily class schedule',
        link: '/student-portal/schedule'
    },
    {
        title: 'Email Services',
        icon: Mail,
        description: 'Access university email and communications',
        link: '/email-services'
    },
];

function QuickAccess() {
    const [hoveredStat, setHoveredStat] = useState(null);

    return (
        <section className="quick-access">
            <div className="quick-access-container">
                <div className="quick-access-dashboard-header">
                    <div className="quick-access-header-content">
                        <h2>Quick Access Dashboard</h2>
                        <p>Access essential tools and track university metrics</p>
                    </div>
                    {/* <div className="header-actions">
                        <button className="customize-btn">
                            Customize Dashboard
                            <BarChart2 className="customize-icon" />
                        </button>
                    </div> */}
                </div>

                <div className="quick-access-stats-grid">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="quick-access-stat-card"
                                onMouseEnter={() => setHoveredStat(index)}
                                onMouseLeave={() => setHoveredStat(null)}
                            >
                                <div className="quick-access-stat-icon-wrapper">
                                    <Icon className={`quick-access-stat-icon ${hoveredStat === index ? 'animate' : ''}`} />
                                </div>
                                <div className="quick-access-stat-content">
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                    <span className="quick-access-stat-trend">{stat.trend}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="quick-access-quick-links-section">
                    <h3 className="quick-access-section-title">Quick Links</h3>
                    <div className="quick-access-quick-links-grid">
                        {quickLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a key={index} href={link.link} className="quick-access-quick-link-card">
                                    <div className="quick-access-quick-link-icon">
                                        <Icon />
                                    </div>
                                    <div className="quick-access-quick-link-content">
                                        <h4>{link.title}</h4>
                                        <p>{link.description}</p>
                                    </div>
                                    <ChevronRight className="quick-access-arrow-icon" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <ResourceCards />
        </section>
    );
}

const ResourceCards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initialize particles
    const particles = document.querySelectorAll(".quick-access-particle");
    particles.forEach((particle) => {
      animateParticle(particle);
    });

    // Add scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("quick-access-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".quick-access-resource-card");
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const animateParticle = (particle) => {
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;

    // Random size
    const size = Math.random() * 60 + 20;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;
  };

  return (
    <section className="quick-access-resource-section">
      <div className="quick-access-section-header">
        <h2 className="courses-section-courses-title">
          Academic Resources
        </h2>
      </div>

      <div className="quick-access-card-container">
        <div className="quick-access-resource-card">
          <div className="quick-access-card-shine"></div>
          <div className="quick-access-card-background">
            <div className="quick-access-bg-shape quick-access-shape-1"></div>
            <div className="quick-access-bg-shape quick-access-shape-2"></div>
          </div>

          <div className="quick-access-card-content">
            <h3>Class Test Results</h3>
            <p>
              View and download your class test results and performance analytics
            </p>
            <a href="/class-test-results" className="quick-access-card-link">
              <span className="quick-access-link-text">View Test Results</span>
              <span className="quick-access-arrow-icon">
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
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>

          <div className="quick-access-card-decoration"></div>
          <div className="quick-access-card-glow"></div>
        </div>

        <div className="quick-access-resource-card">
          <div className="quick-access-card-shine"></div>
          <div className="quick-access-card-background">
            <div className="quick-access-bg-shape quick-access-shape-1"></div>
            <div className="quick-access-bg-shape quick-access-shape-2"></div>
          </div>

          <div className="quick-access-card-content">
            <h3>Previous Year Papers</h3>
            <p>Access question papers and model answers to prepare better</p>
            <a href="/question-papers" className="quick-access-card-link">
              <span className="quick-access-link-text">Browse PYQs</span>
              <span className="quick-access-arrow-icon">
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
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>

          <div className="quick-access-card-decoration"></div>
          <div className="quick-access-card-glow"></div>
        </div>

        {/* New Library Card */}
        <div className="quick-access-resource-card">
          <div className="quick-access-card-shine"></div>
          <div className="quick-access-card-background">
            <div className="quick-access-bg-shape quick-access-shape-1"></div>
            <div className="quick-access-bg-shape quick-access-shape-2"></div>
          </div>

          <div className="quick-access-card-content">
            <h3>Library</h3>
            <p>Access a vast collection of books and academic journals</p>
            <a href="/library" className="quick-access-card-link">
              <span className="quick-access-link-text">Visit Library</span>
              <span className="quick-access-arrow-icon">
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
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>

          <div className="quick-access-card-decoration"></div>
          <div className="quick-access-card-glow"></div>
        </div>
      </div>
    </section>
  );
};


export default QuickAccess;
