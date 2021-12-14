<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const auth = getAuth();

export default defineComponent({
  name: "App",

  setup() {
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
