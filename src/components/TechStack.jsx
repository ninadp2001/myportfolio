import java from "../assets/tech/java.webp";
import mysql from "../assets/tech/mysql.jpg";
import sql from "../assets/tech/sql.jpeg";
import aws from "../assets/tech/aws.png";
import python from "../assets/tech/python.png";
import git from "../assets/tech/git.png";
import postman from "../assets/tech/postman.png";
import rest from "../assets/tech/rest.png";
import wordpress from "../assets/tech/wordpress.png";
import php from "../assets/tech/php.png";

function TechStack() {
  const techs = [
    { name: "Java", logo: java },
    { name: "MySQL", logo: mysql },
    { name: "SQL", logo: sql },
    { name: "AWS", logo: aws },
    { name: "Python", logo: python },
    { name: "Git", logo: git },
    { name: "Postman", logo: postman },
    { name: "REST APIs", logo: rest },
    { name: "WordPress", logo: wordpress },
    { name: "PHP", logo: php },
  ];

  return (
    <div className="tech-stack">
      <p className="tech-label">TECH STACK</p>

      <div className="tech-carousel">
        <div className="tech-track">
          {techs.map((tech, index) => (
            <img
              key={index}
              src={tech.logo}
              alt={tech.name}
              className="tech-logo"
            />
          ))}

          {/* Duplicate for infinite scroll */}
          {techs.map((tech, index) => (
            <img
              key={`dup-${index}`}
              src={tech.logo}
              alt={tech.name}
              className="tech-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
