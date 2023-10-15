function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a imagem, ou seja, a tag img

    const image = document.querySelector("#profile img")

    // depois tem que substituir a imagem

     if(html.classList.contains('light')) {
         // se tiver lightmode, tem uma condição onde ele precisa adicionar a imagem light
         image.setAttribute('src', './assets/avatar-light.png')
       
     } else {
        // se tiver sem o light mode, manter a imagem normal
        image.setAttribute('src', './assets/avatar.png')

     }
        

    
}
