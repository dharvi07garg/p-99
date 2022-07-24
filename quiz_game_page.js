 function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_anwer = parseInt(number1) * parseInt(number2);
 }
 var question_turn= "player_1";
 var answer_turn= "player_2";
 function check(){
    get_answer = document.getElementById("innput_check_box").value;
    if(get_answer == actual_anwer){
        if(answer_turn == "player1"){
            player1_score = +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = +1;
            document.getElementById("player2_score").innerHTML = player2_score; 
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - "+player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;  
    }
    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;
    }
    else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player1_name;  
    }
 }