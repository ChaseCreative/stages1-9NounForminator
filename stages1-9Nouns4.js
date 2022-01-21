
class Noun {
  constructor(nominative, genitive, gender, singMeaning, plMeaning){
    this.nominative = nominative;
    this.genitive = genitive;
    this.gender = gender;
    this.singMeaning = singMeaning;
    this.plMeaning = plMeaning;
  }

  //NOMINATIVE

  get nominativeSing(){
    return this.singNominative();
  }

  singNominative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.nominative;
        } else {
          return this.nominative;
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.nominative;
    }
  }

  get nominativeSingTrans(){
    return this.singNominativeTrans();
  }

  singNominativeTrans(){
    return "the " + this.singMeaning;
  }

    //GENITIVE

  get genitiveSing(){
      return this.singGenitive();
  }

  singGenitive(){
    if (this.genitive.slice(-2,) == "ae"){
        return this.genitive;
    } else if (this.genitive.slice(-2,) == "ei"){
        return this.genitive.slice(0,-2) + "ēī";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "ī";
    } else if (this.genitive.slice(-2,) == "is"){
        return this.genitive;
    } else if (this.genitive.slice(-2,) == "us"){
        return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get genitiveSingTrans(){
      return this.singGenitiveTrans();
  }

  singGenitiveTrans(){
      return " of the " + this.singMeaning;
  }

    //DATIVE

  get dativeSing(){
      return this.singDative();
  }

  singDative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēī";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "ō";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ī";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūi";
    }
  }

  get dativeSingTrans(){
    return this.singDativeTrans();
  }

  singDativeTrans(){
    return " to/for the " + this.singMeaning;
  }

  //ACCUSATIVE

  get accusativeSing(){
    return this.singAccusative();
  }

  singAccusative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "am";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "em";
    } else if (this.gender == "n" && this.genitive.slice(-1,) == "i"){
      return this.nominative;
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "um";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.nominative;
        } else {
          return this.genitive.slice(0,-2) + "em";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "um";
    }
  }

  get accusativeSingTrans(){
    return this.singAccusativeTrans();
  }

  singAccusativeTrans(){
      return " the " + this.singMeaning;
  }

  //ablative

  get ablativeSing(){
    return this.singAblative();
  }

  singAblative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ā";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ē";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "ō";
    } else if (this.genitive.slice(-2,) == "is"){
      if (this.gender == "n"){
        if (this.nominative.slice(-2,) == "re" || "al" || "re"){
          return this.genitive.slice(0,-2) + "ī";
        } else {
        return this.genitive.slice(0,-2) + "e";
        }
      } else {
        return this.genitive.slice(0,-2) + "e";
      }

    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ū";
    }
  }

  get ablativeSingTrans(){
    return this.singAblativeTrans();
  }

  singAblativeTrans(){
    return " by/with/in/from the " + this.singMeaning;
  }

  //Vocative
  get vocativeSing(){
    return this.singVocative();
  }

  singVocative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.nominative;
      } else if (this.gender == "m"){
          if (this.nominative.slice(-3,) == "ius"){
            return this.genitive.slice(0,-2);
          } else if (this.nominative.slice(-2,) == "us"){
            return this.genitive.slice(0,-1) + "e";
          } else {
            return this.nominative;
          }
      }
    } else if (this.genitive.slice(-2,) == "is"){
        return this.nominative;
    } else if (this.genitive.slice(-2,) == "us"){
      return this.nominative;
    }
  }

  get vocativeSingTrans(){
    return this.singVocativeTrans();
  }

  singVocativeTrans(){
      let vocative = this.singMeaning;
      return vocative[0] + vocative.substring(1) + "!";
    }


  //NOMINATIVE PLURAL

  get nominativePl(){
    return this.plNominative();
  }

  plNominative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ī";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          if (this.nominative.slice(-2,) == "re" || "al" || "re"){
            return this.genitive.slice(0,-2) + "ia";
          } else {
          return this.genitive.slice(0,-2) + "a";
          }
        } else {
          return this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get nominativePlTrans(){
    return this.plNominativeTrans();
  }

  plNominativeTrans(){
    return "the " + this.plMeaning;
  }

    //GENITIVE

  get genitivePl(){
      return this.plGenitive();
  }

  plGenitive(){
    if (this.genitive.slice(-2,) == "ae"){
        return this.genitive.slice(0,-2) + "ārum";
    } else if (this.genitive.slice(-2,) == "ei"){
        return this.genitive.slice(0,-2) + "ērum";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "ōrum";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.nominative == "canis"){
            return this.genitive.slice(0,-2) + "um";
        } else if (this.gender == "n"){
            if (this.nominative.slice(-2,) == "re" || "al" || "ar"){
              return this.genitive.slice(0,-2) + "ium";
            } else {
              return this.genitive.slice(0,-2) + "um";
            }
        } else if (this.nominative == this.genitive){
          return this.genitive.slice(0,-2) + "ium";
        } else {
          return this.genitive.slice(0,-2) + "um";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        return this.genitive.slice(0,-2) + "ōrum";;
    }
  }

  get genitivePlTrans(){
      return this.plGenitiveTrans();
  }

  plGenitiveTrans(){
      return " of the " + this.plMeaning;
  }

    //DATIVE

  get dativePl(){
      return this.plDative();
  }

  plDative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēbus";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "īs";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ibus";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ibus";
    }
  }

  get dativePlTrans(){
    return this.plDativeTrans();
  }

  plDativeTrans(){
    return " to/for the " + this.plMeaning;
  }

  //ACCUSATIVE

  get accusativePl(){
    return this.plAccusative();
  }

  plAccusative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ās";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ōs";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          if (this.nominative.slice(-2,) == "re" || "al" || "re"){
            return this.genitive.slice(0,-2) + "ia";
          } else {
          return this.genitive.slice(0,-2) + "a";
          }
        } else {
          return this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get accusativePlTrans(){
    return this.plAccusativeTrans();
  }

  plAccusativeTrans(){
      return " the " + this.plMeaning;
  }

  //ablative

  get ablativePl(){
    return this.plAblative();
  }

  plAblative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēbus";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "īs";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ibus";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ibus";
    }
  }

  get ablativePlTrans(){
    return this.plAblativeTrans();
  }

  plAblativeTrans(){
    return " by/with/in/from the " + this.plMeaning;
  }

  //Vocative Plural

  get vocativePl(){
    return this.plVocative();
  }

  plVocative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ī";
      }
    } else if (this.genitive.slice(-2,) == "is"){
      if (this.gender == "n"){
        if (this.nominative.slice(-2,) == "re" || "al" || "re"){
          return this.genitive.slice(0,-2) + "ia";
        } else {
        return this.genitive.slice(0,-2) + "a";
        }
      } else {
        return this.genitive.slice(0,-2) + "ēs";
      }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get vocativePlTrans(){
    return this.plVocativeTrans();
  }

  plVocativeTrans(){
    let vocative = this.plMeaning;
    return vocative[0] + vocative.substring(1) + "!";
  }

}

// var array = [];

function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}


console.log(userNounInput())
console.log("hi")
var count = 0;
var score = 0;
var wordList = "";
var user = [];
var ranNoun = new Noun(user[0],user[1],user[2],user[3],user[4]);
console.log(typeof ranNoun)
var ranNounForm = [];
var user = [];
var rNFindx = 0;
var removedNounFormSet = new Set();
var alreadyDone = "";
var newArray = [];
var newArray1 = [];


user = userNounInput();
console.log(user)


console.log(typeof userNounInput);

console.log(shuffle(ranNounForm));

var intro = "Please select a Latin noun from the below list:" + "<br>" + "amicus" + "&emsp;" + "ancilla" + "&emsp;" + "canis" + "<br>" + "civis" + "&emsp;" + "gladiator" + "&emsp;" + "homo" + "<br>" + "hortus" + "&emsp;" + "leo" + "&emsp;" + "mater" + "<br>" + "nuntius" + "&emsp;" + "pater" + "&emsp;" + "puer" + "<br>" + "pugna" + "&emsp;" + "servus" + "&emsp;" + "silva" + "<br>" + "via" + "&emsp;" + "villa" + "&emsp;" + "puella" + "<br>" + "pes" + "&emsp;" + "hospes" + "&emsp;" + "sanguis" + "<br>" + "porta";
document.getElementById("label").innerHTML = intro;




function userNounInput(){


  //the below block of code transforms the user's response into a lower case array
  var answer = document.getElementById("textBox").value.toLowerCase().replace(/[., ]+/g, " ").trim();
  console.log(answer);
  console.log(typeof answer);
  // //this regex removes periods, commas, and extra spaces
  // let trimmedAnswer = answer.replace(/[., ]+/g, " ").trim();
  // // //this splits the user's answer into an array
  // let nounArray = trimmedAnswer.split(" ");
  // console.log(nounArray);

  var wordList = [["amicus","amici","m","friend","friends"],["ancilla","ancillae","f","maid servant","maid servants"],["ancilla","ancillae","f","maid servant","maid servants"],["animal","animalis","n","animal","animals"],["civis","civis","m","citizen","citizens"],["gladiator","gladiatoris","m","gladiator","glaiators"],["hospes","hospitis","m","guest","guests"],["hostis","hostis","m","enemy","enemies"],["homo","hominis","m","man","men"],["hortus","horti","m","garden","gardens"],["leo","leonis","m","lion","lions"],["mare","maris","n","sea","seas"],["mater","matris","f","mother","mothers"],["nuntius","nuntii","m","messenger","messengers"],["pater","patris","m","father","fathers"],["pes","pedis","m","foot","feet"],["porta","portae","f","gate","gates"],["puer","pueri","m","boy","boys"],["puella","puellae","f","girl","girls"],["pugna","pugnae","f","fight","fights"],["sanguis","sanguinis","m","blood","bloods"],["servus","servi","m","slave","slaves"],["silva","silvae","f","forest","forests"],["templum","templi","n","temple","temples"],["via","viae","f","road","roads"],["villa","villae","f","house","houses"]];
  console.log(wordList[0][0]);
  console.log(typeof wordList[0][0]);



  for (let i = 0;i < wordList.length;i++){
    console.log(wordList[i][0]);
    // if (answer.replace(/[., ]+/g, " ").trim() == wordList[i][0].replace(/[., ]+/g, " ").trim()){
    if ((answer.normalize()) === (wordList[i][0].normalize())){

      nounArray = [wordList[i][0],wordList[i][1],wordList[i][2],wordList[i][3],wordList[i][4]];
      startGame();
      //document.getElementById("submit").onclick = function(){startGame()};
      //document.getElementById("textBox").value = " ";
      console.log(nounArray)

      return nounArray;
    } else {
      document.getElementById("label").innerHTML = intro;
      document.getElementById("submit").onclick = function(){userNounInput()};
      document.getElementById("textBox").value = " ";
    }
  }
  // console.log(answer);





  // document.getElementById("submit").onclick = function(){startGame()};
  // document.getElementById("textBox").value = " ";
  // // document.getElementById("label2").style.display = "none";
  // // document.getElementById("textBox2").style.display = "none";
  //
  // return nounArray
}



function startGame(){
  console.log("hi")
  console.log(nounArray)



  // user = userNounInput();
  // console.log(user);

  ranNoun = new Noun(nounArray[0],nounArray[1],nounArray[2],nounArray[3],nounArray[4]);
  // rWLindx = Math.floor(Math.random() * nounArray.length);

  //this creates an array of the Latin noun cases and their translations
  ranNounForm = [[ranNoun.nominativeSing,ranNoun.nominativeSingTrans,"nominative singular"],[ranNoun.dativeSing,ranNoun.dativeSingTrans,"dative singular"],[ranNoun.accusativeSing,ranNoun.accusativeSingTrans,"accusative singular"],[ranNoun.nominativePl,ranNoun.nominativePlTrans,"nominative plural"],[ranNoun.dativePl,ranNoun.dativePlTrans,"dative plural"],[ranNoun.accusativePl,ranNoun.accusativePlTrans,"accusative plural"]];
  console.log(ranNounForm)
  rNFindx = Math.floor(Math.random() * ranNounForm.length);



  // [[ranNoun.genitivePl,ranNoun.genitivePlTrans,"genitive plural"]];
  // console.log(ranNounForm)
  // rNFindx = Math.floor(Math.random() * ranNounForm.length);

  // [[ranNoun.nominativeSing,ranNoun.nominativeSingTrans,"nominative singular"],[ranNoun.genitiveSing,ranNoun.genitiveSingTrans,"genitive singular"],[ranNoun.dativeSing,ranNoun.dativeSingTrans,"dative singular"],[ranNoun.accusativeSing,ranNoun.accusativeSingTrans,"accusative singular"],[ranNoun.ablativeSing,ranNoun.ablativeSingTrans,"ablative singular"],[ranNoun.vocativeSing,ranNoun.vocativeSingTrans,"vocative singular"],[ranNoun.nominativePl,ranNoun.nominativePlTrans,"nominative plural"],[ranNoun.genitivePl,ranNoun.genitivePlTrans,"genitive plural"],[ranNoun.dativePl,ranNoun.dativePlTrans,"dative plural"],[ranNoun.accusativePl,ranNoun.accusativePlTrans,"accusative plural"],[ranNoun.ablativePl,ranNoun.ablativePlTrans,"ablative plural"],[ranNoun.vocativePl,ranNoun.vocativePlTrans,"vocative plural"]];
  // console.log(ranNounForm)
  // rNFindx = Math.floor(Math.random() * ranNounForm.length);




  // shuffle(ranNounForm);

  console.log(ranNounForm.length);
  console.log(rNFindx);
  console.log(ranNounForm[rNFindx]);

  document.getElementById("label").innerHTML = "What is the " + ranNounForm[rNFindx][2] + " of " + nounArray[0] + "?";
  document.getElementById("submit").onclick = function(){checkAnswer()};
  // document.getElementById("label2").style.display = "none";
  latinForm = ranNounForm[rNFindx][0].normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  latinTrans = ranNounForm[rNFindx][1].normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  document.getElementById("textBox").value = " ";

  console.log(latinForm)
  console.log(latinTrans)


  return [user, ranNoun, ranNounForm,latinForm, latinTrans]

}




function checkAnswer(){

  answer = document.getElementById("textBox").value.toLowerCase();
  console.log(answer.trim())
  console.log(latinForm.trim())
  console.log(rNFindx);
  // console.log(newArray.length)

  // removedNounFormSet.add(alreadyDone);
  // removedNounForm = ranNounForm.splice(rNFindx,1)[0];
  // newArray=removedNounForm;
  // removedNounForm=newArray;
  // console.log(ranNounForm);
  // console.log(ranNounForm.length)
  // removedNounFormSet.add(removedNounForm);
  // console.log(removedNounFormSet.size);


  if (answer.trim() == latinForm.trim()){
  // if (document.getElementById("textBox").value.toLowerCase() === latinForm.toLowerCase()){
    document.getElementById("label").innerHTML = "Nice! The correct answer was: " + latinForm.trim() + ". Do you want to play again? (y/n)";
    score++;

  } else {
    document.getElementById("label").innerHTML = "Oops! You answered: " + answer.trim() + ". The correct answer was: " + latinForm.trim() + ". Do you want to play again? (y/n)";

  }
  document.getElementById("textBox").style.display = "block";
  document.getElementById("textBox").value = " ";
  document.getElementById("submit").onclick = function(){playAgain()};
  count++;
}


function playAgain(){

  answer = document.getElementById("textBox").value.toLowerCase().trim();
  console.log(answer.startsWith("y"));
  //document.getElementById("textbox2").style.display = "none";

  if (answer.startsWith("y")){
    document.getElementById("label").innerHTML = intro;

    // document.getElementById("label").innerHTML = "Give a Latin noun (e.g., puer, pueri, m., boy, boys): ";
    document.getElementById("submit").onclick = function(){userNounInput()};
    document.getElementById("textBox").style.display = "block";
    document.getElementById("textBox").value = " ";
  } else if (answer.startsWith("n")) {
    endGame();
    return false
  } else {
    document.getElementById("textBox").style.display = "none";
    document.getElementById("label").innerHTML = "Please answer either 'y' or 'n'!";
    document.getElementById("textBox").style.display = "block";
    document.getElementById("textBox").value = " ";
    document.getElementById("submit").onclick = function(){playAgain()};
  }
}

function endGame() {
  document.getElementById("textBox").style.display = "none";
  document.getElementById("label").innerHTML = "Vale! You scored " + score + " out of " + count + " attempts - " + Math.round(score/count*100) + "%";
  // document.getElementById("label").style.display = "none";
  document.getElementById("submit").style.display = "none";

}
