const Data = {
  // Gets all the countries on the API

  async getData() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");

    const data = await response.json();
    const filteredData = data.map((item) => {
      return {
        name: item.name,
        native: item.nativeName,
        image: item.flag,
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

  async searchCountry(name) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    const data = await response.json();
    const filteredData = data.map((item) => {
      return {
        name: item.name,
        image: item.flag,
        region: item.region,
        subRegion: item.subregion,
        callingCodes: item.callingCodes,
        capital: item.capital,
        population: item.population,
        languages: item.languages,
        id: item.area,
      };
    });
    return filteredData;
  },
};

export default Data;
