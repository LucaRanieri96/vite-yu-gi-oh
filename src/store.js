import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=48&offset=0",
  cards: [],
  info: null,
  storeLoad: false,
  filter: "",

  fetchCards(apiUrl) {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        this.cards = response.data.data;
      })
      .catch((error) => {
        console.log(error);
        console.error(error.message);
      });
  },
  filterArchetype(filter) {
    
    if (filter === "") {
      this.fetchCards(this.apiUrl);
    } else {
      axios.get(`${this.apiUrl}?archetype=${filter}`)
      .then(response => {
        this.cards = response.data.data;
      })
      .catch(error => {
        console.error(error.message);
      })
    }
  }
  
});
