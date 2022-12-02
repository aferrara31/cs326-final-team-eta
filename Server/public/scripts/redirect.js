function load(){
  const buttons = document.querySelectorAll("div.navbar>*");

  for(let i = 0; i < buttons.length; i++){
    const page = buttons[i].getAttribute("page");
    console.log(page);
    buttons[i].addEventListener("click", () => {
      window.location.href = `/${page}`;
    });
  }

}

window.addEventListener("load", load);