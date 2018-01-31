<template>
  <div class="container">
      <ul class="list">
          <li @click="getDetail(movie.id)" class="movieList" v-for="movie in movieList" :key="movie.id">
              <div class="image">
                  <img :src="movie.img" alt="">
              </div>
              <div class="introduction">
                  <ul>
                      <li class="name">{{movie.nm}}</li>
                      <li>{{movie.ver}}</li>
                      <li>主演：{{movie.star}}</li>
                      <li>{{movie.showInfo}}</li>
                  </ul>
              </div>
          </li>
      </ul>
      <div class="load" v-show="isLoading">
          <img src="../../assets/img/loading.gif" alt="">
      </div>
      <div class="end" v-show="isEnd">
          <h2>已经到底了</h2>
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
          isLoading:true,
          isEnd:false
      }
  },
  methods: {
        getData(){
          axios.get(API_PROXY +  `http://m.maoyan.com/movie/list.json?type=hot&offset=${
                this.movieList.length
              }&limit=10`)
          .then(res => {
            let list = res.data.data.movies;
            if(list.length < 10){
                this.isEnd = true;
            }
            this.movieList = this.movieList.concat(list);
            this.isLoading = false;
            })
          .catch(res => {
                alert('数据获取失败!')
            });
        },
        getDetail(movieId) {
            this.$router.push(`/moviedetail/${movieId}`);
        }
  },
  created () {
      this.getData();
  },
  mounted() {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight == scrollHeight && !this.isEnd) {
            this.isLoading = true;
            setTimeout(() => {
            this.getData();
            }, 1000);
      }
    };
  }
}
</script>

<style scoped>
.container{
    margin-top:1rem;
    margin-bottom:2rem;
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
.name{
    font-weight:bolder
}
.load{
    text-align:center;
    position:fixed;
    bottom:1rem;
    width:100%;
}
.end{
    text-align:center;
}
</style>

