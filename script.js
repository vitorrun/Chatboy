document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  if (message === '') return;

  addMessage('user', message);
  const response = getBotResponse(message.toLowerCase());
  setTimeout(() => addMessage('bot', response), 600);
  userInput.value = '';
});

function addMessage(sender, text) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const greetings = ['buenos días', 'buenas tardes', 'buenas noches', 'hola', 'holi', 'que tal', 'buenas'];
  if (greetings.some(g => input.includes(g))) {
    return '¡Hola! ¿Qué deseas consultar hoy?';
  }

  if (input.includes('precio') && input.includes('plan') && input.includes('telefonía')) {
    return '📱 Planes de telefonía disponibles:\n- 6GB por 60.000 Gs\n- 9GB por 90.000 Gs\n- 15GB por 150.000 Gs\n- 50GB por 300.000 Gs.';
  }

  if (input.includes('qué incluye') && input.includes('6')) {
    return '📦 El plan de 6GB incluye:\n- Llamadas y mensajes ilimitados\n- WhatsApp gratis\n- Roaming en Argentina, Chile y Uruguay\n- 10.000 Gs de saldo.';
  }

  if (input.includes('qué incluye') && input.includes('15')) {
    return '📦 El plan de 15GB incluye:\n- Llamadas y mensajes ilimitados\n- WhatsApp gratis\n- Roaming mundial\n- 10.000 Gs de saldo.';
  }

  if (input.includes('smartphone') || input.includes('celular') || input.includes('teléfono')) {
    return '📱 Modelos disponibles:\n1. Samsung Galaxy S24 - 4.500.000 Gs\n2. iPhone 15 - 5.000.000 Gs\n3. Xiaomi 13 Pro - 3.200.000 Gs\n4. Motorola Edge 40 - 2.500.000 Gs\n5. Realme GT5 - 1.800.000 Gs\n6. Huawei P60 - 3.700.000 Gs\n7. Oppo Find X6 - 3.600.000 Gs\n8. Vivo X100 Pro - 4.100.000 Gs\n9. Sony Xperia 1 V - 4.600.000 Gs\n10. Google Pixel 8 - 4.000.000 Gs';
  }

  if (input.includes('contratar') || input.includes('comprar') || input.includes('adquirir')) {
    const respuestas = [
      'Podés llamar al *211 para hablar con un asesor.',
      'Contactanos vía WhatsApp y te ayudamos a contratar.',
      'Visitá nuestra tienda más cercana.',
      'Te paso con nuestro equipo de ventas. Un momento...',
      'Llamá al 021-600-000 y elegí la opción 2.',
      'También podés hacerlo desde nuestra app oficial.',
      'Ingresá a gigacom.com y seguí los pasos.',
      '¿Querés que un asesor te llame?',
      'Podés agendar una cita en línea.',
      'Usá nuestro chatbot de ventas haciendo clic aquí 👉 [link ficticio]'
    ];
    return respuestas[Math.floor(Math.random() * respuestas.length)];
  }

  if (input.includes('plan') && input.includes('internet')) {
    return '🌐 Planes de Internet:\n- 50Mbps por 150.000 Gs\n- 100Mbps por 250.000 Gs\n- 300Mbps por 400.000 Gs\nTodos incluyen modem Wi-Fi gratis, soporte 24/7 y sin costo de instalación.';
  }

  return '🤖 No entendí tu mensaje. Podés consultar sobre: planes de telefonía, internet, TV, smartphones, o cómo contratar.';
}