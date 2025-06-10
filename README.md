https://gustavo870.github.io/site2/




CSS: @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');


body{
    background-color: #F4F0EA;
}

* {
    font-family: "Cabin", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

h1 {
    font-family: "Playwrite BR", cursive;
    background-image: url(fotoblurarvore.png);
    text-align: center;
    margin: 0;
    padding: 3rem;
    font-size: 5rem;
    border: 1px;
    color: #E0FFFF;
}



.colunas {
    display: flex;
    gap: 0;
    justify-content: center;
    padding: 0;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.explicacao {
    height: 30rem;
    font-size: 1.8rem;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    background-color: #C0C0C0;
    width: 20%;
    border-radius: 10px;
    margin: 2rem;
}

.explicacao h2 {
    color: IndianRed;
    margin-bottom: 10px;
}

.imagemc{
    display: flex;
    justify-content: center; 
    align-items: center;      
    height: 100vh;            
    margin: 0;
}



img {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 35%;
    height: 100px;    
    object-fit: cover;
    object-position: center top;
    padding: 0;
    
}

.navbar {
    margin-top: 0px;
    transition: all 1s ease;
    background-color:  #ffffff;
    padding: 0.5rem;
    top: 0;
    width: 100%;
    z-index: 1000;
}
.cadastro-icon img{
    width: 30px;
    height: 30px;
    object-fit: contain;
}
.cadastro-icon{
    margin-left: auto;
}

.navbar-fixa {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
}

.navbar ul {
    font-size: 1.0rem;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 10rem;
}

.navbar ul li a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-weight: bold;
}

.rodape {
    margin-top: 120px;
    background-color: gray;
    padding: 5rem;
    color: #E0FFFF;
    font-size: 1.5rem;
    margin-bottom: 0%;
}

.info-rodape {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.info {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem;
    padding: 0;
}

.info a {
    color: black;
    text-decoration: none;
    cursor: default;
}



.explicacao2{
    text-align: center;
    height: 4rem;
    font-size: 1.2rem;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    background-color: #C0C0C0;
    width: 30%;
    border-radius: 10px;
    margin: 2rem;
}
.social-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 40px;
}

/* Caixas maiores (5 primeiras) */
.social-card {
    background-color: #f9f9f9;
    width: 250px;
    height: 250px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    text-align: center;
    font-size: 25px;
}

.social-card img {
    width: 95px;
    height: 95px;
    margin-bottom: 10px;
}

.cards2{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 40px;
}

/* Caixas menores (2 últimas) */
.card {
    background-color: white;
    width: 250px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: transform 0.2s ease;
    margin-top: 20px;
    font-size: 25px;
}

/* Efeitos hover */
.social-card:hover, .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

.card img {
    width: 95px;
    height: 95px;
    margin-bottom: 10px;
}

.social-card p, .card p {
    margin: 0;
    color: #000000;
    font-weight: 500;
}


















HTML:<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Site índigena</title>
</head>

<body>
    <main>
        <nav class="navbar">
            <div class="cadastro-icon">
                <a href="cadastro.html">
                    <img src="cadastro.webp">
                </a>
            </div>
        </nav>

    <header class="cabecalho">
        <h1>TriboFinder</h1>

    </header>

    <div class="social-grid">
        <div class="social-card">
            <img src="localizador.png">
            <p>Localizador</p>
        </div>
        <div class="social-card">
            <img src="denuncia2.webp">
            <p>Denúncia</p>
        </div>
        <div class="social-card">
            <img src="auxilio.png">
            <p>Auxilios</p>
            <p>Humanitarios</p>
        </div>
        <div class="social-card">
            <img src="sobre.jpg">
            <p>Sobre</p>
        </div>
    </div>
    <div class="cards2">
        <div class="card">
            <img src="balao3.png">
            <p>Sugestão</p>
        </div>
        <div class="card">
            <img src="clique2.png">
            <p>Como utilizar</p>
        </div>
    </div>


<div class="rodape">
    <div class="info-rodape">
        <div class="info">
            <h2>Sites Governamentais</h2>
                <a href="https://www.gov.br/funai/pt-br">Funai</a>
                <a href="https://www.gov.br/funai/pt-br/atuacao/povos-indigenas">Povos Indígenas</a>
                <a href="https://www.gov.br/funai/pt-br/atuacao/terras-indigenas">Terras Indígenas</a>
        </div>
        <div class="info">
            <h2>Acesso a Informação</h2>
                <a href="https://pib.socioambiental.org/pt/P%C3%A1gina_principal">Tribos indígenas</a>
                <a href="https://museudasculturasindigenas.org.br/">Museu Indígena</a>
        </div>
  </div>
</div>



</main>
<script src="navbar.js"></script>
</body>
</html>







COLOCA O CONTATO LÁ EM BAIXO NO RODAPÉ
