import "./TaskGridControlPanel.scss";

export interface UserInfo {
  displayName: string;
  displayIconHref: string;
}

export interface TaskGridControlPanelProps {
  user: UserInfo;
}

export default function TaskGridControlPanel({
  user,
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
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  );
}
