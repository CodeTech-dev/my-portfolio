export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured?: boolean;
}

export interface TechStackItem {
  name: string;
  category: string;
  icon: string;
}