<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="white"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          color="white"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <router-link to="/" class="title">GDZ RED</router-link>
          <h1 slot="subtitle" class="subtitle" >ГДЗ — Готовые Домашние Задания и решебники</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Навигация</q-list-header>
        <q-item @click.native="openURL('')">
          <q-item-main label="Главная" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="11 класс" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="10 класс" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="9 класс" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="8 класс"/>
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="7 класс"/>
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="6 класс" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="5 класс" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="4 класс" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="3 класс" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="2 класс" />
        </q-item>
        <q-item @click.native="openURL('')">
          <q-item-main label="1 класс" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
  @font-face {
    font-family: "Tesla";
    src: url("../assets/tesla.ttf") format("truetype"); /* все современные браузеры */
  }
  .title {
    color: #fff;
    /* padding-top: 20px; */
    font-size: 45px;
    font-weight: 500;
    word-spacing: -5px;
    text-decoration: none;
    font-family: "Tesla";
    margin: 0;
  }
  .subtitle {
    padding-top: 0px;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
  }
  .q-toolbar {
    background-color: #d64545 !important;
    background-image: none !important;
  }
</style>
