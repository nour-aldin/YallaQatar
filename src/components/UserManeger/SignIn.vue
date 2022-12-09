<template>
  <div>
    {{ msg }}
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data: function () {
    return {
      msg: "This is sign in",
    };
  },
};
</script>
