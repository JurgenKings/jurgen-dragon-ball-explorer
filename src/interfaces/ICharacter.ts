export interface ICharacter {
  biography: string;
  description: string;
  genre: string;
  id: number;
  image: string;
  name: string;
  planet: string;
  race: string;
  transformations: Transformation[];
}

export interface Transformation {
  id: number;
  title: string;
  image: string;
  description: string;
}