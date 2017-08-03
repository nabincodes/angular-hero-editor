import { TheHeroEditorPage } from './app.po';

describe('the-hero-editor App', () => {
  let page: TheHeroEditorPage;

  beforeEach(() => {
    page = new TheHeroEditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
