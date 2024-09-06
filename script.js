function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;

if (!campoPesquisa) {
    alert("Digite sua pesquisa");
return
}


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo ="";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo = dado.titulo;
        if (titulo == campoPesquisa){

        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.titulo} <img src="images/rslogo.png" alt=""class="logo"> 
                </h2>
                <p><b>Ano de Lançamento:</b> ${dado.ano}</p>
                <p><b>Plataformas:</b> ${dado.plataforma}</p>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank"><b>Site Oficial</b></a>
            </div>
        `;

    }

}

if (!resultados){
    resultados += `
     <div class="item-resultado">
    <p>Nenhum resultado encontrado, pesquise Grand Theft Auto: Vice City, Grand Theft Auto V, Grand Theft Auto: San Andreas ou Grand Theft Auto II por exemplo.</p>
    </div>
        `;
    section.innerHTML = resultados;
    return;
}
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}