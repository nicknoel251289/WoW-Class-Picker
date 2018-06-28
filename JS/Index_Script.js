var class_array = [];
var answers = [];
var most_matches = [];
var class_picked = [];
var href_link = [];
var classes = ["Druid", "Demon Hunter", "Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"];
var last_count = 0;

function Class(class_name, class_answers_array, class_descritption, href){
  this.class_name = class_name;
  this.class_answers_array = class_answers_array;
  this.class_descritption = class_descritption;
  this.href = href;
  class_array.push(this);
  this.clearArray = function(clear){
    for(var c = clear.length; c <= clear.length; c--){
      most_matches.pop();
    }
  };
  this.remove_item = function(remove){

  }
  this.compareArrays = function(their_answers){
    var match_count = 0;
    if(their_answers[0] === class_answers_array[0] && their_answers[1] === class_answers_array[1]){
      for(var i = 0; i < their_answers.length; i++){
        for(var j = 0; j < class_answers_array.length; j++){
          if(their_answers[i] === class_answers_array[j]) match_count++;
          }
        }
      }else if (their_answers[0] === class_answers_array[0] && their_answers[1] != class_answers_array[1]){
        for(var i = 0; i < their_answers.length; i++){
          for(var j = 0; j < class_answers_array.length; j++){
            if(their_answers[i] === class_answers_array[j]) match_count++;
            }
          }
      }
      /*
      if(match_count >= 6){
        most_matches.push(this.class_descritption);
        console.log(match_count);
        console.log(most_matches);
        last_count = match_count;
      }
      */
      /* ---------- IF YOU ONLY WANT TO RETRIEVE ONE ANSWER USING SPLICE ---------- */
      if(match_count >= last_count){
        most_matches.splice(0, 1);
        href_link.splice(0, 1);
        most_matches.push(this.class_descritption);
        class_picked.push(this.class_name);
        href_link.push(this.href);
        console.log(match_count);
        console.log(most_matches);
        console.log(href_link);
        last_count = match_count;
      }
      /* ---------- IF YOU WANT MULTIPLE ANSWERS IF TIE OR ONE ANSWER IF DOMINANT ----------
      if(match_count >= last_count){
        if(match_count === last_count){
          most_matches.push(this.class_descritption);
          console.log(match_count);
          console.log(most_matches);
          last_count = match_count;
        }else if(match_count > last_count){
          match_count.clearArray(most_matches);
          most_matches.push(this.class_descritption);
          console.log(match_count);
          console.log(most_matches);
          last_count = match_count;
        }
      }
      */
    }
  };


console.log(most_matches);

var druid_description = "I am a druid.";
var druid = new Class('Druid', ['leather', 'nature', 'healer', 'tank', 'damage', 'numbers', 'physical', 'magic', 'pvp', 'pve'], druid_description, "Class_Pages/druid.html");

var demon_hunter_description = "I am a demon hunter ";
var demon_hunter = new Class('Demon Hunter', ['leather', 'dark', 'tank', 'damage', 'numbers', 'animations', 'physical', 'magic', 'pvp', 'pve'], demon_hunter_description, "Class_Pages/demon_hunter.html");

var dk_description = "I am a DK ";
var dk = new Class('Death Knight', ['plate', 'dark', 'damage', 'tank', 'numbers', 'physical', 'magic', 'pvp', 'pve'], dk_description, "Class_Pages/death_knight.html");

var hunter_description = "I am a hunter ";
var hunter = new Class('Hunter', ['mail', 'nature', 'damage', 'numbers', 'physical', 'pvp', 'pve'], hunter_description, "Class_Pages/hunter.html");

var mage_description = "I am a mage ";
var mage = new Class('Mage', ['cloth', 'elemental', 'damage', 'animations', 'numbers', 'magic', 'pvp', 'pve'], mage_description, "Class_Pages/mage.html");

var monk_description = "I am a monk ";
var monk = new Class('Monk', ['leather', 'neutral', 'healer', 'tank', 'damage', 'animations', 'numbers', 'physical', 'magic', 'pvp', 'pve'], monk_description, "Class_Pages/monk.html");

var pally_description = "I am a paladin ";
var pally = new Class('Paladin', ['plate', 'light', 'healer', 'tank', 'damage', 'animations', 'magical', 'physical', 'pvp'], pally_description, "Class_Pages/paladin.html");

var priest_description = "I am a priest ";
var priest = new Class('Priest', ['cloth', 'light', 'dark', 'damage', 'animations', 'numbers', 'magic', 'pvp', 'pve'], priest_description, "Class_Pages/priest.html");

var rogue_description = "I am a rogue ";
var rogue = new Class('Rogue', ['leather', 'dark', 'damage', 'numbers', 'physical', 'pvp', 'pve'], rogue_description, "Class_Pages/rogue.html");

var shaman_description = "I am a sham ";
var shaman = new Class('Shaman', ['mail', 'elemental', 'healer', 'damage', 'animations', 'numbers', 'magic', 'physical', 'pve'], shaman_description, "Class_Pages/shaman.html");

var warlock_description = "I am a warlock ";
var warlock= new Class('Warlock', ['cloth', 'dark', 'damage', 'animations', 'numbers', 'magic', 'pvp', 'pve'], warlock_description, "Class_Pages/warlock.html");

var warrior_description = "I am a warrior ";
var warrior = new Class('Warrior', ['plate', 'neutral', 'tank', 'damage', 'numbers', 'physical', 'pvp', 'pve' ], warrior_description, "Class_Pages/warrior.html");

$(document).ready(function(){

  $('#calculate').on('click', function(){

    $("input:checked").each(function(index){
      answers[index] = $(this).attr('id');
    });

    for(var i = 0; i < class_array.length; i++){
      class_array[i].compareArrays(answers);
    }

    for(var x = 0; x < most_matches.length; x++){
      $('#answer').append(most_matches[x] + '<br /><br />');
    }

    for(var j = 0; j < classes.length; j++){
      if(class_picked[0] === classes[j]){
        window.location.assign(href_link[0]);
      }
    }
  });

});


  function open_nav(){
    if(window.innerWidth > 600){
      document.getElementById("side_nav_content").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }else if(window.innerWidth < 600){
      document.getElementById("side_nav_content").style.width = "100%";
      document.getElementById("side_nav_content").style.display = "block";
    }
  };
    function close_nav(){
      document.getElementById("side_nav_content").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.body.style.backgroundColor = "white";
    }
