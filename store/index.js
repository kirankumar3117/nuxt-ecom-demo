import { defineStore } from "pinia";


export const useMainStore = defineStore('mainstore',{
    state:()=>({
        token:null,
        userExists:null
    }),
    actions:{
        async handleUserLogin(userId,password){

          
            const data = await useFetch(`/api/getusertoken`, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id:userId,
                    password:password
                }),
              });
            
              this.token=data.data._value;

                document.cookie= `token=${this.token}`
        },
        async checkForUser(cookieValue){
            if(!cookieValue){
                this.userExists=false;
            }
            const data = await useFetch('/api/userverify',{
                method:'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    token:cookieValue
                })
            })
            if(data.data.value==='Protected route'){
                this.userExists=true;
            }
            else{
                this.userExists=false
            }
            

            
        }

        
    },
    getters:{
        
    }
})