import type { TranslationKeys } from './en'

const da: Record<TranslationKeys, string> = {
  // Nav
  nav_about: 'Om',
  nav_skills: 'Kompetencer',
  nav_experience: 'Erfaring',
  nav_projects: 'Projekter',
  nav_contact: 'Kontakt',
  nav_blog: 'Blog',
  // Hero
  hero_greeting: 'Hej, jeg hedder',
  hero_tagline: 'Platform engineer, der muliggør sikker og governed AI-adoption i stor skala',
  hero_body: 'Jeg bygger de rammer, der lader udviklere i en reguleret bank bruge AI sikkert — AI- og MCP-gateways, governance af GitHub Copilot og et centraliseret plugin-marketplace til agenter — oven på den udviklerplatform, de leverer med hver dag.',
  // About
  about_heading: 'Om',
  about_p1: 'Softwareingeniør med en B.Eng. fra Aarhus Universitet og over 7 års erfaring inden for platformudvikling og infrastrukturmodernisering. Fokuserer senest på agentiske AI-applikationer og skalering af AI for udviklingsteams.',
  about_p2: 'Det, jeg går mest op i, er grænsefladen mellem infrastruktur og udvikleroplevelse — at mindske friktionen mellem "det virker" og "det er sikkert, governed og let for den næste udvikler at bruge."',
  // Skills
  skills_heading: 'Kompetencer',
  skills_group_spoken: 'Talte sprog',
  // Experience
  experience_heading: 'Erfaring',
  experience_0_role: 'Senior Platform Engineer, Engineering PO',
  experience_0_description: 'Bidrager til AI-implementering og platformudviklingsopgaver inden for kildekodekontrol, CI/CD og udviklerværktøjer. Deltids Product Owner.',
  experience_0_highlight_0: 'Byggede en agentisk AI-applikation, der migrerer Jenkins-pipelines til GitHub Actions, så flere tusinde pipelines kan migreres internt i stedet for via dyrt eksternt konsulentarbejde.',
  experience_0_highlight_1: 'Opsatte AI- og MCP-gateways med agentgateway, med validering af Entra ID-tokens og claims-baserede politikker via OPA og Envoy.',
  experience_0_highlight_2: 'Ledte migreringen af flere tusinde repositories fra Bitbucket til GitHub, inklusiv on-premises GitHub-runners på OpenShift.',
  experience_0_highlight_3: 'Ejer GitHub Copilot og Artifactory for organisationen: Copilot-governance, inference-as-a-service og et centraliseret plugin-marketplace til agenter med indbygget sikkerhedsscanning.',
  experience_0_highlight_4: 'Koordinerede med eksterne partnere om at drive POC\'er og introducere nye AI- og sikkerhedsscanningsværktøjer på tværs af platformen.',
  experience_1_role: 'Softwareudvikler',
  experience_1_description: 'Bidrog til en produktionskritisk Artifactory-migration fra ældre Windows Server-infrastruktur til en højtilgængelig OpenShift-opsætning. Støttede overgangen fra fuldt on-premises infrastruktur til en hybrid privat cloud-model og byggede self-service pipelines for ingeniørteams.',
  experience_2_role: 'Praktikant, Juniorudvikler',
  experience_2_description: 'Udviklede og vedligeholdt frontend-funktioner til en virksomhedslønsystem ved hjælp af Angular, TypeScript, HTML og CSS.',
  // Projects
  projects_heading: 'Projekter',
  project_0_name: 'COBOL-modernisering med Agentisk AI',
  project_0_description: 'Samarbejdede med Microsoft og Bankdata-ingeniører om at designe et agentisk AI-workflow til modernisering af COBOL til vedligeholdbart Java, med fokus på at bevare forretningslogik og accelerere migrering.',
  project_0_devblog: 'Læs devblog',
  project_1_name: 'Personlig NAS og Homelab-opsætning',
  project_1_description: 'Byggede og vedligeholdt et personligt NAS-miljø på tværs af tilpasset hardware og Mac Mini-systemer til pålidelig lagring, backup-automatisering og eksperimenter.',
  project_2_name: 'iOS App-læringsforløb',
  project_2_description: 'Løbende personligt projekt med fokus på Swift og iOS-frameworks, med vægt på at skabe praktiske og brugervenlige mobiloplevelser.',
  // Blog preview
  blog_heading: 'Seneste indlæg',
  blog_view_all: 'Se alle →',
  blog_empty: 'Ingen indlæg endnu. Kig forbi igen.',
  // Contact
  contact_heading: 'Kontakt',
  contact_blurb: 'Åben for relevante softwareingeniørsamtaler, platform-fokuserede roller og samarbejdsmuligheder.',
}

export default da
