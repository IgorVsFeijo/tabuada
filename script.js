function calcular(){
    num = document.getElementById('num').value
    res = document.getElementById('tabuada')

    if(num == ''){
        alert('[ERRO] Insira um número')
    }
    else{
        num = num
        res.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            res.innerHTML += `<td>
                ${num} x ${i} = ${num*i}
                </td>`
        }
    }

    console.log(res)
}