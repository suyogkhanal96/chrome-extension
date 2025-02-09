let myleads = [];

var leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))

console.log(leadsFromLocalStorage)

const inputEl = document.getElementById("input-el");

const btnEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

if(leadsFromLocalStorage)
{
  myleads = leadsFromLocalStorage 
  renderleads()
}

btnEl.addEventListener("click", function () {
  myleads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myleads",JSON.stringify(myleads));

  renderleads();
});
function renderleads() {
  let listItems = "";
  for (let i = 0; i < myleads.length; i++) {
    //listItems += "<li><a target ='_blank' href ='" + myleads[i] + "'>" + myleads[i] + "</a></li>"
    listItems += `
                 <li>
                     <a target ='_blank' href ='${myleads[i]}'>
                     ${myleads[i]}
                      </a>
              </li>
                `;
  }
  ulEl.innerHTML = listItems;
}
