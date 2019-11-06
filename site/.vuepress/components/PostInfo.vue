<template>
  <div class="d-flex align-items-center">
    <span class="text-muted">{{ $page.frontmatter.date | $formatDate }}</span>

    <div class="ml-auto">
      <div ref="goodshare"></div>
    </div>
  </div>
</template>

<script>
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import Vue from "vue";

export default {
  mounted() {
    const Component = Vue.extend(VueGoodshareTwitter);
    new Component({
      propsData: {
        page_title: `"${this.$page.title}" escrito por @custodiadev`,
        has_icon: true
      }
    }).$mount(this.$refs.goodshare);
  }
};
</script>
