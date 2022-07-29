import axios from 'axios';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export async function fetchUsers(page) {
  const responce = await axios.get(`${API_URL}users?page=${page}&count=5`);
  return responce.data.users;
}

export async function fetchToken() {
  const responce = await axios.get(`${API_URL}token`);
  return responce.data;
}

export function postUsers(users) {
  console.log(users);
  fetchToken().then(({ token }) => {
    console.log(token);
    axios({
      method: 'POST',
      url: `${API_URL}users`,
      body: users,
      headers: { Token: token },
    });
  });
}

// console.log(users.photo);
// fetchToken().then(token => {
//   console.log(token);
//   const requestOptions = {
//     method: 'POST',
//     body: {
//       name: users.name,
//       email: users.email,
//       phone: users.phone,
//       position_id: users.position_id,
//       photo: users.photo,
//     },
//     headers: { Token: token },
//   };

//   fetch(
//     'https://frontend-test-assignment-api.abz.agency/api/v1/users',
//     requestOptions
//   )
//     .then(response => response.json())
//     .then(data => console.log({ postId: data.id }));
// });

// fetchToken().then(token => {
//   axios
//     .post(
//       `${API_URL}users`,
//       {
//         name: users.name,
//         email: users.email,
//         phone: users.phone,
//         position_id: users.position_id,
//         photo: users.photo,
//       },
//       { Token: token }
//     )
//     .then(function (response) {
//       console.log(response.succes);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });
