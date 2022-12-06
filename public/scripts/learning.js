function modal(){
  const modal = document.getElementById("modal-container");
  const close = document.getElementById("close");

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function addPost(){
  const modal = document.getElementById("modal-container");
  const button = document.getElementById("add");
  const textbox = document.getElementById("input-entry");
  
  button.addEventListener("click", () => {
    textbox.value = "";
    modal.style.display = "flex";
  });
}

function onload()
{
  // createEntries();
  modal();
  addPost();
  // test();
}

window.addEventListener("load", onload);
