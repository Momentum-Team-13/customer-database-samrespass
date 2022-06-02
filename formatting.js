console.log(customers)

let cast = document.querySelector('#castList')
console.log(cast)
for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('character')
    let profileElement = document.createElement('div')
    customerElement.appendChild(profileElement)
    let imageElement = document.createElement('img')
    imageElement.src = `${customer.picture.large}`
    imageElement.alt = "customer profile picture"
    imageElement.class = "profilePic"
    profileElement.appendChild(imageElement)
    let titleElement = document.createElement('div')
    titleElement.classList.add('name')
    customerElement.appendChild(titleElement)
    let nameElement = document.createElement('h1')
    nameElement.classList.add('customerName')
    nameElement.innerText = `${customer.name.first} ${customer.name.last}`
    titleElement.appendChild(nameElement)
    let emailElement = document.createElement('div')
    emailElement.classList.add('email')
    customerElement.appendChild(emailElement)
    let mailerElement = document.createElement('p')
    mailerElement.classList.add('customerEmail')
    mailerElement.innerText = `${customer.email}`
    emailElement.appendChild(mailerElement)
    let addyElement = document.createElement('div')
    addyElement.classList.add('address')
    customerElement.appendChild(addyElement)
    let addressElement = document.createElement('p')
    addressElement.classList.add('addy')
    addressElement.innerText = `${customer.location.street.number} ${customer.location.street.name}`
    addyElement.appendChild(addressElement)
    let cityElement = document.createElement('div')
    cityElement.classList.add('city')
    customerElement.appendChild(cityElement)
    let trenchesElement = document.createElement('p')
    trenchesElement.classList.add('trenches')
    let smallState = nameToAbbr(customer.location.state)
    trenchesElement.innerText =  `${customer.location.city}, ${smallState} ${customer.location.postcode}`
    cityElement.appendChild(trenchesElement)
    let dobElement = document.createElement('div')
    dobElement.classList.add('dateOf')
    customerElement.appendChild(dobElement)
    let dateElement = document.createElement('p')
    dateElement.classList.add('dataBirth')
    let fixMe = moment(`${customer.dob.date}`)
    dateElement.innerText = "DOB: " + fixMe.format("MMM Do, YYYY");
    dobElement.appendChild(dateElement)
    let suckerElement = document.createElement('div')
    suckerElement.classList.add('suckers')
    customerElement.appendChild(suckerElement)
    let markElement = document.createElement('p')
    markElement.classList.add('totalMarks')
    let anotherFix = moment(`${customer.registered.date}`)
    markElement.innerText = "Customer since: " + anotherFix.format("MMM Do, YYYY");
    suckerElement.appendChild(markElement)
    cast.appendChild(customerElement)
}




