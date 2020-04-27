<template>
  <div class="movie">
    <Item class="img" />
    <ListItem />
  </div>
</template>

<script>
import Item from "./Hot";
import ListItem from "./ListItem";

export default {
  name: "Movie",
  components: {
    Item,
    ListItem
  }
};
</script>

<style scoped lang="less">
.movie {
  display: inline-block;
  width: 100%;
  min-width: 1400px;
  padding: 0 40px;
  white-space: nowrap;
  .img {
    display: inline-block;
  }
}
</style>
