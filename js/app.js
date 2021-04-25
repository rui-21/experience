var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand)

alert('あなたあなたの選んだ手は' + user_hand + 'です。\njavascriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3 );

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}

function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "あなたの勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "あなたの負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "あなたの勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "あなたの勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "あなたの負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ"
    }
  }

  return winLoseStr;
}