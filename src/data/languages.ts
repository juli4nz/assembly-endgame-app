export type Language = {
  label: string;
  backgroundColor: string;
  variant: 'light' | 'dark';
};

export const languages: Language[] = [
  { label: 'HTML', backgroundColor: '#E2680F', variant: 'light' },
  { label: 'CSS', backgroundColor: '#328AF1', variant: 'light' },
  { label: 'Javascript', backgroundColor: '#F4EB13', variant: 'dark' },
  { label: 'React', backgroundColor: '#2ED3E9', variant: 'dark' },
  { label: 'Typescript', backgroundColor: '#298EC6', variant: 'light' },
  { label: 'Node.js', backgroundColor: '#599137', variant: 'light' },
  { label: 'Python', backgroundColor: '#FFD742', variant: 'dark' },
  { label: 'Ruby', backgroundColor: '#D02B2B', variant: 'light' },
  { label: 'Assembly', backgroundColor: '#2D519F', variant: 'light' },
];
