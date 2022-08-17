<template>
    <div class="main-container">
        <slot name="side-nav"></slot>
    <section class="right-section">
     <slot name="main-content"></slot>
    </section>
  </div>
</template>

<script>
export default {
name:"TheLayout"
}
</script>

<style lang="scss" scoped>
.main-container {
  font-family: "Lato";
  height: 100vh;
  display: flex;
  padding-right: 15px;
  overflow: hidden;
}
.right-section {
  height: 100%;
  width: calc(100% - 292px);
  padding: 107px 0 86px 47px;
  overflow-y: scroll;
  //  display: flex;
  // flex-direction: column;
  // // justify-content: center;
  // align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 17px;
    margin-right: 30px;
  }
  &::-webkit-scrollbar-track {
    background: #cdcfd6;
    height: 681px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #031131;
    opacity: 0.7;
    border-radius: 17px;
    background-clip: padding-box;
  }
}
</style>