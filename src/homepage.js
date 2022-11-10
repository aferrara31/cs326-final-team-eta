const MAX_ENTRIES = 5;

function createEntries()
{
  const titles = document.getElementsByClassName("question")[0];
  const parent = document.getElementById("questions");
  
  for(let i = 0; i < MAX_ENTRIES; i++)
  {
    const clone = titles.cloneNode(true);
    const span = clone.getElementsByClassName("number")[0];
    span.innerText = Math.round(Math.random() * 1000);
    if(i === 8)
      clone.classList.add("selected");
    parent?.appendChild(clone);
  }


  const button = document.createElement("button");
  button.appendChild(document.createTextNode("Explore More"));
  button.classList.add("btn","btn-primary", "align-self-end","m-2", "p-2");
  parent.appendChild(button);
}

window.addEventListener("load", createEntries);