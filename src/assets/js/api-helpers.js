const fetchData = async (baseUrl, query) => {
  try {
    let response = await fetch(baseUrl + query);
    if (response.ok) {
      let data = await response.json();
      // console.log(data);
      return data;
    } else {
      console.log("an error happened with the request :(");
    }
  } catch (error) {
    console.log(error);
  }
};

const search = async (q) => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${q}`
    );
    if (response.ok) {
      let data = await response.json();
      // console.log(data);
      return data;
    } else {
      console.log("an error happened with the request :(");
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchApi = { fetchData, search };

export default fetchApi;
