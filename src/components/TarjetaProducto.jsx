function TarjetaProducto({ nombre, precio, categoria, imagen }) {
    return (
        <article style={{
            border: '2px solid #427a8f',
            borderRadius: '10px',
            padding: '15px',
            margin: '10px',
            width: '220px',
            backgroundColor: '#f0f8ff',
            textAlign: 'center'
        }}>
            <img
                src={imagen}
                alt={nombre}
                style={{
                    width: '150px',
                    height: '130px',
                    objectFit: 'contain'
                }}
            />

            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Categoría: {categoria}</p>
        </article>
    );
}

export default TarjetaProducto;