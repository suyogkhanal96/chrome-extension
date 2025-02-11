let myleads = []

var leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))

console.log(leadsFromLocalStorage)

const inputEl = document.getElementById("input-el")
const deleteBtn = document.getElementById("delete-btn")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage)
{
  myleads = leadsFromLocalStorage 
  render(myleads)
}
deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear("myleads")
  myleads = []
  render(myleads)
})
inputBtn.addEventListener("click", function () {
  myleads.push(inputEl.value)
  inputEl.value = ""

  localStorage.setItem("myleads",JSON.stringify(myleads))

  render(myleads)
  
});

  tabBtn.addEventListener("click", function() {
    chrome.tabs.query({"active": true, "currentWindow": true}, function(tabs) {
      myleads.push(tabs[0].url);  
      localStorage.setItem("myleads", JSON.stringify(myleads))
      render(myleads); 
    })
  })
  
  
function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    //listItems += "<li><a target ='_blank' href ='" + myleads[i] + "'>" + myleads[i] + "</a></li>"
    listItems += `
                 <li>
                     <a target ='_blank' href ='${leads[i]}'>
                     ${leads[i]}
                      </a>
              </li>
                `
  }
  ulEl.innerHTML = listItems
}
