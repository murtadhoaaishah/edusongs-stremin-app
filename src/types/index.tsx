export interface ICourse {
  id:number,
    title: string;
    description: string;
    duration: string;
    rating: number;
    students: number;
    instructor: string;
    points: number;
    featured?: boolean;
    instructorAvatar?: string;
  }