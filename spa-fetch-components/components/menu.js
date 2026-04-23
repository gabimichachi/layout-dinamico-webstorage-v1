// inicializa comportamento do menu mobile //
    export const iniciarMenu = () =>{
        const menus = document.querySelectorAll('[data-menu]')

        menus.forEach((menu) =>{
        
        const botao = menu.querySelector('.menu__botao');

        const toggleMenu = () => {

            menu.classList.toggle('active');

            const ativo = menu.classList.contains('active');

            botao.setAttribute('aria-expanded', ativo)
            botao.setAttribute('aria-label', ativo ? 'fechar menu': 'abrir menu')
        };

        const fecharComEsc = (event) => {
            const isEsc = event.key === 'Escape';
            const ativo = menu.classList.contains('active');

            if (isEsc && ativo){
                menu.classList.remove('actived')
            }
        };

        botao.addEventListener('pointerdown', toggleMenu );
        document.addEventListener('keydown', fecharComEsc);
    });
};