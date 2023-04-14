function oceano(){
        // Gera um valor aleatório entre 0 e 255
        const blueValue = Math.floor(Math.random() * 256);
        const r = Math.floor(Math.random() * 30);
        const g = Math.floor(Math.random() * 30);
        const a = 0.675;
        // Retorna a cor no formato RGB
        return `rgb(${r}, ${g}, ${blueValue}, ${a})`;
}

function floresta(){
    // Gera um valor aleatório entre 0 e 255
    const greenValue = Math.floor(Math.random() * 256);
    const r = Math.floor(Math.random() * 30);
    const b = Math.floor(Math.random() * 30);
    const a = 0.675;
    // Retorna a cor no formato RGB
    return `rgb(${r}, ${greenValue}, ${b}, ${a})`;
}


function universo(){
    // Gera um valor aleatório entre 0 e 255
    const grayValue = Math.floor(Math.random() * 256);
    const a = 0.675;
    // Retorna a cor no formato RGB
    return `rgb(${grayValue}, ${grayValue}, ${grayValue}, ${a})`;
}