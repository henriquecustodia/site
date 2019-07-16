<template>
  <div>
    <nav class="header navbar navbar-dark bg-dark">
      <div class="d-flex flex-column flex-sm-row align-items-center container">
        <router-link class="text-white" to="/">
          <h3>Henrique Custódia</h3>
        </router-link>

        <div class="ml-sm-auto">
          <router-link class="text-white btn btn-outline-secondary" to="/">Blog</router-link>
          <router-link class="text-white btn btn-outline-secondary" to="/sobre-mim">Sobre mim</router-link>
        </div>
      </div>
    </nav>

    <template v-if="!showContent">
      <div class="container py-3">
        <template v-if="lastPost">
          <router-link class="text-dark" :to="lastPost.path">
            <div class="card m-2">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="$withBase(lastPost.frontmatter.image)" class="card-img" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ lastPost.title }}</h5>
                    <p class="card-text">{{ lastPost.frontmatter.description }}</p>

                    <p class="card-text">
                      <small class="text-muted">{{ lastPost.frontmatter.date | formatDate }}</small>
                    </p>

                    <div class="d-flex">
                      <template v-for="(tag) in lastPost.frontmatter.tags">
                        <span class="badge badge-dark">{{ tag }}</span>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </template>

        <div class="d-flex flex-wrap mt-3">
          <template v-for="(item, index) in pastPosts">
            <router-link class="text-dark" :to="item.path">
              <div class="card card-width mt-3 m-sm-2">
                <img :src="$withBase(item.frontmatter.image)" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.frontmatter.description }}</p>
                  <p class="card-text">
                    <small class="text-muted">{{ item.frontmatter.date | formatDate }}</small>
                  </p>

                  <div class="d-flex">
                    <template v-for="(tag) in item.frontmatter.tags">
                      <span class="badge badge-dark">{{ tag }}</span>
                    </template>
                  </div>
                </div>
              </div>
            </router-link>
          </template>
        </div>

        <Social />
      </div>
    </template>

    <template v-else-if="isAbout">
      <div class="container post-container py-3">
        <Content class="post-content" />
        <Social />
      </div>
    </template>

    <template v-else>
      <div class="container post-container py-3">
        <img class="my-3 w-100" :src="$withBase($page.frontmatter.image)" alt="cover" />
        <Content class="post-content" />
        <Social />
      </div>
    </template>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";

#app,
body,
html {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
code[class*="language-"],
pre[class*="language-"] {
  color: #ccc;
  background: 0 0;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #2d2d2d;
}
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}
.token.block-comment,
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #999;
}
.token.punctuation {
  color: #ccc;
}
.token.attr-name,
.token.deleted,
.token.namespace,
.token.tag {
  color: #e2777a;
}
.token.function-name {
  color: #6196cc;
}
.token.boolean,
.token.function,
.token.number {
  color: #f08d49;
}
.token.class-name,
.token.constant,
.token.property,
.token.symbol {
  color: #f8c555;
}
.token.atrule,
.token.builtin,
.token.important,
.token.keyword,
.token.selector {
  color: #cc99cd;
}
.token.attr-value,
.token.char,
.token.regex,
.token.string,
.token.variable {
  color: #7ec699;
}
.token.entity,
.token.operator,
.token.url {
  color: #67cdcc;
}
.token.bold,
.token.important {
  font-weight: 700;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
.token.inserted {
  color: green;
}
</style>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.badge + .badge {
  margin-left: 5px;
}

.header {
  height: 100px;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  padding: 0 25px;
}

.card-width {
  max-width: 350px;
  width: 100%;
}

a:hover {
  text-decoration: none;
}

.post-container {
  max-width: 740px;

  .post-content {
    /deep/ p {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .card-width {
    max-width: 300px;
  }
}

@media screen and (max-width: 768px) {
  .card-width {
    max-width: none;
  }
}
</style>

<script>
import format from "date-fns/format";
import pt from "date-fns/locale/pt";

function formatDate(value) {
  return format(new Date(value), "DD [de] MMMM [de] YYYY", { locale: pt });
}

const Social = {
  render(h) {
    return h("div", { class: "d-flex mt-4 justify-content-center" }, [
      h(
        "a",
        {
          attrs: { href: "https://twitter.com/henricustodia", target: "_blank" }
        },
        [h("i", { class: "fab fa-2x fa-twitter" })]
      )
    ]);
  }
};

export default {
  components: { Social },
  filters: {
    formatDate
  },

  computed: {
    showContent() {
      return this.$page.path !== "/";
    },

    lastPost() {
      return this.posts[0];
    },

    pastPosts() {
      return this.posts.slice(1);
    },

    isAbout() {
      return this.$page.path.startsWith("/sobre-mim");
    },

    posts() {
      return this.$site.pages
        .filter(item => item.path.startsWith("/posts"))
        .sort((a, b) => {
          const da = new Date(a.frontmatter.date);
          const db = new Date(b.frontmatter.date);

          return da > db ? -1 : 1;
        });
    }
  },
  methods: {}
};
</script>
