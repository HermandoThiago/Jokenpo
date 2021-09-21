// Joga Jokenpô

    var elementos = document.querySelectorAll('.player-option > img')
    var playerOpt = ""
    var inimigoOpt = ""

    function validarVitoria(){

        let resultado = document.getElementById('resultado')

        if (playerOpt == 'pedra'){

            if (inimigoOpt == 'pedra'){
                // Empate
                resultado.innerHTML = 'O jogo empatou'
            }else if (inimigoOpt == 'papel'){
                // Inimigo ganha
                resultado.innerHTML = 'O inimigo ganhou'
            }else if (inimigoOpt == 'tesoura'){
                // Player ganhou
                resultado.innerHTML = 'Você ganhou'
            }

        }

        if (playerOpt == 'papel'){

            if (inimigoOpt == 'pedra'){
                // O player ganhou
                resultado.innerHTML = 'Você ganhou'
            }else if (inimigoOpt == 'papel'){
                // Empate
                resultado.innerHTML = 'O jogo empatou'
            }else if (inimigoOpt == 'tesoura'){
                // O inimigo ganhou
                resultado.innerHTML = 'O inimigo ganhou'
            }

        }

        if (playerOpt == 'tesoura'){

            if (inimigoOpt == 'pedra'){
                // O inimigo ganhou
                resultado.innerHTML = 'O inimigo ganhou'
            }else if (inimigoOpt == 'papel'){
                // O player ganhou
                resultado.innerHTML = 'Você ganhou'
            }else if (inimigoOpt == 'tesoura'){
                // Empate
                resultado.innerHTML = 'O jogo empatou'
            }

        }

    }

    function resetOpacityEnemy(){
        const enemyPlayer = document.querySelectorAll('.enemy-option > img')

        for (var i = 0; i < enemyPlayer.length; i++){
             enemyPlayer[i].style.opacity = 0.3
         }
     }

    function inimigoJogar(){
        // O Math.floor irá arredondar o número do Math.random
        // O Math.random irá gerar um número aleatório entre 0 e 1, multiplicando por 3, teremos os números 0, 1 e 2
        let rand = Math.floor(Math.random()*3)
        const enemyPlayer = document.querySelectorAll('.enemy-option > img')

        // Função com a mesma funcionalidade de resetOpacity, porém, com os valores de enemy-option
        resetOpacityEnemy()

        for (var i = 0; i < enemyPlayer.length; i++){
            if (i == rand){
                enemyPlayer[i].style.opacity = 1
                inimigoOpt = enemyPlayer[i].getAttribute('opt')
            }
        }

        validarVitoria()

    }

    function resetOpacity(){
        for (var i = 0; i < elementos.length; i++){
            elementos[i].style.opacity = 0.3
        }
    }

    // Aqui usei o for para conseguir adicionar uma função em todos as imagens
    for (var i = 0; i < elementos.length; i++){
        elementos[i].addEventListener('click', function(t){
            resetOpacity()

            t.target.style.opacity = 1
            playerOpt = t.target.getAttribute('opt')

            inimigoJogar()
        })
    }