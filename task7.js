class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}


  let client = new Client('login1', 'email1@gmail.com');
  console.log(client.login);  
  console.log(client.email);  

  client.login = 'login2';
  client.email = 'email2@gmail.com';
  console.log(client.login);  
  console.log(client.email); 