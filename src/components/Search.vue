<template>
  <div class="row search shadow-3 justify-center">
    <div class="col-11 searchChild">
      <div class="fastSearch">
        <h5 :style="{color: search}">Реактивный поиск по ГДЗ</h5>
        <!-- <q-icon class="rocket" size="32px" name="mdi-rocket"></q-icon> -->
      </div>
      <q-input v-model="search" class="searchInput" color="dark"  />
      <div class="ads shadow-2"></div>
    </div>
  </div>
</template>
<style>
  * {
    padding: 0;
    margin: 0;
  }
  .search {
    height: 270px;
    overflow: hidden;
    width: 100%;
    z-index: 10;
    background-color: #f7f7f7;

  }
  .fastSearch > h5 {
    /* color: #222; */
    /* font-family: "Roboto", Roboto, HeleveticaNue; */
    font-weight: 300;
    float: left;
  }
  .fastSearch {
    width: max-content;
    padding-top: 50px;
    margin-left: 50%;
    transform: translate(-50%, 0%);
  }
  .rocket {
    fill: #222;
    /* padding-top: 5px; */
    margin-left: 7px;
    float: left;
    /* width: 35px; */
  }
  .q-input-target {
    /* font-family: Roboto, "Roboto", HeleveticaNue; */
    font-weight: 300;
  }
  .searchInput {
    width: 37%;
    padding: 10px;
    margin-top: 90px;
    text-align: justify-center;
    margin-left: 50%;
    font-size: 18px;
    transform: translate(-50%, -50%);
  }
  .ads {
    background-color: #464646;
    width: 37%;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    height: 60px;
  }
  @media screen and (max-width: 767px) {
    h5 {
      font-size: 22px;
    }
    .searchInput {
      width: 75%;
    }
    .search {
      height: 290px;
    }
    .searchInput {
      font-size: 14.5px;
    }
    .fastSearch {
      padding-top: 85px;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>
