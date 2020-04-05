import * as firebase from "firebase";

export const authService={
    data() {
        return {
            email:'',
            password:'',
            username:'',
            error:'',
            success:''
        }
    },
    methods:{
        registration(userData){
            firebase
            .auth()
            .createUserWithEmailAndPassword(userData.email, userData.password)
            .then(data => {
              data.user
                .updateProfile({
                  displayName: this.username
                })
                .then(() => {
                    this.success='Successful registration!'
                    this.$router.push( "/login");
                })
            }) .catch(err => {
                this.error = err.message;
                
             });
        },

        login(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
            //    let username=data.user.displayName
            //   console.log(data.user);
              this.$router.push({path: "/"} );
            })
            .catch(err => {
              this.error = err.message;
            });
        }
    }
}

