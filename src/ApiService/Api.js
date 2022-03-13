import axios from "axios";

const BASE_URL = "http://localhost:8000/api/user";

export async function registerForm(email, password) {
  return await axios({
    method: "post",
    url: `${BASE_URL}/register`,
    data: {
      email: email,
      password: password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function loginForm(email, password) {
  return await axios({
    method: "post",
    url: `${BASE_URL}/login`,
    data: {
      email: email,
      password: password,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmRlNjdiYzQxOWFhMDkyNGVhOTM0OSIsImlhdCI6MTY0NzE3NTI5MSwiZXhwIjoxNjQ5NzY3MjkxfQ.GoQCXtDAU8LbBPi5DPFBb5-rMbQutJF7NgOHNa9Q9zM",
      "Content-Type": "application/json",
    },
  });
}
