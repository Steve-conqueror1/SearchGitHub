//Inialize Github
const github = new GitHub;
//Search input
const searchUser = document.getElementById('search');

//search input event listenner
searchUser.addEventListener('keyup', (e)=>{
//get input text
const userText = e.target.value;
if(userText !== ''){
  // console.log(userText);
  //Make http call

  github.getUser(userText)
  .then(data => {
    if(data.profile.message === 'Not Found'){
      //Show alert     

    }else{
      //Show profile

    }
  }) 
}
else{
 //clear profile 
}
});