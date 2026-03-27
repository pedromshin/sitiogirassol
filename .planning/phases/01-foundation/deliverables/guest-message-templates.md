# Guest Message Templates - Sitio Girassol

Templates prontos para colar no Airbnb Scheduled Messages. Cada template usa shortcodes do Airbnb que preenchem automaticamente os dados do hospede e da reserva.

---

## Referencia de Shortcodes do Airbnb

Antes de criar os Scheduled Messages, **preencha todos os campos do anuncio que os shortcodes referenciam**. Shortcodes exibem texto em branco se o campo correspondente estiver vazio no anuncio.

| Shortcode | O que exibe | Onde preencher no Airbnb |
|-----------|-------------|--------------------------|
| `{guest_first_name}` | Primeiro nome do hospede | Automatico (dados da reserva) |
| `{check_in_date}` | Data do check-in | Automatico (dados da reserva) |
| `{check_in_time}` | Horario de check-in configurado | Anuncio > Guia de Chegada |
| `{checkout_time}` | Horario de check-out configurado | Anuncio > Instrucoes de Check-out |
| `{wifi_password}` | Senha do WiFi | Anuncio > Comodidades > Recursos para Hospedes |
| `{listing_name}` | Nome do anuncio | Anuncio > Titulo |

> **IMPORTANTE (Pitfall 5):** Antes de criar qualquer Scheduled Message, verifique que TODOS os campos do anuncio estao preenchidos: nome/senha do WiFi, instrucoes de check-in, regras da casa, e direcoes de chegada. Shortcodes que referenciam campos vazios mostram texto em branco na mensagem.

---

## Template 1: Mensagem Pre-Estadia (COMM-01)

**Configuracao no Airbnb:**
- Nome: "Pre-Estadia - 3 dias antes"
- Gatilho (Trigger): 3 dias antes do check-in
- Horario de envio: 10:00 AM

**Mensagem:**

```
Ola {guest_first_name}! Tudo bem?

Que alegria saber que voce vem para o Sitio Girassol! Estamos preparando tudo com carinho para receber voce no dia {check_in_date}.

Aqui vao algumas informacoes para voce aproveitar ao maximo sua estadia:

COMO CHEGAR
O sitio fica na regiao de Sao Roque/Sorocaba, a aproximadamente 1h30 de Sao Paulo capital. O endereco completo e:
[INSERIR ENDERECO COMPLETO]
(link do Google Maps: [INSERIR LINK GOOGLE MAPS])

Recomendamos usar o Waze ou Google Maps -- a estrada e tranquila, mas as ultimas ruas podem ser de terra/cascalho, entao va com calma.

O QUE ESPERAR
O Sitio Girassol e um refugio de natureza -- ambiente rural, muito verde, silencio, e ar puro. Voce tera acesso a piscina, churrasqueira, e uma area ampla ao ar livre. E o lugar perfeito para desconectar e relaxar.

DICAS PARA A REGIAO
- Pare em um supermercado em Sao Roque ou Sorocaba antes de chegar -- o mercado mais proximo do sitio pode ser um pouco distante.
- A regiao de Sao Roque e conhecida pelas vinicolas! Se tiver tempo, vale a pena visitar a Rota do Vinho.
- Nos fins de semana, alguns restaurantes na regiao podem ter fila, entao considere reservar com antecedencia.

O QUE TRAZER
- Protetor solar e repelente de insetos (estamos no meio da natureza!)
- Roupas confortaveis e calcados fechados para caminhar pelo terreno
- Roupas de banho para a piscina
- Alimentos e bebidas para sua estadia (nao ha loja no local)
- Carvao/lenha se quiser usar a churrasqueira (ou avise que providenciamos)

Qualquer duvida, e so mandar mensagem aqui ou no WhatsApp: [NUMERO_WHATSAPP]

Ate breve!
Equipe Sitio Girassol

--- English summary ---

DIRECTIONS: The property is in the Sao Roque/Sorocaba region, approximately 1.5 hours from Sao Paulo city. Full address: [INSERIR ENDERECO COMPLETO]. We recommend using Waze or Google Maps. The last stretch may be unpaved road -- drive carefully.

WHAT TO BRING: Sunscreen, insect repellent, comfortable walking shoes, swimwear, groceries and drinks (no store on-site), charcoal if you plan to BBQ.

SHOPPING TIP: Stop at a supermarket in Sao Roque or Sorocaba before arriving -- the nearest store to the property may be far.

Questions? Message us here or WhatsApp: [NUMERO_WHATSAPP]
```

---

## Template 2: Mensagem Dia da Chegada (COMM-02)

**Configuracao no Airbnb:**
- Nome: "Dia do Check-in"
- Gatilho (Trigger): Dia do check-in
- Horario de envio: 9:00 AM

**Mensagem:**

```
Bom dia, {guest_first_name}!

Hoje e o grande dia! Estamos ansiosos para receber voce no Sitio Girassol.

HORARIO DE CHECK-IN
Seu check-in e a partir das {check_in_time}. Se precisar de flexibilidade no horario, e so nos avisar -- tentamos ajudar sempre que possivel.

COMO ENTRAR NO SITIO
[INSTRUCOES_CHECKIN]

COMODIDADES PRINCIPAIS
- Piscina: aproveite a vontade (veja as regras de uso no manual da casa)
- Churrasqueira: pronta para uso, perfeita para um churrasco
- Cozinha: equipada com fogao, geladeira, microondas, utensilios e panelas

WIFI
Rede: {listing_name} WiFi
Senha: {wifi_password}

CONTATO DE EMERGENCIA
Para qualquer urgencia durante sua estadia:
WhatsApp: [NUMERO_WHATSAPP]

Deixamos um guia de boas-vindas em [LOCALIZACAO_MANUAL] com todas as informacoes sobre o sitio -- WiFi, regras da casa, dicas locais, e contatos de emergencia.

Desejamos uma estadia maravilhosa! Aproveite muito a natureza, a piscina, e a tranquilidade do Sitio Girassol.

Abracos,
Equipe Sitio Girassol

--- English summary ---

CHECK-IN: From {check_in_time}. Access instructions: [INSTRUCOES_CHECKIN]

WIFI
Network: {listing_name} WiFi
Password: {wifi_password}

EMERGENCY CONTACT
For any urgency during your stay, WhatsApp: [NUMERO_WHATSAPP]

KEY AMENITIES: Pool, BBQ area, fully equipped kitchen. A welcome guide with full details is located at [LOCALIZACAO_MANUAL].

We wish you a wonderful stay!
```

---

## Template 3: Mensagem Pos-Checkout (COMM-03)

**Configuracao no Airbnb:**
- Nome: "Pos-Checkout - Avaliacao"
- Gatilho (Trigger): 1 dia apos o checkout
- Horario de envio: 11:00 AM

**Mensagem:**

```
Ola {guest_first_name}!

Muito obrigado por ter escolhido o Sitio Girassol para sua estadia! Esperamos que voce tenha aproveitado bastante a tranquilidade do sitio, a piscina, e todo o contato com a natureza.

Receber voces foi um prazer, e ficamos muito felizes em saber que o sitio proporcionou bons momentos.

Se puder, gostavamos muito de pedir um favor: deixar uma avaliacao sobre sua experiencia no Sitio Girassol. As avaliacoes ajudam outras familias a descobrirem o sitio e nos ajudam a melhorar cada vez mais a experiencia dos nossos hospedes. Leva so alguns minutinhos e faz uma diferenca enorme para nos.

Voce e sempre bem-vindo de volta! Para futuras estadias, pode entrar em contato diretamente conosco -- teremos o maior prazer em receber voce novamente.

Um grande abraco e ate a proxima!

Com carinho,
Equipe Sitio Girassol
```

---

## Resumo de Placeholders do Proprietario

Antes de ativar os templates, substitua TODOS os placeholders abaixo com os valores reais:

| Placeholder | Descricao | Usado em |
|-------------|-----------|----------|
| `[INSERIR ENDERECO COMPLETO]` | Endereco completo do sitio com link do Google Maps | Template 1 (Pre-Estadia) |
| `[INSERIR LINK GOOGLE MAPS]` | Link do Google Maps para navegacao | Template 1 (Pre-Estadia) |
| `[NUMERO_WHATSAPP]` | Numero de WhatsApp do proprietario para emergencias | Templates 1, 2, 3 |
| `[INSTRUCOES_CHECKIN]` | Instrucoes especificas de check-in (localizacao da chave, codigo do portao, como acessar) | Template 2 (Dia da Chegada) |
| `[LOCALIZACAO_MANUAL]` | Onde o manual impresso da casa esta localizado na propriedade (ex: "na mesa da sala") | Template 2 (Dia da Chegada) |

### Checklist antes de ativar:

- [ ] Substituir `[INSERIR ENDERECO COMPLETO]` com o endereco real
- [ ] Substituir `[INSERIR LINK GOOGLE MAPS]` com o link do Maps
- [ ] Substituir `[NUMERO_WHATSAPP]` com seu numero (em todos os templates)
- [ ] Substituir `[INSTRUCOES_CHECKIN]` com instrucoes detalhadas de acesso
- [ ] Substituir `[LOCALIZACAO_MANUAL]` com o local do manual na propriedade
- [ ] Verificar que os campos do anuncio estao preenchidos (WiFi, check-in, regras)
- [ ] Testar cada Scheduled Message com preview para confirmar que shortcodes funcionam
