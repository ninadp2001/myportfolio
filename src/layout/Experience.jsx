function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-list">
        {/* Item 1 */}
        <article className="experience-item">
          <div className="experience-header">
            <span className="experience-year">Feb 2025 — Aug 2025</span>
            <h3 className="experience-role">
              Web & IT - Intern
            </h3>
            <span className="experience-org">Thomas Wordsworth HR Systems Pvt. Ltd</span>
          </div>

          <ul className="experience-description">
              <li>Engineered full-stack web applications; optimized MySQL databases, resulting in improved data retrieval times and application performance.</li>
              <li>Developed internal tools including bulk user management and data converters.</li>
              <li>Customized WordPress themes/plugins and integrated third-party APIs.</li>
              <li>Maintained AWS environments and optimized database queries for performance.</li>
              <li>Collaborated with teams to automate reports and enhance e-learning features.</li>
          </ul>

          <div className="experience-tags">
            <span>Java</span>
            <span>MySQL</span>
            <span>Wordpress</span>
            <span>REST APIs</span>
            <span>AWS</span>
            <span>PHP</span>
          </div>
        </article>

        {/* Item 2 */}
        <article className="experience-item">
          <div className="experience-header">
            <span className="experience-year">May 2022 — Sept 2023</span>
            <h3 className="experience-role">
              Jr. PHP Developer
            </h3>
            <span className="experience-org">Quest Solutions</span>
          </div>

          <ul className="experience-description">
              <li>Delivered 20+ landing pages with integrated customer enquiry forms, improving data accuracy by 90% and lead capture by 25%.</li>
              <li>Automated lead sharing through API integrations, cutting manual effort by 40% and boosting response time by 30%.</li>
              <li><span>Value Leads (CRM Platform): </span>Enhanced data flow and UI, improving UX by 20%. Implemented real-time lead tracking to reduce leakage by 35%.</li>
              <li><span>Value Bitly (VDZ): </span>Built scrub panel to filter reused records, improving data hygiene by 90%. Enhanced campaign tracking.</li>
              <li><span>Billing System: </span>Revamped billing process and added a profitability module, improving financial insights and decision-making efficiency by 20%.</li>
          </ul>

          <div className="experience-tags">
            <span>PHP</span>
            <span>Java</span>
            <span>HTML</span>
            <span>MySQL</span>
            <span>Web APIs</span>
            <span>Cloud Servers</span>
            <span>Postman</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
