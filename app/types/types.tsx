export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type LessonStep = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  steps: LessonStep[];
  quiz: QuizQuestion[];
  thumbnailUrl: string
};