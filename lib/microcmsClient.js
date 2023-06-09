import { createClient } from "microcms-js-sdk";

export const microcms = createClient({
  serviceDomain: "ly11tueou0",
  apiKey: process.env.API_KEY,
});
