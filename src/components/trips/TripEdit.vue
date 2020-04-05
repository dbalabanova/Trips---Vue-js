  <template>
  <div id="createForm">
    <v-app class="nobackground">
      <v-form @submit.prevent="onSubmit">
        <v-container v-if="trip">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field 
              @blur="$v.name.$touch()" 
              v-model="name" 
              label="Destination name"
              counter
              ></v-text-field>
              <template v-if="$v.name.$error">
                <v-alert 
                v-if="!$v.name.required" 
                dense 
                outlined 
                type="error"
                >This field is required</v-alert>
                <v-alert 
                v-if="!$v.name.maxLength" 
                dense 
                outlined 
                type="error"
                >Name must be less than 50 symbols</v-alert>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field 
              @blur="$v.imagePath.$touch()" 
              v-model="imagePath" 
              label="Image path"
              auto-grow
              ></v-text-field>
              <template v-if="$v.imagePath.$error">
                <v-alert 
                v-if="!$v.imagePath.required" 
                dense 
                outlined 
                type="error"
                >This field is required</v-alert>
              </template>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12">
              <v-textarea
                @blur="$v.description.$touch()" 
                v-model="description"
                auto-grow
                label="Description"
                counter
              ></v-textarea>
              <template v-if="$v.description.$error">
                <v-alert 
                v-if="!$v.description.required" 
                dense 
                outlined 
                type="error"
                >This field is required</v-alert>
                <v-alert 
                v-if="!$v.description.minLength" 
                dense 
                outlined 
                type="error"
                >Description must be at least 10 symbols</v-alert>                
              </template>
            </v-col>
          </v-row>
        </v-container>
        <v-row align="center">
          <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
              <v-btn :disabled="$v.$invalid" type="submit" color="teal">Edit</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import { required, minLength, maxLength} from "vuelidate/lib/validators";
import  {tripsService}  from "../../Services/tripsServices";
// import { firestore } from '../../config';

export default {
  name: "AppTripEdit",
  mixins: [tripsService],
  data() {
    return {
      // key:this.$route.params.id,
      trip:{},
      name: "",
      imagePath: "",
      description: ""
    };
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(50)
    },
    imagePath: {
      required
    },
    description: {
      required,
      minLength: minLength(10)
    }
  },
created(){
this.getTripToEdit()
},
methods:{
  onSubmit(){
    const data = {
        name:this.name,
        description:this.description,
        imagePath:this.imagePath
      }
  this.editTrip(data)
  }
}
};
</script>

<style scoped>
.nobackground {
  background: none;
}
#createForm {
  background-image: url("https://i.picsum.photos/id/300/4272/2848.jpg");
  background-size: cover;
  height: 100vh;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>