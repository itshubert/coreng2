import { Coreng2Page } from './app.po';

describe('coreng2 App', function() {
  let page: Coreng2Page;

  beforeEach(() => {
    page = new Coreng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
