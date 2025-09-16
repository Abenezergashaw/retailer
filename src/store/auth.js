// src/store/auth.js
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null, // will hold user info after login/check-session
  }),
  actions: {
    async checkSession() {
      try {
        const res = await axios.get(
          "https://retail.gondarmenu.com/api/check-session",
          {
            withCredentials: true,
          }
        );
        if (res.data.loggedIn) {
          this.user = res.data.user;
          console.log(this.user);
          return true;
        } else {
          return false;
        }
      } catch {
        this.user = null;
        return false;
      }
    },

    async logout() {
      await axios.get("https://retail.gondarmenu.com/api/logout", {
        withCredentials: true,
      });
      router.push("/RetailUser/Login");
      this.user = null;
    },
  },
});
