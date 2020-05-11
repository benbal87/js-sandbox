import { NgQuickstartSimplesoftPage } from './app.po';

describe('ng-quickstart-simplesoft App', function() {
  let page: NgQuickstartSimplesoftPage;

  beforeEach(() => {
    page = new NgQuickstartSimplesoftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
