let myleads = ["www","youtube","ajfisf"]
const inputEl = document.getElementById("input-el")

const btnEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

btnEl.addEventListener("click",function(){
    myleads.push(inputEl.value)
    
   console.log(myleads)
})

for(let i = 0 ; i<myleads.length;i++){
    ulEl.innerHTML+= "<li>"  + myleads[i] + "</li>"
}