function verificar() {
    var dataAtual = new Date()
    var diaAtual = dataAtual.getDate()
    var mesAtual = dataAtual.getMonth() + 1 
    var anoAtual = dataAtual.getFullYear()

    var fdia = document.getElementById('textdia')
    var fmes = document.getElementById('textmes')
    var fano = document.getElementById('textano')
    var msg = document.getElementById('msg')
    
    if (fano.value <= 0 || fano.value > anoAtual || fmes.value <= 0 || fmes.value > 12 || fdia.value <= 0 || fdia.value > 31) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = anoAtual - Number(fano.value)

        if (!fsex[0].checked && !fsex[1].checked) {
            alert('Por favor, selecione o sexo antes de continuar!')
        }

     
        if (mesAtual < Number(fmes.value) || (mesAtual === Number(fmes.value) && diaAtual < Number(fdia.value))) {
            idade--
        }
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.display = 'block'
        img.style.margin = '20px auto'
        msg.style.marginTop = '15px'
        msg.style.fontFamily ='Georgia'
        msg.style.fontSize = 'em'

        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade <4){
                gênero = 'bebê'
                img.setAttribute('src','imagens/fotobebe.jpg')
                document.body.style.background = '#155e68'
                //criança
            } else if(idade <12){
                gênero = 'criança'
                img.setAttribute('src','imagens/fotocriançamenino.jpg' )
                document.body.style.background = '#170c79'
                //adolscente

            } else if(idade <18){
                gênero = 'adolescente'
                img.setAttribute('src','imagens/fotoadolescentemenino.jpg')
                document.body.style.background = '#48e29a'

            } else if(idade <30) {
                gênero = 'jovem'
                img.setAttribute('src','imagens/fotojovemhomem.jpg')
                document.body.style.background = '#b3cbcf'
                
            } else if(idade <60){
                gênero = 'adulto'
                img.setAttribute('src','imagens/fotohomem.jpg')
                document.body.style.background = '#584635'
                
            }else {
                img.setAttribute('src','imagens/fotoidosohomem.jpg')
                document.body.style.background = '#a2f8f8'

            }     

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade <4){
                gênero = 'bebê'
                img.setAttribute('src','imagens/fotobebemenina.jpg')
                document.body.style.background = '#e3e648'
                //criança
            } else if(idade <12){
                gênero = 'criança'
                img.setAttribute('src','imagens/fotocriançamenina.jpg' )
                document.body.style.background = '#f3a53fe8'
                //adolscente

            } else if(idade <18){
                gênero = 'adolescente'
                img.setAttribute('src','imagens/fotoadolescentemenina.jpg')
                document.body.style.background = '#f56f65e8'
                //jovem

            } else if(idade <30) {
                gênero = 'jovem'
                img.setAttribute('src','imagens/fotojovemmulher.jpg')
                document.body.style.background = '#b97bece8'
                //adulto
            } else if(idade <60){
                gênero = 'adulto'
                img.setAttribute('src','imagens/fotomulher.jpg')
                document.body.style.background = '#f0d0cde8'
                //idoso
            }else {
                img.setAttribute('src','imagens/fotoidosamulher.jpg')
                document.body.style.background = '#c48e89e8'

            }    
        }
  
        msg.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos de idade.`
        msg.appendChild(img)
    }
}