function showLoginModal() {
    const body = document.querySelector("body")
    const recuperarSenha = document.querySelector('.form')
    const background = document.querySelector('.modal_cadastro')
  
  
    recuperarSenha.addEventListener('submit', (event) => { 
        event.preventDefault() 
        background.classList.remove('hidden')
        })
  
  } showLoginModal()
  
  function closeModal() {
    const modalCadastro = document.querySelector('.modal__cadastro')
    const fechar = document.querySelector('#fechar')
    const background = document.querySelector('.modal_cadastro')

    fechar.addEventListener('click', (event) => {
        event.preventDefault() 
        background.classList.add('hidden')
    })
  }