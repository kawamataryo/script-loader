<template>
  <div class="grid grid-cols-5 gap-2">
    <button
      v-for="(s, index) in defaultScripts"
      :key="index"
      class="bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow text-xs"
      @click="emitScript(s.name, s.url)"
    >
      {{ s.name }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { DEFAULT_SCRIPTS } from "../assets/const";

export default defineComponent({
  emits: ["load"],
  setup(_, context) {
    const defaultScripts = computed(() => DEFAULT_SCRIPTS);
    const emitScript = (name: string, url: string) =>
      context.emit("load", name, url);

    return {
      defaultScripts,
      emitScript,
    };
  },
});
</script>

<style scoped></style>
