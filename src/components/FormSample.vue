// Create a new Vue component in a file named `UserForm.vue`
<template>
  <div class="form-container">
    <h2>Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="formData.name" type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea v-model="formData.message" id="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
      <button type="button" @click="resetForm">Clear</button>
    </form>
    <div v-if="submitted">
      <p>Thank you, {{ formData.name }}! Your message has been sent.</p>
      <div class="submitted-data">
        <p>Thank you, {{ formData.name }}! Your message has been sent.</p>
        <p><strong>Name:</strong> {{ formData.name }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Message:</strong> {{ formData.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log("Form Data:", this.formData);
      this.submitted = true;
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        message: "",
      };
      this.submitted = false;
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
button:hover {
  background-color: #369d75;
}
.submitted-data {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black;
}
</style>
