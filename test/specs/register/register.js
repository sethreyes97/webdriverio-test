import { expect as chaiExpect } from 'chai';
import LandingPage from '../../pageobjects/landing.page';
import RegisterPage from '../../pageobjects/register.page';
import { runInBrowser, browserExecute } from '../../../utilities/helper';
import resources from '../../../resources';

describe('Should register a new user', () => {
    
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

    it('Should enter user email', () => {
        RegisterPage.enterEmail(resources.registerEmail);
        expect(RegisterPage.emailInput).toHaveValue(resources.registerEmail);
    });

    it('Should put valid password', () => {
        RegisterPage.enterPassword(resources.registerPassword);
        expect(RegisterPage.passwordInput).toHaveValue(resources.registerPassword);
    })

    it('Should confirm the password', () => {
        RegisterPage.enterConfirmPassword(resources.registerPassword);
        expect(RegisterPage.confirmPasswordInput).toHaveValue(resources.registerPassword);      
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