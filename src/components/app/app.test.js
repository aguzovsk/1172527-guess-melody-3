import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe(`Render app component`, () => {
  it(`<App errorsCount={3}/>`, () => {
    const tree = renderer
      .create(<App
        errorsCount={3}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
