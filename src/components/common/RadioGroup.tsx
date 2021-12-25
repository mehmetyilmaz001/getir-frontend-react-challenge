import { FunctionComponent } from "react";
import Button from "./Button/Button";
import Card from "./Card";
import RadioButton from "./RadioButton/RadioButton";
import { Option } from "./types/Option";

interface SingleChoiceProps {
  title?: string;
  options: Option[];
  onChange: (value: Option) => void;
  type?: "radio" | "button";
  value?: Option | null;
}

const RadioGroup: FunctionComponent<SingleChoiceProps> = ({
  title,
  options,
  onChange,
  type = "radio",
  value,
}) => {

  const _onChange = (option: Option) => {
    onChange(option);
  }


  if (type === "button") {
    return (
      <div style={{display: "flex", gap: 8}}>
        {options.map((i) => (
          <Button
            key={i.value}
            customType={value && value.value === i.value ? "primary" : "secondary"}
            onClick={() => _onChange(i)}
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
          onChange={() => _onChange(i)}
          checked={value !== null ? value!.value === i.value : false}
        />
      ))}
    </Card>
  );
};

export default RadioGroup;
