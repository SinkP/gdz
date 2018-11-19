<template>
  <div class="book">
    <div class="row bookChild justify-center">
      <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-5  img">
        <img src="../assets/algebra.jpg" class="shadow-3" alt="">
      </div>
      <div class="col-7 discription">
        <h3>
          Предмет: Алгебра <br>
          Класс: 8 <br>
          Авторы: Сушкова А.Ы. | Чуркин С.Е.  <br>
          Издание: Просвящение <br>
          Год: 1970 <br>
        </h3>
        <q-btn class="go link" to="numbers">Перейти</q-btn>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .book {
    height: 320px;
    width: 100%;
    border-bottom: 1.3px #c2c2c2 solid;
    background-color: #f7f7f7;
    overflow: hidden;
  }
  .bookChild {
    width: 100%;
    height: 100%;
  }
  .img {
    /* background-image: url("https://mmedia.ozone.ru/multimedia/1014762906.jpg");
    background-position: center;
    background-size: contain; */
    padding-bottom: 5px;
    margin-bottom: 35px;
    margin-top: 35px;
    overflow: hidden;
    /* background-repeat: no-repeat; */
  }
  .img > img {
    text-align: center;
    margin-left: 100%;
    transform: translate(-100%, 0);
    height: 100%;
    /* max-width: 100%; */
  }
  .discription > h3{
    font-size: 18px;
    line-height: 1.7;
    /* font-family: Roboto, "Roboto", HeleveticaNue; */
    font-weight: 300;
    padding-top: 50px;
    padding-left: 30px;
    color: #222;
  }
  .go {
    margin-left: 30px;
    margin-top: 20px;
    padding: 12px 23px;
    background-color: #d64545;
    color: #fff;
  }
  .link {
    color: #fff;
    border-radius: 1.5px;
    text-decoration: none;
  }
  * {
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 700px) {
    .discription > h3 {
      font-size: 14px;
      padding-left: 15px;
      padding-top: 42px;
      padding-right: 10px;
    }
    .book {
      height: 280px;
    }
    .go {
      margin-top: 10px;
      padding: 11px 21px;
      font-size: 12px !important;
      margin-left: 15px;
    }
  }
</style>
<script>

</script>
