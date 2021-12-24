import React, { useEffect } from "react";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Checkbox from "./Checkbox/Checkbox";
import Input from "./Input/Input";
import { Option } from "./types/Option";

interface CheckboxGroupProps {
  title: string;
  options: Option[];
  onChange: (value: any) => void;
  hasSearch?: boolean;
  searchPlaceholder?: string;
}

const OptionsContiner = styled.div`
  max-height: 150px;
  overflow-y: scroll;
  padding: 4px;
  margin: -4px;
  min-height: 100px;
`;

const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({
  title,
  options,
  onChange,
  hasSearch,
  searchPlaceholder,
}) => {


  const [_options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    setOptions([...options])
  }, [options])

  const _onFilter = (searchTerm: string) => {
    if (searchTerm === "") {
      setOptions([...options]);
    }

    setOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  return (
    <Card title={title}>
      {hasSearch && (
        <Input
          placeholder={searchPlaceholder}
          style={{ marginBottom: "17px" }}
          onChange={(e) => _onFilter(e.target.value)}
        />
      )}

      <OptionsContiner>
        {_options.map((i) => (
          <Checkbox
            key={i.label}
            id={i.value}
            label={i.label}
            value={i.value}
            onChange={onChange}
          />
        ))}
      </OptionsContiner>
    </Card>
  );
};

export default React.memo(CheckboxGroup);
