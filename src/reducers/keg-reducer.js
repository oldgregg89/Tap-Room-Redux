export default (state = {}, action) => {
  const {name, abv, type, price, brew}
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({},state, {
      [id]: {
        name: name,
        abv: abv,
        type: type,
        price: price,
        brew: brew,
      }
    });
  default:
    return state;
  }
};