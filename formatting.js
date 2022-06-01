console.log(customers)

let cast = document.querySelector('#castList')
console.log(cast)
for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('character')
    let profileElement = document.createElement('div')
    profileElement.classList.add('profilePic')
    customerElement.appendChild(profileElement)
    let imageElement = document.createElement('img')
    imageElement.src = `images/${customer.name.first}.jpg`
    imageElement.alt = "customer profile picture"
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
    cast.appendChild(customerElement)
}




