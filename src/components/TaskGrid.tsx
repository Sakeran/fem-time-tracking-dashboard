import "./TaskGrid.scss";

import { createSignal, onMount, For } from "solid-js";

import TaskGridControlPanel from "./TaskGridControlPanel";
import TaskGridCard, { TaskGridCardProps } from "./TaskGridCard";

export default function TaskGrid() {
  const [tasks, setTasks] = createSignal([]);
  const [period, setPeriod] = createSignal("daily");

  // Fetch data
  onMount(async () => {
    const res = await fetch("/data.json");
    setTasks(await res.json());
  });

  // Parse Tasks
  const parsedTasks = (): TaskGridCardProps[] =>
    tasks().map((task) => ({
      title: task.title,
      intervalName: period(),
      currentHours: task.timeframes[period()].current,
      previousHours: task.timeframes[period()].previous,
      backgroundClass: task.title.replaceAll(" ", "-").toLowerCase(),
    }));

  return (
    <div class="task-grid">
      <TaskGridControlPanel
        user={{
          displayName: "Jeremy Robson",
          displayIconHref: "/images/image-jeremy.png",
        }}
        period={period}
        setPeriod={setPeriod}
      />

      <For
        each={parsedTasks()}
        children={(task) => <TaskGridCard {...task} />}
      />
    </div>
  );
}
