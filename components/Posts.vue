<template>
  <div class="mt-3">
    <h4 class="mb-3" style="text-align: center">User-Post:</h4>

    <ul class="list-group">
      <li
        class="list-group-item-action"
        v-for="(post, i) in posts"
        :key="i"
        style="text-align: center"
      >
        <p @click="postpage(post.postId)">{{ post.title }}</p>
      </li>
      <!-- <div v-for="(post , i) in posts" :key="i"> -->
      <!-- <p>{{post.title}}</p>
      </div> -->
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['posts']),
  },
  created() {
    this.$store.dispatch('getPosts')
  },
  methods: {
    postpage(id) {
      // this.$store.dispatch('getPost',id)
      this.$router.push('/postpage/' + id)
    },
  },
}
</script>

<style>
</style>