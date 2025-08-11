document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    

    const phoneNumber = document.getElementById('phone-number').value;
    // console.log(phoneNumber);

    const pinNumber =document.getElementById('pin-number').value;
    console.log( phoneNumber, pinNumber);
    if(phoneNumber==='54'&& pinNumber==='1234'){
        console.log('you are loging');
        window.location.href ='/home.html';
    }
    else{
        alert('wrong phone number or pin');
    }
})

