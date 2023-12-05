<template>
  <div class="dialog_menu">
    <div class="messages">
      <div class="messagesInput" v-for="todo in todos">
        <p>{{ todo }}</p>
      </div>
    </div>
    <div class="input_message">
      <input
        style="width: max-content; margin-bottom: 20px"
        type="text"
        v-model="inputText"
        @input="updateButtonStatus"
      />
      <button @click="saveText" :disabled="isButtonDisabled">
        добавить запись
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      isButtonDisabled: true,
      savedText: "",
      counter: 0,
      lee: 0,
      date: new Date(),
      todos: [],
    };
  },
  methods: {
    updateButtonStatus() {
      if (this.inputText.length > 144) {
        this.isButtonDisabled = true;
      } else {
        this.isButtonDisabled = this.inputText.length === 0;
      }

      this.lee = this.inputText.length;
    },
    saveText() {
      this.savedText = this.inputText;
      this.counter++;
      this.inputText = "";
      this.isButtonDisabled = true;
      this.lee = 0;
      this.todos.push(
        this.savedText +
          " " +
          "\nㅤㅤㅤ" +
          this.date.getFullYear() +
          "." +
          (this.date.getMonth() + 1) +
          "." +
          this.date.getDay() +
          ", " +
          this.date.getHours() +
          ":" +
          this.date.getMinutes(),
      );
    },
  },
};
</script>

<style scooped>
.dialog_menu {
  width: 200%;
  display: grid;
  grid-template-rows: 3fr 1fr;
}
.messagesInput {
  border: 1px solid white;
  border-radius: 15px;
  background-color: white;
  width: min-width;
  margin: 10px auto 0px 30%;
  float: right;
}
.input_message {
}
.messages {
  display: block;
}
</style>
