class LoginPage {
    get username() { return $('#username-92'); }
    get password() { return $('#user_password-92'); }
    get loginButton() { return $('#um-submit-btn'); }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;