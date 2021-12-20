




function calcularMediaAritmetica (lista){
    // // let sumaLista = 0;
    // for (let i= 0; i < lista.length;i++){
    //     sumaLista = sumaLista+ lista[i];
        
    // }
    
    const sumalista= lista.reduce(
        function (valorAcumulado = 0,newelement){
            return valorAcumulado + newelement;


        }
    );

    const promedioLista= sumalista / lista.length;

    return promedioLista;
    

 
}