# Guia de Configuracao de Comunicacao no Airbnb

# Airbnb Communication Setup Guide

Este guia explica como configurar os Scheduled Messages (Mensagens Agendadas) no Airbnb, otimizar seu tempo de resposta, e testar tudo antes de ativar.

---

## 1. Pre-Requisitos (FAZER ANTES de criar Scheduled Messages)

> **IMPORTANTE:** Shortcodes como `{wifi_password}` e `{check_in_time}` puxam informacoes dos campos do anuncio. Se esses campos estiverem vazios, o shortcode mostra texto em branco na mensagem enviada ao hospede. Preencha TODOS os campos abaixo antes de criar qualquer Scheduled Message.

### Checklist de Campos do Anuncio

Acesse **Airbnb > Seus Anuncios > [Sitio Girassol] > Editar** e preencha:

- [ ] **WiFi (rede e senha):** Anuncio > Comodidades ou Recursos para Hospedes
  - Campo: Nome da rede WiFi
  - Campo: Senha do WiFi
  - Teste: O shortcode `{wifi_password}` deve mostrar a senha correta

- [ ] **Instrucoes de Check-in:** Anuncio > Guia de Chegada (Arrival Guide)
  - Inclua: como encontrar a propriedade, onde estacionar, como acessar (chave/codigo)
  - Teste: O shortcode `{check_in_time}` deve mostrar o horario configurado

- [ ] **Instrucoes de Check-out:** Anuncio > Instrucoes de Check-out
  - Inclua: horario de saida, o que fazer antes de sair (lixo, louza, chaves)
  - Teste: O shortcode `{checkout_time}` deve mostrar o horario configurado

- [ ] **Regras da Casa:** Anuncio > Regras da Casa (House Rules)
  - Inclua: horario de silencio, politica de fumo/pets, capacidade maxima

- [ ] **Direcoes para a propriedade:** Anuncio > Como Chegar (Getting There)
  - Inclua: endereco completo, referencia visual, instrucoes para a ultima parte do caminho

### Por que isso e importante

Os Scheduled Messages usam shortcodes que puxam automaticamente dados do anuncio. Exemplo:

| Shortcode | Campo que referencia | Se vazio... |
|-----------|---------------------|-------------|
| `{wifi_password}` | WiFi > Senha | Mensagem mostra espaco em branco |
| `{check_in_time}` | Guia de Chegada > Horario | Mensagem mostra espaco em branco |
| `{checkout_time}` | Check-out > Horario | Mensagem mostra espaco em branco |
| `{guest_first_name}` | Perfil do hospede | Nunca vazio (automatico) |

**Verificacao:** Apos preencher, crie uma mensagem de rascunho com um shortcode e use "Preview" para confirmar que o valor aparece corretamente.

---

## 2. Criando os Scheduled Messages

Acesse: **Airbnb > Painel do Anfitriao > Caixa de Entrada > Scheduled Messages > Criar Nova**

*(Em ingles: Host Dashboard > Inbox > Scheduled Messages > Create New)*

---

### Template 1: Pre-Estadia (3 dias antes do check-in)

**Passo a passo:**

1. Clique em **"Criar Nova Mensagem Agendada"** (Create New Scheduled Message)
2. **Nome da mensagem:** `Pre-Estadia - 3 dias antes`
3. **Gatilho (Trigger):** Selecione "Before check-in" > **3 days**
4. **Horario de envio:** **10:00 AM**
5. **Conteudo:** Copie e cole o Template 1 do arquivo `guest-message-templates.md`
6. **IMPORTANTE -- Substitua os placeholders:**
   - Troque `[INSERIR ENDERECO COMPLETO]` pelo endereco real da propriedade
   - Troque `[INSERIR LINK GOOGLE MAPS]` pelo link real do Google Maps
   - Troque `[NUMERO_WHATSAPP]` pelo seu numero de WhatsApp (aparece 2x no template)
7. Clique em **"Salvar"** (Save)
8. **Verificacao:** Clique em "Preview" para confirmar que os shortcodes `{guest_first_name}`, `{check_in_date}`, `{check_in_time}` estao resolvendo corretamente

---

### Template 2: Dia do Check-in (manhã do check-in)

**Passo a passo:**

1. Clique em **"Criar Nova Mensagem Agendada"**
2. **Nome da mensagem:** `Dia do Check-in`
3. **Gatilho (Trigger):** Selecione "On check-in day" ou "Before check-in" > **0 days**
4. **Horario de envio:** **9:00 AM**
5. **Conteudo:** Copie e cole o Template 2 do arquivo `guest-message-templates.md`
6. **IMPORTANTE -- Substitua os placeholders:**
   - Troque `[INSTRUCOES_CHECKIN]` pelas instrucoes reais de acesso (localizacao da chave, codigo do portao, etc.)
   - Troque `[NUMERO_WHATSAPP]` pelo seu numero de WhatsApp
   - Troque `[LOCALIZACAO_MANUAL]` pelo local onde o manual impresso esta (ex: "na mesa da sala de estar")
7. Clique em **"Salvar"**
8. **Verificacao:** Clique em "Preview" para confirmar que `{check_in_time}`, `{wifi_password}`, `{listing_name}` estao resolvendo corretamente

---

### Template 3: Pos-Checkout (1 dia apos o checkout)

**Passo a passo:**

1. Clique em **"Criar Nova Mensagem Agendada"**
2. **Nome da mensagem:** `Pos-Checkout - Review`
3. **Gatilho (Trigger):** Selecione "After checkout" > **1 day**
4. **Horario de envio:** **11:00 AM**
5. **Conteudo:** Copie e cole o Template 3 do arquivo `guest-message-templates.md`
6. **IMPORTANTE -- Substitua:**
   - Confirme que o nome de assinatura no final ("Equipe Sitio Girassol") esta correto ou personalize com seu nome
7. Clique em **"Salvar"**
8. **Verificacao:** Clique em "Preview" para confirmar que `{guest_first_name}` esta resolvendo corretamente

---

## 3. Otimizacao do Tempo de Resposta (COMM-04)

O Airbnb valoriza anfitrioes que respondem rapidamente. Para manter o status de Superhost, e necessario >90% de taxa de resposta em 24 horas. Mas responder em menos de 1 hora aumenta significativamente sua taxa de conversao (consultas que viram reservas).

### Ativar Notificacoes Push

1. Abra o **app do Airbnb** no celular
2. Va em **Configuracoes > Notificacoes > Mensagens**
3. Ative **notificacoes push** para novas mensagens
4. Ative tambem notificacoes para **novas reservas** e **pedidos de reserva**

### Estrategia de Resposta Rapida

- **Horario operacional:** 8:00 - 22:00 (defina mentalmente)
- **Meta:** Responder a todas as mensagens em **menos de 1 hora** durante horario operacional
- **Dica:** Use o app do Airbnb no celular para respostas rapidas quando estiver fora do computador
- **Respostas salvas:** Configure 2-3 respostas rapidas no app para perguntas frequentes:

**Resposta rapida 1 -- Disponibilidade:**
```
Ola! Obrigado pelo interesse no Sitio Girassol! As datas que voce mencionou estao disponiveis. O valor para [X] noites seria de R$ [VALOR]. Posso confirmar a reserva para voce?
```

**Resposta rapida 2 -- Como chegar:**
```
O Sitio Girassol fica na regiao de Sao Roque, a ~1h30 de SP capital. Apos a reserva, envio o endereco completo com link do Google Maps e dicas de parada para compras no caminho.
```

**Resposta rapida 3 -- O que tem no sitio:**
```
O sitio tem piscina, churrasqueira, cozinha equipada, WiFi, e muita natureza! Capacidade para ate [CAPACIDADE] hospedes. Quer que eu envie mais detalhes?
```

### Metricas do Airbnb

O Airbnb monitora estas metricas de comunicacao:

| Metrica | Requisito Superhost | Meta Recomendada |
|---------|--------------------|--------------------|
| Taxa de resposta | > 90% em 24h | 100% em 1h |
| Tempo medio de resposta | < 24 horas | < 1 hora |
| Scheduled Messages ativas | Nenhum (bonus) | 3 mensagens ativas |

---

## 4. Testando os Scheduled Messages

Apos criar os 3 Scheduled Messages, faca os seguintes testes para garantir que tudo funciona corretamente:

### Teste de Cada Mensagem

Para cada um dos 3 Scheduled Messages:

1. Acesse **Scheduled Messages** na Caixa de Entrada do Airbnb
2. Clique na mensagem que deseja testar
3. Clique em **"Preview"** ou **"Test"**
4. Verifique:
   - [ ] Shortcodes mostram valores reais (nao `{shortcode_name}` ou texto em branco)
   - [ ] Horario de envio esta correto
   - [ ] Gatilho (trigger) corresponde ao esperado
   - [ ] Texto esta formatado corretamente (sem quebras estranhas)
   - [ ] Placeholders do proprietario foram substituidos por valores reais

### Tabela de Verificacao

| Scheduled Message | Gatilho Correto | Horario Correto | Shortcodes OK |
|-------------------|-----------------|-----------------|---------------|
| Pre-Estadia | 3 dias antes do check-in | 10:00 AM | [ ] |
| Dia do Check-in | Dia do check-in | 9:00 AM | [ ] |
| Pos-Checkout | 1 dia apos checkout | 11:00 AM | [ ] |

### O que Verificar nos Shortcodes

| Shortcode | Deve mostrar | Se mostra em branco... |
|-----------|-------------|------------------------|
| `{guest_first_name}` | Nome do hospede (no preview mostra nome exemplo) | Nunca fica em branco |
| `{check_in_date}` | Data do check-in | Nunca fica em branco |
| `{check_in_time}` | Horario configurado (ex: 15:00) | Preencha Guia de Chegada |
| `{checkout_time}` | Horario configurado (ex: 11:00) | Preencha Instrucoes de Check-out |
| `{wifi_password}` | Senha do WiFi | Preencha WiFi em Comodidades |
| `{listing_name}` | Nome do anuncio | Nunca fica em branco |

---

## 5. Checklist Final de Verificacao

Antes de considerar a comunicacao configurada, confirme todos os itens:

### Pre-requisitos
- [ ] Todos os campos do anuncio preenchidos (WiFi, instrucoes de check-in, regras, direcoes)
- [ ] Shortcodes testados e resolvendo valores corretos

### Scheduled Messages
- [ ] Pre-Estadia criado com gatilho **3 dias antes** do check-in, envio as **10:00 AM**
- [ ] Dia do Check-in criado com gatilho **dia do check-in**, envio as **9:00 AM**
- [ ] Pos-Checkout criado com gatilho **1 dia apos** checkout, envio as **11:00 AM**
- [ ] Todos os shortcodes testados e resolvendo corretamente
- [ ] Todos os placeholders do proprietario substituidos por valores reais

### Comunicacao Geral
- [ ] Push notifications ativadas no app do Airbnb (celular)
- [ ] 2-3 respostas rapidas configuradas para perguntas frequentes
- [ ] Manual da casa impresso e colocado em [LOCALIZACAO_MANUAL] na propriedade

### Documentos Relacionados
- `guest-message-templates.md` -- Os 3 templates de mensagem com conteudo completo
- `house-manual.md` -- Manual completo da casa para imprimir e deixar na propriedade
