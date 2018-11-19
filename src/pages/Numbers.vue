<template>
  <q-page class="flex">
    <h1 class="bookName">ГДЗ по Алгебре за 8 класс — Сушкова | Чуркин </h1>
    <book></book>
    <search></search>
    <div class="row justify-center">
      <div class="col-xl-8 col-lg-10 col-md-8 col-sm-10 col-xs-10 numbers">
        <div class="number shadow-3">
          <router-link to="solution" class="num">1</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">2</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">3</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">4</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">5</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">6</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">7</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">8</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">9</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">10</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">11</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">12</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">13</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">14</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">15</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">16</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">17</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">18</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">19</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">20</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">21</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">22</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">23</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">24</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">25</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">26</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">27</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">28</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">29</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">30</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">31</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">32</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">33</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">34</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">35</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">36</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">37</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">38</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">39</router-link>
        </div>
        <div class="number shadow-3">
          <router-link to="solution" class="num">40</router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .flex {
    background-color: #f7f7f7;
  }
  .row {
    width: 100%;
  }
  .numbers {
    /* width: 100%; */
    /* margin-left: 50%; */
    /* min-width: -webkit-max-content; */
    padding-top: 25px;
    padding-bottom: 25px;
    /* min-width: 83%; */
    /* min-width: -moz-max-content; */
    /* transform: translate(-50%, 0); */
  }
  .bookName {
    font-size: 35px;
    min-width: max-content;
    margin-left: 50%;
    color: #494949;
    padding-top: 40px;
    /* font-family: HeleveticaNueCyr; */
    /* font-weight: 200; */
    -webkit-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
  }
  .number {
    width: 45px;
    height: 45px;
    margin: 2px;
    background-color: #f6f6f6;
    position: relative;
    float: left;
    /* transition-property: margin-bottm; */
    transition-timing-function: linear;
    transition: 0.6s;
    /* margin-bottom: 0px; */
  }
  .number:hover {
    /* margin-top: 4px; */
    /* transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715) 1s; */
    background-color: #d64545;
    box-shadow: 0 0px 1px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 2px 2px -2px rgba(0,0,0,0.12);
  }
  .num:hover {
    transition-timing-function: linear;
    transition: 0.3s;
    color: #f7f7f7;
  }
  .num {
    width: 45px;
    height: 45px;
    text-decoration: none;
    position: absolute;
    color: #222;
    text-align: center;
    padding-top: 13px;
    padding-bottom: 13px;
  }
  .adsFix {
    height: 280px;
    width: 280px;
    background-color: #ccc;
    position: fixed;
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);
  }
  @media (min-width: 1000px) and (max-width: 1150px) {
    .bookName {
      font-size: 30px;
    }
    .img {
      width: 21% !important;
    }
  }
  @media (min-width: 700px) and (max-width: 900px) {
    .bookName {
      font-size: 28px;
    }
  }
  @media (max-width: 749px) and (min-width: 450px) {
    .bookName {
      font-size: 24px;
      min-width: 80%;
    }
  }
  @media screen and (max-width: 767px) {
    h5 {
        font-size: 22px;
    }
    .bookName {
      font-size: 22px !important;
    }
  }
  @media (max-width: 449px) and (min-width: 50px) {
    .bookName {
      font-size: 21px;
      min-width: 90%;
    }
  }
</style>

<script>
import book from '../components/book'
import search from '../components/search'
export default {
  data () {
    return {

    }
  },
  components: {
    book,
    search
  },
  name: 'Numbers'
}
</script>
