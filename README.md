# KARU3D — Sua imaginação ganha forma

Site oficial da KARU3D, dedicado a criações personalizadas em resina: miniaturas, action figures, topos de bolo, réplicas de pessoas e animais, colecionáveis e pintura artística manual.

## Tecnologias

- React 18 + Vite 5
- Estilos CSS responsivos
- Lucide React
- Deploy automático via GitHub Actions para GitHub Pages

## Executar localmente

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Atendimento

Os canais de atendimento ficam em `src/siteConfig.js`. Preencha `whatsapp` com o **número oficial comercial da KARU**, somente dígitos e com código do país e DDD (por exemplo, `5598999999999`).

- Com WhatsApp informado, o formulário abre a conversa com a mensagem de orçamento preenchida.
- Sem o número, a versão inicial permite copiar os dados e avisa que o WhatsApp comercial ainda não foi configurado.
- O formulário não salva pedidos em um banco de dados nem envia informações para servidor próprio.
- Os valores e prazos dependem de avaliação do pedido.

## Imagens

O site usa a marca em `public/logo.svg`. Os desenhos das categorias são conceituais e não representam fotografias de trabalhos realizados. Substitua-os por imagens reais autorizadas quando disponíveis.

## Publicação

O workflow `.github/workflows/deploy.yml` executa `npm install`, `npm run build` e publica `dist/` a cada atualização em `main`.

No GitHub, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. O endereço gratuito do projeto é:

https://vixtem.github.io/karu/

A configuração Vite usa `base: './'` para funcionar na subpasta do GitHub Pages.

## Estrutura

- `src/App.jsx`: conteúdo e interações do site
- `src/styles.css`: identidade visual, responsividade e animações
- `src/siteConfig.js`: dados oficiais de contato
- `public/logo.svg`: logotipo
- `index.html`: metadados SEO e bootstrap
- `.github/workflows/deploy.yml`: publicação automática
