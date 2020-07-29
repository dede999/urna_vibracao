<template>
  <div class="head">
    <div class="logo">
      <img
        src="http://gsbm.org.br/apps/urna_vibracao/img/logo_GSBM.png"
        alt="Bezerra"
      />
    </div>
    <h1>GSBM - URNA DE VIBRAÇÕES</h1>
    <div class="go_back">
      <span>voltar para o site principal</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="sass">
.head
  margin-top: 0
  height: 120px
  width: available
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  color: white
  background-color: #408f51
  position: relative
  img
    height: 100px
  h1
    font-weight: 600
    font-size: 30px
  .go_back
    background-color: #e1edd1
    color: #35681b
    height: 50px
    width: 180px
    justify-self: center
    position: relative
    span
      font-size: 12px
      height: 20px
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      margin: auto
      vertical-align: middle
</style>
