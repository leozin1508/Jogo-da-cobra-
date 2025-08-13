// ... (mantenha todo o código anterior até as configurações de cores)

// Atualize o objeto colors para:
const colors = {
    snakeHead: '#FF6B6B',
    snakeBody1: '#4ECDC4',
    snakeBody2: '#45B8AC',
    food: '#FFE66D',
    background: '#292F36',
    board: '#1A1E23',
    powerUp: '#B388FF'
};

// Modifique a função drawSnake para:
function drawSnake() {
    snake.forEach((segment, index) => {
        // Efeito gradiente no corpo
        if(index === 0) {
            ctx.fillStyle = colors.snakeHead;
        } else {
            // Alterna entre duas cores para o corpo
            ctx.fillStyle = index % 2 === 0 ? colors.snakeBody1 : colors.snakeBody2;
        }
        
        const posX = segment.x * tileSize;
        const posY = segment.y * tileSize;
        const radius = 5;
        
        // Desenha com bordas arredondadas
        ctx.beginPath();
        ctx.roundRect(posX, posY, tileSize, tileSize, radius);
        ctx.fill();
        
        // Efeito de brilho na cabeça
        if(index === 0) {
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            ctx.beginPath();
            ctx.arc(posX + tileSize/2, posY + tileSize/3, tileSize/4, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

// Modifique a função drawFood para:
function drawFood() {
    const posX = food.x * tileSize + tileSize/2;
    const posY = food.y * tileSize + tileSize/2;
    const radius = tileSize/2 - 2;
    
    // Efeito de brilho
    ctx.shadowColor = colors.food;
    ctx.shadowBlur = 15;
    
    // Cor principal
    ctx.fillStyle = colors.food;
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Detalhe interno
    ctx.fillStyle = 'rgba(255,230,109,0.6)';
    ctx.beginPath();
    ctx.arc(posX - radius/3, posY - radius/3, radius/3, 0, Math.PI * 2);
    ctx.fill();
    
    // Resetar sombra
    ctx.shadowColor = 'transparent';
}

// Adicione esta nova função para efeitos especiais
function drawSpecialEffects() {
    // Efeito de partículas no fundo
    if(Math.random() > 0.7) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.1})`;
        ctx.fillRect(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            1, 1
        );
    }
}

// Modifique a função renderGame para incluir os efeitos:
function renderGame() {
    // Fundo gradiente
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#292F36');
    gradient.addColorStop(1, '#1A1E23');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawGrid();
    drawSpecialEffects();
    drawFood();
    drawSnake();
}

// ... (mantenha o resto do código igual)
