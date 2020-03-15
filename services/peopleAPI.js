const API_PEOPLE_URL =
  "https://us-central1-react-mspm.cloudfunctions.net/api/people";

const allPeople = [];

export function getAllPeople() {
  return fetch(API_PEOPLE_URL).then(response => {
    return response.json();
  }).then(people=>{
    allPeople = people;
    return people;
  });
}


export function getPerson(id){
  return allPeople.find(x=>x.id==id);
}