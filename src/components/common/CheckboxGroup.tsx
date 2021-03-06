import React, { useCallback } from "react";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import useDidUpdate from "../../hooks/useDidUpdate";
import Card from "./Card";
import Checkbox from "./Checkbox/Checkbox";
import Input from "./Input/Input";
import { Option } from "./types/Option";

interface CheckboxGroupProps {
  /**
   * The title of the panel of group
   */ 
  title: string;

  /**
   * The options of the checkbox group
   */ 
  options: Option[];

  /**
   * The function to be called when the checkbox is selected
   */  
  onChange: (value: Option[]) => void;

  /**
   * The boolean value for displaying search input
   */ 
  hasSearch?: boolean;

  /**
   * The string value of search input place holder
   */ 
  searchPlaceholder?: string;

  /**
   * Set of selected values
   */  
  value?: Option[] | null;
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
  value
}) => {


  const [_options, setOptions] = useState<Option[]>([...options]);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useDidUpdate(() => {
    setOptions([...options])
  }, [options.length])
  
  useDidUpdate(() => {
    onChange(selectedOptions);
    
  }, [selectedOptions])

  const _onFilter = useCallback( (searchTerm: string) => {
    if (searchTerm === "") {
      setOptions([...options]);
    }

    setOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [options])


  const _onSelect = useCallback((option: Option) => {
    const found = selectedOptions.find((i) => i.value === option.value);
    setSelectedOptions( found ? selectedOptions.filter((i) => i.value !== option.value) : [...selectedOptions, option])
  }, [selectedOptions]);


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
            onChange={() => _onSelect(i)}
            checked={ value ? value!.some((j) => j.value === i.value) : false}
          />
        ))}
      </OptionsContiner>
    </Card>
  );
};


export default React.memo(CheckboxGroup);
