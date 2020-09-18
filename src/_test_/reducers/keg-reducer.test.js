import kegReducer from '../../reducers/keg-reducer';

describe('kegReducer', () => {

  let action;
  const kegData = {
    names: 'A bird',
    abv: '12',
    type: 'IPA',
    price: '2.99',
    brewer: 'westcoast'
    id: 1

  };