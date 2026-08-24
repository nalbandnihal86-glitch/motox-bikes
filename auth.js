function user(){return JSON.parse(localStorage.getItem("motoxUser")||"null")}
document.addEventListener("DOMContentLoaded",()=>{
  const r=document.getElementById("registerForm");
  if(r) r.addEventListener("submit",e=>{
    e.preventDefault();
    const inputs=r.querySelectorAll("input");
    const data={name:inputs[0].value.trim(),email:inputs[1].value.trim(),password:inputs[2].value};
    localStorage.setItem("motoxUser",JSON.stringify(data));
    localStorage.setItem("motoxLoggedIn","true");
    toast("Account created successfully");
    setTimeout(()=>location.href="index.html",700);
  });

  const l=document.getElementById("loginForm");
  if(l) l.addEventListener("submit",e=>{
    e.preventDefault();
    const inputs=l.querySelectorAll("input");
    const saved=user();
    if(saved && saved.email===inputs[0].value.trim() && saved.password===inputs[1].value){
      localStorage.setItem("motoxLoggedIn","true");
      toast("Login successful");
      setTimeout(()=>location.href="index.html",700);
    }else{
      toast("Please use your registered email and password");
    }
  });

  const u=user();
  if(u){
    const n=document.getElementById("profileName"),m=document.getElementById("profileEmail");
    if(n)n.textContent=u.name;
    if(m)m.textContent=u.email;
  }
});

function logout(){
  localStorage.removeItem("motoxLoggedIn");
  location.replace("login.html");
}
