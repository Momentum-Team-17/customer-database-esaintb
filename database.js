//  customer name
let customerDiv = document.createElement("container");
customerDiv.classList.add("customer")
let nameDiv = document.createElement("div");
nameDiv.classList.add("name");
nameDiv.innerText = '${customer.name.title} ${customer.name.first} ${customer.name.last}';
customerDiv.appendChild(nameDiv);
container.appendChild(customerDiv);

// image


// email
let emailDiv = document.createElement("div");
emailDiv.classList.add("email");
emailDiv.innerText = '${customer.email}';
customerDiv.appendChild(emailDiv);

// street
let streetDiv = document.createElement("div");
streetDiv.classList.add("street");
streetDiv.innerText = '${customer.location.street.number} ${customer.location.street.name}';
customerDiv.appendChild(streetDiv);

// state/zip
let stateDiv = document.createElement("div");
stateDiv.classList.add("state");
stateDiv.innerText = '${customer.city} {customer.state} {customer.postcode}';
customerDiv.appendChild(stateDiv);


// DOB


// customer since date 