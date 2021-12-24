import * as React from 'react';

function formatMyMoney(price: number) {
  
    var currency_symbol = "₺"
  
    var formattedOutput = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
      });


      console.log(currency_symbol);
      
  
    return `${formattedOutput.format(price)}`
  }
  

interface FormattedLabelProps {
    price: number;
    className?: string;
}


 
const FormattedLabel: React.FunctionComponent<FormattedLabelProps> = ({price, className}) => {
    return ( 
        <span className={className}>{formatMyMoney(price)}</span>
     );
}
 
export default FormattedLabel;