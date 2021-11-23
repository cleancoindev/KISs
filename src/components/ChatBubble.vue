<template>
  <div id="container" class="leftMessage" v-if="!self">
    <div class="bubble">
      <div class="bubble-content">
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
  <div id="container" class="rightMessage" v-else>
    <div class="bubble">
      <div class="bubble-content">
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommingSoon',
  props: {
    name: String,
    self: Boolean,
    content: String,
    dateTime: String
  }
}
</script>

<style scoped>
#container {
    margin: 30px 10px 0px 10px;
    display: flex;
}

#container.leftMessage + #container.leftMessage {
    margin: 2px 10px;
}

#container.rightMessage + #container.rightMessage {
    margin: 2px 10px;
}

#container.leftMessage {
    justify-content: flex-start;
}

#container.rightMessage {
    justify-content: flex-end;
}

#container.leftMessage > .bubble {
    border: solid 1px rgb(233, 233, 233);
    background: rgb(255, 255, 255);
}

#container.rightMessage > .bubble {
    border: solid 1px rgb(233, 233, 233);
    background: rgb(233, 233, 233);
}


.bubble {
    color: #000;
    max-width: 80%;
    border-radius: 10px;
}

p {
    margin: 0;
}

.bubble-content {
    padding: 8px 10px;
}
</style>