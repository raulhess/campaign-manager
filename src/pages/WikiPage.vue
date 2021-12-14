<template>
  <page-wrapper>
    <card> Teste </card>
  </page-wrapper>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const auth = getAuth();

export default defineComponent({
  setup() {
    const route = useRoute();

    // lifecycle hooks
    const router = useRouter();
    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/");
        }
      });
    });
    return {};
  },
});
</script>

<style>
</style>