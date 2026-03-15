export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  demo?: string;
  repo?: string;
  video?: string;
  details?: string;
};


export type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar?: string;
};
