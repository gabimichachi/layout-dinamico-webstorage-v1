

// alerta básico
document.getElementById('alertBasico').addEventListener('click', function() {
    Swal.fire('Alerta Básico!',
       'Este é um alerta simples.', 
       'question');
  });

  // alerta de sucesso
  document.getElementById('alertSucesso').addEventListener('click', function() {
    Swal.fire('Sucesso!', 
      'A operação foi concluída com sucesso.', 
      'success');
  });

  // alerta de erro
  document.getElementById('alertErro').addEventListener('click', function() {
    Swal.fire('Erro!', 'Algo deu errado, tente novamente.', 'error');
  });

  // alerta de aviso
  document.getElementById('alertAviso').addEventListener('click', function() {
    Swal.fire('Atenção!', 'Verifique os dados informados.', 'warning');
  });

  // alerta informativo
  document.getElementById('alertInfo').addEventListener('click', function() {
    Swal.fire('Informação', 'Este é um alerta de informação.', 'info');
  });












  // alerta de confirmação com botões personalizado (confirmar/cancelar)
  document.getElementById('alertConfirm').addEventListener('click', function() {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Esta ação é irreversível!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim, prosseguir!',
      cancelButtonText: 'Cancelar'
      

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Confirmado!', 'Você confirmou a ação.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'A ação foi cancelada.', 'error');
      }
    });
  });





  // alerta com prompt de input
  document.getElementById('alertInput').addEventListener('click', function() {
    Swal.fire({
      title: 'Digite seu nome',
      input: 'text',
      inputPlaceholder: 'Seu nome aqui',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire(`Olá, ${result.value}!`, 'Seu nome foi recebido.', 'success');
      }
    });
  });



  // alerta com timer (fecha automaticamente)
  document.getElementById('alertTimer').addEventListener('click', function() {
    Swal.fire({
      title: 'Auto Fechamento!',
      text: 'Este alerta será fechado em 3 segundos.',
      timer: 3000,
      timerProgressBar: true
    });
  });


  // alerta com timer (contador regressivo)

  document.getElementById('alertTimerCount').addEventListener('click', function() {
    
    let timerInterval;
    Swal.fire({
      title: "Auto Fechamento",
      html: "Este alerta será fechado em <strong></strong> segundos.",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector('strong');
        timerInterval = setInterval(() => {
          timer.textContent = `${(Swal.getTimerLeft() / 1000).toFixed(0)}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });

  });


  // alerta com HTML customizado
  document.getElementById('alertHtml').addEventListener('click', function() {
    Swal.fire({
      title: '<strong>Alerta com HTML</strong>',
      icon: 'info',
      html: 'Você pode usar <strong>HTML customizado</strong> aqui! <br> <a href="https://sweetalert2.github.io" target="_blank" >Mais informações</a>.',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Ok', 
      color: 'red',
      position: 'top-end'
    });
  });