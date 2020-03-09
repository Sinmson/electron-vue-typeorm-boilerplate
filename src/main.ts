import { Post } from "./entity/Post";
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createConnection } from "typeorm"
import "reflect-metadata";
import * as sqlite3 from "sqlite3";
import { Author } from "./entity/Author";

createConnection({
  type: "sqlite",
  synchronize: true,
  logging: true,
  database:"database.sqlite",
  logger: "simple-console",
  entities: [
    Post,
    Author
]}).then(async connection => {
    const postRepository = await connection.getRepository<Post>("Post");
    const authorRepository = await connection.getRepository<Author>("Author");

    const authors = await authorRepository.find({
      where: {
        name: "Tim"
      }
    });
    console.log("authors", authors);
    for (const author of authors) {
      console.log("authors posts", author.name, await author.posts);
    }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
