// Create an array of songs
var songs = ["profugos", "crimen", "zoom", "signos"];

// Choose word randomly
var rand = Math.floor(Math.random()* songs.length);
var chosensong = songs[rand];
var underscore = [];
var rightword = [];
var wrongword = [];
var win = 0;
var losses = 0;
var wrongletters = 0;
var rightletters = 0;
//var wrong2 = wrongletters - 3;

// Create underscore based on length of word (song)
var generateunderscore = () => {
    for(var i = 0; i < chosensong.length; i++) {
        underscore.push('_');
    }
    document.getElementById("#underscore").innerHTML = generateunderscore;
}
// Get users guess
// The document.addeventlistener waits for the action to trigger the "event"; the Keyboard event "KeyCode" gets you the unicode of the key; the "String.fromCharCode" converts you a unicode into a character 

document.addEventListener('keypress', (event) => {

 // DOM Manipulation
 var docUnderscore = document.getElementById("underscore");
 var failletters = document.getElementById("wrongletters");

    var keyword = String.fromCharCode(event.keyCode);
// When keycode is press, the next "if" gets trigger to search for the song, and "push" the letters choosen by the user to right or wrong array
    if(chosensong.indexOf(keyword) > -1) {
        // add to right words array
        rightword.push(keyword);
        rightletters++;
        
    } else {
            wrongword.push(keyword); 
            wrongletters++;
            failletters.innerHTML = wrongword;
            };

    for (var i = 0; i < chosensong.length; i++){
        if (chosensong[i] == keyword){
                // replace underscore at keyword index with the correct letter
            underscore[i] = keyword;
            }; 
        // this action indicates where to place the underscore, printed in HTML, and join each keyword
        docUnderscore.innerHTML = underscore.join('');

        if(underscore.join('') == chosensong) {
            win++;
            alert("You Win" + win);
        }; 
        //if (underscore == chosensong.lenght) {
            //losses++;
           // alert("You lost, try again" + losses);

        // this array goes at comparing the keyword selected to the chosensong, if both are equal, then
        
        // This counts the # of wins for the user
        var html = "<p>Press any key to get started</p>" + 
        "<p>win: "+ win +"</p>" +
        "<p>losses: "+ losses +"</p>" +
        "<p>wrongs: "+ wrongletters +"</p>" +
        "<p>rights: "+ rightletters + "</p>";

            document.querySelector('#game').innerHTML = html;            
        }
    });
