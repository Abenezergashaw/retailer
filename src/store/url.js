import { defineStore } from "pinia";

export const useUrl = defineStore("url", {
  state: () => ({
    // url: "http://localhost:5000",
    url: "https://retail.gondarmenu.com",
  }),
});
