

const key = "44a41432f709ea783c214c729aaec0f3"

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML ="Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const loader = document.getElementById("loader");
    loader.style.display = "block"; // Mostra o loader
  
    try {
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
      );
  
      if (!resposta.ok) {
        throw new Error("Cidade não encontrada!");
      }
  
      const dados = await resposta.json();
      colocarDadosNaTela(dados);
    } catch (error) {
      alert(error.message);
    } finally {
      loader.style.display = "none"; // Esconde o loader
    }
  }
  

function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}



function colocarDadosNaTela(dados) {
    const condition = dados.weather[0].main.toLowerCase();
    const backgrounds = {
      clear: "url('https://picsum.photos/id/1016/1920/1080')",
      rain: "url('https://picsum.photos/id/1021/1920/1080')",
      clouds: "url('https://picsum.photos/id/1043/1920/1080')",
      snow: "url('https://picsum.photos/id/1074/1920/1080')",
      thunderstorm: "url('https://picsum.photos/id/1040/1920/1080')",
      default: "url('https://picsum.photos/id/1035/1920/1080')"
    };
  
    // Define a imagem de fundo com base na condição climática
    const background = backgrounds[condition] || backgrounds.default;
    document.body.style.backgroundImage = background;
  
    // Atualiza os dados na tela
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  }
  