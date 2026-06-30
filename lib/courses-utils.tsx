import { Course } from "@/app/types/types";
import { atom } from "./lessons/atom";
import { gravity } from "./lessons/gravity";
import { humanBody } from "./lessons/human-body";
import { lightning } from "./lessons/lightning";
import { microscopic } from "./lessons/microscopic";
import { volcanologyCourse } from "./lessons/volcanology";
import { waterCycleCourse } from "./lessons/water-cycle";
import { chemistry } from "./lessons/chemistry";
import { physics } from "./lessons/physics";
import { universe } from "./lessons/universe";
import { electricity } from "./lessons/electricity";
import { solarSystem } from "./lessons/solar-system";
import { sunCourse } from "./lessons/sun";
import { botany } from "./lessons/botany";
import { dnaCourse } from "./lessons/dna";
import { lightCourse } from "./lessons/light";

export const coursesList: Course[] = [
  waterCycleCourse,
  volcanologyCourse,
  gravity,
  lightning,
  humanBody,
  dnaCourse,
  microscopic,
  atom,
  chemistry,
  physics,
  universe,
  electricity,
  solarSystem,
  sunCourse,
  lightCourse,
  botany,
];