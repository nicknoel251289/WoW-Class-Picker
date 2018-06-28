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
