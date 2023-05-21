function criaCalc() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.clickButton();
      this.clearDisp();
      this.pressEnter();
      console.log('Iniciado');
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode == 13) {
          this.calcular();
        }
      });
    },

    clearDisp() {
      this.display.value = '';
    },

    delRec() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calcular() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
      }
    },

    clickButton() {
      // this -> calculadora
      document.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnToDisp(el.innerText);
        }

        if (el.classList.contains('btn-clr')) {
          this.clearDisp();
        }

        if (el.classList.contains('btn-del')) {
          this.delRec();
        }

        if (el.classList.contains('btn-eq')) {
          this.calcular();
        }

      }.bind(this));
    },
    
    btnToDisp(valor) {
      this.display.value += valor;
    }

  };
}

const calc = criaCalc();
calc.inicia();