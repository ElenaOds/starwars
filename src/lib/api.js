import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sw-api.starnavi.io/',
  });


  export const getHeroes = async ({ page }) => {
    try {
      const url = page === 1 ? 'people/' : `people/?page=${page}`;
        const { data } = await api.get(url, {
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

 export const getHeroesById = async (id) => {
    try {
      const {data} = await api.get(`people/${id}`);
      return data;
    } catch (error) {
      console.error("Error fetching hero datails:", error);
      throw error;
    }
  };


  export const getFilms = async () => {
    try {
      const {data} = await api.get(`films`);
      return data;
    } catch (error) {
      console.error("Error fetching hero datails:", error);
      throw error;
    }
  };



export const getShips = async () => {
  try {
    const results = [];
  
    for (let page = 1; page <=4; page++) {    
      const res = await axios.get(`https://sw-api.starnavi.io/starships/?page=${page}`);
      results.push(...res.data.results);
    }

    return results;
  } catch (error) {
    console.error("Error fetching ships:", error);
    throw error;
  }
};


