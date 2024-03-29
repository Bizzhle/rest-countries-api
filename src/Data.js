const Data = {
  // Gets all the countries on the API

  async getData() {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();
    const filteredData = data.map((item) => {
      return {
        name: item.name,
        native: item.nativeName,
        flag: item.flag,
        region: item.region,
        subRegion: item.subregion,
        callingCodes: item.callingCodes,
        capital: item.capital,
        population: item.population,
        languages: item.languages,
        id: item.area,
        currency: item.currencies,
        borders: item.borders,
        domain: item.topLevelDomain,
      };
    });

    return filteredData;
  },

  // Returns data based on the search query passed in

  async searchCountry(term) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    const data = await response.json();
    const filteredData = data.map((item) => {
      return {
        name: item.name,
        flag: item.flag,
        region: item.region,
        subRegion: item.subregion,
        callingCodes: item.callingCodes,
        capital: item.capital,
        population: item.population,
        languages: item.languages,
        id: item.area,
        currency: item.currencies,
        borders: item.borders,
        domain: item.topLevelDomain,
      };
    });
    return filteredData;
  },
};

export default Data;
