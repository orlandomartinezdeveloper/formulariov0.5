document.addEventListener('DOMContentLoaded', () => {
    data = [];
    gsap.from("#formulario", { duration: 2, y: 300, opacity: 0, scale: 0.5 });
    let botonRegistrar = document.querySelector('#botonRegistrar');
    botonRegistrar.addEventListener('click', registrar);
    // Fechar Janelas
    let xxxPreencher = document.querySelector('#xxxPreencher');
    xxxPreencher.addEventListener('click', eventoCerrar);
    let xxxEmailRuim = document.querySelector('#xxxEmailRuim');
    xxxEmailRuim.addEventListener('click', eventoCerrar);
    let buttonDadosEnviados = document.querySelector('#buttonDadosEnviados');
    buttonDadosEnviados.addEventListener('click', eventoCerrar);
    function eventoCerrar() {
        document.getElementById('preencher').style.transform = "scale(0) translate(-100%, -100%)";
        document.getElementById('emailRuim').style.transform = "scale(0) translate(-100%, -100%)";
        document.getElementById('dadosEnviados').style.transform = "scale(0) translate(-100%, -100%)";
    };
    function registrar() {
        let nome = document.getElementById('nombre').value;
        let sobrenome = document.getElementById('apellido').value;
        let idade = document.getElementById('edad').value;
        let email = document.getElementById('correo').value;
        if ((nome.trim() && sobrenome.trim() && idade.trim() && email.trim()) == "") {
            let preencher = document.getElementById('preencher');
            preencher.style.transition = "transform 1s";
            preencher.style.transform = "scale(1)";
        } else if (!validateEmail(email)) {
            let preencher = document.getElementById('emailRuim');
            preencher.style.transition = "transform 1s";
            preencher.style.transform = "scale(1)";
        } else {
            let preencher = document.getElementById('dadosEnviados');
            preencher.style.transition = "transform 1s";
            preencher.style.transform = "scale(1)";
            function Person(nome, sobrenome, idade, email) {
                this.nome = nome;
                this.sobrenome = sobrenome;
                this.idade = idade;
                this.email = email;
            }
            newPerson = new Person(nome, sobrenome, idade, email);
            insertContact(newPerson);
        };
    }
    function validateEmail(email) {
        let valEmail = /\S+@\S+\.\S+/;
        return valEmail.test(email);
    }
    function insertContact(newPerson) {
        data.push(newPerson);
        const tablaRes = document.getElementById('tableX');
        const tdNome = document.createElement('div');
        const tdSobrenome = document.createElement('div');
        const tdIdade = document.createElement('div');
        const tdEmail = document.createElement('div');
        tdNome.textContent = newPerson.nome;
        tdSobrenome.textContent = newPerson.sobrenome;
        tdIdade.textContent = newPerson.idade;
        tdEmail.textContent = newPerson.email;
        tablaRes.appendChild(tdNome);
        tablaRes.appendChild(tdSobrenome);
        tablaRes.appendChild(tdIdade);
        tablaRes.appendChild(tdEmail);
    }
    let verResultados = document.querySelector('#verResultado').addEventListener('click', () => {
        let tablePX = document.getElementById('tableP');
        tablePX.style.transition = "transform 1s";
        tablePX.style.transform = "scale(1)";
    });

    document.getElementById('fecharTableP').addEventListener('click', () => {
        document.getElementById('tableP').style.transform = "scale(0)"
    })


});



