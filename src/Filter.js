const Filter = {
  // sort countries by name (asc)
  nameAsc(arr) {
    const newOrder = arr.sort((a, b) => (a.name > b.name ? 1 : -1));
    return newOrder;
  },

  // sort countries by name (dsc)

  nameDsc(arr) {
    const newOrder = arr.sort((a, b) => (a.name < b.name ? 1 : -1));
    return newOrder;
  },

  // sort countries by population (asc)
  populationAsc(arr) {
    const newOrder = arr.sort((a, b) =>
      a.populatiion > b.population ? 1 : -1
    );
    return newOrder;
  },

  populationDsc(arr) {
    const newOrder = arr.sort((a, b) =>
      a.populatiion < b.population ? 1 : -1
    );
    return newOrder;
  },
};


export default Filter