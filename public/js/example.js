$(document).ready(function() {
    $('.send').click(function() {
        let newName = $('#nombre').val()
        console.log(newName);
        if (newName && newName.length > 0) {
            $.post('/save-user', {name:newName}, function(data, status) {
                console.log(`${data.message} and status is ${status}`)
                alert(data.message)
                setTimeout(function() {
                    location.reload();
                }, 2000);
            })
        }
    })
})

$(document).ready(function() {
    $('.boton').click(function() {
        let oldName = $(this).closest("#target").clone().children().remove().end().text();
        console.log(oldName);
        let name = oldName.replace(' ',"");
        if (name && name.length > 0) {
            $.post('/delete-user', {name:name}, function(data, status) {
                console.log(`${data.message} and status is ${status}`)
                alert(data.message)
                setTimeout(function() {
                    location.reload();
                }, 2000);
            })
        }
    })
})
