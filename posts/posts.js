document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.post-card');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const titulo = this.querySelector('h3').textContent;
            const conteudo = this.dataset.conteudo;

            document.getElementById('dialog-content').innerHTML = `
                <h2>${titulo}</h2>
                <p>${conteudo}</p>
            `;

            Fancybox.open({
                src: '#dialog-content',
                type: 'inline',
            });
        });
    });


  const footer = document.querySelector(
    ".footer .container .footer-content .footer-socials"
  );

  const linkedinLink = createSocialLink(
    "LinkedIn",
    "https://www.linkedin.com/in/ceciliameds/",
    "../images/linkedin.png"
  );
  const instagramLink = createSocialLink(
    "Instagram",
    "https://www.instagram.com/ceciliameds/",
    "../images/instagram.png"
  );
  const githubLink = createSocialLink(
    "GitHub",
    "https://github.com/ceciliameds",
    "../images/github.png"
  );

  footer.appendChild(linkedinLink);
  footer.appendChild(instagramLink);
  footer.appendChild(githubLink);

  function createSocialLink(name, url, imageUrl) {
    const link = document.createElement("a");

    link.href = url;
    link.target = "_blank";
    link.classList.add("social-icon");

    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = name;

    link.appendChild(image);

    return link;
  }

  const form = this.getElementById('blogForm');

  const postCard = document.getElementById("post-default");

  // duplica o card default
  // function duplicateCard(c) {
  //   const newPostCard = postCard.cloneNode(true);
  //   document.getElementById("items").appendChild(newPostCard);
  //   const postDialog = document.getElementById("dialog-content");
  //   const postButton = document.getElementById("card__button");
  //   postDialog.setAttribute('id', c);
  //   postButton.setAttribute('data-fancybox', '');
  //   postButton.setAttribute('data-src', c);
  //   postButton.dataset.src = "#" + c;
  //   newPostCard.classList.add(c);
  //   // console.log(postButton);
  // }
  function duplicateCard(c) {
    const newPostCard = postCard.cloneNode(true);
    document.getElementById("items").appendChild(newPostCard);
    const postDialog = document.getElementById("dialog-content");
    const postButton = document.getElementById("card__button");
    postDialog.setAttribute('id', c);
    postButton.setAttribute('data-fancybox', c);  // Usar um grupo diferente para os cards dinâmicos
    postButton.setAttribute('data-src', c);
    postButton.dataset.src = "#" + c;
    newPostCard.classList.add(c);
}



  // altera o conteúdo do card duplicado
  function createPost() {
    // cria uma class única
    const newPostCardClass = 'new-post-' + Date.now();
    duplicateCard(newPostCardClass);

    const postTitle = document.querySelector("." + newPostCardClass + " h3");
    const postTitleDialog = document.querySelector("." + newPostCardClass + " h2");
    const postTextDialog = document.querySelector("." + newPostCardClass + " p");
    const cardDuplicated = document.querySelector("#post-default." + newPostCardClass);
    cardDuplicated.classList.remove('d-none');

    // pega valor digitado no input e passa para o elemento do novo card
    const inputTitle = document.querySelector("#blogForm #titulo").value;
    postTitle.innerHTML = inputTitle;
    postTitleDialog.innerHTML = inputTitle;
    const inputTextPost = document.querySelector("#blogForm #postagem").value;
    postTextDialog.innerHTML = inputTextPost;
  }


 
  document.addEventListener('click', function (event) {
    const botaoLerMais = event.target.closest('.card__button');

    if (botaoLerMais) {
      const cardContainer = botaoLerMais.closest('.post-card');
      const titulo = cardContainer.dataset.titulo;
      const conteudo = cardContainer.dataset.conteudo;

      const postDialog = document.getElementById('dialog-content');
      const dialogTitulo = postDialog.querySelector('h2');
      const dialogTexto = postDialog.querySelector('p');

      // Preencher o modal com os dados do card clicado
      dialogTitulo.textContent = titulo;
      dialogTexto.textContent = conteudo;

      Fancybox.open({
        src: '#dialog-content',
        type: 'inline',
      });
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    createPost();
  });
  
  
});













