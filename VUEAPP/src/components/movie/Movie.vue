<template>
  <div class="container">
      <ul class="list">
          <li class="movieList" v-for="movie in movieList" :key="movie.id">
              <div class="image">
                  <img :src="movie.img" alt="">
              </div>
              <div class="introduction">
                  <ul>
                      <li>{{movie.nm}}</li>
                      <li>{{movie.ver}}</li>
                      <li>{{movie.star}}</li>
                      <li>{{movie.showInfo}}</li>
                  </ul>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
      return {
          movieList:[]
      }
  },
  methods: {
      getData(){
          axios.get(API_PROXY + `http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10`)
          .then(res => {
            let list = res.data.data.movies;
            this.movieList = this.movieList.concat(list);
            console.log(this.movieList);
            })
          .catch(res => {
                alert('数据获取失败!')
            });
      }
  },
  created () {
      this.getData();
  }
}
</script>

<style scoped>
.container{
    margin-top:1rem;
}
.movieList{
    display:flex;
}
.image{
    flex-grow: 1;
    width:0;
}
.introduction{
    flex-grow: 1;
}
</style>

