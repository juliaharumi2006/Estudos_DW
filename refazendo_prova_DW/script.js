$(document).ready(function () {
    $.getJSON(`https://fakestoreapi.com/products`, function (produtos) {
        for (let p of produtos) {
            document.getElementById("conteudo").innerHTML +=
                `
                <style>
                    .img_size{
                        height: 350px;
                        object-fit: contain; //ajusta a imagem dentro do elemento sem a cortar */
                    }
                    .card_size{
                    height: 550px;
                    }
                </style>

                    <div class="col-12 col-sm-6 col-md-4 mb-4">
                        <div class="card p-4 text-center card_size">
                            <img src="${p.image}" class="card-img-top img_size mb-3" alt="${p.title}">
                            <div class="card-body">
                                <h5 class="card-text">${p.title}</h5>
                                <p class="card-text fs-5">R$${p.price}</p>
                            </div>
                        </div>
                    </div>
            
            `;
        // $("#botao").click(function(){

        // })
        
        }
    });
});
