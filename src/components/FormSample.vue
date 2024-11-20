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
      <div id="ingest-checking-key-only-select">
        <label for="age-select">Using ingest key on select elements</label>
        <select
          v-model="formData.ageSelect"
          name="age"
          id="age-select"
          data-ingest-key="age"
        >
          <option value="">--Please choose an option--</option>
          <option value="1">1</option>
          <option value="13">13</option>
          <option value="22">22</option>
          <option value="32">32</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      <button type="button" @click="resetForm">Clear</button>
    </form>
    <div v-if="submitted">
      <p>Thank you, {{ formData.name }}! Your message has been sent.</p>
      <div class="submitted-data">
        <p><strong>Name:</strong> {{ formData.name }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Message:</strong> {{ formData.message }}</p>
        <p><strong>Selected age:</strong> {{ formData.ageSelect }}</p>
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
        ageSelect: "",
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
        ageSelect: "",
      };
      this.submitted = false;
    },
  },
};
</script>
