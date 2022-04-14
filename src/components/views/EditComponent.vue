<template>
  <div class="col-md-8 offset-md-2 form mt-2 p-4">
      <div class="alert alert-danger" v-if="errors.length">
          <ul class="mb-0">
              <li v-for="(error, index) in errors" :key="index">
                  {{error}}
                  <br>
              </li>
          </ul>
      </div>
  
    <form @submit.prevent="updateContact">
      <h1 class="text-bold">Edit Contact</h1>
      <hr />
      <div class="form-group">
        <label class="form-label float-start m-2">Name</label>
        <input type="text" class="form-control p-2" v-model="contact.name" />
      </div>
      <div class="form-group">
        <label  class="form-label float-start m-2">Email</label>
        <input type="text" class="form-control p-2" v-model="contact.email" />
      </div>
      <div class="form-group">
        <label  class="form-label float-start m-2" >Designation</label>
        <input type="text" class="form-control p-2" v-model="contact.designation" />
      </div>
      <div class="form-group">
        <label  class="form-label float-start m-2" >Contact Number</label>
        <input type="text" class="form-control p-2" v-model="contact.contact_no" />
      </div>
      <br />

      <div class="form-group">
        <button  class="btn btn-success float-end mt-2">Update Contact</button>
      </div>
      <br />
      <br />
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            contact: {},
            name: '',
            email: '',
            designation: '',
            contact_no: '',
            errors: []

        }
    },
    created() {
        this.getContactById()
    },
    methods: {
       async getContactById() {
           let url = `http://127.0.0.1:8000/api/getcontact/${this.$route.params.id}`;
           await axios.get(url).then(response => {
               this.contact = response.data
               console.log(this.contact)
           });

       },
       async updateContact() {
            this.errors = [];
            if(!this.contact.name){
                this.errors.push('Name is required')
            }
             if(!this.contact.email){
                this.errors.push('Email is required')
            }
             if(!this.contact.designation){
                this.errors.push('Designation is required')
            }
             if(!this.contact.contact_no){
                this.errors.push('Contact Number is required')
            }
            
           if(!this.errors.length){
               let formData = new FormData();
               formData.append('name', this.contact.name);
               formData.append('email', this.contact.email);
               formData.append('designation', this.contact.designation);
               formData.append('contact_no', this.contact.contact_no);
               let url = `http://127.0.0.1:8000/api/updatecontact/${this.$route.params.id}`;
               await axios.post(url, formData).then(response=>{
                   console.log(response)
                   if(response.status == 200){
                       alert(response.data.message)
                   }
               });  
           }
        }

    },
    mounted(){
        console.log('update contact component mounted')
    }
}
</script>

<style>
.form {
    border-top: 12px solid rgb(14, 168, 219);
    background-color: #ffffff;
}
</style>
