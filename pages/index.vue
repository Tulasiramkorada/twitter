<template>
  <div>
    <div v-if="token == null">
      <MainHeader />
      <UserLogin />
    </div>
    <div v-else>
      <UserHome />
      <Posts />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',

  computed: {
    ...mapState(['token']),
  },
}
</script>
