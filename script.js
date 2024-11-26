const contentDiv = document.getElementById('content');

function showPage(page) {
    let content = '';
    contentDiv.style.display = 'block';
    switch (page) {
        case 'pedidos':
            content = `
                <h2>Pedidos Recientes</h2>
                <div class="item-card">
                    <img src="https://source.unsplash.com/100x100/?coffee" alt="Latte">
                    <div>
                        <h4>Latte</h4>
                        <p>Precio: $80 MXN</p>
                    </div>
                </div>
                <div class="item-card">
                    <img src="https://source.unsplash.com/100x100/?frappuccino" alt="Frappuccino">
                    <div>
                        <h4>Caramel Frappuccino</h4>
                        <p>Precio: $120 MXN</p>
                    </div>
                </div>
            `;
            break;
        case 'sucursales':
            content = `
                <h2>Nuestras Sucursales</h2>
                <p>📍 Starbucks Centro - Av. Principal #123</p>
                <p>📍 Starbucks Norte - Calle Secundaria #456</p>
            `;
            break;
        case 'articulos':
            content = `
                <h2>Artículos Destacados</h2>
                <div class="item-card">
                    <img src="https://source.unsplash.com/100x100/?mug" alt="Taza">
                    <div>
                        <h4>Taza Edición Especial</h4>
                        <p>Precio: $150 MXN</p>
                    </div>
                </div>
                <div class="item-card">
                    <img src="https://source.unsplash.com/100x100/?coffeeBeans" alt="Granos de Café">
                    <div>
                        <h4>Granos de Café Premium</h4>
                        <p>Precio: $250 MXN</p>
                    </div>
                </div>
            `;
            break;
        case 'clientes':
            content = `
                <h2>Clientes Frecuentes</h2>
                <p>👤 Juan Pérez - Último pedido: Latte</p>
                <p>👤 María Gómez - Último pedido: Caramel Frappuccino</p>
            `;
            break;
    }
    contentDiv.innerHTML = content;
}
