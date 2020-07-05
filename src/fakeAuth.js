const fakeAuth =  {
    isAuthenticated : false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 5000)
    }
}

export default fakeAuth;