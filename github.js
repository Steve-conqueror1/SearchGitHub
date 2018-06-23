class GitHub{
  constructor(){
    this.client_id = '05b5bc6e858506a4de93';
    this.client_secret = '10ca28633c0e515d5975d8ac65659aee6d778884';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret =${this.client_secret}`);
    const profileData = await profileResponse.json();
    return {
      profile
    }
  }
}