import { reactive } from "vue"
import axios from "axios"

export const store = reactive({

    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=0",
    cards: [],
    info: null,
    fetchCards(url) {
      axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.cards = response.data.data;
      })
      .catch(error => {
        console.log(error);
        console.error(error.message);
      })
    }
  }
)