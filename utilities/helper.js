export const runInBrowser = function(argument){
    argument.click();
}

export const browserExecute =  (element) => {
    browser.execute(runInBrowser, element);
}
