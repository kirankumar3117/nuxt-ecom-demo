import { defineStore } from "pinia";

export const useMainStore = defineStore('mainstore',{
    state:()=>({
        token:null,
        userExists:null,
        showLoginComponent:false,
        search:'',
        data:[]
    }),
    actions:{
        async handleUserLogin(userId,password){

            try{

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
                
                  this.token=data.data.value;
                  
                    document.cookie= `token=${this.token}`;
                  this.checkForUser(this.token);
                  this.showLoginComponent=false;

            }catch(err){
                this.reset();
            }

               
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
            

            
        },
        reset(){
            this.token=null;
            this.userExists=null
        },

        
        

        
    },
   
    getters:{
       filterData(){
            if(this.search === ''){
                return this.data
            }

            const data= this.data.filter((e)=>{
                return e.title.includes(this.search) ? e : ''
            });
            if(!data.length){
                return this.data
            }
            return data
       }
    }
})