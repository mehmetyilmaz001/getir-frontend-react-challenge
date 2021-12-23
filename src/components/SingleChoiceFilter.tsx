import React, { FunctionComponent } from 'react';
import Card from './Card';
import RadioButton from './RadioButton/RadioButton';


interface SingleChoiceProps {
    title: string;
    // options: string[];
    // onChange: (value: string) => void;
}
 
const SingleChoice: FunctionComponent<SingleChoiceProps> = ({title}) => {
    const [ value, setValue ] = React.useState<string>('All');
    return ( 
        <Card title={title}>
            <RadioButton id="1" name="sort" label='1' value="1" onChange={() => console.log("1")} />
            <RadioButton id="2" name="sort" label='2' value="2" onChange={() => console.log("2")} />
        </Card>        
     );
}
 
export default SingleChoice;