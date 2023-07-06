//i
    //submit generate event
    const myButton = document.getElementById('btn');
    myButton.addEventListener('click', function(){
        const myName = document.getElementById('name').value;
        const myProfession = document.getElementById('profession').value;
        //console.log(myName.length, myProfession.length);
        const myMessage = document.getElementById('generate_message');
        if(myName.length >= 2 && myProfession.length < 12){
            //alert('correct')
            myMessage.style.display = 'block';
            myMessage.style.display = 'flex';
            myMessage.style.justifyContent = 'center';
            myMessage.style.alignItems = 'center';
            myMessage.innerHTML = 'Correct Information';
        }else{
            //alert('not correct')
            myMessage.style.display = 'block';
            myMessage.style.display = 'flex';
            myMessage.style.justifyContent = 'center';
            myMessage.style.alignItems = 'center';
            myMessage.innerHTML = 'Incorrect Information'
        }
    })