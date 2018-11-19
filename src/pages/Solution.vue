<template>
  <q-page class="flex">
    <h1 class="solName">Номер 8125 — ГДЗ по Алгебре за 8 класс Сушкова | Чуркин</h1>
    <div class="links">
      <router-link  class="linkItem" to="/">Главная</router-link>
      <span class="linkItem">></span>
      <router-link  class="linkItem" to="/">ГДЗ 8 класс</router-link>
      <span class="linkItem">></span>
      <router-link  class="linkItem" to="/">ГДЗ по Алгебре 8 класс</router-link>
      <span class="linkItem">></span>
      <router-link class="linkItem" to="numbers">ГДЗ по Алгебре за 8 класс Сушкова | Чуркин</router-link>
    </div>
    <div class="solution">
        <img src="https://gdzplus.ru/img/8-klass-makarychev/667.png" alt="Решение">
    </div>
    <div class="nav">
      <q-btn class="navBtn" to="solution">Назад</q-btn>
      <q-btn class="navBtn" to="solution">Вперед</q-btn>
    </div>
  </q-page>
</template>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .flex {
    background-color: #ffffff;
  }
  .solName {
    font-family: Roboto;
    font-size: 33px;
    min-width: max-content;
    margin-left: 50%;
    color: #494949;
    padding-top: 40px;
    padding-bottom: 20px;
    /* font-family: HeleveticaNueCyr; */
    text-align: center;
    /* font-weight: 200; */
    -webkit-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
  }
  .solution {
    /* font-size: 1.5em; */
    width: 100%;
    /* height: 500px; */
    height:max-content;

  }
  .solution > img {
    width: 100%;
    height: auto;
  }
  .nav {
    width: max-content;
    margin-left: 50%;
    padding: 10px 0px;
    transform: translate(-50%, 0);
    display: flex;
  }
  .navBtn:last-child {
    margin-left: 2px;
  }
  .navBtn {
    padding: 13px 23px;
    border-radius: 1.2px;
    color: #fff;
    background-color: #d64545;
  }
  .links {
    padding: 10px 3%;
    /* min-width: max-content; */
    width: fit-content;
    max-width: 94%;
  }
  .linkItem {
    width: max-content;
    color: #222;
    display: block;
    float: left;
    padding: 0px 5px;
  }
  @media (max-width: 1000px) {
    .solName {
      font-size: 4.5vw;
      min-width: 85%;
      /* width: 85%; */
    }
  }
  @media (min-width: 1000px) and (max-width: 1150px) {
    .solName {
      font-size: 30px;
    }
    .img {
      width: 21% !important;
    }
  }
  @media (min-width: 700px) and (max-width: 900px) {
    .solName {
      font-size: 28px;
    }
  }
  @media (max-width: 749px) and (min-width: 450px) {
    .solName {
      font-size: 24px;
      min-width: 80%;
    }
  }
  @media screen and (max-width: 767px) {
    h5 {
        font-size: 22px;
    }
    .solName {
      font-size: 22px !important;
    }
    .linkItem {
      font-size: 15px;
    }
    .navBtn {
      font-size: 12px;
    }
  }
  @media (max-width: 449px) and (min-width: 50px) {
    .solName {
      font-size: 21px;
      min-width: 90%;
    }
  }
</style>
<script>
export default {
  data () {
    return {

    }
  },
  name: 'Solution'
}
</script>
