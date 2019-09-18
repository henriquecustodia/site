<template>
  <div>
    <div class="banner d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-white">Henrique Custódia</h1>
      <h3 class="text-white">Fullstack Developer</h3>
    </div>

    <div class="content pt-3">
      <div class="d-flex justify-content-center mb-5 container">
        <picture class="perfil-image">
          <img class="img-fluid" :src="$withBase('/me.jpg')" alt="Me" />
        </picture>
      </div>

      <section class="d-flex justify-content-center container">
        <div class="about-me">
          <p>Oi! Seja bem vindo(a) ao meu website :)</p>

          <p>Sou desenvolvedor a mais de 5 anos. Atualmente estou trabalhando com desenvolvimento web com foco em Frontend.</p>

          <p>Tenho experiência de alguns anos com Angular e Vue no Frontend. No desenvolvimento Backend tenho experiência com NodeJS.</p>

          <p>Nesse website vou mostrar todas minhas habilidades e também posts sobre minhas experiências do dia a dia.</p>
        </div>
      </section>

      <section class="skills d-flex justify-content-center py-3">
        <div class="skills-content d-flex flex-column align-items-center">
          <h1>Habilidades</h1>

          <Skill class="my-1" name="JavaScript" skill="8" />
          <Skill class="my-1" name="Angular" skill="8" />
          <Skill class="my-1" name="Vue" skill="8" />
          <Skill class="my-1" name="React" skill="4" />
          <Skill class="my-1" name="Nuxt.js" skill="7" />
          <Skill class="my-1" name="Node.js" skill="7" />
          <Skill class="my-1" name="Koa" skill="6" />
          <Skill class="my-1" name="Sequelize" skill="5" />
          <Skill class="my-1" name="CSS" skill="7" />
          <Skill class="my-1" name="SASS" skill="7" />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  text-align: center;
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

.skills {
  background: #000;
  color: #fff;
  padding: 0 10px;
}

.skills-content {
  width: 100%;
  max-width: 500px;
}
</style>