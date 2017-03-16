import { browser, element, by } from 'protractor';

describe('Ionic App', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('Ims Mobile Prototype Ionic');
  });
})
