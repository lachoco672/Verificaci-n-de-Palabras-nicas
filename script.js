// Función para verificar si todas las palabras son únicas
const areWordsUnique = (words) => {
    const wordSet = new Set(words);
    return wordSet.size === words.length;
};

// Capturar el formulario y mostrar el resultado
document.getElementById('unique-words-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const wordsInput = document.getElementById('words-input').value.trim();
    
    // Validar lista vacía
    if (wordsInput === "") {
        document.getElementById('result').textContent = "Por favor, ingrese palabras separadas por comas.";
        return;
    }

    // Dividir palabras por comas y eliminar espacios adicionales
    const wordsArray = wordsInput.split(",").map(word => word.trim());

    const isUnique = areWordsUnique(wordsArray);

    document.getElementById('result').textContent = 
        isUnique ? "Todas las palabras son únicas." : "Hay palabras duplicadas.";
});
