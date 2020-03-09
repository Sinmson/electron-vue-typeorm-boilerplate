import { Post } from "./entity/Post";
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createConnection } from "typeorm"
import "reflect-metadata";


console.log("You can also get posts from the second process:");
createConnection({
  type: "sqlite",
  synchronize: true,
 logging: true,
 database:"database.sqlite",
 entities: [
   Post
]}).then(async connection => {
    const posts = await connection.getRepository("Post").find();
    console.log("posts:", posts);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
