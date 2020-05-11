import { browser, element, by } from 'protractor';

export class NgQuickstartSimplesoftPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
