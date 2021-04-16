<template>
  <div id="app" class="bg-o_pink px-10 pt-10 font-urw_form_family">
    <Canvas class="">
      <template v-slot:header>
        <header class="p-5 border-b flex justify-center">
              <div class="ml-6 mt-6 mb-1 text-o_purple-100 font-semibold text-5xl uppercase">
                Knowledge Graph Testing Platform
              </div>
<!--          <Logo class="ml-6 mt-6 mb-1" />-->
<!--          <NavBar />-->
        </header>
      </template>
      <template v-slot:main>
        <main class="px-12 mt-3">
          <platform />
        </main>
      </template>
      <template v-slot:footer>
        <footer class="px-12">
<!--          <Footer/>-->
        </footer>
      </template>
    </Canvas>
  </div>
</template>

<script>
import Platform from './views/Platform'
import Canvas from '@/views/Canvas'
export default {
  components: { Platform, Canvas }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #fe917d;
}
.content_size {
  height: 60vh;
}
</style>
