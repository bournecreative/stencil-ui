import { newE2EPage } from '@stencil/core/testing';

describe('counter-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<counter-component></counter-component>');

    const element = await page.find('counter-component');
    expect(element).toHaveClass('hydrated');
  });
});
