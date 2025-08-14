document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addmoneyinput = document.getElementById('input-add-money').value ;
    console.log(addmoneyinput);

    const pinNumber = document.getElementById('input-pin-number').value ;
    console.log(pinNumber);
})