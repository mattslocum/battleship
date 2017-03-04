import { BattleshipPage } from './app.po';

describe('battleship App', () => {
  let page: BattleshipPage;

  beforeEach(() => {
    page = new BattleshipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
