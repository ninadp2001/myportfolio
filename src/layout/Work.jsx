import projectApprovalImg from "../assets/project_approval.png";
import invoice_generatorImg from "../assets/invoice_generator.png";
import turfBookingImg from "../assets/turf_booking.png";
import carpoolImg from "../assets/car_pool.png";



function Work() {
  return (
    <section className="work-section" id="work">
      {/* <p className="section-intro">Some Things I’ve Built</p> */}
      <h2 className="section-title">Projects</h2>
      {/* <h2 className="section-title">Some Things I’ve Built</h2> */}


      <div className="work-list">
        <div className="work-item">
          <div className="work-image">
              <img src={projectApprovalImg} alt="Student Project Management System" />          
          </div>

          <div className="work-content">
            <h3 className="work-title">
              Student Project Management System
            </h3>
            <span className="timeline">Oct 2024 – Dec 2024</span>

            <p className="work-description">
                Web application enabling academic project tracking for students and mentors. Supports user roles, submissions, and approvals.
            </p>

            <div className="experience-tags">
              <span>HTML</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>JAVA</span>
            </div>
          </div>
        </div>

        {/* Repeat work-item for other projects */}

      </div>

      <div className="work-list">

        <div className="work-item">
          <div className="work-image">
              <img src={turfBookingImg} alt="Turf Booking System" />          
          </div>

          <div className="work-content">
            <h3 className="work-title">
              Turf Booking System
            </h3>
            <span className="timeline">Mar 2024 – Jun 2024</span>

            <p className="work-description">
              Online turf reservation system featuring real-time booking and slot management for users and administrators.
            </p>

            <div className="experience-tags">
              <span>NodeJS</span>
              <span>AngularJS</span>
              <span>MySQL</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Repeat work-item for other projects */}

      </div>

      <div className="work-list">

        <div className="work-item">
          <div className="work-image">
              <img src={invoice_generatorImg} alt="Invoice Generator" />          
          </div>

          <div className="work-content">
            <h3 className="work-title">
              Invoice Generator
            </h3>
            <span className="timeline">Nov 2023 – Jan 2024</span>

            <p className="work-description">
              Automated invoice generation tool with PDF export and mail functionality for business owners.
            </p>

            <div className="experience-tags">
              <span>NodeJS</span>
              <span>AngularJS</span>
              <span>MySQL</span>
              <span>API</span>
              <span>Email JS</span>

            </div>
          </div>
        </div>

        {/* Repeat work-item for other projects */}

      </div>

      <div className="work-list">

        <div className="work-item">
          <div className="work-image">
              <img src={carpoolImg} alt="Car Pool System" />          
          </div>

          <div className="work-content">
            <h3 className="work-title">
              Car Pool System
            </h3>
            <span className="timeline">Sep 2021 – Mar 2022</span>

            <p className="work-description">
              Platform for car wash slot bookings and car rental features with backend database integration.
            </p>

            <div className="experience-tags">
              <span>HTML</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>Javascript</span>
            </div>
          </div>
        </div>

        {/* Repeat work-item for other projects */}

      </div>

    </section>
  );
}

export default Work;
