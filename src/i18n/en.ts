const en = {
  // Nav
  nav_about: 'About',
  nav_skills: 'Skills',
  nav_experience: 'Experience',
  nav_projects: 'Projects',
  nav_contact: 'Contact',
  nav_blog: 'Blog',
  // Hero
  hero_greeting: "Hi, I'm",
  hero_tagline: 'Software Engineer focused on platform engineering and developer experience',
  hero_body: 'I design and build reliable developer platforms, modern CI/CD workflows, and scalable infrastructure that helps teams ship faster with confidence.',
  // About
  about_heading: 'About',
  about_p1: 'Software engineer with a B.Eng. from Aarhus University and 7+ years of experience in platform engineering and infrastructure modernization. Lately focused on agentic AI applications and enabling AI at scale for engineering teams.',
  about_p2: 'I care most about the boundary between infrastructure and developer experience — reducing the friction between "it works" and "it\'s safe, governed, and easy for the next engineer to use."',
  // Skills
  skills_heading: 'Skills',
  skills_group_spoken: 'Spoken languages',
  // Experience
  experience_heading: 'Experience',
  experience_0_role: 'Senior Platform Engineer, Engineering PO',
  experience_0_description: 'Contributing to AI enablement and platform engineering work across source control, CI/CD, and developer tooling. Part time product owner as well.',
  experience_0_highlight_0: 'Built an agentic AI application that migrates Jenkins pipelines to GitHub Actions workflows using OpenAI models and Semantic Kernel.',
  experience_0_highlight_1: 'Set up an AI Gateway using agentgateway with EntraID authentication via OPA Envoy for JWT parsing and claims verification.',
  experience_0_highlight_2: 'Migrated Bitbucket to GitHub, including on-premises GitHub runners on OpenShift.',
  experience_0_highlight_3: 'Delivered GitHub Copilot with governance, inference-as-a-service, and a centralized plugins marketplace with built-in security scanning.',
  experience_0_highlight_4: 'Coordinated with external partners to drive POCs and introduce new AI and security scanning tools across the platform.',
  experience_1_role: 'Software Developer',
  experience_1_description: 'Contributed to a production-critical Artifactory migration from legacy Windows Server infrastructure to a highly available OpenShift setup. Supported the transition from fully on-prem infrastructure to a hybrid private-cloud model and built self-service pipelines for engineering teams.',
  experience_2_role: 'Intern, Junior Developer',
  experience_2_description: 'Developed and maintained frontend features for an enterprise payroll platform using Angular, TypeScript, HTML, and CSS.',
  // Projects
  projects_heading: 'Projects',
  project_0_name: 'COBOL Modernization Using Agentic AI',
  project_0_description: 'Collaborated with Microsoft and Bankdata engineers to design an agentic AI workflow for modernizing legacy COBOL into maintainable Java, with a focus on preserving business behavior while accelerating migration.',
  project_0_devblog: 'Read devblog',
  project_1_name: 'Personal NAS and Homelab Setup',
  project_1_description: 'Built and maintained a personal NAS environment across custom hardware and Mac Mini systems for reliable storage, backup automation, and experimentation.',
  project_2_name: 'iOS App Learning Track',
  project_2_description: 'Ongoing personal project focused on Swift and iOS frameworks, with emphasis on creating practical and user-friendly mobile experiences.',
  // Blog preview
  blog_heading: 'Recent Posts',
  blog_view_all: 'View all →',
  blog_empty: 'No posts yet. Check back soon.',
  // Contact
  contact_heading: 'Contact',
  contact_blurb: 'Open to relevant software engineering conversations, platform-focused roles, and collaboration opportunities.',
} as const

export default en
export type TranslationKeys = keyof typeof en
