window.addEventListener('scroll',() =>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

  let messages = []
  if(name.value==''|| name.value==null){
    messages.push('Name is required')
  }

  if(password.value.length <=6)
  {
    messages.push('password must be longer than 6 character')

  }
  if(name.value=='Username'){
    messages.push("Please change the Username")
  }
  else if(password.value == 'password')
  {
    messages.push("password can't be password")
  }

  if(messages.length>0){

      e.preventDefault()
      errorElement.innerText = messages.join(' ')

  }


})
