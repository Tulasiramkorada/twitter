<template>
  <div>
    <nav class="navbar navbar-expand-lg" style="background-color: black">
      <div class="container-fluid">
        <nuxt-link class="text-white bg-dark" to="/">twitter</nuxt-link>
        <button
          class="btn btn-outline-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nav justify-content-end" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link class="text-white bg-dark" aria-current="page" to="/"
                >Login</nuxt-link
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