function TarjetaUsuario({ nombre, programa }) {
    return (
    <article style = {{ border: '2px solid #427a8f', borderRadius: '5px'}}>
        <h2>{nombre}</h2>
        <p>Programa: {programa}</p>
    </article>
    );
}

export default TarjetaUsuario;