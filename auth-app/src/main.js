// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
const config = {
    apiKey: "AIzaSyC4_80JQAPFd6d3aZXmiRKCDrJx_nHAvJk",
    authDomain: "vue-golang-auth-31a97.firebaseapp.com",
    databaseURL: "https://vue-golang-auth-31a97.firebaseio.com",
    projectId: "vue-golang-auth-31a97",
    storageBucket: "vue-golang-auth-31a97.appspot.com",
    messagingSenderId: "718793532750"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(user => {
    /* eslint-disable no-new */
    if (!app) {
        new Vue({
            el: '#app',
            router,
            components: { App },
            template: '<App/>'
        })
    }
})
