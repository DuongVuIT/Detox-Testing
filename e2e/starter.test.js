describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('Should have hello text', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });

  const typedText = 'vu dai duong';

  it('Should type vu dai duong', async () => {
    const input = element(by.id('input'));
    await input.typeText(typedText);
  });

  it('Should press on the submit button', async () => {
    await element(by.id('button')).tap();
  });
  it('should have a alert with typed text', async () => {
    await expect(element(by.text(typedText)).atIndex(0)).toBeVisible();
    await element(by.text('OK')).tap();
  });
});
