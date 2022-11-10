const MAX_ENTRIES = 40;
function createEntries()
{
  const titles = document.getElementById("title");
  const parent = document.getElementById("forum-entries");
  
  for(let i = 0; i < MAX_ENTRIES; i++)
  {
    const clone = titles.cloneNode(true);
    if(i === 8)
      clone.classList.add("selected");
    parent?.appendChild(clone);
  }
}

window.addEventListener("load", createEntries);