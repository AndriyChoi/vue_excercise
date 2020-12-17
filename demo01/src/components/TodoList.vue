<template>
  <ul>
    <slot></slot>
  </ul>
</template>
<script>
export default {
  data: function () {
    return {
      list: [
        {
          title: "class1",
          del: false,
        },
        {
          title: "class2",
          del: true,
        },
      ],
    };
  },
};
</script>