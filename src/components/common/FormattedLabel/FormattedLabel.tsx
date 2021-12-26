import * as React from 'react';

function formatMyMoney(price: number) {
  
    // var currency_symbol = "₺"
  
    var formattedOutput = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
      });
    return `${formattedOutput.format(price)}`
  }
  

interface FormattedLabelProps {

    /**
     * The price value for formatting
     */ 
    price: number;

    /**
     * The className of the component for styling
     */ 
    className?: string;
}


 
const FormattedLabel: React.FunctionComponent<FormattedLabelProps> = ({price, className}) => {
    return ( 
        <span className={className}>{formatMyMoney(price)}</span>
     );
}
 
export default FormattedLabel;