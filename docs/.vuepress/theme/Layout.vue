<template>
  <div>
    <div class="header">
      <a class="link" href="/">Blog</a>
      <a class="link" href="/sobre-mim">Sobre mim</a>
    </div>

    <div class="container">
      <div class="content">
        <template v-if="!showContent">
          <template v-for="(item, index) in posts">
            <a :href="item.path">
              <div class="post-item">
                <span class="post-item-title">{{ item.title }}</span>
              </div>
            </a>
          </template>
        </template>

        <template v-if="showContent">
          <Content/>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
</style>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.header {
  height: 100px;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  padding: 0 25px;

  .link {
    color: #fff;
    margin-left: auto;
  }
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;

  .content {
    width: 100%;
    max-width: 900px;

    .post-item {
      height: 50px;
      color: #000;
      border-bottom: 1px solid #000;
      display: flex;
      align-items: center;
      padding: 10px;
      
      .post-item-title {
          font-size: 25px;
      }

      &:hover {
        background: #000;
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    }
  }
}
</style>

<script>
const IS_POST = /\/blog\//g;

export default {
  computed: {
    showContent() {
      return this.$page.path !== "/";
    },

    posts() {
      return this.$site.pages.filter(item => IS_POST.test(item.path));
    }
  }
};
</script>
