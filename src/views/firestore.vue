<template >
  <div class="bgi" >
    <h1 class="t">SIGN UP</h1>
    <br>
    <div class="container">
     
      <b-form> <br>
        <b-form-group
          id="input-group-2"
          class="tt"
          label="First Name"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="name"
            type="text"
            placeholder="ชื่อ "
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          class="tt"
          label="Last Name"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="lastname"
            type="text"
            placeholder="นามสกุล "
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="tt"
          id="input-group-2"
          label="Phone Number"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="phonenumber"
            type="text"
            placeholder="เบอร์โทรศัพท์ "
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="tt"
          id="input-group-1"
          label="Email Address"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="อีเมล "
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          class="tt"
          label="Password"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="password"
            placeholder="รหัสผ่าน "
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button class="btn"  @click="onSubmit"
          >Sign Up</b-button 
        >
      </b-form><br>
      
    </div>
  </div>
 
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      Firstname: "",
      Lastname: "",
      phonenumber: "",
      Email: "",
      Password: "",
    };
  },
  methods: {
    onSubmit() {
      var form = {
        Firstname: this.name,
        Lastname: this.lastname,
        Phonenumber: this.phonenumber,
        Email: this.email,
        Password: this.password,
      };
      db.collection("firestore")
        .doc()
        .set(form);
    },
  },
};
</script>

<style>
.container {
  background: rgba(170, 127, 163, 0.89);
}


.tt {
  margin-left: 17px;
  text-align: left;
}
.btn{
    color: rgb(90, 147, 212);
}
.bgi{
     background-image: url("https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}

</style>
