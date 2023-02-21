import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjA2MWUxNzA1MjY1NTBhNzAyODA0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njk5ODQ1N30.pEl6IbYy-qRkqIIT3f5OFioy5soBLqS8ViZZ7V4el1c";
const baseURL = "http://localhost:5000/api";
export const publicRequest = axios.create({
  baseURL,
});
export const userRequest = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
