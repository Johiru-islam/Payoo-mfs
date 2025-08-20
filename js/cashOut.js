document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault()
    console.log('cash out button clicked')


    const cashOut = document.getElementById('input-cash-out').value ;
    const cashoutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cashout-pin').value ;
    console.log(cashOut,pinNumber);

    if(pinNumber ==='1234'){
        const balance = document.getElementById('account-balance').innerText
        const balanceNumber = parseFloat(balance);
        
        const newBalance = balanceNumber -cashoutNumber;
        document.getElementById('account-balance').innerText = newBalance ;


    }
    else{
       alert('failed to cash out. please try again later.') 
    }

})