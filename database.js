function showCustomerName(customerArray) {
    for (let customer of customerArray) {

        let customerDiv = document.createElement("div");
        customerDiv.classList.add("customer")
        let nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
        customerDiv.appendChild(nameDiv);
        container.appendChild(customerDiv);

        // image
        let imageDiv = document.createElement("img");
        imageDiv.classList.add("image");
        imageDiv.src = `${customer.picture.large}`;
        customerDiv.appendChild(imageDiv);

        // email
        let emailDiv = document.createElement("div");
        emailDiv.classList.add("email");
        emailDiv.innerText = `${customer.email}`;
        customerDiv.appendChild(emailDiv);

        // street
        let streetDiv = document.createElement("div");
        streetDiv.classList.add("street");
        streetDiv.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
        customerDiv.appendChild(streetDiv);

        // state/zip
        let stateDiv = document.createElement("div");
        stateDiv.classList.add("state");
        stateDiv.innerText = `${customer.city} ${customer.state} ${customer.postcode}`;
        customerDiv.appendChild(stateDiv);


        // DOB
        let birthdayDiv = document.createElement("div");
        birthdayDiv.classlist.add("DOB");
        birthdayDiv.innerText = `${customer.dob.date}`;
        birthdayDiv.appendChild(birthdayDiv);


        // customer since date 
        let regDiv = document.createElement("div");
        regDiv.classList.add("Customer since");
        regDiv.innerText = `${customer.registered.date}`;
        regDiv.appendChild(regDiv);
    }
}