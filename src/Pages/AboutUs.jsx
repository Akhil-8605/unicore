import React from "react";
import "./AboutUs.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const AboutUs = () => {
  return (
    <div className="about-page-about-us">
      <Header />
      {/* Hero Section */}
      <div className="hero-section-about-us">
        <div className="hero-overlay-about-us"></div>
        <img
          src="https://www.spmsolapur.org/Docs/CmfUQClbmA.jpg"
          alt="SPM Polytechnic Campus"
          className="hero-image-about-us"
        />
        <div className="hero-content-about-us">
          <h1 className="hero-title-about-us">About UniCore</h1>
          <p className="hero-subtitle-about-us">Excellence in Technical Education Since 1998</p>
        </div>
      </div>

      {/* Our History Section */}
      <section className="history-section-about-us container-about-us">
        <div className="history-grid-about-us">
          <div className="history-content-about-us">
            <h2 className="section-title-about-us">Our Legacy</h2>
            <div className="history-text-about-us">
              <p>
                Unicore was established in the year 1998 by a dynamic, visionary personality Hon'ble Late
                Brahmadevdada Mane with his strong will, commitment and determination. The motto of foundation was to
                nurture and grow young talent residing in rural area and desiring to pursue a technical education after
                SSC.
              </p>
              <p>
                The institute is affiliated to Maharashtra State Board of Technical Education, Mumbai and conducts
                courses approved by the All India Council for Technical Education, New Delhi and recognized by
                Government of Maharashtra. The institute is a leading institute in technical education providing quality
                education and its contribution to society. Institute is celebrating glorious silver jubilee from last 25
                years, we provide best infrastructure and other facilities for delightful learning.
              </p>
              <p>
                Highly qualified and experienced faculties inculcate immortal spirit among students to soar high and
                broaden the horizon of knowledge. The alumni of the institute have done exceedingly well in all spheres
                of life at both national & international level and brought name & fame to themselves and their alma
                mater.
              </p>
            </div>
          </div>
          {/*
          <div className="achievements-box-about-us">
            <h3 className="achievements-title-about-us">Our Achievements</h3>
            <div className="achievements-list-about-us">
              <div className="achievement-item-about-us">
                <div className="achievement-icon-about-us">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <div className="achievement-content-about-us">
                  <h4>25 Years of Excellence</h4>
                  <p>
                    Celebrating our silver jubilee of providing quality technical education
                  </p>
                </div>
              </div>
              <div className="achievement-item-about-us">
                <div className="achievement-icon-about-us">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="achievement-content-about-us">
                  <h4>AICTE Approved</h4>
                  <p>All courses approved by All India Council for Technical Education</p>
                </div>
              </div>
              <div className="achievement-item-about-us">
                <div className="achievement-icon-about-us">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="achievement-content-about-us">
                  <h4>Distinguished Alumni</h4>
                  <p>Our graduates excel nationally and internationally</p>
                </div>
              </div>
              <div className="achievement-item-about-us">
                <div className="achievement-icon-about-us">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building">
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
                <div className="achievement-content-about-us">
                  <h4>State-of-the-Art Facilities</h4>
                  <p>Modern infrastructure for an optimal learning environment</p>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="vision-mission-section-about-us">
        <div className="container-about-us">
          <h2 className="section-title-about-us about-us-centered">Our Vision & Mission</h2>
          <div className="vision-mission-grid-about-us">
            <div className="vision-box-about-us">
              <div className="vm-header-about-us">
                <div className="vm-icon-about-us">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                </div>
                <h3>Vision</h3>
              </div>
              <p>
                To be a premier technical education institution that empowers students from rural areas with knowledge,
                skills, and values to excel in the global technological landscape while contributing to the development
                of society.
              </p>
            </div>
            <div className="mission-box-about-us">
              <div className="vm-header-about-us">
                <div className="vm-icon-about-us">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3>Mission</h3>
              </div>
              <p>
                To provide quality technical education through innovative teaching methods, industry collaborations, and
                practical training that prepares students to meet the challenges of the rapidly evolving technological
                world while instilling ethical values and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="leadership-section-about-us container-about-us">
        <h2 className="section-title-about-us about-us-centered">Our Visionary Leadership</h2>
        <div className="leadership-grid-about-us">
          <div className="leader-card-about-us">
            <div className="leader-image-container-about-us">
              <img
                src="https://www.spmsolapur.org/Docs/Wcxb3u69Lk.jpg"
                alt="Dilip Mane"
                className="leader-image-about-us"
              />
            </div>
            <div className="leader-info-about-us">
              <h3>Hon'ble Dilip Mane</h3>
              <p className="leader-title-about-us">President</p>
              <p className="leader-bio-about-us">
                Continuing the legacy of excellence with visionary leadership and commitment to quality education.
              </p>
            </div>
          </div>

          <div className="leader-card-about-us">
            <div className="leader-image-container-about-us">
              <img
                src="https://www.spmsolapur.org/Docs/uj7oRtmhXJ.jpg"
                alt="Jaykumar Mane"
                className="leader-image-about-us"
              />
            </div>
            <div className="leader-info-about-us">
              <h3>Hon'ble Jaykumar Mane</h3>
              <p className="leader-title-about-us">Chief Trustee</p>
              <p className="leader-bio-about-us">
                Guiding the institution with strategic vision and ensuring adherence to the founding principles.
              </p>
            </div>
          </div>

          <div className="leader-card-about-us">
            <div className="leader-image-container-about-us">
              <img
                src="https://www.spmsolapur.org/Docs/1lEirRCZXo.jpeg"
                alt="Swati Mane"
                className="leader-image-about-us"
              />
            </div>
            <div className="leader-info-about-us">
              <h3>Swati Mane</h3>
              <p className="leader-title-about-us">Director</p>
              <p className="leader-bio-about-us">
                Driving innovation in education and fostering an environment of academic excellence and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section-about-us">
        <div className="container-about-us">
          <h2 className="section-title-about-us about-us-centered">Why Choose Unicore</h2>
          <div className="features-grid-about-us">
            <div className="feature-card-about-us">
              <div className="feature-icon-about-us">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Expert Faculty</h3>
              <p>Highly qualified and experienced educators dedicated to student success</p>
            </div>

            <div className="feature-card-about-us">
              <div className="feature-icon-about-us">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building">
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
              </div>
              <h3>Modern Infrastructure</h3>
              <p>State-of-the-art facilities designed for optimal learning experiences</p>
            </div>

            <div className="feature-card-about-us">
              <div className="feature-icon-about-us">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>Industry Connections</h3>
              <p>Strong ties with industry partners for internships and placements</p>
            </div>

            <div className="feature-card-about-us">
              <div className="feature-icon-about-us">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <h3>Proven Track Record</h3>
              <p>25 years of excellence in technical education with successful alumni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section-about-us container-about-us">
        <h2 className="section-title-about-us about-us-centered">Join Our Institution</h2>
        <p className="cta-text-about-us">
          Be part of our legacy of excellence and embark on a journey towards a successful technical career with Unicore.
        </p>
        <div className="cta-buttons-about-us">
          <a href="/admissions" className="primary-button-about-us">Apply Now</a>
          <a href="/contact-us" className="secondary-button-about-us">Contact Us</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
