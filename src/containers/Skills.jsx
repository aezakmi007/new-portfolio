import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { about, Leaf1, Leaf2 } from "../assets";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} alt="" className="w-6 h-auto object-contain" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Skills
          </p>
          <img src={Leaf2} alt="" className="w-6 h-auto object-contain" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              My Skills & Work Experience
            </p>
             {" "}
            <ul className="text-texlight list-disc">
                 {" "}
              <li>
                Over 3 years of experience at Maersk, progressing from SRE
                Intern to Software Engineer.
              </li>
                 {" "}
              <li>
                Developed an AI-powered tool that automated incident reporting,
                reducing resolution delays by 80%.
              </li>
                 {" "}
              <li>
                Improved system reliability by integrating performance metrics
                and centralized logging into monitoring tools.
              </li>
                 {" "}
              <li>
                Automated operational workflows, saving over 2000 hours annually
                using React, Ansible, and Golang.
              </li>
                 {" "}
              <li>
                Built portals for incident analysis and SRE product management
                using React, Java Spring Boot, and Azure.
              </li>
                 {" "}
              <li>
                Implemented real-time alerting systems using Azure Metrics for
                proactive issue detection.
              </li>
                 {" "}
              <li>
                Created efficient APIs and batch jobs in Golang for database
                diagnostics and certificate monitoring.
              </li>
                 {" "}
              <li>
                Hands-on experience with technologies like React, JavaScript,
                Golang, Java, Python, Azure, Kubernetes, Terraform, and CI/CD
                tools.
              </li>
               {" "}
            </ul>
            {/* <p className="text-texlight text-base tracking-wide text-justify">
            Abdullah Farhan Safwi has over three years of experience at Maersk, progressing from an SRE Intern to a Software Engineer. He has consistently contributed to building automation tools, enhancing system reliability, and integrating AI-driven solutions. His work has led to significant operational efficiencies, such as saving thousands of manual hours and improving incident response times. Abdullah has hands-on experience with modern tech stacks including React, Golang, Java, Python, Azure, Kubernetes, and Terraform, and has worked extensively on both frontend and backend systems, as well as DevOps and cloud infrastructure.
            </p> */}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 items-center justify-center px-8">
          <SkillCard
            skill={"MERN Stack"}
            percentage={"95%"}
            color={"#FF3F3F"}
            move={true}
          />

          <SkillCard
            skill={"CI/CD & DevOps"}
            percentage={"75%"}
            color={"#008FFF"}
            move={false}
          />

          <SkillCard
            skill={"Javascript"}
            percentage={"85%"}
            color={"#FFB900"}
            move={true}
          />

          <SkillCard
            skill={"Java"}
            percentage={"85%"}
            color={"#14DB00"}
            move={false}
          />

          <SkillCard
            skill={"Golang"}
            percentage={"90%"}
            color={"#00FFF3"}
            move={true}
          />

          <SkillCard
            skill={"Postgres"}
            percentage={"75%"}
            color={"#FFE400"}
            move={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
