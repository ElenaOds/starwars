import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sw-api.starnavi.io/',
  });


  export const getHeroes = async ({ page }) => {
    try {
        let url = 'people/';
        if (page > 1) {
            url += `?page=${page}`;
        }
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
      console.error("Error fetching heroes:", error);
      throw error;
    }
  };
