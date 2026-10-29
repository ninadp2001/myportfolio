function Contact() {
  return (
    <section className="contact-page" id="contact">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <span className="contact-hello">WHAT’S NEXT</span>

          <div className="left-name">
            Get In Touch
          </div>


          <div className="contact-desc">

            <p>
              I’m open to backend and Java roles working with Java, Spring Boot, REST APIs,
              MySQL, SQL and JDBC. If my experience fits what you need, let’s talk.
            </p>

            <div className="contact-roles">
              <span>Actively looking for roles such as:</span>

              <ul>
                <li>Java Developer</li>
                <li>Backend Developer</li>
                <li>SQL Developer</li>
                <li>Application Support Engineer (Java/SQL)</li>
              </ul>
            </div>

            <p>
              Quick learner with strong problem-solving skills, good debugging ability, and
              ready to join immediately.
            </p>

          </div>


          <div className="contact-buttons">
            <a href={`${import.meta.env.BASE_URL}Ninad_Patil_Resume.pdf`} className="btn primary" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ninadp2001@gmail.com&su=Job%20Opportunity&body=Hi%20Ninad,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0AThanks" target="_blank" rel="noreferrer" className="btn outline">
            Contact Me
            </a>

          </div>

          {/* <div className="contact-socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Mail</a>
          </div> */}

          <div className="contact-socials">

          {/* GitHub */}
          <a href="https://github.com/ninadp2001" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8-.8 1.8-.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.8 4.2 18.8 4.5 18.8 4.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.4 6 .4.4.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.8 18.3.5 12 .5z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/ninad-patil-1756b0321" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98A2.99 2.99 0 0 0 7.96 6.48C7.96 4.84 6.62 3.5 4.98 3.5zM2.4 21.5h5.16V9H2.4v12.5zM9.6 9h4.95v1.7h.07c.69-1.3 2.38-2.67 4.9-2.67 5.25 0 6.22 3.45 6.22 7.93V21.5h-5.16v-5.62c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.72H9.6V9z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/919869979696" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 32 32" className="social-icon">
              <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.8L.5 31.5l7.9-2.1c2.3 1.2 5 1.9 7.6 1.9 8.6 0 15.5-6.9 15.5-15.5C31.5 7.4 24.6.5 16 .5zm0 28.3c-2.3 0-4.5-.6-6.5-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.7 12.7 0 1 1 28.7 16 12.7 12.7 0 0 1 16 28.8zm6.7-9.3c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/>
            </svg>
          </a>

        </div>


        </div>

        {/* RIGHT */}
        {/* <div className="contact-right">
        <div className="profile-circle">

            <div className="profile-image">
            <img src={profileImg} alt="Ninad Patil" />
            </div>

            <div className="profile-base"></div>

        </div>
        </div> */}

      </div>
    </section>
  );
}

export default Contact;
