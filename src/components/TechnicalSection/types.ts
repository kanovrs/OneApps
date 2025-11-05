export interface SectionItem {
  id: string | number;
  title: string;
  text: string;
}

export interface Section {
  id: number;
  tag: string;
  title: string;
  items: SectionItem[];
  image: string;
  logos: string[];
}