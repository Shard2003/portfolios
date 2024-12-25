type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Satya-Portfolio",
    fullName: "Satya Narayan Maheshwari",
    email: "work.satya27@gmail.com",
  },
  hero: {
    name: "Satya Naryan",
    p: ["Leveraged DevOps, cloud and RHCSA expertise to deploy secure", "Scalable Docker-based solutions."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Administered live servers with RHEL 9, ensuring stability, performance, and security.
      Streamlined DevOps workflows by integrating RHEL systems with CI/CD pipelines.
      Optimized cloud infrastructure and live server management with RHCSA-certified skills.
      Automated deployments and configurations on RHEL 9 for high-availability environments.
      Leveraged DevOps best practices to manage and scale live server operations seamlessly`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Skills.",
    },
    feedbacks: {
      p: "",
      h2: "",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
