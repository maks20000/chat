<template>
  <div>
    <p :class="{user : isUser}" class="message"><span class="name">{{name}}:</span><slot></slot></p>
  </div>
</template>

<script>
export default {
  props: ['name','isUser'],
}
</script>

<style>
  p.message {
    font-size: 14px;
    line-height: 1.3;
  }
  p.message .name {
    font-size: 16px;
    font-weight: bold;
    margin-right: 5px;
  }
  p.message.user {
    color: red;
  }
</style>
