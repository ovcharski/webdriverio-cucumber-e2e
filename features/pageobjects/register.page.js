class RegistrationPage {
    // Element selectors
    get usernameField() { return $('#user_login-91'); }
    get firstNameField() { return $('#first_name-91'); }
    get lastNameField() { return $('#last_name-91'); }
    get emailField() { return $('#user_email-91'); }
    get passwordField() { return $('#user_password-91'); }
    get confirmPasswordField() { return $('#confirm_user_password-91'); }
    get maleGenderRadio() { return $('label=Male'); }
    get phoneNumberField() { return $('#phone_number-91'); }
    get submitButton() { return $('#um-submit-btn'); }
  
    // Actions
    async open() {
      await browser.url('https://ovcharski.com/shop/register/');
    }
  
    async fillRegistrationForm(userData) {
      await this.usernameField.setValue(userData.username);
      await this.firstNameField.setValue(userData.firstName);
      await this.lastNameField.setValue(userData.lastName);
      await this.emailField.setValue(userData.email);
      await this.passwordField.setValue(userData.password);
      await this.confirmPasswordField.setValue(userData.password);
      await this.maleGenderRadio.click();
      await this.phoneNumberField.setValue(userData.phoneNumber);
    }
  
    async submitForm() {
      await this.submitButton.click();
    }

    // Error message selectors
  get usernameError() { return $('#um-error-for-user_login-91'); }
  get emailError() { return $('#um-error-for-user_email-91'); }
  get passwordError() { return $('#um-error-for-user_password-91'); }
  get confirmPasswordError() { return $('#um-error-for-confirm_user_password-91'); }
  }
  
  module.exports = new RegistrationPage();