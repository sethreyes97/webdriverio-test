import BasePage from './base.page'
import resources from '../../resources';
import { browserExecute } from '../../utilities/helper';

class RegisterPage extends BasePage {
    get countryDropDown ()              { return $('#country'); }
    get countryTextField ()             { return $('.css-n16ex0'); }
    get emailInput ()                   { return $('#email'); }
    get passwordInput ()                { return $('#password'); }
    get confirmPasswordInput ()         { return $('#password_confirmation'); }
    get termsAndConditionsCheckBox ()   { return $('#accept_terms') }
    get knowBitsoCheckBox()             { return $('#accept_mail');}
    get bitsoPrivacyCheckBox()          { return $('#accept_privacy'); }
    get nvioPrivacyCheckBox()           { return $('#accept_nvio_terms'); }
    get emailErrorMessage()             { return $('//*[contains(text(),"'+resources.emailErrorMessage+'")]')}
    get passwordErrorMessage()          { return $('//*[contains(text(),"'+resources.passwordErrorMessage+'")]')}

    selectCountry(country){
        this.countryDropDown.setValue(country);
    }
    
    enterEmail(email){
        this.emailInput.setValue(email);
    }

    enterPassword(password){
        this.passwordInput.setValue(password);
    }

    enterConfirmPassword(password){
        this.confirmPasswordInput.setValue(password);
    }

    acceptTerms(){
        browserExecute(this.termsAndConditionsCheckBox);
    }

    acceptMailing(){
        browserExecute(this.knowBitsoCheckBox);
    }

    acceptPrivacy(){    
        browserExecute(this.bitsoPrivacyCheckBox);
    }

    acceptNvio(){
        browserExecute(this.nvioPrivacyCheckBox);
    }    
}



export default new RegisterPage();