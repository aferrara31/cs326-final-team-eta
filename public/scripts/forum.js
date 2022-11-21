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
  createEntries();
  modal();
  addPost();
  test();
}

class ForumEntry{
  constructor(username, title){
    this.username = username;
    this.title = title;
    this.post = "";
    this.replies = [];
    this.upvotes = 0;
    this.downvotes = 0;
  }

  addPost(post){
    this.post = post;
    return this;
  }

  addReply(reply){
    this.replies.push(reply);
    return this;
  }

  upvote(){
    this.upvotes++;
    return this;
  }
  
  downvote(){
    this.downvotes++;
    return this;
  }

  render(element){
    element.innerHTML = 
    `
    <div class = "main-question mx-4 my-2">
      <div class = "d-flex flex-row p-4 align-items-center justify-content-start">
        <div class = "icon mx-1"></div>
        <div class = "username mx-1">${this.username}</div>
        <h1 class = "mx-1">${this.title}</h1>
      </div>
      <div class = "text-justify p-4">
        ${this.post}
      </div>
      <div class = "like text-end p-2">
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
        ${this.upvotes}
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
        ${this.downvotes}
      </div>
      </div>
      ${this.replies.map(x => x.render()).join("")}
    </div>
    </div>
    `;
  }
}

class ForumReply{
  constructor(username, reply, level = "1"){
    this.username = username;
    this.reply = reply;
    this.level = level;
    this.upvotes = 0;
    this.downvotes = 0;
  }

  addReply(username, reply){
    return new ForumReply(username, reply, Math.max(3, this.level+1));
  }

  upvote(){
    this.upvotes++;
    return this;
  }

  downvote(){
    this.downvotes++;
    return this;
  }

  render(){
    return `
    <div class = "reply m-4 my-2 reply-lvl-${this.level}">
    <div class = "d-flex info flex-row p-2 align-items-center justify-content-start">
      <div class = "icon"></div>
      <div class = "username">${this.username}</div>
      
    </div>
    <div class = "text-justify px-2">
      ${this.reply}
    </div>
    <div class = "like text-end p-2">
      <i class="fa fa-chevron-up" aria-hidden="true"></i>
      ${this.upvotes}
      <i class="fa fa-chevron-down" aria-hidden="true"></i>
      ${this.downvotes}
    </div>
  </div>
    `;
  }
}

function test()
{
  const forumEntry = document.getElementById("forum-entry");

  const e = new ForumEntry("username1", "Lorem ipsum dolor sit amet.");
  e.addPost("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque eum natus nesciunt? Tempora atque odio deserunt voluptate quae nisi, debitis sit ullam, modi in consequuntur sunt magnam aspernatur fugit quisquam delectus alias iusto aliquid. Ducimus alias quis eum hic culpa nobis distinctio libero quaerat optio, sunt earum eos quas?");
  e.upvotes = 20;
  e.downvotes = 5;

  const reply1 = new ForumReply("username2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed natus quod distinctio iure delectus?");
  reply1.upvotes = 10;
  reply1.downvotes = 1;
  
  const reply2 = reply1.addReply("username3", "Lorem, ipsum dolor sit amet consectetur adipisicing elit.");
  reply2.upvotes = 6;
  reply2.downvotes = 0;

  const reply3 = reply2.addReply("username1", "Thanks!");
  reply3.upvotes = 2;
  reply3.downvotes = 0;

  e.addReply(reply1).addReply(reply2).addReply(reply3);

  e.render(forumEntry);
  
}

window.addEventListener("load", onload);