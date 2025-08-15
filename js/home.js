document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addmoneyInput = document.getElementById('input-add-money').value ;
    console.log(addmoneyInput);

    const pinNumberInput = document.getElementById('input-pin-number').value ;
    console.log(pinNumberInput);

    if(pinNumberInput ==='1234'){
        console.log('adding money to your account')

        const balance = document.getElementById('account-balance').innerText;
        console.log( typeof balance);

        const addMoneyNumber = parseFloat(addmoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);


        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('fail to add money! please try again')
    }

})