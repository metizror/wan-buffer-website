/* NAV scroll */
window.addEventListener('scroll',()=>{ const n=document.getElementById('mainNav'); if(!n) return; n.classList.toggle('scrolled',scrollY>20) });

/* Mobile nav */
window.openNav = function openNav(){document.getElementById('mobNav')?.classList.add('open');document.body.style.overflow='hidden'};
window.closeNav = function closeNav(){document.getElementById('mobNav')?.classList.remove('open');document.body.style.overflow=''};

/* Hero canvas — particle network */
;(function(){
  const canvas=document.getElementById('heroCanvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  if(!ctx)return;
  let W,H,pts=[];
  function resize(){W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight}
  resize();window.addEventListener('resize',resize);
  const N=60;
  for(let i=0;i<N;i++) pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.8+.4,ai:Math.random()>.6});
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.ai?'rgba(0,194,255,0.7)':'rgba(255,255,255,0.5)';ctx.fill();
    });
    for(let i=0;i<N;i++) for(let j=i+1;j<N;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<100){
        ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);
        const bothAI=pts[i].ai&&pts[j].ai;
        ctx.strokeStyle=bothAI?`rgba(0,194,255,${.15*(1-d/100)})`:`rgba(255,255,255,${.1*(1-d/100)})`;
        ctx.lineWidth=.6;ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* Counter animation */
function animCount(el,target,dur){
  const t0=performance.now();
  const run=now=>{
    const p=Math.min((now-t0)/dur,1);
    el.textContent=Math.round((1-Math.pow(1-p,3))*target);
    if(p<1)requestAnimationFrame(run);else el.textContent=target;
  };requestAnimationFrame(run);
}

/* Scroll reveal */
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('go');ro.unobserve(e.target)});
},{threshold:.07});
document.querySelectorAll('.rev').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';ro.observe(el)});

/* Observer helper */
const obs=(sel,cb,t=.3)=>{
  const el=document.querySelector(sel);if(!el)return;
  new IntersectionObserver(entries=>{if(entries[0].isIntersecting)cb(el)},{threshold:t}).observe(el);
};

/* Counters */
obs('.stats-grid',()=>{
  animCount(document.getElementById('c1'),7,1500);
  animCount(document.getElementById('c2'),254,1800);
  animCount(document.getElementById('c3'),84,1600);
  animCount(document.getElementById('c4'),50,1400);
});
obs('#recStats',el=>{
  animCount(document.getElementById('r1'),254,1800);
  animCount(document.getElementById('r2'),20,1200);
  animCount(document.getElementById('r3'),96,1500);
  animCount(document.getElementById('r4'),50,1400);
  el.querySelectorAll('.rec-stat').forEach((s,i)=>setTimeout(()=>s.classList.add('filled'),i*250));
});

/* Tech pills wave */
obs('#tsGrid',el=>{
  el.querySelectorAll('.ts-pill').forEach((p,i)=>setTimeout(()=>p.classList.add('popped'),i*40));
});

/* Philosophy reveal */
obs('#philQuote',el=>el.classList.add('revealed'),.4);

/* 3D card tilt */
['mc0','mc1','mc2','mc3'].forEach(id=>{
  const c=document.getElementById(id);if(!c)return;
  c.addEventListener('mousemove',e=>{
    const r=c.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    c.style.transform=`perspective(800px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-6px)`;
  });
  c.addEventListener('mouseleave',()=>c.style.transform='');
});

/* Ripple */
document.querySelectorAll('.btn-r,.btn-ai,.n-cta,.n-ai-cta,.f-btn,.m-btn,.popup-submit').forEach(btn=>{
  btn.addEventListener('click',function(e){
    const r=this.getBoundingClientRect(),size=Math.max(r.width,r.height);
    const rip=document.createElement('span');
    rip.style.cssText=`position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,0.2);left:${e.clientX-r.left-size/2}px;top:${e.clientY-r.top-size/2}px;transform:scale(0);animation:ripple .6s ease-out forwards;pointer-events:none;z-index:10;`;
    if(!document.getElementById('rippleStyle')){const s=document.createElement('style');s.id='rippleStyle';s.textContent='@keyframes ripple{to{transform:scale(2.5);opacity:0}}';document.head.appendChild(s);}
    this.style.position='relative';this.style.overflow='hidden';this.appendChild(rip);setTimeout(()=>rip.remove(),700);
  });
});

/* ══ POPUP — scroll trigger (~3rd homepage band: AI strip) + localStorage dismiss ══ */
const LEAD_POPUP_STORAGE_KEY = 'wanbuffer_lead_popup_dismissed_v1';
let popupShown=false;
let popupDeferred=false;

function hasLeadPopupDismissed(){
  try{ return window.localStorage.getItem(LEAD_POPUP_STORAGE_KEY) === '1'; }catch(_){ return false; }
}
function persistLeadPopupDismissed(){
  try{ window.localStorage.setItem(LEAD_POPUP_STORAGE_KEY,'1'); }catch(_){}
}

function openPopup(){
  if(popupShown || hasLeadPopupDismissed()) return;
  if(typeof WANNY !== 'undefined' && WANNY._isOpen && WANNY._isOpen()){
    popupDeferred = true;
    return;
  }
  popupShown=true;
  popupDeferred=false;
  const root=document.getElementById('leadPopup');
  if(!root) return;
  root.classList.add('show');
  if(!document.body.dataset.wannyOpen) document.body.style.overflow='hidden';
}
function closePopup(){
  const root=document.getElementById('leadPopup');
  if(!root) return;
  root.classList.remove('show');
  if(!document.body.dataset.wannyOpen) document.body.style.overflow='';
  persistLeadPopupDismissed();
}
function submitPopup(){
  const nameEl=document.getElementById('pName');
  const companyEl=document.getElementById('pCompany');
  const emailEl=document.getElementById('pEmail');
  const svcEl=document.getElementById('pService');
  const n=nameEl?.value.trim(), co=companyEl?.value.trim(), e=emailEl?.value.trim();
  const okSvc=svcEl && svcEl.value;
  let bad=false;
  [nameEl,companyEl,emailEl].forEach(f=>{
    if(!f) return;
    if(!f.value.trim()){ f.style.borderColor='var(--red)'; bad=true; setTimeout(()=>{f.style.borderColor=''},1500); }
  });
  if(!okSvc && svcEl){ svcEl.style.borderColor='var(--red)'; bad=true; setTimeout(()=>{svcEl.style.borderColor=''},1500); }
  if(bad || !n || !co || !e) return;

  persistLeadPopupDismissed();
  document.getElementById('popupMain').style.display='none';
  document.getElementById('popupSuccess').classList.add('show');
  setTimeout(()=>closePopup(),3200);
}
document.getElementById('leadPopup')?.addEventListener('click',function(e){if(e.target===this)closePopup()});
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape') return;
  if(document.getElementById('leadPopup')?.classList.contains('show')) closePopup();
});

;(function setupLeadPopupScrollTrigger(){
  if(hasLeadPopupDismissed()) return;
  const aiStrip=document.querySelector('.ai-strip');
  if(!aiStrip) return;
  let fired=false;
  const io=new IntersectionObserver(entries=>{
    if(fired || popupShown || hasLeadPopupDismissed()) return;
    const en=entries[0];
    if(!en.isIntersecting || en.intersectionRatio < 0.14) return;
    if(window.scrollY < 240) return;
    fired=true;
    io.disconnect();
    setTimeout(()=>{
      if(hasLeadPopupDismissed() || popupShown) return;
      openPopup();
    },420);
  },{threshold:[0,0.12,0.2,0.35],rootMargin:'0px 0px -8% 0px'});
  io.observe(aiStrip);
})();

/* ══════════════════════════════════════
   TESTIMONIAL CAROUSEL
══════════════════════════════════════ */
let testIdx = 0;
const testCards = document.querySelectorAll('.test-card');
const testDotEls = document.querySelectorAll('.test-dot');

function visibleCards(){
  return window.innerWidth >= 1100 ? 3 : window.innerWidth >= 768 ? 2 : 1;
}

function updateCarousel(){
  const track = document.getElementById('testTrack');
  if(!track) return;
  const vc = visibleCards();
  const gap = 20;
  const totalW = track.parentElement.offsetWidth;
  const cardW = (totalW - (vc-1)*gap) / vc;
  // set each card width
  testCards.forEach(c => { c.style.minWidth = cardW + 'px'; });
  track.style.transform = `translateX(-${testIdx * (cardW + gap)}px)`;
  // update dots
  const maxIdx = Math.max(0, testCards.length - vc);
  const segments = testDotEls.length - 1;
  const activeDot = segments > 0 ? Math.round((testIdx / maxIdx) * segments) : 0;
  testDotEls.forEach((d,i) => d.classList.toggle('active', i === activeDot));
}

function swapHeroTest(el){
  // deactivate all minis
  document.querySelectorAll('.test-mini').forEach(m => m.classList.remove('active'));
  el.classList.add('active');
  // swap hero content
  document.getElementById('heroText').innerHTML = el.dataset.text;
  document.getElementById('heroName').textContent = el.dataset.name;
  document.getElementById('heroRole').innerHTML = el.dataset.role;
  document.getElementById('heroAv').textContent = el.dataset.av;
  document.getElementById('heroAv').style.background = el.dataset.bg;
  document.getElementById('heroTag').textContent = el.dataset.tag;
  
  // subtle fade
  const q = document.querySelector('.test-hero-q');
  q.style.opacity = '0';
  q.style.transform = 'translateY(6px)';
  setTimeout(() => { q.style.transition = 'opacity .3s,transform .3s'; q.style.opacity = '1'; q.style.transform = 'none'; }, 30);
}


function slideTest(dir){
  const vc = visibleCards();
  const maxIdx = Math.max(0, testCards.length - vc);
  testIdx = Math.max(0, Math.min(testIdx + dir, maxIdx));
  updateCarousel();
}

function goToTest(dotI){
  const vc = visibleCards();
  const maxIdx = Math.max(0, testCards.length - vc);
  const segments = testDotEls.length - 1;
  testIdx = segments > 0 ? Math.round((dotI / segments) * maxIdx) : 0;
  updateCarousel();
  testDotEls.forEach((d,i) => d.classList.toggle('active', i === dotI));
}

window.addEventListener('resize', updateCarousel);
setTimeout(updateCarousel, 100); // init after layout

// Auto-advance every 5 s
setInterval(() => {
  const vc = visibleCards();
  const maxIdx = Math.max(0, testCards.length - vc);
  if(testIdx >= maxIdx) testIdx = 0; else testIdx++;
  updateCarousel();
}, 5000);

/* ══════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════ */
function toggleFaq(btn){
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if(!wasOpen) item.classList.add('open');
}

function filterFaq(cat, btn){
  // toggle active state on category buttons
  if(btn){
    document.querySelectorAll('.faq-cat').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  // show/hide items by data-cat
  const list = document.getElementById('faqList');
  if(!list) return;
  list.querySelectorAll('.faq-item').forEach(item => {
    const c = item.getAttribute('data-cat');
    const show = cat === 'all' ? true : c === cat;
    item.style.display = show ? '' : 'none';
    if(!show) item.classList.remove('open');
  });
  // ensure one open item in the filtered set (nice UX)
  const firstVisible = Array.from(list.querySelectorAll('.faq-item')).find(i => i.style.display !== 'none');
  if(firstVisible){
    list.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    firstVisible.classList.add('open');
  }
}

/* ══════════════════════════════════════════════════════
   WANNY — Intelligent AI Pre-Sales Consultant
   Reads website content · Web search · Claude API
   Qualification-focused · Not scripted Q&A
══════════════════════════════════════════════════════ */

/* ── KNOWLEDGE BASE — Wan Buffer company data ── */
const WB_KNOWLEDGE = {
  company: `Wan Buffer is an AI-and-Automation-enabled ERP Solutions Company founded 7+ years ago, serving 20+ countries.
Primary platform: Odoo (Official Partner) — Odoo 16, 17, 18. Community + Enterprise.
Additional platforms: Zoho, Salesforce, Magento, Shopify. Official Razorpay payment gateway partner.
Headquarters: India. Active markets: India, USA, Canada, Germany, UAE, Morocco.
Stats: 254+ projects delivered, 96% on-time delivery, 84% client retention, 50+ certified engineers.`,

  services: `Core services:
1. Odoo ERP Implementation — full-cycle from requirements to go-live (8-24 weeks depending on scope)
2. AI Agents for ERP — autonomous agents inside Odoo for procurement, invoicing, inventory, HR
3. Workflow Automation — RPA + Odoo automation rules, zero-touch process flows
4. Predictive Analytics & ML — demand forecasting, anomaly detection, churn prediction
5. AI Copilots & Chatbots — natural language ERP interaction using GPT-4o, Claude, RAG
6. Intelligent Document Processing — OCR + AI for invoices, POs, contracts into Odoo
7. ERP & AI Integration Architecture — REST API, Kafka, AWS, Docker pipelines
8. Platform integrations: Salesforce, HubSpot, Shopify, Magento, WooCommerce, Razorpay, Stripe, FedEx, DHL`,

  engagement: `4 engagement models:
1. Project-Based — fixed scope, fixed budget, ideal for defined deliverables like Odoo implementation or specific AI module
2. Dedicated Team — ongoing dev, full control over engineers, scale without hiring in-house
3. Retainer — continuous improvement, priority support, quarterly AI audits, proactive monitoring
4. AI Agent + Human Team (NEW) — autonomous AI agents handle repetitive ERP tasks, human engineers handle custom logic & strategy. 50-70% cost reduction vs fully human team.`,

  industries: `Industries served:
Manufacturing: MRP + AI quality control, predictive maintenance, autonomous PO generation
Retail & eCommerce: Odoo POS, Shopify/Magento bridge, AI demand forecasting, loyalty programs
Logistics & 3PL: Multi-client WMS, AI route optimisation, SLA monitoring, RFID tracking
Healthcare: Patient management, pharmacy inventory, insurance billing automation, HIPAA-aligned
Finance & Services: Multi-currency, VAT/GST compliance, AI reconciliation, KYC automation
Real Estate: Property portal, broker CRM, lease automation, predictive occupancy, investor reporting`,

  caseStudies: `Key case studies:
1. Gujarat Fabric Mill (Manufacturing): Odoo 17 + AI Agent + Human Team. Results: 40% lead time reduction, 80% less manual data entry, 2.1x production throughput. Go-live: 14 weeks.
2. Gulf Logistics Co (Kuwait): Dedicated Team. Predictive replenishment AI on Odoo. Results: 34% overstock reduction, 60% fewer stockouts.
3. PharmaCore Industries (Hyderabad): Project-Based. Odoo 16 migration + AI document processing. Results: 300+ invoices/day processed without human touch, zero downtime migration.
4. Arabian Properties (Dubai): Dedicated Team. Real estate CRM on Odoo + AI lead scoring. Results: 28% increase in broker conversion rate.
5. Kaizen Auto Parts (Pune): AI Agent + Human Team. Results: 40% lead time reduction, 2.1x throughput.`,

  pricing: `Pricing is scope-dependent. Wan Buffer does not publish fixed prices. A typical Odoo implementation starts from $15,000-$20,000 for standard SME scope. AI integrations are priced separately based on complexity. The best way to get an accurate estimate is a 30-minute discovery call where we scope the project together. We always provide a detailed proposal with clear deliverables and pricing before any engagement starts.`,

  faq: `Common questions answered:
Q: Which Odoo versions? A: Odoo 16, 17, 18. Can migrate from v12-v15.
Q: Implementation timeline? A: 8-14 weeks standard, 16-24 weeks complex multi-company with AI.
Q: Data security with AI? A: NDA signed before any data shared. Private API endpoints. On-premise AI available for sensitive industries. GDPR, UAE PDPL, India DPDP compliant.
Q: Post-launch support? A: 3 months free support included. Then SLA-based plans (4hr critical to 1 day standard).
Q: Integrations? A: Salesforce, HubSpot, Shopify, Magento, WooCommerce, Razorpay, Stripe, PayTabs, FedEx, DHL, Aramex, Zapier, Make, Kafka.`,

  contact: `To get started: Book a free 30-minute discovery call at the contact section. Email: available on website. Response within 4 business hours. NDA signed before any sensitive discussion.`
};

/* ── Scrape visible website text for additional context ── */
function scrapePageContext(){
  const sections = ['ai-services','industries','models','whyus','platforms'];
  let ctx = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if(el) ctx += el.innerText?.slice(0,600) + '\n';
  });
  return ctx.slice(0,2000);
}

const WANNY = (function(){

  /* ── State ── */
  let state = {
    open: false,
    triggered: false,
    dismissed: false,
    scrollDepth: 0,
    dwellTime: {},
    msgCount: 0,
    conversation: [],
    qualification: { industry:null, size:null, currentERP:null, needs:[], urgency:null, geography:null },
    qualScore: 0,
    searching: false,
  };
  let dwellTimer = null;
  let currentSection = null;
  let engagementScore = 0;

  /* ── Behavior tracking ── */
  window.addEventListener('scroll', () => {
    const depth = Math.round((scrollY / Math.max(1, document.body.scrollHeight - innerHeight)) * 100);
    if(depth > state.scrollDepth) state.scrollDepth = depth;
    engagementScore = Math.min(100, state.scrollDepth * 0.4 + Object.keys(state.dwellTime).length * 10);
    checkTrigger();
    updateCurrentSection();
  }, {passive:true});

  function updateCurrentSection(){
    document.querySelectorAll('section[id], div[id="platforms"], div[id="global"]').forEach(s => {
      const r = s.getBoundingClientRect();
      if(r.top < innerHeight * 0.5 && r.bottom > 0 && currentSection !== s.id){
        currentSection = s.id;
        if(!state.dwellTime[s.id]) state.dwellTime[s.id] = 0;
        if(dwellTimer) clearInterval(dwellTimer);
        dwellTimer = setInterval(() => {
          if(currentSection) state.dwellTime[currentSection] = (state.dwellTime[currentSection]||0)+1;
          if(['models','ai-services','contact','platforms','industries'].includes(currentSection)){
            engagementScore = Math.min(100, engagementScore + 1.5);
            checkTrigger();
          }
        }, 1000);
      }
    });
  }

  document.addEventListener('click', e => {
    const el = e.target.closest('a,button');
    if(!el) return;
    const txt = (el.textContent||'').toLowerCase();
    if(['ai','model','engage','contact','discovery','platform','industry'].some(k => txt.includes(k))){
      engagementScore = Math.min(100, engagementScore + 12);
      checkTrigger();
    }
  });

  function checkTrigger(){
    if(state.triggered || state.dismissed) return;
    if(engagementScore >= 35 || state.scrollDepth >= 50){
      setTimeout(() => { if(!state.triggered && !state.dismissed) showTrigger(); }, 1500);
    }
  }

  function detectContext(){
    const dwell = state.dwellTime;
    if((dwell['models']||0) > 4) return 'engagement_models';
    if((dwell['ai-services']||0) > 4) return 'ai_services';
    if((dwell['industries']||0) > 4) return 'industries';
    if((dwell['platforms']||0) > 4) return 'platforms';
    if(state.scrollDepth > 65) return 'deep_scroll';
    return 'general';
  }

  const OPENERS = {
    engagement_models: "I can see you're exploring our engagement models — most businesses I talk to end up between Dedicated Team and AI Agent + Human Team depending on budget. What's driving your search for a new ERP or AI solution?",
    ai_services: "Looks like you've been reviewing our AI capabilities. Are you currently running an ERP and looking to add AI on top — or evaluating a full ERP + AI implementation from scratch?",
    industries: "You've been browsing our industry solutions — which sector are you in? I can tell you about real results we've achieved for businesses in your vertical.",
    platforms: "You're looking at our platform coverage — besides Odoo, we work with Zoho, Salesforce, Shopify, Magento and Razorpay. Is there a specific platform you're evaluating or integrating?",
    deep_scroll: "You've done a thorough read of the site — I'm Wanny, Wan Buffer's AI consultant. What's the core challenge you're trying to solve? I'll give you a straight answer.",
    general: "Hi, I'm Wanny — Wan Buffer's AI ERP consultant. I'm not a scripted bot — ask me anything about our services, platforms, or how we've solved problems for businesses like yours.",
  };

  /* ── UI ── */
  function showTrigger(){
    state.triggered = true;
    const stack = document.getElementById('float-stack');
    const t = document.getElementById('wanny-trigger');
    if(stack) stack.classList.add('visible');
    if(t) setTimeout(() => t.classList.add('pulsing'), 2500);
  }

  function openWanny(){
    if(state.open) return;
    state.open = true;
    document.body.dataset.wannyOpen = '1';  // signals popup to stay hidden
    // Close popup if it snuck in while Wanny was opening
    if(document.getElementById('leadPopup')?.classList.contains('show')){
      document.getElementById('leadPopup').classList.remove('show');
      if(typeof popupShown !== 'undefined') popupShown = false; // allow re-show after Wanny closes
      if(typeof popupDeferred !== 'undefined') popupDeferred = true;
    }
    document.getElementById('wanny-panel')?.classList.add('open');
    if(window.innerWidth < 768){
      document.getElementById('wanny-dim')?.classList.add('show');
    }
    document.body.style.overflow = 'hidden';
    document.getElementById('wanny-trigger')?.classList.remove('pulsing');
    document.getElementById('float-stack')?.classList.remove('visible');
    if(state.conversation.length === 0){
      const ctx = detectContext();
      addBotMsg(OPENERS[ctx] || OPENERS.general);
      const initChips = ctx === 'engagement_models'
        ? ['What is AI Agent + Human Team?','Compare all engagement models','What does a project cost?']
        : ctx === 'ai_services'
        ? ['What AI services do you offer?','Do you build custom AI models?','How long does AI integration take?']
        : ['Tell me about your Odoo services','What industries do you work with?','How is Wan Buffer different?','Book a discovery call'];
      showChips(initChips);
    }
  }

  window.closeWanny = function(){
    state.open = false;
    delete document.body.dataset.wannyOpen;
    document.getElementById('wanny-panel')?.classList.remove('open');
    document.getElementById('wanny-dim')?.classList.remove('show');
    // Restore scroll only if popup isn't locking it
    if(!document.getElementById('leadPopup')?.classList.contains('show')){
      document.body.style.overflow = '';
    }
    const t = document.getElementById('wanny-trigger');
    const stack = document.getElementById('float-stack');
    if(t) t.classList.remove('pulsing');
    if(stack && !state.dismissed) stack.classList.add('visible');
    // Fire the popup now that Wanny is closed (if it was deferred)
    if(typeof popupDeferred !== 'undefined' && popupDeferred && typeof openPopup === 'function'){
      setTimeout(openPopup, 1500);
    }
  };

  /* ── Messages ── */
  function addBotMsg(text, extra){
    const msgs = document.getElementById('wannyMsgs');
    if(!msgs) return;
    const typing = document.createElement('div');
    typing.className = 'w-msg bot w-typing';
    typing.innerHTML = '<div class="w-bubble"><div class="w-dots"><div class="w-dot"></div><div class="w-dot"></div><div class="w-dot"></div></div></div>';
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;
    const delay = Math.min(1200, 500 + text.length * 8);
    setTimeout(() => {
      typing.remove();
      const d = document.createElement('div');
      d.className = 'w-msg bot';
      // Convert **bold** markdown to <strong>
      const formatted = text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
      let html = `<div class="w-bubble">${formatted}</div>`;
      if(extra === 'booking') html += buildBookingCard();
      if(extra === 'casestudy') html += buildCSCard();
      d.innerHTML = html;
      const t = document.createElement('div');
      t.className = 'w-time'; t.textContent = 'Wanny · just now';
      d.appendChild(t);
      msgs.appendChild(d);
      msgs.scrollTop = msgs.scrollHeight;
      state.conversation.push({role:'assistant', content: text});
      state.msgCount++;
    }, delay);
  }

  function addBotSearching(){
    const msgs = document.getElementById('wannyMsgs');
    if(!msgs) return;
    const d = document.createElement('div');
    d.id = 'wanny-searching';
    d.className = 'w-msg bot';
    d.innerHTML = '<div class="w-bubble" style="color:var(--ai);font-size:11px;display:flex;align-items:center;gap:8px"><span style="animation:wDot 1s infinite">🔍</span> Searching the web for current info…</div>';
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeSearching(){
    document.getElementById('wanny-searching')?.remove();
  }

  function addUserMsg(text){
    const msgs = document.getElementById('wannyMsgs');
    if(!msgs) return;
    const d = document.createElement('div');
    d.className = 'w-msg user';
    d.innerHTML = `<div class="w-bubble">${text}</div>`;
    const t = document.createElement('div'); t.className='w-time'; t.textContent='You';
    d.appendChild(t);
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    state.conversation.push({role:'user', content: text});
  }

  function showChips(chips){
    const c = document.getElementById('wannyChips');
    if(c) c.innerHTML = chips.slice(0,4).map(ch =>
      `<button class="w-chip" onclick="wannyChipClick(this,'${ch.replace(/'/g,"&#39;")}')">${ch}</button>`
    ).join('');
  }

  window.wannyChipClick = function(btn, text){
    document.getElementById('wannyChips').innerHTML = '';
    addUserMsg(text);
    processInput(text);
  };

  window.wannySend = function(){
    const inp = document.getElementById('wannyInput');
    const text = inp?.value?.trim();
    if(!text || state.searching) return;
    inp.value = '';
    document.getElementById('wannyChips').innerHTML = '';
    addUserMsg(text);
    processInput(text);
  };

  /* ── Qualification tracking ── */
  function extractQual(text){
    const t = text.toLowerCase();
    if(!state.qualification.industry){
      if(/manufactur|factory|plant|mill|production/i.test(t)) state.qualification.industry='manufacturing';
      else if(/retail|ecommerce|shop|store|shopify|magento/i.test(t)) state.qualification.industry='retail';
      else if(/logistic|warehouse|3pl|freight|shipping/i.test(t)) state.qualification.industry='logistics';
      else if(/health|pharma|clinic|hospital|medical/i.test(t)) state.qualification.industry='healthcare';
      else if(/real.?estate|property|developer/i.test(t)) state.qualification.industry='realestate';
      else if(/finance|bank|accounting|fintech/i.test(t)) state.qualification.industry='finance';
    }
    if(!state.qualification.size){
      if(/startup|small|1[- ]?50|\bsme\b/i.test(t)) state.qualification.size='small';
      else if(/medium|50[- ]?500|\bmid\b/i.test(t)) state.qualification.size='mid';
      else if(/large|enterprise|500\+|global|multinational/i.test(t)) state.qualification.size='enterprise';
    }
    if(!state.qualification.currentERP){
      if(/odoo/i.test(t)) state.qualification.currentERP='odoo';
      else if(/salesforce/i.test(t)) state.qualification.currentERP='salesforce';
      else if(/sap/i.test(t)) state.qualification.currentERP='sap';
      else if(/zoho/i.test(t)) state.qualification.currentERP='zoho';
      else if(/no erp|spreadsheet|excel|manual|nothing/i.test(t)) state.qualification.currentERP='none';
    }
    if(!state.qualification.urgency){
      if(/urgent|asap|soon|this.?year|q[1-4]|immediately/i.test(t)) state.qualification.urgency='high';
      if(/exploring|research|no.?budget|future|maybe/i.test(t)) state.qualification.urgency='low';
    }
    // Qual score
    let s = 0;
    const q = state.qualification;
    if(q.industry) s+=20; if(q.size) s+=20; if(q.currentERP!==null) s+=20;
    if(q.urgency) s+=20; if(state.msgCount>3) s+=10; if(state.scrollDepth>55) s+=10;
    state.qualScore = Math.min(100, s);
  }

  /* ── Needs web search? ── */
  function needsWebSearch(text){
    return /latest|current|2024|2025|2026|recent|news|update|compare|vs\s|versus|competitor|pricing of|cost of|how much does .* cost|review of|benchmark/i.test(text);
  }

  /* ── Process input ── */
  async function processInput(text){
    extractQual(text);
    state.searching = true;

    if(needsWebSearch(text)){
      addBotSearching();
      await respondWithWebSearch(text);
    } else {
      await respondWithClaude(text);
    }
    state.searching = false;
  }

  /* ── Build system prompt ── */
  function buildSystemPrompt(){
    const pageCtx = scrapePageContext();
    return `You are Wanny, the intelligent AI pre-sales consultant embedded on the Wan Buffer website. You are NOT a scripted Q&A bot. You are genuinely smart, knowledgeable, and helpful.

== WAN BUFFER KNOWLEDGE BASE ==
${WB_KNOWLEDGE.company}

SERVICES:
${WB_KNOWLEDGE.services}

ENGAGEMENT MODELS:
${WB_KNOWLEDGE.engagement}

INDUSTRIES:
${WB_KNOWLEDGE.industries}

CASE STUDIES:
${WB_KNOWLEDGE.caseStudies}

PRICING:
${WB_KNOWLEDGE.pricing}

FAQ:
${WB_KNOWLEDGE.faq}

CONTACT:
${WB_KNOWLEDGE.contact}

== CURRENT WEBSITE CONTEXT (live page content) ==
${pageCtx}

== VISITOR PROFILE ==
Industry: ${state.qualification.industry || 'unknown'}
Company size: ${state.qualification.size || 'unknown'}
Current ERP: ${state.qualification.currentERP || 'unknown'}
Urgency: ${state.qualification.urgency || 'unknown'}
Qualification score: ${state.qualScore}/100
Scroll depth: ${state.scrollDepth}%
Section currently viewing: ${currentSection || 'homepage'}

== BEHAVIOUR RULES ==
1. Answer ANY question the visitor has — do not dodge or deflect to "contact us" unless truly necessary
2. Use your knowledge base to give specific, accurate answers about Wan Buffer's services, pricing, timelines, and capabilities
3. Be conversational and concise — under 120 words per response unless a detailed comparison or list is needed
4. Naturally reference case studies when they're relevant to the question
5. Never sound salesy or scripted — be a knowledgeable friend who happens to work at Wan Buffer
6. When qualification score ≥ 60, naturally suggest a discovery call — but don't push if they're still researching
7. If asked about competitors, be honest and fair — highlight what makes Wan Buffer genuinely different
8. Format with **bold** for key terms when it helps readability
9. If a question is outside your knowledge, say so honestly rather than guessing`;
  }

  /* ── Claude API call (no web search) ── */
  /* ── PROXY CONFIG — set your backend URL here when ready ── */
  const PROXY_URL = ''; // e.g. 'https://your-domain.com/api/wanny'

  /* ── Smart offline knowledge engine — conversation-aware ── */
  function smartOfflineReply(text){
    const t = text.toLowerCase();
    const q = state.qualification;

    // ── Build a running context picture from conversation history ──
    const recentMsgs = state.conversation.slice(-10);
    const allUserText = recentMsgs.filter(m=>m.role==='user').map(m=>m.content.toLowerCase()).join(' ');
    const lastBotMsgs = recentMsgs.filter(m=>m.role==='assistant');
    const lastBot = lastBotMsgs.length ? lastBotMsgs[lastBotMsgs.length-1].content.toLowerCase() : '';
    const prevBot = lastBotMsgs.length > 1 ? lastBotMsgs[lastBotMsgs.length-2].content.toLowerCase() : '';
    const history = recentMsgs.map(m=>m.content.toLowerCase()).join(' ');

    // What topics have come up across the whole conversation?
    const ctxUSA = /usa|united states|america|us client|north america/i.test(allUserText + history);
    const ctxSteel = /steel|metal|iron|alumin|copper|fabricat/i.test(allUserText);
    const ctxDistrib = /distribut|wholesale|trading|trade house|export|import/i.test(allUserText);
    const ctxMfg = /manufactur|factory|plant|mill|production/i.test(allUserText);

    // ── PRINCIPLE: Answer first. Qualify second. Be honest. Sound human. ──

    // ── Simple yes/no geography — answer directly ──
    if(/usa|united states|america|us client|do you.*(usa|us)|serve.*usa|work.*us/i.test(t)){
      const followUp = ctxDistrib ? "Are you based in the US, or are you looking to expand there?"
                     : ctxSteel ? "Are you a US-based steel business, or looking at cross-border trade?"
                     : "Are you based in the US yourself, or asking on behalf of a client?";
      return `Yes, definitely. We work with clients across the USA — mostly mid-market businesses in manufacturing, distribution, and services. A few are headquartered in the US and use us for Odoo implementation and AI automation. ${followUp}`;
    }

    // ── Steel + export/import — be honest, answer what we can ──
    if(/steel.*export|steel.*import|export.*import.*steel|import.*export.*steel|steel.*trading|steel.*trade/i.test(t) ||
       (ctxSteel && /export|import|trading|trade/i.test(t))){
      state.qualification.industry = 'manufacturing';
      return `Honest answer — I don't have a specific steel export/import case study I can point to. What we have done is Odoo implementation for steel manufacturers (inventory management, procurement, quality tracking) and for trading businesses (multi-currency, landed costs, customs documentation). The export/import piece in Odoo — duty tracking, incoterms on sales orders, multi-country tax handling — we've handled that for clients in UAE and India. If you want to talk to someone on the team who's done this specifically, I can flag you for a call. What country is the trade flowing between?`;
    }

    // ── Steel general — answer directly with honesty ──
    if(/steel|metal.*industr|iron|alumin|copper|fabricat/i.test(t)){
      state.qualification.industry = 'manufacturing';
      return `We've worked with metal and steel manufacturing clients — mostly on the production side: Odoo MRP, inventory management with lot/batch tracking, quality control, and procurement automation. I won't oversell it — our strongest manufacturing case study is a textile mill, not steel specifically. But the Odoo modules are the same (MRP, Inventory, Purchase, Quality), and we've handled multi-warehouse raw material tracking for heavy industry clients before. What does your operation look like — manufacturing, trading, or both?`;
    }

    // ── Distribution/wholesale — conversational, not a brochure ──
    if(/distribut|wholesale|trade house/i.test(t)){
      state.qualification.industry = 'logistics';
      const usa = ctxUSA ? " We have distribution clients in the US too." : "";
      return `Yes, distribution is a solid use case for Odoo and one we've implemented a fair bit.${usa} The things that matter most for distributors — customer-specific pricing, credit limits, multi-warehouse visibility, automated reordering — Odoo handles those well out of the box, and we tune them to how your business actually operates. What type of goods are you distributing, and roughly how many SKUs are you managing?`;
    }

    // ── Export/import general ──
    if(/export|import|cross.?border|customs|duty|incoterm/i.test(t)){
      const honest = ctxSteel ? "For steel specifically, " : "";
      return `${honest}We've handled cross-border trade scenarios in Odoo — incoterms on sales orders, landed cost tracking (freight, customs, insurance), multi-currency accounting, and country-specific tax rules. Our clients in UAE and India deal with significant import/export volumes. What's the trade corridor you're working with?`;
    }

    // ── USA geography ──
    if(/usa|united states|america|us-based|north america/i.test(t)){
      return `Yes — we serve clients in the US. Mostly mid-market businesses that want Odoo without paying enterprise SI rates. We work remotely with US clients and have done projects across manufacturing, distribution, and services. What's your situation — are you evaluating Odoo for the first time, or looking to improve an existing setup?`;
    }

    // ── Simple greetings ──
    if(/^(hi|hello|hey|yo|hiya|good\s*(morning|afternoon|evening))[\s!?.,]*$/i.test(t.trim())){
      return `Hi — I'm Wanny. Ask me anything about Wan Buffer's ERP and AI work. I'll give you straight answers, not a sales pitch.`;
    }

    // ── Who are you / about Wan Buffer ──
    if(/who are you|what is wan buffer|about wan buffer|what do you do|introduce yourself/i.test(t)){
      const alreadyIntroduced = /254\+ projects|erp solutions company|gold partner/i.test(history);
      if(alreadyIntroduced) return `Already covered the intro — happy to go deeper on anything specific. What are you trying to figure out?`;
      return `Wan Buffer is an ERP and AI automation company — been around 7+ years, 254+ projects, clients across 20+ countries. We mainly work with Odoo (we're an Odoo Partner) but also handle Zoho, Salesforce, Shopify, Magento and Razorpay integrations. What brings you here?`;
    }

    // ── Services overview ──
    if(/service|what do you offer|capabilities|what you build|help with/i.test(t)){
      return `Main things we do: Odoo ERP implementation (v16/17/18), AI agents that automate repetitive ERP tasks, workflow automation, predictive analytics, and integrations with platforms like Shopify, Salesforce, Razorpay. We also build custom AI — document processing, forecasting models, chatbots embedded in Odoo. What's the problem you're trying to solve?`;
    }

    // ── Odoo specific ──
    if(/odoo|erp implement|odoo 1[6-9]|migrat/i.test(t)){
      return `We're an Odoo Partner — we've done implementations, custom module development, migrations from older versions, and AI integration on top of Odoo. Typical SME implementation runs 8–14 weeks. If it's complex — multi-company, lots of custom workflows, AI on top — more like 16–24 weeks. Are you starting fresh or migrating from something existing?`;
    }

    // ── AI Agent model ──
    if(/ai agent|ai.*human|autonomous.*agent/i.test(t)){
      return `That's our newest model — AI agents handle the repetitive ERP work (auto-purchasing, invoice processing, stock alerts) while senior engineers handle anything that needs judgment. Clients typically cut costs 50–70% compared to a fully human team. It works well when you have high-volume, predictable workflows. Does that sound like your situation?`;
    }

    // ── Engagement models ──
    if(/engagement|retainer|dedicated team|project.?based|how do you work/i.test(t)){
      return `Four ways to work with us: project-based (fixed scope, fixed cost), dedicated team (your engineers on retainer), ongoing retainer (support + continuous improvement), or the AI Agent + Human Team model (AI handles routine tasks, humans handle complex ones). Most first-time clients start with a project. What does your timeline and budget situation look like?`;
    }

    // ── Pricing ──
    if(/price|pricing|cost|how much|budget|rate|fee|quote/i.test(t)){
      return `We don't publish fixed prices — it genuinely depends on scope. A standard Odoo SME implementation usually starts around $15k–$20k. AI work is scoped separately. If you're a larger business or need significant customisation, it'll be higher. Best way to get a real number is a quick scoping call — we give you a written proposal with clear deliverables before anything starts. Want to do that?`;
    }

    // ── Timeline ──
    if(/timeline|how long|duration|weeks|months|go.?live|delivery/i.test(t)){
      return `Standard Odoo implementation: 8–14 weeks. Complex multi-company or AI-heavy projects: 16–24 weeks. Migrations from older Odoo versions: 6–10 weeks. Adding an AI module to existing Odoo: 3–6 weeks. We hit 96% on-time delivery across our projects — we're realistic about timelines upfront.`;
    }

    // ── Manufacturing ──
    if(/manufactur|factory|plant|production|mrp/i.test(t)){
      state.qualification.industry = 'manufacturing';
      return `Manufacturing is one of our stronger areas — Odoo MRP, shop floor tracking, predictive maintenance, quality control, autonomous purchasing. Best example: a Gujarat fabric mill where we cut lead time by 40% and reduced manual data entry by 80%, live in 14 weeks. What kind of manufacturing are you in?`;
    }

    // ── Retail/ecommerce ──
    if(/retail|ecommerce|shopify|magento|store/i.test(t)){
      state.qualification.industry = 'retail';
      return `We do a lot of Odoo + ecommerce work — Shopify and Magento bridges to Odoo, multi-warehouse management, AI demand forecasting, loyalty programs. Are you running on an existing platform and looking to sync with Odoo, or building from scratch?`;
    }

    // ── Logistics/3PL ──
    if(/logistic|3pl|freight|shipping|route/i.test(t)){
      state.qualification.industry = 'logistics';
      return `Logistics is solid for us — multi-client WMS on Odoo, AI route optimisation, SLA tracking, automated client billing. We had a Kuwait 3PL client cut overstock by 34% and stockouts by 60% with predictive replenishment. What does your operation look like?`;
    }

    // ── Healthcare ──
    if(/health|pharma|clinic|hospital|medical/i.test(t)){
      state.qualification.industry = 'healthcare';
      return `We've built HIPAA-aligned Odoo setups for healthcare — patient flows, pharmacy inventory, insurance billing automation. PharmaCore in Hyderabad processes 300+ invoices a day now with zero human touch. Are you in hospitals, pharma, or something else?`;
    }

    // ── Real estate ──
    if(/real.?estate|property|developer|broker|lease/i.test(t)){
      state.qualification.industry = 'realestate';
      return `Real estate is one of our verticals — broker CRM, AI lead scoring, lease automation, occupancy forecasting. Arabian Properties in Dubai saw a 28% jump in broker conversion after we implemented AI lead scoring on their Odoo. Are you a developer, agent, or property manager?`;
    }

    // ── Finance ──
    if(/finance|bank|accounting|fintech|reconcil/i.test(t)){
      state.qualification.industry = 'finance';
      return `We do multi-currency Odoo accounting, VAT/GST compliance (India, UAE, Germany, Canada), AI reconciliation, and KYC automation. Mostly for professional services firms and financial businesses. What's the core problem — compliance, reconciliation, CRM, or something else?`;
    }

    // ── Case studies ──
    if(/case study|case studies|example|proof|results|roi|success/i.test(t)){
      return `A few real ones: Gujarat fabric mill — 40% lead time down, 80% less manual work, 14 weeks to go-live. Gulf Logistics in Kuwait — 34% less overstock, 60% fewer stockouts. PharmaCore in Hyderabad — 300+ invoices a day, fully automated. Arabian Properties in Dubai — 28% more broker conversions. Kaizen Auto Parts in Pune — 40% lead time reduction. Want details on any of these?`;
    }

    // ── Platforms/integrations ──
    if(/zoho|salesforce|razorpay|shopify|magento|integration|connector|sync|platform/i.test(t)){
      return `Beyond Odoo we work with Zoho (CRM, Books, Inventory), Salesforce (bidirectional sync with Odoo), Shopify and Magento (real-time inventory and order sync), and Razorpay — we're an official partner there. Also Stripe, FedEx, DHL, HubSpot, Zapier, Make, AWS. Which platform are you looking to connect?`;
    }

    // ── Regions/compliance ──
    if(/india|uae|germany|canada|morocco|gdpr|vat|gst|compliance|region|country/i.test(t)){
      return `We actively serve India, UAE, USA, Canada, Germany, and Morocco — with built-in compliance for each (GST e-invoicing for India, GCC VAT for UAE, GDPR for Germany, sales tax for North America). Where is your business based?`;
    }

    // ── Support ──
    if(/support|after.?launch|post.?go.?live|maintenance|sla/i.test(t)){
      return `Every project includes 3 months of free support after go-live. After that it's SLA-based — 4-hour response for critical issues, 1 business day for standard. Retainer clients get priority queue and quarterly reviews.`;
    }

    // ── Security/NDA ──
    if(/security|nda|privacy|confidential|gdpr|safe|secure|data/i.test(t)){
      return `We sign an NDA before any sensitive data is shared. Data stays on private endpoints — nothing feeds public AI models. On-premise AI is available for healthcare and finance clients. We're compliant with GDPR, UAE PDPL, and India's DPDP Act.`;
    }

    // ── Booking ──
    if(/book|call|schedule|meet|discovery|talk to someone|speak|connect/i.test(t)){
      state.qualScore = Math.max(state.qualScore, 62);
      return `Good idea — a 30-minute call is the fastest way to get a real answer for your situation. You'd be talking to an engineer, not a salesperson.`;
    }

    // ── Tell me more / follow-up expansion ──
    if(/tell me more|more about|elaborate|explain|go on|what else|deeper/i.test(t)){
      if(/distribut|wholesale/i.test(lastBot)) return `For distribution the details that usually matter: how you handle customer-specific pricing (Odoo does tiered price lists and contract prices cleanly), credit limit enforcement on orders, multi-location stock visibility across warehouses, and supplier lead time tracking for automated reordering. What part of the operation is most painful right now?`;
      if(/manufactur|mrp|production/i.test(lastBot)) return `On the manufacturing side — multi-level BOM, work centre routing, real-time OEE on shop floor tablets, computer vision quality checks, predictive maintenance from IoT sensors, subcontracting flows. What does your production process look like?`;
      if(/inventor|stock/i.test(lastBot)) return `On inventory specifically: lot and serial tracking end-to-end, multi-step receipt/delivery flows with quality gates, demand-driven reorder rules, cycle counting without stopping operations, landed cost distribution. How many SKUs and locations are you dealing with?`;
      return `Happy to go deeper — which part are you most interested in: technical implementation, a specific module, how we've done it for similar businesses, or timeline and cost?`;
    }

    // ── Yes confirmations ──
    if(/^(yes|yeah|yep|sure|ok|okay|correct|right|exactly|absolutely|definitely)[\s!.,?]*$/i.test(t.trim())){
      if(/call|book|discovery/i.test(lastBot)) return `Great. Can you share a bit about what you're trying to solve first? Even a one-liner helps the specialist prepare for the call.`;
      if(/erp|odoo|sap|spreadsheet/i.test(lastBot) && !q.currentERP) return `Got it — which one? Odoo, SAP, Salesforce, Zoho, something else, or spreadsheets?`;
      return `Understood. What would you like to know next?`;
    }

    // ── No / negative ──
    if(/^(no|nope|not really|not yet|don't|dont|haven't|havent|nah)[\s!.,?]*$/i.test(t.trim())){
      if(!q.currentERP && /erp|system/i.test(lastBot)){
        state.qualification.currentERP = 'none';
        return `Starting clean is actually easier — no legacy migration baggage, we design the architecture right from day one. What's the main operational headache you're trying to fix?`;
      }
      return `No worries. What would you like to explore instead?`;
    }

    // ── Short referential follow-ups ("do they?", "is that right?", "and them?") ──
    const wordCount = t.trim().split(/\s+/).length;
    if(wordCount <= 8 && /they|their|it|this|that|those|these|the client|your client/i.test(t)){
      // Stay on the last topic
      if(/gulf logistic|kuwait/i.test(lastBot + prevBot)) return `Yes, Gulf Logistics is based in Kuwait — mid-size 3PL serving the GCC region. They came to us with a serious overstock problem and we solved it with predictive replenishment on Odoo. Similar situation to what you're dealing with?`;
      if(/gujarat|fabric mill|textile/i.test(lastBot + prevBot)) return `That project is in Gujarat, India — textile manufacturer, 3 production lines. The big win was autonomous purchasing agents and real-time shop floor tracking. Similar production setup to yours?`;
      if(/pharmacore|hyderabad/i.test(lastBot + prevBot)) return `PharmaCore is in Hyderabad, India — pharmaceutical company that needed to process hundreds of invoices daily without growing their accounts team. We built AI document processing on top of Odoo for them.`;
      if(/arabian|dubai|real estate/i.test(lastBot + prevBot)) return `Arabian Properties is in Dubai. Real estate developer — the problem was brokers not following up on leads fast enough. We built AI lead scoring that prioritised the hottest leads automatically.`;
      // Generic short follow-up
      if(lastBot) return `Can you be a bit more specific about what you're asking? I want to give you a useful answer rather than guess.`;
    }

    // ── How many / portfolio ──
    if(/how many|total|count|portfolio/i.test(t)){
      return `254+ projects delivered over 7+ years, across 20+ countries. 84% of clients come back for more work — either new modules or AI enhancements. Anything specific you want to know about our track record?`;
    }

    // ── Contextual fallback — never ask a question that's already been asked ──
    const alreadyAskedIndustry = /which industry|what industry|what sector|what type of business/i.test(history);
    const alreadyAskedERP = /which erp|what erp|running an erp|using an erp/i.test(history);

    // Use accumulated context to give a relevant response
    if(ctxSteel && ctxDistrib){
      return `Given what you've mentioned — steel trading and distribution — the Odoo setup we'd typically recommend covers multi-currency purchasing, landed cost tracking for imports, customer-specific pricing for your buyers, and inventory management across locations. I don't have a steel trading case study specifically, but those components are things we've built for trading businesses. What's the biggest operational gap in your current setup?`;
    }
    if(ctxDistrib && !alreadyAskedIndustry){
      return `What type of goods does your distribution business handle? That helps me point to the most relevant work we've done.`;
    }
    if(!q.industry && !alreadyAskedIndustry){
      return `What kind of business are you running? I can give you a much more useful answer once I know the sector.`;
    }
    if(q.industry && !q.currentERP && !alreadyAskedERP){
      return `Are you currently running an ERP, or managing on spreadsheets?`;
    }

    // Last resort — honest, not deflecting
    return `I want to give you a useful answer — can you say a bit more about what you're asking? I'm happy to be direct once I understand the question.`;
  }

  async function respondWithClaude(text){
    if(PROXY_URL){
      try {
        const res = await fetch(PROXY_URL, {
          method:'POST', headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ system: buildSystemPrompt(), messages: state.conversation.slice(-8) })
        });
        if(!res.ok) throw new Error('proxy-error');
        const data = await res.json();
        const reply = data?.content?.[0]?.text || data?.reply || '';
        if(!reply) throw new Error('empty');
        const showBooking = state.qualScore >= 60 && /book|call|schedule|discovery/i.test(reply);
        const showCS = /case study|Case Study/i.test(reply);
        addBotMsg(reply, showBooking ? 'booking' : showCS ? 'casestudy' : null);
        renderPostChips();
        return;
      } catch(e){ /* fall through */ }
    }
    const reply = smartOfflineReply(text);
    const showBooking = state.qualScore >= 60 && /discovery|book|call/i.test(reply);
    const showCS = /Case Study/i.test(reply);
    addBotMsg(reply, showBooking ? 'booking' : showCS ? 'casestudy' : null);
    renderPostChips();
  }

  async function respondWithWebSearch(text){
    removeSearching();
    const reply = smartOfflineReply(text);
    addBotMsg(reply);
    renderPostChips();
  }

  /* ── Smart post-response chips ── */
  function renderPostChips(){
    const q = state.qualification;
    const allUserText = state.conversation.filter(m=>m.role==='user').map(m=>m.content.toLowerCase()).join(' ');

    let chips = [];
    if(state.qualScore >= 65){
      chips = ['Book a 30-min call','How much does it cost?','Show me a case study'];
    } else if(q.industry === 'manufacturing' || /manufactur|steel|metal/i.test(allUserText)){
      chips = ['Tell me about Odoo MRP','Do you do AI quality control?','What does implementation cost?','Book a call'];
    } else if(q.industry === 'logistics' || /distribut|3pl|logistic/i.test(allUserText)){
      chips = ['How does Odoo handle distribution?','Do you work in the UAE?','What does it cost?','Book a call'];
    } else if(q.industry === 'retail'){
      chips = ['Shopify + Odoo integration','AI demand forecasting','Timeline and cost?'];
    } else if(q.industry){
      chips = ['What modules do you implement?','How long does it take?','What does it cost?','Book a call'];
    } else if(!q.currentERP && state.msgCount > 1){
      chips = ['We use Odoo','Different ERP','No ERP yet','Just exploring'];
    } else {
      chips = ['What industries do you serve?','Do you work in the USA?','How much does Odoo cost?','Book a call'];
    }
    showChips(chips);
  }

  /* ── Card builders ── */
  function buildCSCard(){
    const industry = state.qualification.industry || 'manufacturing';
    const cases = {
      manufacturing: {tag:'Manufacturing · Gujarat',title:'Fabric Mill: Odoo MRP + AI Agents',m1:'40%',l1:'Lead Time ↓',m2:'80%',l2:'Less Manual Entry',m3:'14W',l3:'Go-Live'},
      logistics: {tag:'Logistics · Kuwait',title:'Gulf Logistics: Predictive Replenishment',m1:'34%',l1:'Overstock ↓',m2:'60%',l2:'Fewer Stockouts',m3:'96%',l3:'On-Time Delivery'},
      realestate: {tag:'Real Estate · Dubai',title:'Arabian Properties: AI CRM on Odoo',m1:'28%',l1:'Conversion ↑',m2:'100%',l2:'Lease Automation',m3:'12W',l3:'Go-Live'},
    };
    const c = cases[industry] || cases.manufacturing;
    return `<div class="w-cs-card">
      <div class="w-cs-tag">Case Study · ${c.tag}</div>
      <div class="w-cs-title">${c.title}</div>
      <div class="w-cs-metrics">
        <div class="w-cs-m"><div class="w-cs-mv">${c.m1}</div><div class="w-cs-ml">${c.l1}</div></div>
        <div class="w-cs-m"><div class="w-cs-mv">${c.m2}</div><div class="w-cs-ml">${c.l2}</div></div>
        <div class="w-cs-m"><div class="w-cs-mv">${c.m3}</div><div class="w-cs-ml">${c.l3}</div></div>
      </div>
    </div>`;
  }

  function buildBookingCard(){
    return `<div class="w-book-card">
      <div class="w-book-title">📅 Free 30-Min Discovery Call</div>
      <div class="w-book-sub">Talk directly with an AI + ERP specialist — not a sales rep — within 24 hours.</div>
      <div class="w-book-slots">
        <span class="w-book-slot" onclick="selectSlot(this)">Mon 10:00 IST</span>
        <span class="w-book-slot" onclick="selectSlot(this)">Tue 14:00 IST</span>
        <span class="w-book-slot" onclick="selectSlot(this)">Wed 11:00 IST</span>
        <span class="w-book-slot" onclick="selectSlot(this)">Thu 15:30 IST</span>
      </div>
      <button class="w-book-btn" onclick="bookSlot()">Confirm &amp; Book →</button>
    </div>`;
  }

  window.selectSlot = s => { document.querySelectorAll('.w-book-slot').forEach(x=>x.classList.remove('selected')); s.classList.add('selected'); };
  window.bookSlot = () => {
    const s = document.querySelector('.w-book-slot.selected');
    if(!s){ addBotMsg('Please select a time slot first.'); return; }
    document.getElementById('wannyChips').innerHTML='';
    addBotMsg(`Noted — **${s.textContent}** works. Can you share your name and business email? I'll make sure a specialist reaches out within 2 hours with the calendar invite.`);
    showChips(['Send to contact form','I\'ll email you directly']);
  };

  return { open: openWanny, _isOpen: () => state.open };
})();


window.openWanny = function(){ if (typeof WANNY !== 'undefined' && WANNY.open) WANNY.open(); };

;(function(){
  var stack = document.getElementById('float-stack');
  if(!stack) return;
  window.addEventListener('scroll', function(){
    if(window.scrollY > 600) stack.classList.add('visible');
    else stack.classList.remove('visible');
  }, {passive:true});
})();
