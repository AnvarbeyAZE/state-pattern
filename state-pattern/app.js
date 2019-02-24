///Page state
const PageState = function(){
  let currentState = new homeState(this);

  this.init = function(){
    this.change(new homeState);
  }

  this.change = function (state){
    currentState = state;
  }
}

//Home state
const homeState = function(page){
  document.querySelector('#heading').textContent = null;

  document.querySelector('#content').innerHTML =`
  <div class="jumbotron">
  <h1 class="Hello World!</h1>
  <p class="lead">Home</p>
  <hr class="my-4">
  <p>Home Page.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  `;

};

//About State
const aboutState  = function(page){
  document.querySelector('#heading').textContent = 'About us';
  document.querySelector('#content').innerHTML = `
  <p>This is the about page !!!</p>
  `;
};
//Contact State
const contactState  = function(page){
  document.querySelector('#heading').textContent = 'Contact us!';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
};
// Instantiate pageState

  const page = new PageState();

  //init the first state

  page.init();


  //UI vars
  const home = document.getElementById('home'),
        about = document.getElementById('about'),
        contact = document.getElementById('contact');


  //Add event listeners
  //Home
  home.addEventListener('click',(e)=>{
    page.change(new homeState);
    e.preventDefault();
  })
  //About
  about.addEventListener('click',(e)=>{
    page.change(new aboutState);
    e.preventDefault();
  })
  //Contact
  contact.addEventListener('click',(e)=>{
    page.change(new contactState);
    e.preventDefault();
  })

