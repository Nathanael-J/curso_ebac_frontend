$(document).ready(function(){

    $('#CPF').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    })
    $('#Telefone').mask('(00) 0000-0000', {
        placeholder: '(00) 0000-0000'
    })
    $('#CEP').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('.container-form').validate({
        rules: {
            NC:{
                required: true
            },
            Email: {
                required: true,
                email: true
            },
            Telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            Endereço: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
            NC: 'Por favor, digite seu nome completo',
            Email: 'Por favor, digite um email válido',
            Telefone: 'Por favor, digite um número de telefone válido',
            CPF: 'Por favor, digite um CPF válido',
            Endereço: 'Por favor, digite um endereço válido',
            CEP: 'Por favor, digite um CEP válido'
        }
    })

})