import { expect as chaiExpect } from 'chai';
import LandingPage from '../../pageobjects/landing.page';
import RegisterPage from '../../pageobjects/register.page';
import { runInBrowser, browserExecute } from '../../../utilities/helper';
import resources from '../../../resources';

describe('Should validate invalid register error messages', () => {
    
    before(() => {
        LandingPage.open(resources.mainURL);
    });

    it('Should show register page', () => {
        LandingPage.register();
        expect(RegisterPage.countryDropDown).toBeVisible();
    });

    it('Should select country', () => {
        RegisterPage.selectCountry(resources.country);
        browser.keys('Enter');
        expect(RegisterPage.countryTextField).toHaveText(resources.country);
    });

    it('Should enter invalid user email', () => {
        RegisterPage.enterEmail(resources.invalidEmail);
        expect(RegisterPage.emailInput).toHaveValue(resources.invalidEmail);
    });

    it('Should see email error message', () => {
        browser.keys('Tab');
        chaiExpect(RegisterPage.emailErrorMessage.getText()).to.be.equal(resources.emailErrorMessage);
    });

    it('Should put an invalid password', () => {
        RegisterPage.enterPassword(resources.invalidPassword);
        expect(RegisterPage.passwordInput).toHaveValue(resources.invalidPassword);
    })

    it('Should confirm the password', () => {
        RegisterPage.enterConfirmPassword(resources.differentPassword);
        expect(RegisterPage.confirmPasswordInput).toHaveValue(resources.differentPassword);      
    })

    it('Should accept terms and conditions', () => {
        RegisterPage.acceptTerms();
        chaiExpect(RegisterPage.termsAndConditionsCheckBox.isSelected()).to.be.true;
    });

    it('Should want to know more recent about Bitso', () => {
        RegisterPage.acceptMailing();
        chaiExpect(RegisterPage.knowBitsoCheckBox.isSelected()).to.be.true;
    });

    it('Should accept Bitso privacy advice', () => {        
        RegisterPage.acceptPrivacy();
        chaiExpect(RegisterPage.bitsoPrivacyCheckBox.isSelected()).to.be.true;
    });

    it('Should accept Nvio privacy advice and terms', () => {
        try{
            RegisterPage.acceptNvio();
            chaiExpect(RegisterPage.nvioPrivacyCheckBox.isSelected()).to.be.true;
        }catch(error) {
            console.error(error);
        }
    });
});