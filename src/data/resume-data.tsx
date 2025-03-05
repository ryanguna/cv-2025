import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ryan Gunawardana",
  initials: "RG",
  location: "Victoria, Australia",
  locationLink: "https://maps.app.goo.gl/mZRKJsh5tzhrbBjw5",
  about:
    "Language-Agnostic Developer | Technical Architect | Cloud & E-commerce Specialist",
  summary: (
    <>
      A results-driven Software Engineer with a strong background in high-performance web applications, scalable backend systems, and cloud infrastructure. Passionate about building robust, maintainable, and scalable digital products, Leading engineering teams in delivering enterprise-grade solutions.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/26731966?v=4",
  personalWebsiteUrl: "https://ryanguna.me",
  contact: {
    email: "ryan.gunawardana.jobs@gmail.com",
    tel: "0422886943",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ryanguna",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ryanguna/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "AMA University",
      degree: "Bachelor of Science in Computer Science",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "IONA",
      country: "Finland",
      link: "https://ionacommerce.com/",
      badges: ["Node.js", "TypeScript", "React", "Next.js", "AWS", "MACH Architecture", "CI/CD", "Serverless"],
      title: "Lead Engineer",
      start: "2022",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc leading-relaxed space-y-2">
            <li>Spearheaded technical architecture, engineering best practices, and team leadership across multiple large-scale projects, cloud solutions, and headless CMS platforms, with a focus on integrating comprehensive monitoring and testing strategies to ensure system reliability and performance.</li>
            <li>
              Led cross-functional teams, providing guidance and mentorship to both junior and senior engineers while also supporting other teams in resolving complex technical challenges.
            </li>
            <li>
              Directed project teams to meet client product development requirements while delivering solution design, technical expertise, and hands-on product development, incorporating automated testing and continuous integration for reliability.
            </li>
            <li>
              Collaborated closely with project managers, designers, and business stakeholders to align technical
              solutions with business goals.
            </li>
            <li>
              Architected and implemented enterprise-level CI/CD pipelines for monoliths, mono-repos, and serverless applications, integrating automated testing at every stage to enhance code quality and deployment stability.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Hey You",
      country: "Australia",
      link: "https://heyyou.com.au/",
      badges: [
        "Node.js",
        "PHP",
        "Typescript",
        "React",
        "AWS",
        "Laravel",
        "Serverless",
        "Symfony",
        "CI/CD",
        "Stripe"
      ],
      title: "Senior Software Engineer",
      start: "2018",
      end: "2022",
      description: (
        <>
          <ul className="list-inside list-disc leading-relaxed space-y-1">
            <li>
              Core platform engineer responsible for developing and maintaining platform APIs and integrating third-party service APIs for a high-traffic consumer platform, with a strong focus on ensuring thorough testing for API reliability and performance.
            </li>
            <li>
              Architected and implemented scalable services and serverless applications.
            </li>
            <li>
              Built and maintained robust CI/CD pipelines for monoliths, mono-repos and serverless architectures.
            </li>
            <li>
              Implemented caching strategies to significantly enhance system performance and reduce load times.
            </li>
            <li>
              Led the platform integration of Stripe for payment processing, enhancing transaction efficiency and overall user experience.
            </li>
            <li>
              Documented solutions, APIs, and code, ensuring clear and detailed documentation.
            </li>
            <li>
              Implemented monitoring strategies for cloud infrastructure, enabling proactive issue detection and ensuring high system availability and performance through continuous monitoring and alerting.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Teknovarik Inc.",
      country: "Philippines",
      link: "#",
      badges: ["Node.js", "PHP" , "Laravel", "Vue.js", "IOT", "AWS", "Socket.IO", "Real-time applications"],
      title: "Lead Fullstack Developer",
      start: "Mar 2018",
      end: "Oct 2018",
      description: (
        <>
          <ul className="list-inside list-disc leading-relaxed space-y-2">
            <li>
              Led a team and served as a core engineer in developing software solutions for real-time interaction applications, integrating IoT devices for sectors like early warning systems, building management, and traffic control for both government and private sector clients in the Philippines.
            </li>
            <li>
              Managed project timelines, documentation, testing (functional, integration, and system testing), issue
              tracking, version control, and deployments, ensuring timely delivery of milestones.
            </li>
            <li>
              Continuously evaluated and integrated new technologies and design patterns, deployed software to in-house and on-site servers, and maintained server infrastructure, including spinning up new servers as needed.
            </li>
            <li>
              Promoted a culture of continuous improvement within the team, ensuring software performance and code quality.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Triune Electronic Systems Inc.",
      country: "Philippines",
      link: "#",
      badges: ["Node.js", "PHP", "Laravel", "Vue.js", "IOT", "AWS", "Socket.IO", "Real-time applications"],
      title: "Software engineer",
      start: "2012",
      end: "2015",
      description: (
        <>
          <ul className="list-inside list-disc leading-relaxed space-y-1">
            <li>
              Acted as the core full-stack developer for systems, responsible for both front-end and back-end
              development to ensure seamless integration and functionality across platforms.
            </li>
            <li>
              Analyzed, designed, and implemented database and system structures to ensure scalable and efficient
              solutions.
            </li>
            <li>
              Led and contributed to the development and delivery of real-time software systems, playing a pivotal role
              throughout all stages of the project lifecycle.
            </li>
            <li>
              Documented system architectures, processes, and code to ensure clear communication and maintainability throughout the project.
            </li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    {
      category: "Languages",
      skillSets: [
        "Javascript",
        "TypeScript",
        "PHP",
        "Node.js"
      ]
    },
    {
      category: 'Frontend Tech',
      skillSets: [
        "React",
        "Next.js",
        "Remix",
        "Vue.js",
        "CSS",
        "Tailwind CSS",
        "Storybook",
        "Mapbox GL",
        "Bootstrap",
        "Headless UI",
        "Material UI"
      ]
    },
    {
      category: 'Backend Tech',
      skillSets: [
        "Express",
        "Symfony",
        "Laravel",
        "Slim",
      ]
    },
    {
      category: 'API & Authentication',
      skillSets: [
        "GraphQL",
        "REST API",
        "JWT (JSON Web Tokens)",
        "OAuth",
        "Auth0",
      ]
    },
    {
      category: 'Databases & Storage Solutions',
      skillSets: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Redis",
        "Memcached",
        "Elasticsearch",
        "Algolia"
      ]
    },
    {
      category: 'Unit Testing',
      skillSets: [
        "PHPUnit",
        "Jest",
        "Mocha"
      ]
    },
    {
      category: 'E-commerce & Headless CMS',
      skillSets: [
        "Sanity",
        "Contentful",
        "Shopify",
        "Hydrogen",
      ]
    },
    {
      category: 'Payment integrations',
      skillSets: [
        "Stripe",
        "Fatzebra"
      ]
    },
    {
      category: 'Marketing & CRM tech',
      skillSets: [
        "HubSpot",
        "Mailchimp/Mandrill",
        "Salesforce"
      ]
    },
    {
      category: 'PIM (Product Information Management)',
      skillSets: [
        "Akeneo PIM"
      ]
    },
    {
      category: 'AWS Cloud Services',
      skillSets: [
        "API Gateway",
        "Kinesis",
        "RDS",
        "Cloudformation",
        "Cloudwatch",
        "Cloud Services",
        "EC2",
        "OpenSearch",
        "VPC",
        "ELB",
        "IAM",
        "WAF",
        "Lambda",
        "S3",
        "SES",
        "SNS",
        "SQS",
        "Cognito",
        "Elasticache (Redis, Memcached)",
        "Event bridge",
        "DynamoDB",
        "SSM",
        "KMS",
        "Route 53",
        "Step Functions",
        "Cloudfront",
        "Elasticbeanstalk",
        "ECS",
        "Fargate",
        "Amplify",
        "Lambda@Edge",
      ]
    },
    {
      category: 'CI/CD Tools',
      skillSets: [
        'GitHub Workflows',
        'GitHub Actions',
        'Docker',
        'Buildkite',
        'Netlify',
        'Vercel',
        'NX Workspace',
        'Lerna'
      ]
    },
    {
      category: 'Monitoring & Debugging',
      skillSets: [
        "New Relic",
        "Bugsnag",
        "Cloudwatch",
        "Papertrail"
      ]
    },
    {
      category: 'Web Analytics',
      skillSets: [
        "Google Analytics (GA4)",
        "Google Tag Manager (GTM)",
      ]
    },
    {
      category: 'Others',
      skillSets: [
        "Team Management",
        "Project Management",
        "Cross-functional Collaboration",
        "Mentorship & Coaching",
        "Team Leadership",
        "MACH Architecture",
        "OpenAPI",
        "Swagger",
        "System Architecture",
        "Event-Driven Architecture",
        "Serverless Architecture",
        "Linux",
        "Shell Scripting",
        "Incremental Static Regeneration (ISR)",
        "Single Page Application (SPA)",
        "i18n",
        "Agile Methodology",
        "Test Driven Development (TDD)"
      ]
    }
  ],
  projects: [
    {
      title: "Hey You App",
      techStack: ["PHP", "Laravel", "Symfony", "Node.js", "Slim", "TypeScript", "React", "Buildkite", "AWS", "Redis", "MySQL", "DynamoDB", "Memcached", "Serverless", "Stripe", "Elasticsearch", "New Relic"],
      description:
        "Australia's #1 Order Ahead platform used by more than 1 Million Aussies, with over 30 million food and drink orders taken to date.",
      link: {
        label: "heyyou.com.au",
        href: "https://heyyou.com.au/",
      },
    },
    {
      title: "Kemppi",
      techStack: ["Node.js", "TypeScript", "Next.js", "React", "AWS", "Algolia", "Tailwind", "Contentful", "MapboxGL", "Akeneo PIM", "Hubspot", "Github CI/CD", "NX", "Serverless"],
      description:
        "Spearheaded the website refresh for Kemppi, the design leader in the arc welding industry and one of the largest distributors of welding machines. Utilizing Contentful, AWS, and NextJS, the project focused on implementing best practices to enhance scalability, performance, and maintainability.",
      link: {
        label: "kemppi.com",
        href: "https://kemppi.com/",
      },
    },
    {
      title: "YuMOVE",
      techStack: ["Shopify Plus", "Liquid", "AWS", "Serverless", "Recharge", "Dawn Theme", "Javascript", "Github CI/CD"],
      description:
        "YuMOVE is the UK's leading veterinary joint supplement brand, offering products to support joint health and mobility in pets. A Shopify Plus e-commerce store that provides customers with convenient online shopping and subscription services.",
      link: {
        label: "yumove.co.uk",
        href: "https://yumove.co.uk/",
      },
    },

    {
      title: "Novita",
      techStack: ["Sanity", "React", "Shopify", "Oxygen", "Hydrogen", "AWS", "TypeScript", "Tailwind", "NX", "Github CI/CD"],
      description:
        "An e-commerce platform offering a diverse selection of knitting materials and patterns. Built with Shopify's Hydrogen framework and hosted on Oxygen, it provides a responsive online shopping experience. Integrated with Sanity's headless CMS, the platform ensures efficient content management, adhering to MACH architecture principles.",
      link: {
        label: "novita.com",
        href: "https://novita.com/",
      },
    }, {
      title: "Brush 'n Go",
      techStack: ["Shopify Plus", "Dawn Theme", "Javascript", "CSS"],
      description:
        "A comprehensive website for Brush 'n Go using Shopify, effectively showcasing their deals, products, and blogs. Integrated an online booking system for services such as boat washing, enhancing user convenience and operational efficiency.",
      link: {
        label: "boatwash.fi",
        href: "https://www.boatwash.fi/",
      },
    },
    {
      title: "iCare Clinic Webshop",
      techStack: ["Node.js","TypeScript", "Vite", "AWS", "Serverless", "Stripe", "Github CI/CD"],
      description:
        "A subscription platform that enables customers and distributors to efficiently manage their device subscriptions for iCare. The platform streamlines subscription management, providing a seamless user experience for both end-users and distributors.",
      link: {
        label: "icare-world.com",
        href: "https://www.icare-world.com/",
      },
    },

    {
      title: "TARMAC",
      techStack: ["Node.js", "VueJS", "MySQL", "Redis", "Laravel", "Socket.IO"],
      description:
        "TARMAC is a web service for real-time traffic monitoring, control, and analytics. It displays Traffic Controller status, light, and sensor activity, allowing users to issue commands and overrides. It also connects to Power Plant devices for monitoring and managing power settings.",
    },
    {
      title: "Teknovarik Building Management System (BMS)",
      techStack: ["Node.js", "VueJS", "MySQL", "Redis", "Laravel", "Socket.IO"],
      description:
        "Intelligent building management system that centralizes real-time control and automation of heating, cooling, lighting, and blinds. Seamlessly integrates all subsystems for efficient regulation via computer, tablet, or touch panel, enhancing connectivity and operational efficiency.",
    },
    {
      title: "EWS",
      techStack: ["Node.js", "VueJS", "MySQL", "Redis", "Laravel", "Socket.IO"],
      description:
        "The real-time system centralizes EWS data for disaster mitigation, integrating detection systems to predict flash floods and aid evacuation. Used by Philippine government sectors, it ensures a coordinated response.",
    },
    {
      title: "Nexus",
      techStack: ["Node.js", "VueJS", "MySQL", "Redis", "Laravel", "Socket.IO"],
      description:
        "A web service designed to be the operational hub of the company. Streamlines and consolidates operational tasks into one cohesive system that will govern the employees in carrying out their duties and responsibilities, and provide a way to curtail deviations and improvisations from the set procedures. Provides a way to track all production items and all processes.",
    },
    {
      title: "TESI Inventory and Tool Management System",
      techStack: ["VueJS", "MySQL", "Laravel", "Bootstrap"],
      description:
        "TESI effectively keeps track and manages tools, assets, inventory and equipments for the company.",
    },
    {
      title: "TARMAC Mapboard Kiosk",
      techStack: ["Raspberry PI", "Node.js", "Laravel", "Bootstrap", "VueJS", "MySQL", "Linux"],
      description:
        "An interactive kiosk machine deployed on a raspberry pi device  featuring specialized hardware and software that provides access to information from the TARMAC server.",
    },
  ],
} as const;
