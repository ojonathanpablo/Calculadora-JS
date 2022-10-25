/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
       

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter()
            
        },

        cliqueBotoes() {

            document.addEventListener('click', function (e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagarUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            }.bind(this));
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta()                
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta); 

                if(!conta){
                    alert('Conta invalida')
                    return;
                }

                this.display.value = conta;
            }catch{
                alert('Conta invalida');
                return;
            }
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay (){
            this.display.value = '';
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
      
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();

*/

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () =>{
        this.capturaCliques();
        this.pressionaEnter();
    };



    this.capturaCliques = () =>{
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num'))
                {
                 this.btnParaDisplay(el)
                }
            if (el.classList.contains('btn-clear'))
            {
                this.clearDisplay();
            }
            if (el.classList.contains('btn-del'))
            {
                this.apagarUm();
            }
            if (el.classList.contains('btn-eq')){
                this.realizarConta();
            }
        });
    this.pressionaEnter = () =>{
        this.display.addEventListener('keyup', e =>{
            if (e.keyCode === 13){
                this.realizarConta()
            }
        })
    };

                
    }

    this.btnParaDisplay = el => {
        this.display.value += el.innerText;
    };

    this.clearDisplay = () =>{
        this.display.value = '' 
    }
    this.apagarUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }
    this.realizarConta = () => {
       let conta = eval(this.display.value);
        this.display.value = conta
    }





   

}

const calculadora = new Calculadora();
calculadora.inicia();
