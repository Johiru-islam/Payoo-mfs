document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
  console.log ('added the event handler')
  
  const addMoney = document.getElementById('input-add-money').value;
  const addMoneyNumber = parseFloat(addMoney);
  const pinNumber =document.getElementById('input-pin-number').value;

//   console.log(addMoney,pinNumber);

if(pinNumber==='1234'){
    // add money to account
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber + addMoneyNumber;
    document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('fail to add money. please try again.')
}
})