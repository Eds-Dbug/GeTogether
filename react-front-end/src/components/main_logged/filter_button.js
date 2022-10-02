import "components/filter_button.scss";
import classNames from "classnames";

export default function Button(props) {
  let buttonClass = classNames("button", "button--confirm");
  return (
    <button
      className={buttonClass}
    >
      MOFO
    </button>
  );
}