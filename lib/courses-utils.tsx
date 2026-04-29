import { Course } from "@/app/types/types";
import { atom } from "./lessons/atom";
import { gravity } from "./lessons/gravity";
import { humanBody } from "./lessons/human-body";
import { lightning } from "./lessons/lightning";
import { microscopic } from "./lessons/microscopic";
import { volcanologyCourse } from "./lessons/volcanology";
import { waterCycleCourse } from "./lessons/water-cycle";

export const coursesList: Course[] = [
  waterCycleCourse, 
  volcanologyCourse, 
  humanBody, 
  gravity, 
  lightning, 
  microscopic, 
  atom
];