import BasePage from './base.page'

class LandingPage extends BasePage {
    get registerBtn() {
        return $('//*[contains(text(),"CREA TU CUENTA")]')
    }

    open(URL){
        super.open(URL)
    }

    register(){
        this.registerBtn.click();
    }
}


export default new LandingPage();