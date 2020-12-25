const button = document.getElementsByTagName('button')[0]
var input = document.getElementById('userInput')
var ul = document.querySelector('ul')

button.addEventListener("click", function() {
  //console.log(input.value)
  if(input.value.length > 0){  
    setElementList()
  }
});
input.addEventListener('keydown', function(event) {
  if(input.value.length > 0 && event.keyCode === 13){  
    setElementList()
  }
});

function setElementList(){
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value =""
}
