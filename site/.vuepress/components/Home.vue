<template>
  <div>
    <div class="banner d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-white">Henrique Custódia</h1>
      <h3 class="text-white">Fullstack Developer</h3>
    </div>

    <div class="content container py-3">
      <div class="d-flex justify-content-center mb-5">
        <picture class="perfil-image">
          <img class="img-fluid" src="/me.jpg" alt />
        </picture>
      </div>

      <section class="d-flex justify-content-center">
        <div class="about-me">
          <p>Desenvolvedor a mais de 6 anos, atualmente trabalho com desenvolvimento web com foco em Frontend.</p>

          <p>Já trabalhei com algumas das libraries/frameworks mais populares, como JQuery e AngularJS.</p>

          <p>Atualmente trabalho com Angular e Vue.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  min-height: 400px;
  background: #000;
}

.content {
  position: relative;
}

.perfil-image {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: -50px;
}

.about-me {
  width: 100%;
  max-width: 500px;
  text-align: center;
}
</style>