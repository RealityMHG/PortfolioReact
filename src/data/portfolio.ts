export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const profile = {
  email: "rafaelrego2000@gmail.com",
  github: "https://github.com/RealityMHG",
  linkedin: "https://www.linkedin.com/in/rafaelregocoder/",
  cv: asset("CV/RafaelRegoCV.pdf"),
  cvPortuguese: asset("CV/RafaelRegoCV-PT.pdf"),
};

export const skillGroups = [
  {
    title: "Interfaces",
    items: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "Behind the interface",
    items: [
      "C# / .NET",
      "REST APIs",
      "Node.js",
      "SQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
    ],
  },
  {
    title: "Development & delivery",
    items: ["Git", "Azure DevOps", "Docker", "Kubernetes", "Helm", "pgAdmin"],
  },
  { title: "Authentication", items: ["Microsoft Entra ID", "Keycloak"] },
];
