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
      <div>
          <img src="../../assets/img/loading.gif" alt="">
      </div>
      <div></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
      return {
          movieList:[],
          isLoading:false,
      }
  },
  methods: {
        getData(){
          axios.get(API_PROXY +  `http://m.maoyan.com/movie/list.json?type=hot&offset=${this.movieList.length}&limit=10`)
          .then(res => {
            let list = res.data.data.movies;
            this.movieList = this.movieList.concat(list);
            })
          .catch(res => {
                alert('数据获取失败!')
            });
        },
        getDetail(){

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
    padding:0 0.1rem;
    border-bottom: 0.03rem solid #ccc ;
}
.image{
    flex-grow: 1;
    width:0;
}
.introduction{
    flex-grow: 2;
    width:0;
    padding:0 0.1rem
}
</style>

