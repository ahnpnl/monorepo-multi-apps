import { html } from 'lit';

describe('<my-element />', () => {
  let el: ReturnType<typeof cy.mount>;
  
  beforeEach(() => {
    el = cy.mount(html`<my-element></my-element>`);
  })
  
  it('renders', () => {
    el.should('exist');
  })
  
  it('not renders', () => {
    el.then((component) => {
      console.warn(component.attr('data-foo'))
    })
  })
})
