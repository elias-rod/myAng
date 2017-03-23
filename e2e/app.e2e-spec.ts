import { MyAngPage } from './app.po';

describe('my-ang App', function() {
  let page: MyAngPage;

  beforeEach(() => {
    page = new MyAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
