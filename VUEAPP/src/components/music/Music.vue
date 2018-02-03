<template>
      <div class="container">
        <ul>
            <li class="music" v-for="item in musicAlbums" :key="item.id">
                <router-link :to="'/musicAlbums/'+ item.id">
                    <img :src="item.bg" alt="">
                </router-link>
            </li>
        </ul>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            musicAlbums:[]
        }
    },
    created () {
        axios.get('/static/data/musiclist.json')
        .then(res => {
            this.musicAlbums = res.data.albums;
        })
    }
}
</script>

<style scoped>
.container{
    position:absolute;
    top:1rem;
    font-size:1.5rem;
}
.music{
    width:50%;
    float:left;
}
.music img{
    width:100%;
}
</style>