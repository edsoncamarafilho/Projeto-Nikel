const nome = "Edson Câmara";
let nome2 = "";
let pessoaDefault = {
    nome: "Edson Câmara Filho",
    idade: "16",
    trabalho: "Estudante hihi",  
}

let nomes = ["Edson Câmara", "Amanda Mantey", "Mandi"];
let pessoas = [
    {
        nome: "Edson Câmara Filho",
        idade: "16",
        trabalho: "Programador", 
    },
    
    {
        nome: "Amanda Mantey",
        idade: "16",
        trabalho: "Costureira", 
    }
];

function alteraNome (nome2) {
    nome2 = "Mandi"
    console.log("Valor alterado recebendo o nome:");
    console.log(nome2);
}

function recebeEalteraNome (novoNome) {
    nome2 = (novoNome);
    console.log("Valor alterado recebendo o nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);   
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}


function imprimirPessoas() {
    console.log("-----IMPRIMIR PESSOA-----")
    pessoas.forEach((item) => {  
    console.log("Nome:");
    console.log(item.nome);
    

    console.log("Idade:");
    console.log(item.idade);

    console.log("Trabalho:");
    console.log(item.trabalho);   
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Marquinhos",
    idade:"43",
    trabalho:"Médico"
});

imprimirPessoas ()
    
//ImprimirPessoa(pessoaDefault);

// ImprimirPessoa({
    // nome: "Amanda Mantey",
    // idade:"16",
    // trabalho:"Estudante hehe"
// });

//recebeEalteraNome ("Edinho");
//recebeEalteraNome ("Vanessa");

//alterarNome ();