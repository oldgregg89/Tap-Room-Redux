import kegReducer from '../../reducers/keg-reducer';

describe('kegReducer', () => {

  let action;
  const kegData = {
    name: 'A witches brew',
    abv: '12',
    type: 'IPA',
    price: '2.99',
    brewer: 'westcoast',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new mech data to KegList', () => {
    const { name, abv, type, price, brewer, id } = kegData;
    action = {
      type: 'ADD_POST',
      name: name,
      abv: abv,
      type: type,
      price: price,
      brewer: brewer,
      id: id
    };

    expect(KegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        abv: abv,
        type: type,
        price: price,
        brewer: brewer,
        id: id
      }
    });
  });
});