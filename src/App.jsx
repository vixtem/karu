import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Menu, X, Check, Palette, ScanFace, PackageCheck, Send, Instagram, Copy, Heart, Star, ChevronDown, Printer, MoveUpRight, BadgeCheck, MessageCircle, Gem, MousePointer2 } from 'lucide-react';
import { siteConfig } from './siteConfig.js';

const categories = [
  { name: 'Action figures', label: '01 / Personagens', symbol: '✦', tone: 'purple', desc: 'Seus personagens favoritos representados com personalidade e atenção aos detalhes.' },
  { name: 'Pets em miniatura', label: '02 / Afeto', symbol: '♡', tone: 'coral', desc: 'Uma homenagem especial ao companheiro que faz parte da sua história.' },
  { name: 'Topos de bolo', label: '03 / Celebrações', symbol: '✳', tone: 'mint', desc: 'Criações para aniversários, casamentos e celebrações que merecem ser lembradas.' },
  { name: 'Réplicas de pessoas', label: '04 / Memórias', symbol: '◈', tone: 'blue', desc: 'Transformamos referências em peças únicas, cheias de significado.' },
  { name: 'Colecionáveis', label: '05 / Coleções', symbol: '★', tone: 'yellow', desc: 'Miniaturas com acabamento artístico para quem aprecia cada pequeno detalhe.' },
  { name: 'Sua ideia', label: '06 / Personalizados', symbol: '↗', tone: 'pink', desc: 'Uma criação diferente? Conte a sua ideia e vamos avaliar o que é possível.' },
];
const stages = [
  {n:'01',title:'Você imagina',text:'Envie sua ideia, fotos ou referências. Queremos entender o que torna essa peça especial.'},
  {n:'02',title:'Nós planejamos',text:'Alinhamos tamanho, detalhes, acabamento e orçamento antes da produção.'},
  {n:'03',title:'A peça ganha forma',text:'Impressão 3D em resina, limpeza, cura e preparação cuidadosa da superfície.'},
  {n:'04',title:'A arte ganha vida',text:'Pintura manual, acabamento final e os últimos detalhes da sua criação.'}
];
const faqs = [
  ['O que vocês fazem?', 'Produzimos miniaturas, action figures, colecionáveis, topos de bolo e réplicas personalizadas de pessoas, animais e personagens, conforme a viabilidade técnica e as referências do projeto.'],
  ['Por que o preço varia?', 'Cada encomenda tem complexidade própria. O orçamento considera dimensões, modelagem quando necessária, preparação, impressão em resina, acabamento, pintura manual e nível de personalização.'],
  ['As peças são pintadas à mão?', 'Sim. A pintura artística manual é parte central da proposta da KARU e permite valorizar cores, texturas e pequenos detalhes.'],
  ['Quanto tempo leva para ficar pronto?', 'O prazo depende da complexidade e da agenda de produção. Confirmamos um prazo individual antes de iniciar a encomenda.'],
  ['Posso enviar uma fotografia como referência?', 'Claro. Fotografias e referências ajudam a avaliar o projeto. Para réplicas, várias imagens de ângulos diferentes são especialmente úteis.']
];

function IconBrand({className=''}) {
  return <img className={className} src={import.meta.env.BASE_URL + 'logo.svg'} alt="Símbolo KARU3D" />;
}
function WhatsAppButton({children, className='', href='#orcamento'}) {
  return <a href={href} className={className}>{children}</a>;
}
export default function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [selection,setSelection]=useState('Action figures');
  const [name,setName]=useState('');
  const [details,setDetails]=useState('');
  const [size,setSize]=useState('');
  const [date,setDate]=useState('');
  const [status,setStatus]=useState('');
  const whatsapp = (siteConfig.whatsapp || '').replace(/\D/g,'');
  const makeMessage=()=>[
    'Olá, KARU3D! Gostaria de solicitar um orçamento.',
    'Nome: '+(name.trim() || 'Não informado'),
    'Tipo de peça: '+selection,
    'Tamanho desejado: '+(size || 'A definir'),
    'Data desejada: '+(date || 'A combinar'),
    'Detalhes e referências: '+(details.trim() || 'Vou enviar em seguida.')
  ].join('\n');
  function submit(e) {
    e.preventDefault();
    if (!name.trim() || !details.trim()) {setStatus('Informe seu nome e uma descrição da peça.');return;}
    if (whatsapp) {
      window.open('https://wa.me/'+whatsapp+'?text='+encodeURIComponent(makeMessage()),'_blank','noopener,noreferrer');
      setStatus('Mensagem preparada. Confirme o envio na conversa do WhatsApp.');
      return;
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(makeMessage())
        .then(()=>setStatus('Pedido copiado! O WhatsApp comercial da KARU ainda não foi configurado neste site de teste.'))
        .catch(()=>setStatus('Não foi possível copiar automaticamente. Selecione e copie as informações do formulário.'));
    } else { setStatus('WhatsApp ainda não configurado. Copie as informações do formulário para enviar à KARU.'); }
  }
  function chooseCategory(category) {setSelection(category);setMenuOpen(false);}
  return <div className="site-shell">
    <div className="topline"><span>✳ FEITO SOB MEDIDA. PINTADO À MÃO.</span><span>PEÇAS COM HISTÓRIA, DETALHE E PERSONALIDADE</span></div>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="KARU3D — início"><IconBrand className="brand-icon"/><span>KARU<span className="brand-accent">3D</span></span></a>
      <nav className={'nav '+(menuOpen?'open':'')} aria-label="Navegação principal">
        <a href="#criacoes" onClick={()=>setMenuOpen(false)}>Criações</a>
        <a href="#sobre" onClick={()=>setMenuOpen(false)}>Nosso diferencial</a>
        <a href="#processo" onClick={()=>setMenuOpen(false)}>Como funciona</a>
        <a href="#perguntas" onClick={()=>setMenuOpen(false)}>Dúvidas</a>
        <a href="#orcamento" className="nav-cta" onClick={()=>setMenuOpen(false)}>Pedir orçamento <ArrowUpRight size={17}/></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen?'Fechar menu':'Abrir menu'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <main>
      <section className="hero section-width" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> KARU3D • ARTE & MANUFATURA ADITIVA</div>
          <h1>DA IDEIA<br/>À <em>PEÇA</em><br/><span>INESQUECÍVEL.</span></h1>
          <p>Personagens, colecionáveis e lembranças que saem da imaginação para ganhar forma. Impressão 3D em resina de alta definição com o toque único da pintura à mão.</p>
          <div className="hero-actions"><WhatsAppButton className="btn btn-primary">Vamos criar a sua? <ArrowUpRight size={19}/></WhatsAppButton><a className="btn btn-outline" href="#criacoes">Explorar criações <ArrowRight size={18}/></a></div>
          <div className="hero-bottom"><div className="mini-stars">✳ &nbsp;DETALHES QUE ENCANTAM</div><span className="hero-vertical-sep"/><div>UMA PEÇA. INFINITAS HISTÓRIAS.</div></div>
        </div>
        <div className="hero-stage" aria-label="Composição visual com identidade KARU3D">
          <div className="stage-halo stage-halo-a"/><div className="stage-halo stage-halo-b"/>
          <div className="stage-noise"/>
          <span className="stage-note note-a">DESIGN +<br/>IMAGINAÇÃO</span>
          <span className="stage-note note-b">EXCLUSIVO <span>✧</span></span>
          <span className="stage-no-1">K<span>3</span></span>
          <div className="stage-mark-wrap"><div className="stage-mark-glow"/><IconBrand className="stage-mark"/></div>
          <span className="stage-counter">EST. NO UNIVERSO DAS IDEIAS ↗</span>
          <span className="stage-bottom-tag">RESINA / COR / EXPRESSÃO</span>
        </div>
      </section>
      <div className="ticker" aria-hidden="true"><div>CRIATIVIDADE <b>✳</b> RESINA DE ALTA DEFINIÇÃO <b>✳</b> PINTURA À MÃO <b>✳</b> PEÇAS PERSONALIZADAS <b>✳</b> CRIATIVIDADE <b>✳</b> RESINA DE ALTA DEFINIÇÃO <b>✳</b></div></div>
      <section className="catalog section-width pad-section" id="criacoes">
        <div className="section-head"><div><span className="section-kicker">01 / O QUE CRIAMOS</span><h2>O impossível<br/><span>ganha forma.</span></h2></div><p>Do personagem que marcou sua infância à lembrança de um momento único. Cada projeto começa com uma boa história.</p></div>
        <div className="catalog-grid">
          {categories.map((cat,i)=><a key={cat.name} href="#orcamento" className={'product-card '+cat.tone} onClick={()=>chooseCategory(cat.name)}>
            <div className="product-meta"><span>{cat.label}</span><MoveUpRight size={20}/></div>
            <div className="product-art"><div className="product-ring"/><div className="product-symbol">{cat.symbol}</div><div className="product-shine"/></div>
            <div className="product-info"><h3>{cat.name}</h3><p>{cat.desc}</p><span>Solicitar orçamento <ArrowUpRight size={16}/></span></div>
          </a>)}
        </div>
        <p className="catalog-footnote">Exemplos de categorias de encomenda. As ilustrações acima são conceituais; fotografias de trabalhos reais serão adicionadas ao acervo.</p>
      </section>
      <section className="manifesto" id="sobre">
        <div className="manifesto-inner section-width">
          <div className="manifesto-art"><span className="manifesto-orbit"/><span className="manifesto-orbit orbit-2"/><div className="manifesto-core"><IconBrand className="manifesto-logo"/></div><span className="manifesto-sticker">3D <strong>+</strong> ARTE</span><span className="manifesto-coordinate">KARU — CRIAÇÕES AUTORAIS E PERSONALIZADAS</span></div>
          <div className="manifesto-copy"><span className="section-kicker">02 / NOSSO DIFERENCIAL</span><h2>Não é só<br/>imprimir.<br/><em>É dar vida.</em></h2><p>A tecnologia faz nascer cada forma. É no cuidado com a preparação, acabamento e pintura manual que os detalhes começam a contar uma história.</p><div className="feature-list"><div><Printer size={23}/><span><strong>Resina de alta definição</strong><small>Precisão para reproduzir texturas, expressões e pequenos detalhes.</small></span></div><div><Palette size={23}/><span><strong>Pintura feita à mão</strong><small>Cores, sombras e nuances trabalhadas individualmente.</small></span></div><div><Heart size={23}/><span><strong>Personalização com significado</strong><small>Cada encomenda tem sua própria história e personalidade.</small></span></div></div><a className="text-link" href="#orcamento">Conte a sua ideia <ArrowUpRight size={20}/></a></div>
        </div>
      </section>
      <section className="process section-width pad-section" id="processo"><div className="section-head"><div><span className="section-kicker">03 / DO PRIMEIRO CONTATO À ÚLTIMA PINCELADA</span><h2>Um processo.<br/><span>Muitos detalhes.</span></h2></div><p>Por trás de cada peça existe um percurso técnico e artístico pensado para entregar algo especial.</p></div><div className="step-grid">{stages.map((item,i)=><div className="step" key={item.n}><div className="step-index"><span>{item.n}</span><ArrowUpRight size={22}/></div><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></section>
      <section className="statement"><div className="section-width statement-content"><span>✷ UMA HOMENAGEM, UMA PAIXÃO, UM PRESENTE.</span><h2>PEÇAS QUE NÃO<br/>SE ENCONTRAM<br/><em>EM QUALQUER LUGAR.</em></h2><a className="btn btn-dark" href="#orcamento">Tire sua ideia do papel <ArrowUpRight size={20}/></a></div><div className="statement-deco">K3</div></section>
      <section className="faq section-width pad-section" id="perguntas"><div><span className="section-kicker">04 / PERGUNTAS FREQUENTES</span><h2>Você pergunta.<br/><span>A gente explica.</span></h2><p className="faq-lead">Transparência em cada etapa da sua encomenda.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span>{q}<ChevronDown size={19}/></summary><p>{a}</p></details>)}</div></section>
      <section className="contact pad-section" id="orcamento"><div className="section-width contact-layout"><div className="contact-left"><span className="section-kicker">05 / VAMOS CRIAR JUNTOS</span><h2>SUA IDEIA.<br/>NOSSA <em>ARTE.</em></h2><p>Uma miniatura especial começa com uma conversa. Conte o que você imagina e preparamos um orçamento personalizado.</p><div className="contact-pill"><Sparkles size={21}/><span>Cada orçamento considera tamanho, detalhes e acabamento.</span></div><IconBrand className="contact-watermark"/></div><form className="quote-form" onSubmit={submit}><div className="form-heading"><span>FALE SOBRE SUA PEÇA</span><span>✳ PEDIDO PERSONALIZADO</span></div><label htmlFor="name">Como podemos te chamar? *</label><input id="name" autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome" required maxLength={100}/><label htmlFor="category">O que você deseja criar?</label><select id="category" value={selection} onChange={e=>setSelection(e.target.value)}>{categories.map(c=><option key={c.name}>{c.name}</option>)}</select><div className="form-pair"><div><label htmlFor="size">Tamanho aproximado</label><input id="size" value={size} onChange={e=>setSize(e.target.value)} placeholder="Ex.: 15 cm" maxLength={80}/></div><div><label htmlFor="date">Quando precisa?</label><input id="date" value={date} onChange={e=>setDate(e.target.value)} placeholder="Ex.: 15/12" maxLength={80}/></div></div><label htmlFor="details">Conte um pouco sobre sua ideia *</label><textarea id="details" rows="5" value={details} onChange={e=>setDetails(e.target.value)} placeholder="Personagem, ocasião, cores, pose, referências..." required maxLength={2200}/><button className="btn btn-primary form-submit" type="submit">{whatsapp?'Continuar no WhatsApp':'Copiar solicitação de orçamento'} {whatsapp?<Send size={18}/>:<Copy size={18}/>}</button><div className="form-status" role="status">{status || (whatsapp?'O WhatsApp será aberto com os dados preenchidos.':'Versão de teste: informe o número comercial em src/siteConfig.js para habilitar o WhatsApp.')}</div></form></div></section>
    </main>
    <footer className="footer"><div className="section-width footer-inner"><div><a className="brand footer-brand" href="#inicio"><IconBrand className="brand-icon"/><span>KARU<span className="brand-accent">3D</span></span></a><p>Sua imaginação ganha forma.<br/>Impressão 3D em resina + pintura manual.</p></div><div className="footer-links"><a href="#criacoes">Criações</a><a href="#sobre">Diferencial</a><a href="#processo">Processo</a><a href="#orcamento">Orçamento</a></div><div className="footer-end"><span>FEITO COM IMAGINAÇÃO. FINALIZADO COM ARTE.</span><small>© {new Date().getFullYear()} KARU3D. Todos os direitos reservados.</small></div></div></footer>
  </div>;
}
