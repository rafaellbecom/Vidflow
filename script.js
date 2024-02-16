const containerVideos = document.querySelector('.videos__container');

const api = fetch('http://localhost:3000/videos');
const resp = api.then(resp => resp.json());
resp.then((videos) => {
    videos.forEach(video => {
        containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class=""titulo-canal">${video.descricao}</p>
                </div>
            </li>
        `;
    });
}).catch((error) => {
    containerVideos.innerHTML = `
        <p>Ouve um erro ao carregar os vídeo: ${error}</p>
    `;
})