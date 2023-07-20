function unlock(){
  var password = document.getElementById("passwd").value;
  var legin = document.querySelector(".letLogin");
  var passout = document.querySelector(".passout");
  var pass = "whoami";
  var pat = `<p>Your type password is "${password}" </p>`;
  passout.innerHTML = pat;
  
  if (password == pass){
    let login = `<a class="login" href="/main.Explore.area/3983yzujao37syaj39e8.in/Explore/App.main.Explore.html">Let's Go</a>`;
    legin.innerHTML = login;
    
  } 
  else {
    let login = '<p class="pRed">⚠️ Your password is incorrect.. </p> ';
    legin.innerHTML = login;
  }
}
