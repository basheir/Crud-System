import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/views/home-page'
import About from '../components/views/about-page'
import Contact from '../components/views/ContactList'
import AddContact from '../components/views/AddContact'
import EditContact from '../components/views/EditComponent'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contacts',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/add_contact',
        name: 'AddContact',
        component: AddContact
    },
    {
        path: '/contact/edit/:id?',
        name: 'EditContact',
        component: EditContact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;  