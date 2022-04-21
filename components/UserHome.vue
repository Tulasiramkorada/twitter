<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg" style="background-color: black">
        <div class="container-fluid">
          <nuxt-link class="text-white bg-dark" to="/">twitter</nuxt-link>
          <h3 style="color: white; font-family: fantasy">Your Post Comments</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <nuxt-link
                  class="text-white bg-dark"
                  aria-current="page"
                  to="/Post"
                  >Post</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="text-white bg-dark"
                  aria-current="page"
                  to="/Profile"
                  >Profile</nuxt-link
                >
              </li>
              <li class="nav-item">
                <a class="text-white bg-dark" aria-current="page" href="/"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>