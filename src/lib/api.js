import axios from 'axios';

// Create base url which is automatically inserted in the requests
const api = axios.create({
    baseURL: 'https://sw-api.starnavi.io/',
  });

//Getting all heroes from API requesting data from each page
  export const getHeroes = async ({ page }) => {
    try {
        const {data} = await api.get(`people/?page=${page}`, {
            params: {
                per_page: 10,
            },
        });
        return data;
    } catch (error) {
        console.error("Error fetching heroes:", error);
        throw error;
    }
};

// Getting specific hero be his id
 export const getHeroesById = async (id) => {
    try {
      const {data} = await api.get(`people/${id}`);
      return data;
    } catch (error) {
      console.error("Error fetching hero datails:", error);
      throw error;
    }
  };

  //Getting all films from the API
  export const getFilms = async () => {
    try {
      const {data} = await api.get(`films`);
      return data;
    } catch (error) {
      console.error("Error fetching hero datails:", error);
      throw error;
    }
  };


//Getting all ships 
export const getShips = async () => {
  try {
    //declaring an empty array where ships from all pages will be stored
    const results = [];
    //declaring the number of ships per page
    const resultsPerPage = 10;
    //getting data from the first page to receive total number of startships
    const initialResponse = await axios.get('https://sw-api.starnavi.io/starships/?page=1');
    //define total number of starships 
    const totalCount = initialResponse.data.count;
    //define total number of pages roudning up
    const totalPages = Math.ceil(totalCount / resultsPerPage);

    //get the data from each page and push it to the results array untill it gets to the last page
    for (let page = 1; page <=totalPages; page++) {    
      const res = await axios.get(`https://sw-api.starnavi.io/starships/?page=${page}`);
      results.push(...res.data.results);
    }

    return results;
  } catch (error) {
    console.error("Error fetching ships:", error);
    throw error;
  }
};


