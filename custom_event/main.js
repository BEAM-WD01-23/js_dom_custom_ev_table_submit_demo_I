//i
    //event
    const myBtn = document.getElementById('myBtn');
    myBtn.addEventListener('click', function(){
        //alert('btn clicked');
    })
    //
//ii
    //custom-event on page loads
    addEventListener('ahmed', function(){
        alert('message shown upon page loads');
    });
    let myEvent = new Event('ahmed', {bubbles:true});
    //document.dispatchEvent(myEvent);
    //
//iii
    //custom event on numbers
    const givenNumber = document.getElementById('given_number');
    givenNumber.addEventListener('myOwnEvent', function(event){
        givenNumber.textContent = event.detail.number;
        givenNumber.style.color = event.detail.textColor;
    })
    function changeValue(num, color){
        const event = new CustomEvent('myOwnEvent', {
            detail: {number:num, textColor:color}
        });
        givenNumber.dispatchEvent(event);
    }
    //changeValue(22, 'blue');