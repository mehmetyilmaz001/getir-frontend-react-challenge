import { FunctionComponent } from 'react';
import Card from './Card';
import RadioButton from './RadioButton/RadioButton';
import {Option} from '../types/Option';


interface SingleChoiceProps {
    title: string;
    options: Option[];
    onChange: (value: any) => void;
}
 
const SingleChoice: FunctionComponent<SingleChoiceProps> = ({title, options, onChange}) => {
    return ( 
        <Card title={title}>
            {options.map(i => <RadioButton 
                                    key={i.label} 
                                    id={i.value} 
                                    name={title} 
                                    label={i.label} 
                                    value={i.value} 
                                    onChange={onChange} />) }
        </Card>        
     );
}
 
export default SingleChoice;