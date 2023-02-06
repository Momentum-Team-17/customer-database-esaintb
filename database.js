console.log('database.js linked');

let directory = document.querySelector("#container");

for (let customer of customers) {
    customerHtml(customer)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function customerHtml(customer) {
    let customerDiv = document.createElement("div");
    customerDiv.classList.add("customer-box");

    // image
    let img = document.createElement("img");
    img.classList.add("picture");
    img.src = (`${customer.picture.thumbnail}`);
    customerDiv.appendChild(img);
    let picture = document.createElement("h1");
    picture.appendChild(img);
    customerDiv.appendChild(picture);
    
    // name
    let nameDiv = document.createElement("h2");
    nameDiv.classList.add("customerName");
    let customerName = document.createTextNode(`${capitalizeFirstLetter(customer.name.title)} ${capitalizeFirstLetter(customer.name.first)} ${capitalizeFirstLetter(customer.name.last)}`)
    nameDiv.appendChild(customerName);
    customerDiv.appendChild(nameDiv);
    directory.appendChild(customerDiv);


    // email
    let emailDiv = document.createElement("div");
    emailDiv.classList.add("customerEmail");
    let email = document.createTextNode(`${customer.email}`);
    emailDiv.appendChild(email)
    customerDiv.appendChild(emailDiv);

    // street
    let streetDiv = document.createElement("div");
    streetDiv.classList.add("street");
    let streetName = document.createTextNode(`${customer.location.street.number} ${customer.location.street.name}`);
    streetDiv.appendChild(streetName);
    customerDiv.appendChild(streetDiv);

    // state/zip
    let stateDiv = document.createElement("div");
    stateDiv.classList.add("state");
    let stateZip = document.createTextNode(`${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`);
    stateDiv.appendChild(stateZip);
    customerDiv.appendChild(stateDiv);


    // DOB
    let dobDiv = document.createElement("div");
    dobDiv.classList.add("DOB");
    let txtDOB = document.createTextNode(`DOB: ${moment(customer.dob.date).format("MMM Do YYYY")}`)
    dobDiv.appendChild(txtDOB);
    customerDiv.appendChild(dobDiv);


    // customer since date 
    let regDiv = document.createElement("div");
    regDiv.classList.add("CustomerSince");
    let registration = document.createTextNode(`Customer since: ${moment(customer.registered.date).format("MMM Do YYYY")}`);
    regDiv.appendChild(registration)
    customerDiv.appendChild(regDiv);
}