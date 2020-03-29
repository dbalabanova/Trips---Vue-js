import axios from "axios";

export const tripsService = {
    data(){
        return {
            trips:null
        }
    },
  created() {
    axios.get("https://trips-d41d1.firebaseio.com/trips.json")
    .then(data => {
      this.trips = data.data;
    });
  }
};
