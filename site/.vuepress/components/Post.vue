<template>
  <div class="d-flex justify-content-center">
    <div class="content">
      <PostInfo class="my-2" />

      <img class="mb-3 w-100" :src="$withBase($page.frontmatter.image || '')" alt="cover" />
      <slot />

      <PostInfo class="my-2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  max-width: 700px;
  padding: 10px;
}
</style>