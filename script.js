/ ChatBot Engine - Lógica del chatbot
class ChatBotEngine {
    constructor() {
        this.responses = new Map([
            // Saludos
            [['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'que tal', 'como estas'], 
                ['¡Hola! ¿En qué puedo ayudarte?', '¡Hola! ¿Cómo estás?', '¡Buenas! ¿Qué necesitas?']],
            
            // Despedidas
            [['adios', 'chao', 'hasta luego', 'nos vemos', 'bye', 'hasta la vista'], 
                ['¡Hasta luego!', '¡Que tengas un buen día!', '¡Nos vemos pronto!']],
            
            // Preguntas sobre el bot
            [['quien eres', 'que eres', 'como te llamas', 'tu nombre'], 
                ['Soy un chatbot básico creado para ayudarte', 'Me llamo ChatBot y estoy aquí para asistirte', 'Soy tu asistente virtual']],
            
            // Preguntas sobre capacidades
            [['que puedes hacer', 'que sabes', 'en que me ayudas', 'para que sirves'], 
                ['Puedo responder preguntas básicas y mantener una conversación contigo', 'Estoy aquí para ayudarte con información general', 'Puedo chatear contigo y responder tus dudas']],
            
            // Tiempo/Clima
            [['que tiempo hace', 'como esta el clima', 'llueve', 'hace frio', 'hace calor'], 
                ['No tengo acceso a información del clima en tiempo real', 'Te recomiendo consultar una app del clima', 'No puedo verificar el clima actual']],
            
            // Hora/Fecha
            [['que hora es', 'que dia es', 'fecha', 'hora actual'], 
                ['No tengo acceso a la hora actual del sistema', 'Te sugiero revisar la hora en tu dispositivo', 'No puedo consultar la fecha y hora']],
            
            // Agradecimientos
            [['gracias', 'muchas gracias', 'te lo agradezco', 'thanks'], 
                ['¡De nada!', '¡Un placer ayudarte!', '¡Para eso estoy aquí!']],
            
            // Preguntas generales
            [['como estas', 'como te va', 'todo bien'], 
                ['¡Muy bien, gracias por preguntar!', 'Todo perfecto, ¿y tú cómo estás?', '¡Excelente! ¿Cómo puedo ayudarte?']],
            
            // Ayuda
            [['ayuda', 'help', 'no entiendo', 'que hago'], 
                ['Puedes preguntarme cosas básicas o simplemente conversar conmigo', 'Escribe cualquier pregunta y haré mi mejor esfuerzo por responder', '¡Solo escribe lo que quieras saber!']],
            
            // Matemáticas básicas
            [['suma', 'resta', 'multiplicacion', 'division', 'matematicas', 'calcular'], 
                ['Puedo ayudarte con matemáticas básicas. ¿Qué operación necesitas?', 'Dime qué cálculo quieres hacer', '¿Qué operación matemática necesitas?']],
            
            // Información personal
            [['edad', 'años', 'cuantos años', 'cuando naciste'], 
                ['Soy un programa, no tengo edad como los humanos', 'Fui creado recientemente', 'No tengo edad, soy software']],
            
            // Emociones
            [['estoy triste', 'me siento mal', 'estoy feliz', 'estoy contento'], 
                ['Entiendo cómo te sientes. ¿Hay algo en lo que pueda ayudarte?', 'Gracias por compartir eso conmigo', '¿Te gustaría hablar sobre ello?']],
            
            // Comida
            [['comida', 'comer', 'hambre', 'receta', 'cocinar'], 
                ['¡Me encanta hablar de comida! ¿Qué te gusta comer?', 'No como, pero puedo conversar sobre comida contigo', '¿Tienes alguna comida favorita?']],
            
            // Tecnología
            [['tecnologia', 'computadora', 'celular', 'internet', 'android'], 
                ['La tecnología es fascinante, ¿verdad?', '¡Me gusta hablar de tecnología!', '¿Qué aspecto de la tecnología te interesa?']],
            
            // Música
            [['musica', 'cancion', 'cantar', 'artista', 'banda'], 
                ['¡La música es genial! ¿Qué tipo de música te gusta?', 'No puedo escuchar música, pero me gusta hablar de ella', '¿Tienes algún artista favorito?']],
            
            // Deportes
            [['deporte', 'futbol', 'basketball', 'correr', 'ejercicio'], 
                ['¡Los deportes son importantes para la salud!', '¿Practicas algún deporte?', 'El ejercicio es muy bueno para ti']],
            
            // Estudios/Trabajo
            [['estudiar', 'trabajo', 'escuela', 'universidad', 'colegio'], 
                ['¡Estudiar es muy importante!', '¿En qué estás trabajando o estudiando?', 'La educación es clave para el futuro']],
            
            // Familia
            [['familia', 'papa', 'mama', 'hermano', 'hermana', 'padres'], 
                ['La familia es muy importante', '¿Cómo está tu familia?', 'Es bonito tener una buena familia']],
            
            // Colores
            [['color', 'azul', 'rojo', 'verde', 'amarillo', 'favorito'], 
                ['¡Los colores hacen el mundo más bonito!', '¿Cuál es tu color favorito?', 'Me gustan todos los colores']],
            
            // Animales
            [['animal', 'perro', 'gato', 'mascota', 'animales'], 
                ['¡Los animales son increíbles!', '¿Tienes alguna mascota?', 'Los animales son muy especiales']],
            
            // Viajes
            [['viajar', 'viaje', 'vacaciones', 'pais', 'ciudad'], 
                ['¡Viajar debe ser muy emocionante!', '¿Te gusta viajar?', '¿Cuál es tu lugar favorito?']],
            
            // Libros/Lectura
            [['libro', 'leer', 'lectura', 'novela', 'historia'], 
                ['¡Leer es una actividad maravillosa!', '¿Te gusta leer?', 'Los libros nos enseñan mucho']],
            
            // Películas/TV
            [['pelicula', 'cine', 'television', 'serie', 'actor'], 
                ['¡Las películas son entretenidas!', '¿Cuál es tu película favorita?', 'Me gusta hablar de cine']],
            
            // Juegos
            [['juego', 'jugar', 'videojuego', 'diversion', 'entretenimiento'], 
                ['¡Los juegos son muy divertidos!', '¿Te gusta jugar?', 'Los juegos son una buena forma de entretenerse']]
        ]);
        
        this.defaultResponses = [
            'Interesante, cuéntame más sobre eso',
            'No estoy seguro de cómo responder a eso, pero puedes seguir preguntando',
            'Esa es una pregunta interesante',
            '¿Podrías reformular tu pregunta?',
            'No tengo una respuesta específica para eso, pero estoy aquí para ayudarte',
            'Hmm, no estoy seguro. ¿Hay algo más en lo que pueda ayudarte?',
            'Esa es una buena pregunta. ¿Qué más te gustaría saber?',
            'No tengo información sobre eso en este momento',
            'Interesante punto de vista. ¿Qué opinas tú?',
            'Me gustaría poder ayudarte mejor con eso'
        ];
    }
    
    processMessage(userInput) {
        const normalizedInput = this.normalizeText(userInput);
        
        // Buscar coincidencias en las palabras clave
        for (const [keywords, responseList] of this.responses) {
            if (keywords.some(keyword => normalizedInput.includes(keyword))) {
                return this.getRandomResponse(responseList);
            }
        }
        
        // Si no encuentra coincidencias, devolver respuesta por defecto
        return this.getRandomResponse(this.defaultResponses);
    }
    
    normalizeText(text) {
        // Convertir a minúsculas
        let normalized = text.toLowerCase();
        
        // Eliminar acentos
        normalized = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        
        // Eliminar signos de puntuación
        normalized = normalized.replace(/[^\w\s]/g, '');
        
        // Eliminar espacios extra
        normalized = normalized.trim().replace(/\s+/g, ' ');
        
        return normalized;
    }
    
    getRandomResponse(responseArray) {
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
    
    getWelcomeMessage() {
        return '¡Hola! Soy tu ChatBot personal. Puedes preguntarme lo que quieras o simplemente conversar conmigo. ¿En qué puedo ayudarte hoy?';
    }
}

// Clase para manejar la interfaz de usuario
class ChatUI {
    constructor() {
        this.chatBot = new ChatBotEngine();
        this.messagesContainer = document.getElementById('messagesContainer');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');
        
        this.initializeEventListeners();
        this.initializeWelcomeMessage();
        this.updateCharCounter();
    }
    
    initializeEventListeners() {
        // Enviar mensaje con botón
        this.sendButton.addEventListener('click', () => this.sendMessage());
        
        // Enviar mensaje con Enter
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Contador de caracteres
        this.messageInput.addEventListener('input', () => this.updateCharCounter());
        
        // Auto-resize del input
        this.messageInput.addEventListener('input', () => this.autoResizeInput());
    }
    
    initializeWelcomeMessage() {
        const welcomeTime = document.getElementById('welcomeTime');
        if (welcomeTime) {
            welcomeTime.textContent = this.getCurrentTime();
        }
    }
    
    sendMessage() {
        const messageText = this.messageInput.value.trim();
        
        if (messageText === '') return;
        
        // Agregar mensaje del usuario
        this.addUserMessage(messageText);
        
        // Limpiar input
        this.messageInput.value = '';
        this.updateCharCounter();
        
        // Mostrar indicador de escritura
        this.showTypingIndicator();
        
        // Generar respuesta del bot con delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const botResponse = this.chatBot.processMessage(messageText);
            this.addBotMessage(botResponse);
        }, 800 + Math.random() * 1200); // Delay aleatorio entre 800ms y 2s
    }
    
    addUserMessage(message) {
        const messageElement = this.createMessageElement(message, 'user');
        this.messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    addBotMessage(message) {
        const messageElement = this.createMessageElement(message, 'bot');
        this.messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    createMessageElement(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `${sender}-message`;
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="bot-avatar-small">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>${this.escapeHtml(message)}</p>
                    <span class="message-time">${this.getCurrentTime()}</span>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${this.escapeHtml(message)}</p>
                    <span class="message-time">${this.getCurrentTime()}</span>
                </div>
            `;
        }
        
        return messageDiv;
    }
    
    showTypingIndicator() {
        this.typingIndicator.classList.add('show');
        this.messagesContainer.appendChild(this.typingIndicator);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        this.typingIndicator.classList.remove('show');
        if (this.typingIndicator.parentNode) {
            this.typingIndicator.parentNode.removeChild(this.typingIndicator);
        }
    }
    
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }
    
    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
    
    updateCharCounter() {
        const charCount = this.messageInput.value.length;
        const maxChars = 500;
        const counter = document.querySelector('.char-counter');
        
        if (counter) {
            counter.textContent = `${charCount}/${maxChars}`;
            
            if (charCount > maxChars * 0.8) {
                counter.style.color = '#ff9800';
            } else if (charCount === maxChars) {
                counter.style.color = '#f44336';
            } else {
                counter.style.color = '#666';
            }
        }
        
        // Deshabilitar botón si está vacío o excede el límite
        this.sendButton.disabled = charCount === 0 || charCount > maxChars;
    }
    
    autoResizeInput() {
        this.messageInput.style.height = 'auto';
        this.messageInput.style.height = Math.min(this.messageInput.scrollHeight, 120) + 'px';
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Inicializar la aplicación cuando el DOM esté listo
let chatUIInstance;
document.addEventListener('DOMContentLoaded', () => {
  chatUIInstance = new ChatUI();
});

// Prevenir zoom en iOS al hacer focus en inputs
document.addEventListener('touchstart', () => {}, { passive: true });

 
