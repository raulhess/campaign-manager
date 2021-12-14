<template>
  <page-wrapper>
    <div class="col-auto">
      <div class="header-1 q-mb-xs">{{ $t("welcome") }}</div>
      <card>
        <div>{{ $t("welcomeText") }}</div>
        <!-- <div class="q-mt-md"></div> -->
      </card>
    </div>
    <!-- <div class="col">
      <div class="header-2 q-mb-xs">{{ $t("recent") }}</div>
      <div class="row q-col-gutter-md">
        <div class="col-sm-4 col-12" v-for="n in 3" :key="`md-${n}`">
          <card>&nbsp;</card>
        </div>
      </div>
    </div> -->
  </page-wrapper>
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

    // computed style
    return {};
  },
});
</script>
