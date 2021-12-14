<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header class="bg-transparent">
      <q-toolbar class="q-py-lg q-px-lg">
        <q-btn
          v-if="$q.screen.lt.sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="grey-10"
          @click="toggleLeftDrawer"
        />
        <div class="col row">
          <q-input
            v-if="$q.screen.gt.xs"
            v-model="search"
            dense
            borderless
            color="grey-10"
            bg-color="grey-2"
            class="rounded-borders"
            input-class=""
            style="width: 50vw; overflow: hidden"
          >
            <template v-slot:prepend>
              <q-icon class="q-pl-sm" name="las la-search"></q-icon>
            </template>
          </q-input>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above dark class="bg-grey-10">
      <div class="column fit">
        <div
          class="col-auto layout-logo text-center q-pa-md relative-position"
          v-ripple
          @click="$router.push('/app')"
        >
          CAMPAIGN MANAGER
        </div>
        <div class="col flex flex-center">
          <q-list class="full-width text-grey-6">
            <q-item class="q-px-sm">
              <q-input
                dark
                borderless
                dense
                v-model="campaignNameInternal"
                class="
                  full-width
                  text-grey-9
                  campaign-name-input
                  rounded-borders
                  q-px-xs
                "
                input-class=""
              >
                <template v-slot:append>
                  <q-btn
                    flat
                    dense
                    color="white"
                    icon="las la-ellipsis-v"
                  ></q-btn>
                </template>
              </q-input>
            </q-item>
            <q-item
              v-for="menuItem in menuItems"
              :key="menuItem.name"
              :to="menuItem.to"
              active-class="text-white active-menu-item"
              clickable
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon"></q-icon>
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-auto">
          <q-list class="full-width text-grey-6">
            <q-item
              v-for="footerMenuItem in footerMenuItems"
              :key="footerMenuItem.name"
              clickable
              @click="footerMenuItem.onClick"
            >
              <q-item-section side>
                <q-icon :name="footerMenuItem.icon"></q-icon>
              </q-item-section>
              <q-item-section>
                {{ footerMenuItem.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="fadeIn animated"
          leave-active-class="fadeOut animated"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { defineComponent, reactive, ref } from "vue";
import { useI18n } from "vue-i18n/index";

const auth = getAuth();

export default defineComponent({
  name: "MainLayout",

  setup() {
    const { t } = useI18n();
    const leftDrawerOpen = ref(false);
    const menuItems = reactive([
      {
        name: "story",
        label: t("story"),
        icon: "las la-book",
        to: "/app/story",
      },
      {
        name: "cosmology",
        label: t("cosmology"),
        icon: "las la-moon",
        to: "/app/cosmology",
      },
      {
        name: "world",
        label: t("world"),
        icon: "las la-globe",
        to: "/app/world",
      },
      {
        name: "characters",
        label: t("characters"),
        icon: "las la-user",
        to: "/app/characters",
      },
      {
        name: "items",
        label: t("items"),
        icon: "las la-ring",
        to: "/app/items",
      },
      {
        name: "encounters",
        label: t("encounters"),
        icon: "las la-dragon",
        to: "/app/encounters",
      },
      {
        name: "spells",
        label: t("spells"),
        icon: "las la-scroll",
        to: "/app/spells",
      },
      {
        name: "miscellaneous",
        label: t("miscellaneous"),
        icon: "las la-tags",
        to: "/app/miscellaneous",
      },
    ]);
    const footerMenuItems = reactive([
      {
        name: "settings",
        label: t("settings"),
        icon: "las la-cog",
      },
      {
        name: "signout",
        label: t("signout"),
        icon: "las la-sign-out-alt",
        onClick: () => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            });
        },
      },
    ]);

    const campaignNameInternal = ref(t("defaultCampaignName"));
    const search = ref("");

    return {
      campaignNameInternal,
      footerMenuItems,
      leftDrawerOpen,
      menuItems,
      search,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
