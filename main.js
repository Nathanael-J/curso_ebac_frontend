$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()
        const Tarefa = $('#NovaTarefa').val()
        const NovoItem = $('<li></li>')
        $(`<div class="pointer">${Tarefa}</div>`).appendTo(NovoItem)
        $(NovoItem).appendTo('ol').click(function(){$(event.target).toggleClass('riscado')})
        $('#NovaTarefa').val('')
    })
})