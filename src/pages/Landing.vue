<template>
  <transition enter-active-class="animated fadeIn" appear>
    <div class="flex flex-center fullscreen">
      <div style="min-width: 240px">
        <div class="text-center">
          <q-icon name="las la-book-open" size="150px"></q-icon>
        </div>
        <div class="logo text-center">
          <div>CAMPAIGN</div>
          <div>MANAGER</div>
        </div>
        <q-tab-panels v-model="tab" animated style="height: 215px">
          <q-tab-panel name="signin" class="q-pa-xs">
            <q-form class="q-gutter-y-md q-pt-sm" @submit="signIn">
              <q-input
                v-model="email"
                dense
                color="grey-10"
                :label="$t('email')"
              ></q-input>
              <q-input
                v-model="password"
                type="password"
                dense
                color="grey-10"
                :label="$t('password')"
              ></q-input>
              <q-btn
                :label="$t('signin')"
                color="grey-10"
                class="full-width"
                unelevated
                type="submit"
              ></q-btn>
              <div class="text-center">
                <q-btn dense flat no-caps @click="tab = 'signup'">
                  {{ $t("createAccount") }}
                  <q-icon class="q-ml-xs" size="xs" name="las la-arrow-right">
                  </q-icon>
                </q-btn>
              </div>
            </q-form>
          </q-tab-panel>
          <q-tab-panel name="signup" class="q-pa-xs">
            <q-form class="q-gutter-y-md q-pt-sm" @submit="createUser">
              <q-input
                v-model="signupEmail"
                dense
                color="grey-10"
                :label="$t('email')"
              ></q-input>
              <q-input
                v-model="signupPassword"
                type="password"
                dense
                color="grey-10"
                :label="$t('password')"
              ></q-input>
              <q-btn
                :label="$t('signup')"
                color="grey-10"
                class="full-width"
                unelevated
                type="submit"
              ></q-btn>
              <div class="text-center">
                <q-btn dense flat no-caps @click="tab = 'signin'">
                  <q-icon class="q-mr-xs" size="xs" name="las la-arrow-left">
                  </q-icon>
                  {{ $t("goBack") }}
                </q-btn>
              </div>
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useQuasar } from "quasar";
import { defineComponent, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const auth = getAuth();

export default defineComponent({
  name: "Landing",

  setup() {
    const email = ref("");
    const password = ref("");
    const signupEmail = ref("");
    const signupPassword = ref("");
    const tab = ref("signin");

    const $q = useQuasar();

    // lifecycle hooks
    const router = useRouter();
    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push("/app");
        }
      });
    });

    // methods
    function createUser() {
      createUserWithEmailAndPassword(
        auth,
        signupEmail.value,
        signupPassword.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          $q.notify({ type: "negative", message: errorMessage });
          // ..
        });
    }

    function signIn() {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          $q.notify({ type: "negative", message: errorMessage });
        });
    }

    return {
      createUser,
      signIn,
      email,
      password,
      signupEmail,
      signupPassword,
      tab,
    };
  },
});
</script>

<style>
</style>