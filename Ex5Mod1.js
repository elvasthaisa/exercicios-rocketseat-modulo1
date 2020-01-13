//Dado o seguinte vetor de objetos, 
//Escreva uma função que produza o seguinte resultado:
//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

const usuarios = [
{
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
    genero: "M"
},
{
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
    genero: "M"
}
];

function retornarString(usuario){
    return ('O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(', '));
}

function imprimirFrase(listaUsuarios) {
    for (const usuario of listaUsuarios) {
        console.log(retornarString(usuario));
    }
};

imprimirFrase(usuarios);
