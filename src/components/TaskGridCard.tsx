import "./TaskGridCard.scss";

export interface TaskGridCardProps {
  title: string;
  intervalName: string;
  currentHours: number;
  previousHours: number;
  backgroundClass?: string;
}

export default function TaskGridCard(props: TaskGridCardProps) {
  let wrapperClasses = "tg-card rounded-corners";
  if (props.backgroundClass) {
    wrapperClasses += " bg-category-" + props.backgroundClass;
  } else {
    wrapperClasses += " bg-gray";
  }

  return (
    <div className={wrapperClasses}>
      <div className="tgc-content rounded-corners">
        <h2 className="tgc-title size-m">{props.title}</h2>
        <p className="tgc-current-hours">{props.currentHours}hrs</p>
        <p className="tgc-previous-hours clr-pale-blue">Last {props.intervalName} - {props.previousHours}hrs</p>
        <button className="tgc-options">
          <span className="hide-vis">Options for Work</span>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="currentcolor"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}