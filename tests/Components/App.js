import App from '../../app/App';
import React from 'react';
import {
  isCompositeComponent,
  renderIntoDocument,
  createRenderer,
} from 'react-addons-test-utils';

describe('App sanity test', () => {
  let renderer;
  beforeEach(() => {
    renderer = createRenderer();
  });

  afterEach(() => {
    renderer = null;
  });

  it('should render correctly', () => {
    const component = renderIntoDocument(<App />);
    // Stateless components have no backing instance.
    expect(isCompositeComponent(component)).toBe(false);
  });

  it('should render a div', () => {
    renderer.render(<App />);
    const app = renderer.getRenderOutput();
    const { type } = app;

    expect(type).toBe('div');
  });
});
