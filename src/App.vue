<template>
  <div class="container px-3 py-3 mx-auto">
    <CTitle />
    <CForm v-model:url="inputUrl" @load="onLoad" />
    <CScriptButtons @load="loadScript" />
    <teleport to="#modal-target">
      <CModal
        v-show="isDisplayModal"
        :script-name="loadedScript.name"
        :url="loadedScript.url"
        @close="closeModal"
      />
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import CForm from "./components/CForm.vue";
import CScriptButtons from "./components/CScriptButtons.vue";
import CModal from "./components/CModal.vue";
import CTitle from "./components/CTitle.vue";

export default defineComponent({
  name: "App",
  components: {
    CForm,
    CScriptButtons,
    CModal,
    CTitle,
  },
  setup: function () {
    const inputUrl = ref("");
    const isDisplayModal = ref(false);
    const loadedScript = reactive({
      name: "",
      url: "",
    });

    const loadScript = (name: string, url: string) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0]!.id!, {
          name,
          url,
        });
      });
      console.log(name, url);
      loadedScript.name = name;
      loadedScript.url = url;
      showModal();
    };

    const onLoad = () => {
      loadScript(extractScriptName(inputUrl.value), inputUrl.value);
      clearInput();
    };

    const extractScriptName = (url: string) => {
      const scriptName = url.match(/[-_.\w]+$/);
      return scriptName ? scriptName[0] : "script";
    };

    const clearInput = () => {
      inputUrl.value = "";
    };

    const showModal = () => {
      isDisplayModal.value = true;
    };

    const closeModal = () => {
      isDisplayModal.value = false;
    };

    return {
      isDisplayModal,
      inputUrl,
      loadedScript,
      closeModal,
      onLoad,
      loadScript,
    };
  },
});
</script>
