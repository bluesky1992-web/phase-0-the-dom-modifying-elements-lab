// Write your code here!
// Write your code here!
//remove the main element
const removeMain = document.getElementById("main")
removeMain.remove()
// create an h1 element and append it to the body 
const newHeader = document.createElement("h1")

// set an id for the h1  element and the text inside of it 
newHeader.setAttribute('id','victory')
newHeader.innerHTML = 'Ali is the champion'

document.body.append(newHeader)