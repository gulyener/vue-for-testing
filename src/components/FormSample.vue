<template>
  <div class="form-container">
    <h2>Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:*</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          data-ingest-key="contact.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" id="email" />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea v-model="formData.message" id="message"></textarea>
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
