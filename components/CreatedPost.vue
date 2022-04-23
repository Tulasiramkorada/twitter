<template>
  <div>
    <div class="row">
      <div class="class col-md-4"></div>
      <div class="class col-md-4">
        <div class="mt-5">
          <label for="exampleInputEmail1" class="form-label"
            ><b>Create Post:- </b> :</label
          ><br />
          <input
            type="text"
            v-model="post"
            placeholder="Enter your post"
            required
          /><br /><br />
          <button @click="addPost(post)" class="btn btn-outline-success">
            Submit
          </button>
        </div>
      </div>
      <div class="class col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: '',
    }
  },

  methods: {
    async addPost(post) {
      await this.$store.dispatch('addPost', post)
      await this.$store.dispatch('getPosts')
      this.$router.push('/')
    },
  },
}
</script>

<style>
</style>