// Add your code here

// In index.js, write a function, submitData, 
// that takes two strings as arguments, 
// one representing a user's name and 
// the other representing a user's email.

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData) ,
// };

function submitData(userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail,
      };
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData) ,
    };
    return fetch('http://localhost:3000/users', configurationObject)
        .then(function (response) {
        return response.json();
        })
        .then(function (object) {
        const id = object.id;
        document.body.append(id);
        })
        .catch(function (error) {
        alert("Bad things! Ragnarők!");
        const message = error.message ;
        document.body.append(message);
        });    
} 

submitData() ;
