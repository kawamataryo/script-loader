<template>
  <div class="grid grid-cols-5 gap-2 mb-4">
    <div class="col-span-4">
      <input
        id="url"
        class="col shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="script url"
        :value="url"
        @input="emitUrl"
      />
    </div>
    <div class="col-span-1">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 h-full w-full border border-blue-400 rounded shadow text-xs font-black"
        @click="emitLoad"
      >
        LOAD
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  emits: ["update:url", "load"],
  setup(_, context) {
    const emitUrl = (e) => context.emit("update:url", e.target.value);
    const emitLoad = () => context.emit("load");
    return {
      emitUrl,
      emitLoad,
    };
  },
});
</script>

<style scoped></style>
