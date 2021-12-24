import { FunctionComponent } from "react";
import Button from "./Button/Button";
import Card from "./Card";
import RadioButton from "./RadioButton/RadioButton";
import { Option } from "./types/Option";

interface SingleChoiceProps {
  title?: string;
  options: Option[];
  onChange: (value: any) => void;
  type?: "radio" | "button";
  value?: any;
}

const RadioGroup: FunctionComponent<SingleChoiceProps> = ({
  title,
  options,
  onChange,
  type = "radio",
  value,
}) => {
  if (type === "button") {
    return (
      <div style={{display: "flex", gap: 8}}>
        {options.map((i) => (
          <Button
            key={i.value}
            customType={value === i.value ? "primary" : "secondary"}
            onClick={() => onChange(i.value)}
          >
            {i.label}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <Card title={title}>
      {options.map((i) => (
        <RadioButton
          key={i.label}
          id={i.value}
          name={title!}
          label={i.label}
          value={i.value}
          onChange={onChange}
        />
      ))}
    </Card>
  );
};

export default RadioGroup;
