var vetNum = [];
var select = window.document.getElementById('selNum');

function adicionar()
{
    var txtNum = window.document.getElementById('txtn');
    var num = Number(txtNum.value);
    
    if(txtNum.value.length == 0)
    {
        window.alert('Por favor, informe um número!');
    }
    else if(num < 1 || num > 100)
    {
        window.alert('Por favor, informe um número válido!');
    }
    else if(vetNum.indexOf(num) > -1)
    {
        window.alert('Número já adicionado! Por favor, informe outro número');
    }
    else
    {
        vetNum.push(num);

        var option0 = window.document.getElementById('option0');
        option0.hidden = true;

        var option = document.createElement('option');
        option.text = `Valor ${num} adicionado!`;
        option.value = `option${vetNum.length}`;
        select.appendChild(option);

        if(vetNum.length > 2)
        {
            select.setAttribute("size", vetNum.length);
        }
        
    }
}

function analisar()
{
    if(vetNum == '')
    {
        window.alert(`Por favor adicione um número antes!`);
    }
    else
    {
        if(vetNum.length == 1)
        {
            var total = window.document.getElementById('total');
            total.innerHTML = `Ao todo, ${vetNum.length} número foi informado`;
        }
        else
        {
            var total = window.document.getElementById('total');
            total.innerHTML = `Ao todo, ${vetNum.length} números foram informados`;
        }

        var maior = window.document.getElementById('maior');
        maior.innerHTML = `O maior valor informado foi ${Math.max.apply(null, vetNum)}`;

        var menor = window.document.getElementById('menor');
        menor.innerHTML = `O menor valor informado foi ${Math.min.apply(null, vetNum)}`;

        var soma = window.document.getElementById('soma');
        var resSoma = vetNum.reduce((resSoma, currentElement) => resSoma + currentElement);
        soma.innerHTML = `Somando todos os valores, teremos ${resSoma}`;

        var media = window.document.getElementById('media');
        var resMedia = vetNum.reduce((resMedia, currentElement) => resMedia + currentElement);
        media.innerHTML = `A média dos valores informados é ${(resMedia / vetNum.length)}`;
    }
}