//Escopo padrão em funcionamento;

    //{
        //let nome = 'sora';
        //console.log(nome);
    //}

//Escopo em funcionamento devido a variável var, ela tem escopo global. Let tem escopo local por isso da erro;

    //{
        //let nome = 'Sora';
        //var idade = 31;
    //}
    //console.log(idade);

    //Escopo usando const também da erro, const tem escopo local.

    //{
        //let nome = 'Sora';
        //var idade = 31;
        //const cor = 'vermelho';
    //}
    //console.log(cor);

//Escopo funcionando normalmente, o console pode acessar as variáveis que estão fora do escopo, mas não o contrário;

    //let nome = 'Sora';
    //var idade = 31;
    //const cor = 'vermelho';

    //{
        //console.log(nome, idade, cor);
    //}

//Escopo funcionando normalmente, escopo global e local, estão trabalhando de forma independente;

    //const nome = 'Sora';
    //let idade = 31;

    //{
       // const nome = 'Hinnah';
        //console.log(nome, idade);
    //}

    //console.log(nome);