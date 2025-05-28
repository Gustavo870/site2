https://gustavo870.github.io/site2/




CSS: @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap');

*{
    font-family: "Cabin", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


h1{
    background-image: url('arvore.jpg');
    text-align: center;
    margin: 0px;
    padding: 2rem;
    font-size: 30px;
    border: 1px ;
}

.explicacao section {
    display: flex;
    gap: 30px; /* Espaçamento entre as colunas */
    padding: 20px;
}

.colunas {
    font-size: 1.5rem;
    flex: 1; /* Cada coluna ocupa 50% do espaço */
    background-color: #C0C0C0; /* Cor de fundo opcional */
    padding: 20px;
    border-radius: 8px;
    height: 20rem;
    writing-mode: horizontal-tb;
}



img{
    width: 100%;
    height: 700px; /* Defina a altura que desejar */
    object-fit: cover;
    object-position: center top;
    padding: 0rem;
    margin-top: 20px;
}

header{
.navbar{
    background-color: #f4f0ea;
    padding: 1rem;
    top: 0;
    width: 99rem;
}

.navbar ul{
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 10rem;
}

.navbar ul li a {
    color: black;
    text-decoration: none;
    font-weight: bold
}
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
    <header>
        <h1>GeoLocalizador de proximidades</h1>

            <nav class="navbar">
        <ul>
            <li><a href="sobre.html">Sobre</a></li>
            <li><a href="servico.html">Serviços</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li><a href="localizador.html">Localizador</a></li>
        </ul>
    </nav>
    </header>
    

    <div class="indio">
        <img src="indo4.png">
    </div>

    <div class="explicacao">
        <section>
            <div class="colunas">
                <h3>Para que serve este GeoLocalizador?</h3>
                <p>O GeoLocalizador serve para ajudar indigenas e pessoas que estão perdidas ou até mesmo, em perigo em meio a floresta, como precisando de resgate, precisando de algum posto médico, mercados e etc...</p>
            </div>
            <div class="colunas">
                <h3>BLANLALNALNALNLALLBAL</h3>
                <p>ABKKANBNKANKBNKANBKNKABNKANKBANKBNKANBKANKBNKABNKANK  NKAK BABK BABK AKK AKA KAK ADJSDJJDASHSHADSA DSHA DSADSADASJHKDAS ADJSAJD JKASDJKSAD AS SADASDKJSADHSAJDKASJ</p>
            </div>
        </section>
    </div>

</main>

</body>
</html>
