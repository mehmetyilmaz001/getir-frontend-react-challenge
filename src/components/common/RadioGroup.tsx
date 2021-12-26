import { FunctionComponent } from "react";
import Button from "./Button/Button";
import Card from "./Card";
import Combobox from "./Combobox/Combobox";
import RadioButton from "./RadioButton/RadioButton";
import { Option } from "./types/Option";

interface RadioGroupProps {
  title?: string;
  options: Option[];
  onChange: (value: Option) => void;
  type?: "radio" | "button";
  value?: Option | null;
  showAsCombobox?: boolean;
}

const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  title,
  options,
  onChange,
  type = "radio",
  value,
  showAsCombobox = false,
}) => {

  const _onChange = (option: Option) => {
    onChange(option);
  }

  const _findOption = (value: string) => {
    return options.find((option) => option.value === value);
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

  if(showAsCombobox){
    return (
      <Combobox onChange={(e) => 
        {
          const val = e.target.value;
          const option = _findOption(val);

          if(option) _onChange(option);
        }
      
       }>
        {options.map((i) => <option key={i.value} value={i.value} >{i.label}</option>)}
      </Combobox>
    )
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
