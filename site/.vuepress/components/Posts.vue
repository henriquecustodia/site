<template>
  <div class="container d-flex flex-column align-items-center py-3">
    <template v-for="(item, key) in posts">
      <router-link :key="key" class="text-dark" :to="item.path">
        <div class="card my-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                :src="$withBase(item.frontmatter.image || '')"
                class="card-img-top"
                :alt="item.title"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.frontmatter.description }}</p>
                <p class="card-text">
                  <small class="text-muted">{{ item.frontmatter.date | formatDate }}</small>
                </p>

                <div class="d-flex">
                  <template v-for="(tag) in item.frontmatter.tags">
                    <div class="mx-1 badge badge-dark">{{ tag }}</div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import format from "date-fns/format";
import pt from "date-fns/locale/pt";

function formatDate(value) {
  return format(new Date(value), "DD [de] MMMM [de] YYYY", { locale: pt });
}

export default {
  filters: {
    formatDate
  },

  computed: {
    posts() {
      return this.$site.pages
        .filter(item => item.path.startsWith("/blog/2"))
        .sort((a, b) => {
          const da = new Date(a.frontmatter.date);
          const db = new Date(b.frontmatter.date);

          return da > db ? -1 : 1;
        });
    }
  }
};
</script>
