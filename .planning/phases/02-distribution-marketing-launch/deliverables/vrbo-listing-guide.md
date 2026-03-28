# Guia de Cadastro e Anuncio no VRBO / AlugueTemporada

**Propriedade:** Sitio Girassol
**Data:** 2026-03-28
**Tempo estimado:** 20-30 minutos (anuncio fica ativo imediatamente)
**Nota importante:** O AlugueTemporada agora redireciona para o VRBO Brasil. Use vrbo.com para o cadastro.

---

## NOTA: AlugueTemporada agora e VRBO

O AlugueTemporada (plataforma brasileira popular para alugueis de temporada) foi adquirido pelo grupo Expedia e agora **redireciona automaticamente para o VRBO Brasil**. Ao acessar aluguetemporada.com.br, voce sera direcionado para vrbo.com.

**Vantagem principal:** O anuncio fica **ativo imediatamente** apos completar o cadastro -- NAO ha periodo de espera como no Booking.com (1-2 semanas).

**Comissao favoravel:** O VRBO cobra apenas **5% de comissao + 3% de taxa de processamento = ~8% total** -- a menor comissao entre todas as plataformas. O proprietario recebe mais por cada reserva no VRBO do que no Airbnb ou Booking.com.

---

## 1. Cadastro e Registro (Registration Steps)

### Passo a passo:

1. Acesse **[vrbo.com](https://www.vrbo.com)** (AlugueTemporada redireciona para ca)
2. Clique em **"Anuncie seu imovel"** / **"List your property"**
3. Crie sua conta:
   - Email
   - Nome completo
   - Telefone
   - Senha
4. Selecione o tipo de propriedade:
   - Tipo: **"Casa"** ou **"Sitio/Chacara"** (se disponivel)
   - O imovel inteiro (nao quarto compartilhado)
5. Preencha os detalhes da propriedade:
   - Numero de quartos: **3**
   - Numero de banheiros: **3**
   - Capacidade: **6 hospedes**
6. Adicione o endereco e **verifique a localizacao no mapa**
   - Ajuste o pin se necessario para a localizacao correta
7. Complete o onboarding seguindo as etapas guiadas do VRBO

**O anuncio fica ativo imediatamente** apos completar o cadastro e adicionar pelo menos 1 foto e o preco. Diferente do Booking.com, nao ha periodo de espera para aprovacao.

---

## 2. Detalhes do Anuncio (Listing Details)

### Titulo / Headline (maximo 80 caracteres)

O VRBO permite titulos de ate **80 caracteres** -- mais generoso que o Airbnb (50 caracteres). Aproveite o espaco extra para incluir mais palavras-chave.

**Titulo recomendado:**

```
Sitio com Piscina, Churrasqueira e Natureza Exuberante | Sao Roque SP
```

- **Total:** 70 caracteres (dentro do limite de 80)
- **Palavras-chave incluidas:** sitio, piscina, churrasqueira (churrasco), natureza, Sao Roque, SP (Sao Paulo)
- **Vantagem vs Airbnb:** Cabe "Churrasqueira" que nao cabia no titulo do Airbnb (50 chars)

**Alternativa (se preferir mencionar Sorocaba):**

```
Sitio com Piscina e Natureza em Sao Roque | Perto de Sorocaba e Sao Paulo
```

- **Total:** 74 caracteres
- **Inclui:** sitio, piscina, natureza, Sao Roque, Sorocaba, Sao Paulo

### Descricao (Description) -- Estilo Narrativo/Experiencial

O VRBO favorece descricoes **narrativas e experienciais** -- hospedes respondem a historias sobre a experiencia, nao apenas listas de comodidades. Diferente do Booking.com (factual/estruturado), aqui conte uma historia.

**Descricao em Portugues (copiar e colar):**

---

**INICIO DA DESCRICAO -- COPIAR ABAIXO:**

Imagine acordar com o canto dos passaros, tomar cafe na varanda olhando para 2,6 hectares de natureza preservada, e depois mergulhar na piscina privativa enquanto o churrasco ja esta sendo preparado na churrasqueira. Isso e o Sitio Girassol.

Localizado em Sao Roque, a apenas 1 hora de Sao Paulo e proximo a Sorocaba, nosso sitio e o refúgio perfeito para familias, casais e grupos de amigos que querem escapar da cidade sem perder o conforto. Aqui, o tempo desacelera e a natureza toma conta.

A propriedade oferece 3 quartos confortaveis para ate 6 hospedes, com suite principal com cama king e acesso a varanda com suporte para redes. A cozinha e completa e equipada -- traga seus ingredientes e prepare refeicoes memoraveis. A sala de estar tem TV smart, lareira para noites frias e uma colecao de jogos de tabuleiro.

Mas o melhor acontece do lado de fora: a piscina exclusiva e cercada por natureza exuberante, a churrasqueira completa esta pronta para aquele churrasco perfeito de fim de tarde, e os 2,6 hectares de Mata Atlantica convidam para caminhadas e exploracao. Ha quadra de tenis e volei, redes espalhadas pela propriedade, e um por do sol que voce vai querer fotografar todos os dias.

A regiao de Sao Roque e famosa pelas vinicolas, restaurantes coloniais e pela tranquilidade do interior paulista. Estamos com facil acesso pelas rodovias Raposo Tavares e Castello Branco.

Venha viver a experiencia do Sitio Girassol. Sua familia merece esse descanso.

**FIM DA DESCRICAO**

---

**Nota:** Se o VRBO oferecer campo para descricao em ingles, adicione a versao em ingles baseada no Phase 1 listing-title-description.md.

### Verificacao de Palavras-Chave SEO na Descricao

- [x] **sitio** -- Sitio Girassol (3x), nosso sitio
- [x] **natureza** -- natureza preservada, a natureza toma conta, natureza exuberante
- [x] **piscina** -- piscina privativa, a piscina exclusiva
- [x] **churrasco** -- churrasco perfeito, churrasco ja esta sendo preparado
- [x] **Sorocaba** -- proximo a Sorocaba
- [x] **Sao Paulo** -- 1 hora de Sao Paulo

Todas as 6 palavras-chave SEO estao incluidas naturalmente na narrativa.

### Detalhes da Propriedade

Preencha os campos no VRBO conforme listing.config.ts:

| Campo | Valor |
|-------|-------|
| Tipo | Casa / Sitio / Chacara |
| Quartos | 3 |
| Camas | 4 (1 king, 1 casal, 1 beliche) |
| Banheiros | 3 |
| Capacidade | 6 hospedes |
| Area | 280 m2 |
| Estacionamento | Gratuito no local |
| Wifi | Sim |
| Animais | Permitidos |

### Comodidades -- marcar no VRBO:

- [x] Piscina privativa (externa)
- [x] Churrasqueira / BBQ
- [x] Cozinha completa
- [x] Lareira
- [x] Wifi
- [x] TV Smart
- [x] Estacionamento gratuito
- [x] Maquina de lavar
- [x] Ventiladores de teto
- [x] Aquecedor portatil
- [x] Roupa de cama
- [x] Secador de cabelo
- [x] Ferro de passar
- [x] Area de trabalho
- [x] Jogos de tabuleiro
- [x] Entrada privativa
- [x] Varanda/patio
- [x] Mobilia externa
- [x] Rede de descanso
- [x] Area de jantar externa
- [x] Espreguicadeiras
- [x] Fogueira (fire pit)
- [x] Quadra de tenis/volei

---

## 3. Fotos (Photos)

Use as **mesmas 25-30 fotos** do Phase 1 (Airbnb).

### Foto de capa:

O VRBO permite escolher uma foto de capa diferente. Recomendacao:
- **Foto principal:** Foto da piscina com a area verde ao redor (hero shot)
- Fotos de area externa/piscina primeiro, depois interiores

### Upload:

1. Faca upload de todas as fotos
2. Categorize por area/comodo quando o VRBO solicitar
3. Reordene para que as fotos mais atraentes (piscina, exterior, churrasqueira) aparecam primeiro

---

## 4. Precos (Pricing) -- Mesmo preco base do Airbnb (D-01)

### Configuracao:

| Item | Valor |
|------|-------|
| Diaria base (dias de semana) | **R$280/noite** |
| Diaria fim de semana (sex/sab) | **R$380/noite** |
| Taxa de limpeza | **R$180** |
| Desconto semanal (7+ noites) | **12%** |
| Desconto mensal (28+ noites) | **27%** |

### Como configurar no VRBO:

1. No painel do proprietario, va para **"Tarifas"** / **"Rates"**
2. Defina a tarifa base: **R$280/noite**
3. Se o VRBO oferecer precos por dia da semana:
   - Configure sexta e sabado: **R$380/noite**
4. Adicione a taxa de limpeza: **R$180** (secao "Fees" / "Taxas")
5. Configure descontos por duracao (se disponivel):
   - Semanal: **12%**
   - Mensal: **27%**

### Comissao do VRBO -- A Mais Favoravel

O VRBO cobra **5% de comissao + 3% de taxa de processamento de pagamento = ~8% total**.

**Comparacao de receita liquida por noite (diaria base R$280):**

| Plataforma | Comissao | Receita liquida/noite |
|------------|----------|----------------------|
| Airbnb | ~16% | **~R$235** |
| Booking.com | ~15% | **~R$238** |
| VRBO | ~8% | **~R$258** |

O VRBO e a plataforma mais rentavel para o proprietario: **R$258/noite liquido** vs R$235 no Airbnb. Cada reserva no VRBO gera ~R$23/noite a mais de receita liquida.

---

## 5. Configuracoes de Reserva (Booking Settings)

| Configuracao | Valor |
|--------------|-------|
| Estadia minima | **2 noites** |
| Antecedencia minima | **1 dia** |
| Politica de cancelamento | **Moderada** (equivalente ao Airbnb) |
| Tipo de reserva | **Solicitacao de reserva** (inicialmente, para manter controle) |

### Como configurar:

1. No painel, va para **"Politicas"** / **"Policies"**
2. Estadia minima: **2 noites**
3. Politica de cancelamento: **Moderada**
4. Tipo de reserva: **Solicitacao** (Request to book)
   - Recomendado comecar assim para ter controle. Depois de 2-3 meses de experiencia, considere mudar para reserva instantanea para mais visibilidade no VRBO

---

## 6. Configuracao de Notificacoes (Notification Setup -- D-13)

### Download do aplicativo VRBO Owner:

1. Baixe o app **"VRBO Owner"** (App Store / Google Play)
2. Faca login com sua conta VRBO
3. Ative notificacoes push:
   - **Novas reservas:** ATIVADO
   - **Solicitacoes de reserva:** ATIVADO
   - **Cancelamentos:** ATIVADO
   - **Mensagens de hospedes:** ATIVADO
4. **Configure um som de notificacao DIFERENTE** do Airbnb e do Booking.com
   - Cada plataforma deve ter um som unico para identificacao rapida

### Lembrete:

Quando receber uma reserva no VRBO, bloqueie as mesmas datas em TODAS as outras plataformas (Airbnb, Booking.com, TemporadaLivre) **dentro de 1 hora** (D-10). O iCal tem atraso de 30min a 3 horas -- nao dependa apenas do iCal.

---

## 7. Checklist de Verificacao (Verification Checklist)

- [ ] Conta criada em [vrbo.com](https://www.vrbo.com)
- [ ] Detalhes da propriedade preenchidos (3 quartos, 3 banheiros, 6 hospedes)
- [ ] Titulo definido com menos de 80 caracteres e palavras-chave
- [ ] Descricao em estilo narrativo com as 6 palavras-chave SEO (sitio, natureza, piscina, churrasco, Sorocaba, Sao Paulo)
- [ ] Todas as fotos enviadas e categorizadas
- [ ] Foto de capa e foto da piscina/area externa
- [ ] Diaria base R$280/noite configurada
- [ ] Diaria fim de semana R$380/noite configurada (sexta e sabado)
- [ ] Taxa de limpeza R$180 configurada
- [ ] Desconto semanal 12% configurado
- [ ] Desconto mensal 27% configurado
- [ ] Estadia minima de 2 noites configurada
- [ ] Politica de cancelamento moderada configurada
- [ ] App VRBO Owner instalado com notificacoes push ativadas
- [ ] Som de notificacao diferente do Airbnb e Booking.com
- [ ] Anuncio esta ativo e visivel (pesquisar como hospede para verificar)

---

## 8. Verificacao Pos-Publicacao

Como o anuncio no VRBO fica ativo imediatamente:

1. **Abra uma janela anonima** do navegador
2. Pesquise "sitio Sao Roque piscina" no VRBO
3. Verifique:
   - O anuncio aparece nos resultados
   - As fotos estao corretas e na ordem desejada
   - O preco visivel para o hospede e R$280/noite (similar ao Airbnb)
   - A descricao esta completa
   - Os detalhes estao corretos (3 quartos, 6 hospedes, etc.)
4. **Configure o iCal** seguindo o guia de sincronizacao de calendario (calendar-sync-guide.md)

---

*Este guia corresponde aos requisitos DIST-02 e decisoes D-01 (precos iguais), D-02 (descricao narrativa adaptada), D-03 (mesmas fotos), D-06 (iCal VRBO), e D-13 (notificacoes).*
*Precos: R$280 base, R$380 fim de semana, R$180 limpeza, 12% semanal, 27% mensal -- identicos ao Airbnb conforme D-01.*
*O AlugueTemporada redireciona para VRBO Brasil -- use vrbo.com para o cadastro.*
