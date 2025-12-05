
    // console.log(localStorage.getItem('score'));
    function reset(){
    score.Wins=0;
    score.losses=0;
    score.ties=0;

    localStorage.setItem('score',JSON.stringify(score));
    scoreElement.innerHTML=`Wins:${score.Wins}.loose:${score.losses}.Ties:${score.ties}`;
    }
alert('hello');
alert('bye');
    let resultElement=document.querySelector('.js-result');
    let scoreElement=document.querySelector('.js-score'); 
    let moveElement=document.querySelector('.js-moves');

 
    let score=JSON.parse(localStorage.getItem('score'));
    if(!score){
  score={
    Wins:0,
    losses:0,
    ties:0
   };
  }

    
    function playGame(playerMove){
      let computerMove=computerMovefunction();
      let result='';

      if(playerMove==='Rock'){
        if(computerMove==='Rock'){
          result='Tie';
        }else if(computerMove==='Paper'){
          result='You Losse';
        }else if(computerMove='Scissors'){
          result='You Win';
        }
      }
      else if(playerMove==='Paper'){
        if(computerMove==='Rock'){
          result='You Win';
        }else if(computerMove==='Paper'){
          result='Tie';
        }else if(computerMove='Scissors'){
          result='You Losse';
        }
      }
      else if(playerMove==='Scissors'){
        if(computerMove==='Rock'){
          result='You Losse';
        }else if(computerMove==='Paper'){
          result='You Win';
        }else if(computerMove='Scissors'){
          result='Tie';
        }

      }

      if(result==='You Win'){
        score.Wins+=1;
      }else if(result==='You Losse'){
        score.losses+=1;

      }else if(result==='Tie'){
        score.ties+=1;
      }


      localStorage.setItem('score',JSON.stringify(score));

      resultElement.innerHTML=result;



      scoreElement.innerHTML=`Wins:${score.Wins}.loose:${score.losses}.Ties:${score.ties}`;

      moveElement.innerHTML=`You <img src="${playerMove}-emoji.png" class="Imagess">Computer <img src="${computerMove}-emoji.png" class="Imagess">`;

//       alert(`You selected: ${playerMove}.And Computer selected: ${computerMove}.${result}
// Wins : ${score.Wins}, Losses : ${score.losses}, Ties: ${score.ties}`);
      
    }
    function computerMovefunction(){
      let computerMove='';
      let randomNumber=Math.random();
      if(randomNumber>=0 && randomNumber<1/3){
        computerMove='Rock';
      }else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='Paper';
      }else if(randomNumber>=2/3 && randomNumber<=1){
        computerMove='Scissors';
      }
      return computerMove;

    }
    function fun(){
      // computerMovefunction();
      // playGame();




   
      alert(`hello
Wins : ${score.Wins}, Losses : ${score.losses}, Ties: ${score.ties}`);
    }
    // let intervalId;
    // isAutoPlaying=false;
    // function autoplay(){
    //   let autoElement=document.querySelector('.js-autoplay');
    //   if(!isAutoPlaying){
    //   intervalId=setInterval(function(){
    //     const playerMove=computerMovefunction();
    //     playGame(playerMove)},1000);
    //     isAutoPlaying=true;
    //     autoElement.innerHTML='Stop';
    //   }

    //   else{
    //     clearInterval(intervalId);
    //     isAutoPlaying=false;
    //     autoElement.innerHTML='AutoPLay';
    //   }
    // }
    let intervalId;
    isAutoplaying=false;
    let autoElement=document.querySelector('.js-autoplay');


    function autoplay(){
      if(!isAutoplaying){
      intervalId=setInterval(function(){
        const playerMove=computerMovefunction();
        playGame(playerMove)
      },20);
      isAutoplaying=true;

      autoElement.innerHTML='Stop';

      }else{
      clearInterval(intervalId);
      isAutoplaying=false;
     autoElement.innerHTML='Auto Play'
     }

    }
  
    
