const canvas = document.getElementById('indianFlag');
const ctx = canvas.getContext('2d');

// Draw saffron rectangle
ctx.fillStyle = '#FF9933';
ctx.fillRect(0, 0, canvas.width, canvas.height / 3);

// Draw white rectangle
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, canvas.height / 3, canvas.width, canvas.height / 3);

// Draw green rectangle
ctx.fillStyle = '#138808';
ctx.fillRect(0, (canvas.height * 2) / 3, canvas.width, canvas.height / 3);

// Draw Ashoka Chakra
const drawChakra = () => {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
    ctx.strokeStyle = '#000080';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Draw 24 spokes
    for (let i = 0; i < 24; i++) {
        const angle = (Math.PI * 2) / 24 * i;
        const x = canvas.width / 2 + Math.cos(angle) * 30;
        const y = canvas.height / 2 + Math.sin(angle) * 30;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};

drawChakra();
