let mostrarAmigos = () => {
    let lista = $('#lista');
    lista.empty();
    $.get('http://localhost:5000/amigos', (respuesta) => {
        respuesta.forEach((elemento) =>{
            let li = `<li>${elemento.name}</li>`//template string para crear el elemento que querramos
            lista.append(li);
        })
    })
}
$('#boton').click(mostrarAmigos);


$('#search').click(() =>{
    let id = $('#input').val();
    $.get(`http://localhost:5000/amigos/${id}`, (respuesta) => {
        $('#amigo').text(respuesta.name);
      
}) })

$('#delete').click(() =>{
    let id = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: ()=> {
            $('#success').text(`El amigo con id: ${id} fue borrado con éxito`);
        }       
    })
 });