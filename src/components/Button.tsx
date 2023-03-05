import "./button.css";

/**
 * Primary UI component for user interaction
 */

type Props = {
  primary: boolean;
  backgroundColor: string;
  size: number;
  label: string;
};

export const Button = ({ primary, backgroundColor, size, label }: Props) => {
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`].join(" ")}
      //style={backgroundColor && { backgroundColor }}
    >
      {label}
    </button>
  );
};
