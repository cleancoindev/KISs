<template>
  <div id="container">
        <div class="bubble">
            <div class="bubble-content">
                <p> {{ content }}</p>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'CommingSoon',
  props: {
    content: String,
    dateTime: String
  }
}
</script>

<style scoped>
#container {
    margin: 10px;
    display: flex;
    justify-content: flex-end;
}

.bubble {
    max-width: 80%;
    border: solid 1px rgb(233, 233, 233);
    background: rgb(233, 233, 233);
    color: #000;
    border-radius: 10px;
}

p {
    margin: 0;
}

.bubble-content {
    padding: 10px;
}
</style>