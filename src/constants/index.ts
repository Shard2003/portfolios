import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  creator,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Linux",
    icon: meta,
  },
  {
    title: "AWS",
    icon: mobile,
  },
  {
    title: "Terrafrom",
    icon: starbucks,
  },
  {
    title: "Ansible",
    icon: tesla,
  },
  {
    title: "Docker & Podman",
    icon: docker,
  },
  {
    title: "Kubernetes",
    icon: shopify,
  },
  {
    title: "GCP",
    icon: creator,
  },
  {
    title: "Azure",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Terrafrom",
    companyName: "Terrafrom",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Automated cloud infrastructure provisioning with Terraform, ensuring scalability and efficiency.",
      "Designed modular and reusable Terraform configurations for AWS environments.",
      "Integrated Terraform with CI/CD pipelines for seamless infrastructure deployment.",
      "Optimized resource management using Terraform, enhancing cost and performance efficiency.",
      "Streamlined multi-cloud deployments with Terraform for consistent and reliable setups.",
    ],
  },
  {
    title: "Ansible",
    companyName: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Automated configuration management and application deployment using Ansible.",
"Streamlined server provisioning with Ansible playbooks for consistent environments.",
"Designed reusable Ansible roles to enhance scalability and efficiency.",
"Integrated Ansible with CI/CD pipelines for seamless configuration automation.",
"Optimized multi-server orchestration and updates using Ansible for rapid deployments",
    ],
  },
  {
    title: "Kubernetes",
    companyName: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Deployed and managed scalable containerized applications using Kubernetes.",
"Streamlined CI/CD workflows with Kubernetes for automated deployments.",
"Designed and maintained Kubernetes clusters for high availability and resilience.",
"Implemented Helm charts for reusable and efficient Kubernetes application management.",
"Optimized container orchestration and scaling with Kubernetes and custom resource definitions (CRDs).",
    ],
  },
  {
    title: "RHCSA",
    companyName: "Red Hat",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Managed and configured RHEL 9 systems with expertise in essential Linux administration tasks.",
"Automated routine tasks and improved efficiency using shell scripting on RHEL 9.",
"Secured RHEL 9 environments by implementing SELinux policies and firewall rules.",
"Optimized system performance and troubleshooting on RHEL 9 for seamless operations.",
"Achieved RHCSA certification, demonstrating comprehensive skills in RHEL 9 system administration.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "RHCSA-certified expert skilled in Linux system administration, automation, and secure infrastructure management.",
    name: "RHCSA Certified",
    designation: "",
    company: "Red Hat",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "DevOps expert specializing in CI/CD, cloud automation, and scalable infrastructure deployment.",
    name: "DevOps Mastry",
    designation: "",
    company: "Grras",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Certified in Red Hat OpenShift Development (DO188), skilled in building, deploying, and managing containerized applications on OpenShift.",
    name: "DO-188",
    designation: "",
    company: "Redhat",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Provisioning and Configuring a Web Application ",
    description:
      "Seamlessly provisioning and configuring a scalable web application with Terraform for infrastructure automation, Ansible for configuration management, and AWS for cloud scalability, ensuring a robust, efficient, and repeatable deployment pipeline",
    tags: [
      {
        name: "Terrafrom",
        color: "blue-text-gradient",
      },
      {
        name: "Ansible",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://www.satyaprotfolio.online/",
  },
  {
    name: "CI/CD Pipline",
    description:
      "Streamlining the provisioning and deployment of a scalable web application with Terraform for infrastructure as code, Ansible for configuration management, and AWS-powered CI/CD pipelines for automated, reliable, and efficient application delivery.",
    tags: [
      {
        name: "Code pipe",
        color: "blue-text-gradient",
      },
      {
        name: "Code Build",
        color: "green-text-gradient",
      },
      {
        name: "Code Deploy",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: " Deploying WordPress on Docker",
    description:
      "Deployed WordPress on Docker with persistent storage, custom networks, and NFS integration for high data availability. Managed AWS instances and automated scalable container setups.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
