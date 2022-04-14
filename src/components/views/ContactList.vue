<template>
  <div class="container">
    <div class="col-md-10 offset-md-1 mt-4">
      <h2>Contact List</h2>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">designation</th>
            <th scope="col">contact Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody v-for="contact in contacts" :key="contact.id">
          <tr >
            <th scope="row">{{ contact.id}}</th>
            <td>{{contact.name}}</td>
            <td>{{contact.email}}</td>
            <td>{{contact.designation}}</td>
            <td>{{contact.contact_no}}</td>
            <td>
              <router-link :to="{ name:'EditContact', params:{id: contact.id} }" class="btn btn-info btn-sm m-1">Edit</router-link>
              <button @click.prevent="deleteContact(contact.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        
            
          
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      contacts: Array
    }
  },
  created(){
    this.getContacts()
  },
  methods: {
    async getContacts() {
      let url = 'http://127.0.0.1:8000/api/contacts';
      await axios.get(url).then(response => {
        this.contacts = response.data.contact
        console.log(this.contacts)
      }).then(error=> {
        console.log(error)
      });
    },

    async deleteContact(id) {
      let url = `http://127.0.0.1:8000/api/deletecontact/${id}`;
      await axios.delete(url).then(response => {
        if(response.data.code == 200){
          alert(response.data.message)
          this.getContacts();
        }
      });
    }
  }
};
</script>

<style></style>
