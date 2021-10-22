import "./TaskGridControlPanel.scss";

export interface UserInfo {
  displayName: string;
  displayIconHref: string;
}

export interface TaskGridControlPanelProps {
  user: UserInfo;
  period: () => string;
  setPeriod: (any) => void;
}

export default function TaskGridControlPanel({
  user,
  period,
  setPeriod
}: TaskGridControlPanelProps) {
  return (
    <div class="tg-control-panel bg-dark-blue rounded-corners">
      <div class="tg-control-panel_user-info bg-blue rounded-corners pad-2">
        <img
          class="icon"
          src={user.displayIconHref}
          alt={`icon for ${user.displayName}`}
        />
        <h2 className="weight-light">
          <span className="size-s clr-pale-blue">Report for</span>{" "}
          <span className="tg-display-name">{user.displayName}</span>
        </h2>
      </div>

      <div className="tg-control-panel_interval-select">
        <button onClick={() => setPeriod("daily")} data-selected={period() === "daily"}>Daily</button>
        <button onClick={() => setPeriod("weekly")} data-selected={period() === "weekly"}>Weekly</button>
        <button onClick={() => setPeriod("monthly")} data-selected={period() === "monthly"}>Monthly</button>
      </div>
    </div>
  );
}
