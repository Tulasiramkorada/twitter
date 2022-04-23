<template>
  <div>
    <nav class="navbar navbar-expand-md" style="background-color: black">
      <div class="container-fluid">
        <nuxt-link class="text-white bg-dark" to="/">twitter</nuxt-link>

        <h3 style="color: white; font-family: fantasy">Welcome to my World</h3>
        <div class="nav justify-content-end" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link
                class="text-white bg-dark"
                aria-current="page"
                to="/Register"
                >Sing-in</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>