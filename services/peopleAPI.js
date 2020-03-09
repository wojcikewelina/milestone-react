const API_PEOPLE_URL =
  "https://us-central1-react-mspm.cloudfunctions.net/api/people";

export function getAllPeople() {
  return fetch(API_PEOPLE_URL).then(response => {
    return response.json();
  });
}