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
                    setTimeout(()=>{
                        this.$router.push({path: "/login"} ) 
                    },1000)
                    // this.$router.push( "/login");
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
            this.success='Successful login!'
            setTimeout(()=>{
                this.$router.push({path: "/"} ) 
            },1000)
            })
            .catch(err => {
              this.error = err.message;
            });
        },

        logout(){
            firebase.auth().signOut().then(()=>{
                if(this.$router.currentRoute.path!=='/'){
                   this.$router.push('/')
                } else {
                  this.$router.push('/').catch(()=>{})
                }
              })
              .catch(()=>{})
        },

        userInfo(){
            if(firebase.auth().currentUser!==null){
                this.email= firebase.auth().currentUser.email
                this.displayName= firebase.auth().currentUser.displayName
            }
        }
    }
}

