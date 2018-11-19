<template>
  <q-page class="flex">
    <h1 class="pageName">ГДЗ и решебники c 1 по 11 класс</h1>
    <search></search>
    <div class="adsFix shadow-2"></div>
    <book></book>
    <book></book>
    <book></book>
    <book></book>
    <book></book>
  </q-page>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .adsFix {
    height: 280px;
    width: 280px;
    background-color: #ccc;
    z-index: 10;
    position: fixed;
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);
  }
  .pageName {
    font-size: 33px;
    text-align: center;
    min-width: max-content;
    padding-left: 100%;
    transform: translate(-50%, 0);
    z-index: 20;
    color: #494949;
    padding-bottom: 40px;
    max-width: 100%;
    padding-top: 40px;
  }
  body {
        background-color: #f8f8f8;
  }
  @media (max-width: 1000px) {
    .adsFix {
      display: none;
    }
    .pageName {
      font-size: 28px;
    }
  }
  @media (max-width: 400px) and (min-width: 0px) {
    .pageName {
      font-size: 22px;
    }
  }
</style>

<script>
import book from '../components/book'
import search from '../components/search'
export default {
  components: {
    book,
    search
  },
  data () {
    return {
      books: [
        {
          subject: 'Алгебра',
          class: 8,
          year: 1990,
          authors: 'Хмельникова А.М Заряпин А.И',
          edition: 'Просвящение'
        }
      ]
    }
  },
  watch: {
    search: function () {
      console.log(this.$refs.test)
    }
  },
  name: 'PageIndex'
}
</script>
