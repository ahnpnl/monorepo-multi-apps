import App from '../../src/App.vue'

describe('<App />', () => {
  let el: ReturnType<typeof cy.mount>;
  
  beforeEach(() => {
    el = cy.mount(App)
  })
  
  it('renders', () => {
    el.should('exist');
  })
  
  it('should do something', function () {
   el.then(() => {
   
   })
  });
})
