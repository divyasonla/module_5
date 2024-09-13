let btn=document.createElement("button");
btn.textContent='change heading';
btn.addEventListener(click,function(){
    console.log('click event triggered');

});
document.getElementById('container').appendChild(btn);