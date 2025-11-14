import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDisabled,
    currencyDisabled,
    className=""
}) {

    const id = useId()
    
  return (
    <div>
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
            id={id} 
            type="number" 
            placeholder='Amount'
            value={amount}
            onChange={(e) => {
                onAmountChange && onAmountChange(Number(e.target.value))
            }}
            disabled={amountDisabled}
            />
        </div>
        <div>
            Curreny Type
            <select 
            className=''
            value={selectedCurrency}
            onChange={(e) => {
                onCurrencyChange && onCurrencyChange(e.target.value)
            }}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox