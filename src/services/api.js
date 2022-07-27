import axios from 'axios';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/';

export async function fetchUsers(page) {
  const responce = await axios.get(`${API_URL}v1/users?page=${page}&count=5`);
  return responce.data.users;
}

export async function postUsers(users) {
  console.log(users);
  await axios
    .post(`${API_URL}v1/users`, {
      name: users.name,
      email: users.email,
      phone: users.phone,
      position_id: 1,
      photo: 'url',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
