(function(){
var p=document.body.dataset.page;
try{if(p==='index'&&window.name!=='vs-welcomed'){location.replace('welcome.html');return;}}catch(e){}
var L=[['index','Home'],['about','About'],['skills','Skills'],['certification','Certifications'],['templates','Templates'],['contact','Contact']];
var h=document.getElementById('site-header');
if(h)h.innerHTML='<header><div class="wrap"><a class="logo" href="index.html"><span>V</span>Vibhor Saini</a><nav aria-label="Main">'+L.map(function(l){return '<a href="'+l[0]+'.html"'+(l[0]===p?' class="active" aria-current="page"':'')+'>'+l[1]+'</a>'}).join('')+'</nav></div></header>';
var f=document.getElementById('site-footer');
if(f)f.innerHTML='<footer><div class="wrap">Made by <b>Vibhor Saini</b> · 2026</div></footer>';
if(p==='welcome'){
var g=['Hello','Namaste','Hola','Bonjour','Ciao','Salaam','Konnichiwa','Welcome'],i=0,e=document.getElementById('hello');
setInterval(function(){e.style.opacity=0;setTimeout(function(){i=(i+1)%g.length;e.textContent=g[i];e.style.opacity=1},350)},1800);
var go=function(){window.name='vs-welcomed'};
document.getElementById('enter').addEventListener('click',go);
document.addEventListener('keydown',function(k){if(k.key==='Enter'){go();location.href='index.html'}});
}
})();
