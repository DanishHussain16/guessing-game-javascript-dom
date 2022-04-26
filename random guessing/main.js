let min=1,
    max=10,
    guessesLeft=3,
    winningNum=getRandomNum(min,max);

 var   maxNum=document.getElementById('max-num'),
    minNum=document.getElementById('min-num'),
    inputValue=document.getElementById('input-field'),
    submitBtn=document.getElementById('submit-btn'),
    validation=document.getElementById('valid');


    maxNum.textContent=max;
    minNum.textContent=min;

    function getRandomNum(min,max){
        return Math.floor( Math.random()*(max-min+1)+min);
    }

    var main=document.querySelector('.main');
    main.addEventListener('mousedown',function(e){
            if(e.target.className==='new'){
               window.location.reload();
            }
    })

    submitBtn.addEventListener('click',function(e){
       let guess=parseInt(inputValue.value);
     
     if(isNaN(guess)||guess>max||guess<min){
            validation.textContent=guess+' is invalid input !';
            validation.style.color='brown';
            inputValue.value='';
          
        
   }     
     else{
        if(guess===winningNum){
         validation.textContent=guess+' is Correct !';
         validation.style.color='green';
         inputValue.disabled=true;
         inputValue.style.borderColor='green';

         submitBtn.innerText='play again';
         submitBtn.className+='new';
        }
        else{
              guessesLeft=guessesLeft - 1;
              if(guessesLeft===0){
               validation.textContent=guess+' Game Over!';
               validation.style.color='red';
               inputValue.disabled=true;
               inputValue.style.borderColor='red';
               submitBtn.innerText='play again';
         submitBtn.className+='new';
              }
              else{
         validation.textContent=guess+' is Inorrect guess again ! guesses left '+guessesLeft;
         validation.style.color='red';
         inputValue.style.borderColor='red';
         inputValue.value='';
              }
        }
        
     
     }
     
     
    });