import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Rocket from './Rocket';
import CurrentUser from './CurrentUser';

describe('rockets and rocket components render properly', () => {
  it('rockets component have rocket objects', async () => {
    const allrockets = [
      { id: 11, rocketname: 'Falcon 1' },
      { id: 15, rocketname: 'Star' },
    ];
    const rocketsComponent = jest.mock('./Rockets', () => {
      jest.mock('./Rocket');
      return (
        <div className="rockets">
          {allrockets.length > 0 ? (
            <div className="rockets-container">
              {allrockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
            </div>
          ) : (
            <p className="no-rockets">
              <i>Currently, No Rockets</i>
            </p>
          )}
        </div>
      );
    });
    expect(rocketsComponent).toMatchSnapshot();
    expect(allrockets.length).not.toBeNull();
    expect(allrockets[0].id).toBe(11);
    expect(allrockets[0].rocketname).toBe('Falcon 1');
  });

  it('rocket child component renders properly', () => {
    const rocketObj = jest.mock('./Rocket', () => {
      renderer
        .create(<Rocket rocket />)
        .toJSON();
    });
    expect(rocketObj).toMatchSnapshot();
  });

  it('current user component renders properly', () => {
    const userObj = jest.mock('./CurrentUser', () => {
      renderer
        .create(<CurrentUser page="/profile" />)
        .toJSON();
    });
    expect(userObj).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
