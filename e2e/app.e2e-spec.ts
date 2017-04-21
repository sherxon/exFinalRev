import { Hw14Page } from './app.po';

describe('hw14 App', () => {
  let page: Hw14Page;

  beforeEach(() => {
    page = new Hw14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
