<template>
  <div class="form-container">
    <h2>More information</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="postCode">Postcode:</label>
        <input v-model="formData.postCode" type="text" id="postCode" />
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Date of birth:</label>
        <input v-model="formData.dateOfBirth" type="date" id="dateOfBirth" />
      </div>
      <button type="submit">Submit</button>
      <button type="button" @click="resetForm">Clear</button>
    </form>
    <div v-if="submitted">
      <p>Thank you, {{ formData.name }}! Your message has been sent.</p>
      <div class="submitted-data">
        <p><strong>Postcode:</strong> {{ formData.postCode }}</p>
        <p><strong>Date of birth:</strong> {{ formData.dateOfBirth }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondForm",
  data() {
    return {
      formData: {
        postCode: "",
        dateOfBirth: "",
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
        postCode: "",
        dateOfBirth: "",
      };
      this.submitted = false;
    },
  },
};
</script>
