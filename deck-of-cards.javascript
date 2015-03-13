var rank = [ "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King" 
];

var suit = [ "clubs", "spades", "hearts", "diamonds"];
var discards =[];

function dealCard(){
  var suitIndex = Math.floor((Math.random() * 4) + 0);
  //console.log(suitIndex);
  console.log(suit[suitIndex]);
  
  var rankIndex = Math.floor((Math.random() * rank.length) + 0);
  //console.log(rankIndex);  
  console.log(rank[rankIndex]);
  
  rank.splice(rankIndex, 1);
  discards.push(rank[rankIndex]);
  
console.log('Cards Left: ' + rank.length);
console.log(discards.join(', '));  
}
 


dealCard();
dealCard();
dealCard();
dealCard();
dealCard();
dealCard();
dealCard();
dealCard();
dealCard();
dealCard();
dealCard();
dealCard();
dealCard();

/*console.log(suit);
console.log(rank);*/
