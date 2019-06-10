class Page {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    login() {
        console.log("Page login");
    }
    logout() {
        console.log("Page logout");
    }
}

class CustomPage {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    login() {
        console.log("CustomPage login");
    }
    logout() {
        console.log("CustomPage logout");
    }
    open() {
        console.log("CustomPage open");
    }
}

const page = new Page();
const customPage = new CustomPage();
page.height = 12;
customPage.height = 15;


const proxy = new Proxy(customPage, {
    apply: function (target, property) {
        console.log("Apply for " + property);
        return page[property] || target[property];
    },
/*     get: function (target, property) {
        console.log("Get for " + property);
        return page[property] || target[property];
    } */

});

const callf = proxy.login;
callf.apply();
// proxy.logout();
// proxy.open();
// proxy.height;

