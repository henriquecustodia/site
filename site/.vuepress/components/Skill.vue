<template>
  <div class="d-flex flex-column w-100">
    <h3>{{ name }}</h3>
    <div class="progress">
      <div
        class="progress-bar"
        :class="color"
        role="progressbar"
        :style="{ width: `${width}%` }"
      >{{ skill }} / 10</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "skill"],

  computed: {
    width() {
      return this.skill / 10 * 100;
    },

    color() {
      if (this.skill > 7) {
        return "bg-success";
      }

      if (this.skill > 5) {
        return "bg-info";
      }

      return "bg-warning";
    }
  }
};
</script>