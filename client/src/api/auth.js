import request from "./request";
export function login({ email, password }) {
  return request
    .post("/api/hotel/auth/signin", {
      email,
      password
    })
    .then(res => res.data)
    .then(data => {
      localStorage.setItem("auths", data.token);
      localStorage.setItem("role", data.role);
    });
}

export function register({ name, phone, email, password }) {
  return request
    .post("/api/hotel/auth/signup", {
      name,
      phone,
      email,
      password
    })
    .then(res => res.data)
    .then(data => {
      localStorage.setItem("auths", data.token);
      localStorage.setItem("role", data.roleUser);
    });
}
