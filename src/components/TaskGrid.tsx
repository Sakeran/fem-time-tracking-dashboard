import "./TaskGrid.scss";

import TaskGridControlPanel from "./TaskGridControlPanel";
import TaskGridCard from "./TaskGridCard";

export interface TaskGridProps {}

export default function TaskGrid(props: TaskGridProps) {
  return (
    <div class="task-grid">
      <TaskGridControlPanel
        user={{
          displayName: "Jeremy Robson",
          displayIconHref: "/images/image-jeremy.png",
        }}
      />

      <TaskGridCard title="Work" intervalName="Day" currentHours={32} previousHours={36} backgroundClass="work" />
      <TaskGridCard title="Play" intervalName="Day" currentHours={10} previousHours={36} backgroundClass="play" />
      <TaskGridCard title="Study" intervalName="Day" currentHours={4} previousHours={7} backgroundClass="study" />
      <TaskGridCard title="Exercise" intervalName="Day" currentHours={4} previousHours={5} backgroundClass="exercise" />
      <TaskGridCard title="Social" intervalName="Day" currentHours={5} previousHours={10} backgroundClass="social" />
      <TaskGridCard title="Self-Care" intervalName="Day" currentHours={2} previousHours={2} backgroundClass="self-care" />
    </div>
  );
}

// Sample Data
/*
	Report for
		Jeremy Robson

		Daily
		Weekly
		Monthly

		Work
		5hrs <!-- daily -->
		Previous - 7hrs <!-- daily -->
		32hrs <!-- weekly -->
		Previous - 36hrs <!-- weekly -->
		103hrs <!-- monthly -->
		Previous - 128hrs <!-- monthly -->

		Play
		1hr <!-- daily -->
		Previous - 2hrs <!-- daily -->
		10hrs <!-- weekly -->
		Previous - 8hrs <!-- weekly -->
		23hrs <!-- monthly -->
		Previous - 29hrs <!-- monthly -->

		Study
		0hrs <!-- daily -->
		Previous - 1hr <!-- daily -->
		4hrs <!-- weekly -->
		Previous - 7hrs <!-- weekly -->
		13hrs <!-- monthly -->
		Previous - 19hrs <!-- monthly -->

		Exercise
		1hr <!-- daily -->
		Previous - 1hr <!-- daily -->
		4hrs <!-- weekly -->
		Previous - 5hrs <!-- weekly -->
		11hrs <!-- monthly -->
		Previous - 18hrs <!-- monthly -->

		Social
		1hr <!-- daily -->
		Previous - 3hrs <!-- daily -->
		5hrs <!-- weekly -->
		Previous - 10hrs <!-- weekly -->
		21hrs <!-- monthly -->
		Previous - 23hrs <!-- monthly -->

		Self Care
		0hrs <!-- daily -->
		Previous - 1hr <!-- daily -->
		2hrs <!-- weekly -->
		Previous - 2hrs <!-- weekly -->
		7hrs <!-- monthly -->
		Previous - 11hrs <!-- monthly -->
*/
