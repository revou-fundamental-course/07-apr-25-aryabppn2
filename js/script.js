var slidesIndex = 1;
showDivs(slidesIndex);

function plusDivs(n) {
  showDivs(slidesIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slides");

  if (n > x.length) slidesIndex = 1;
  if (n < 1) slidesIndex = x.length;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slidesIndex - 1].style.display = "block";
}

// Auto slideshow
setInterval(function () {
  plusDivs(1);
}, 3000);




function send_chat(type){
  const element={
      create:{
         el:document.createElement('div'),
         h1:document.createElement('h1'),
         value:document.createTextNode(document.getElementById('chat-input').value)
      },
      output:document.getElementById('chat')
  }

  element.output.appendChild(element.create.el);
  element.create.el.appendChild(element.create.h1);
  element.create.h1.appendChild(element.create.value);


  element.create.el.setAttribute('class',type)


}
