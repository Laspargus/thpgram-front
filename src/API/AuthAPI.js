// import { useDispatch } from "react-redux";
// import {
//   fetchRegistrationSuccess,
//   fetchRegistrationFailure,
//   fetchRegistrationRequest,
//   fetchLoginSuccess,
//   fetchLoginFailure,
//   fetchLoginRequest,
// } from "./../Redux/Auth/actions";

// export const fetchApiRegistration = async ({
//   first_name,
//   last_name,
//   username,
//   email,
//   password,
// }) => {
//   const dispatch = useDispatch();
//   const data = {
//     user: {
//       first_name,
//       last_name,
//       username,
//       email,
//       password,
//       password_confirmation: password,
//     },
//   };

//   const response = await fetch("http://localhost:3000/signup", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const registration = await response.json();
//   console.log(registration);
//   return registration;
// };

// export const fetchApiLogin = async ({ email, password }) => {
//   const dispatch = useDispatch();
//   dispatch(fetchLoginRequest);

//   const data = {
//     user: {
//       email,
//       password,
//     },
//   };

//   const response = await fetch("http://localhost:3000/login", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response;
//     })
//     .then((response) => {})
//     .catch((error) => {
//       alert("Mauvais email ou mot de passe");
//     });

//   const login = await response.json();
//   console.log(login);
//   return login;
// };
