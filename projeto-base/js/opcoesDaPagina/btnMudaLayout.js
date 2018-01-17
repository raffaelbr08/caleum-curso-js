
//Muda texto
const btn = document.querySelector('#btnMudaLayout');

 function mudaTexto(){
   
  if(this.textContent == 'Blocos'){
      this.textContent = 'Linhas';
    }else{
      this.textContent = 'Blocos';
    }
  }

  btn.addEventListener('click', mudaTexto);

  //Muda Layout
  const mural = document.querySelector('.mural')

  function mudaLayout(){
    mural.classList.toggle('mural--linha')
  }

  btn.addEventListener('click', mudaLayout)