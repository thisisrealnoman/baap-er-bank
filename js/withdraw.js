/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4-5. set total Withdraw Amount
5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total
7. clear the input field
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    // step-2.5
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    //step-7
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert("Please provide a valid number!");
    }

    // step-3
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step-5
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert("Oops! Insufficient Balance. Baap er bank e eto taka nai!");
        return;
    }

    //step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // step-4.5
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})