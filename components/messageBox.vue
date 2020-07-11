<template>
  <div>
    <div class="box">
      <message name="Maxim">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias deleniti provident fugiat repudiandae inventore quos dolores veniam placeat quas tenetur qui odio minus vitae optio, obcaecati, cumque asperiores. Eos!</message>
    </div>
      <b-form inline>
        <b-input class="mb-2 mr-sm-2 mb-sm-0 f-grow-1" v-model="text_message"></b-input> <b-button variant="success">Send</b-button>
      </b-form>
  </div>
</template>

<script>
import message from "~/components/message.vue"
export default {
  components: {
    message
  }
}
</script>

<style>
  .box {
    padding: 10px;
    border: 1px solid #d4d4d4fa;
    margin-bottom: 20px;
  }

  .f-grow-1 {
    flex-grow: 1;
  }
</style>
