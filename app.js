//init GitHub
const github = new Github;

//init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');
//search input event listenner
searchUser.addEventListener('keyup', (e) => {
  //get inpu text
  const userText = e.target.value;

  if(userText !== '')
  {
    // console.log(userText);
    //Make  http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //Show Alert
        ui.showAlert('User not Found', 'alert alert-danger');

      }else{
        //show the Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);

      }
    })    
  } else{
    //clear profile
    ui.clearProfile();
  }
});