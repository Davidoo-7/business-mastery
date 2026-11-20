/* Source reader and Retention Lab. Built on the existing Business Mastery app controller. */
function productSourcePage(){
  const d=productVideoNotes,m=moduleMap.product;
  content.innerHTML=`<div class="page product-source-page" ${styleFor(m)}>
    <a class="back-link" href="#module/product">← Back to Product</a>
    <section class="source-hero">
      <span class="eyebrow">PRODUCT / SOURCE-DERIVED RESEARCH NOTES</span>
      <h1>Products people <em>keep buying.</em></h1>
      <p>${esc(d.intro)}</p>
      <div class="source-credit">${esc(d.source)} <span>· Paraphrased notes, not a verbatim transcript</span></div>
    </section>
    <div class="source-layout"><article class="source-reading">
      <div class="source-thesis"><span>THE CENTRAL THESIS</span><p>${esc(d.thesis)}</p></div>
      ${d.sections.map((s,i)=>`<section class="source-chapter" id="source-${i+1}"><div class="source-chapter-number">${String(i+1).padStart(2,'0')}</div><div><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p></div></section>`).join('')}
      <div class="source-caveat"><strong>What is source material—and what is not?</strong><p>${esc(d.caveat)} The exercises, one-off business examples and retention calculator are educational applications added to help test the principle.</p></div>
    </article><aside class="source-side"><div class="source-side-card"><span class="eyebrow">TURN INSIGHT INTO ACTION</span><h3>Read. Model. Apply.</h3><p>Test what a change in monthly churn would mean for an idealized recurring business, then record your assumptions.</p><a class="button button-dark" href="#lab/retention">Open the Retention Lab ↗</a></div><div class="source-side-card"><span class="eyebrow">STUDY THESE LESSONS</span>${d.lessonIds.map(id=>`<a class="source-lesson-link" href="#lesson/${id}"><span>↗</span> ${esc(lessonMap[id]?.title||id)}</a>`).join('')}</div></aside></div>
  </div>`;
}

function retentionSimulation(newPerMonth,monthlyChurn,months){
  let active=0;
  const points=[];
  for(let month=1;month<=months;month++){
    active=active*(1-monthlyChurn)+newPerMonth;
    points.push({month,active});
  }
  return points;
}

function productRetentionLab(){
  const m=moduleMap.product;
  content.innerHTML=`<div class="page retention-page" ${styleFor(m)}>
    <a class="back-link" href="#module/product">← Back to Product</a>
    <header class="page-intro"><span class="eyebrow">PRODUCT / INTERACTIVE ECONOMICS</span><h1>The Retention Lab<span class="period">.</span></h1><p>See why Hormozi places so much emphasis on customers who keep buying. Change one assumption at a time and compare it with a 10% monthly-churn reference scenario.</p></header>
    <div class="retention-lab-layout"><section class="retention-controls"><span class="eyebrow">YOUR MODEL</span><h2>Set the assumptions.</h2>
      <label>New subscribers per month <small>Constant monthly additions</small><input type="number" id="retNew" min="0" max="10000" step="1" value="40" inputmode="numeric"></label>
      <label>Monthly churn <small>Percentage of existing active customers who leave</small><div class="inline-number"><input type="number" id="retChurn" min="0" max="100" step="0.5" value="2" inputmode="decimal"><span>%</span></div></label>
      <label>Average price per active customer <small>Monthly revenue, in euros</small><div class="inline-number"><input type="number" id="retPrice" min="0" max="1000000" step="10" value="150" inputmode="decimal"><span>€</span></div></label>
      <label>Time horizon <small>Number of months to simulate</small><select id="retMonths"><option value="12">12 months</option><option value="24" selected>24 months</option><option value="36">36 months</option><option value="60">60 months</option></select></label>
      <p class="retention-input-note">Assumes zero starting customers, constant monthly additions, uniform monthly churn and constant price. The comparison always uses 10% churn.</p>
      <button id="retReset" class="button button-outline" type="button">Reset assumptions ↺</button>
    </section><section class="retention-display"><div class="retention-display-top"><span class="eyebrow">WHAT CHANGES WHEN CUSTOMERS STAY?</span><span class="retention-time" id="retPeriod">AFTER 24 MONTHS</span></div>
    <div class="retention-metrics" id="retResults" aria-live="polite"></div>
    <div class="retention-chart-wrap"><div class="retention-chart-heading"><h3>Active customers over time</h3><span>Higher is better, all else equal</span></div><div class="retention-legend"><span class="ret-your"><i></i>Your churn rate</span><span class="ret-reference"><i></i>10% comparison</span></div><svg id="retChart" class="retention-chart" viewBox="0 0 640 260" role="img" aria-label="Chart comparing active customers over time for your churn rate and a 10 percent reference rate"></svg></div>
    <div id="retInsight" class="retention-insight"></div>
    </section></div>
    <div class="retention-explainer"><span class="eyebrow">HOW THE MODEL WORKS</span><h2>A simplified retention equation.</h2><div class="retention-formula">Next month's customers = current customers × (1 − monthly churn) + new customers</div><p>Lower churn allows earlier cohorts to accumulate. This model illustrates recurring customer counts and monthly recurring revenue, not profit or a full business forecast. It excludes acquisition cost, customer acquisition variation, margins, upgrades, downgrades, expansion and seasonality.</p><p><strong>For one-time purchases:</strong> interpret the principle as improving delivered value, referrals and legitimate repeat needs. A customer should not be treated as paying forever after a single installation.</p><div class="retention-links"><a class="button button-dark" href="#lesson/product-churn-economics">Study churn economics ↗</a><a class="button button-outline" href="#source/product-retention">Read video notes →</a><a class="button button-outline" href="#tool/retention-experiment">Plan an improvement →</a></div></div>
  </div>`;
  const fields=['retNew','retChurn','retPrice','retMonths'];
  const money=new Intl.NumberFormat('en-NL',{style:'currency',currency:'EUR',maximumFractionDigits:0});
  const whole=new Intl.NumberFormat('en-NL',{maximumFractionDigits:0});
  const clip=(id,min,max)=>{const num=Number(document.getElementById(id).value);return Number.isFinite(num)?Math.min(max,Math.max(min,num)):min};
  const renderLab=()=>{
    const n=clip('retNew',0,10000),churn=clip('retChurn',0,100)/100,price=clip('retPrice',0,1000000),months=clip('retMonths',12,60);
    const you=retentionSimulation(n,churn,months),ref=retentionSimulation(n,.10,months),a=you.at(-1).active,b=ref.at(-1).active;
    document.getElementById('retPeriod').textContent=`AFTER ${months} MONTHS`;
    document.getElementById('retResults').innerHTML=`<div class="ret-stat"><span>YOUR ACTIVE CUSTOMERS</span><strong>${whole.format(a)}</strong><small>${(churn*100).toLocaleString('en-NL',{maximumFractionDigits:1})}% monthly churn</small></div><div class="ret-stat"><span>YOUR MONTHLY REVENUE</span><strong>${money.format(a*price)}</strong><small>Recurring revenue, not profit</small></div><div class="ret-stat reference"><span>AT 10% MONTHLY CHURN</span><strong>${whole.format(b)}</strong><small>${money.format(b*price)} monthly revenue</small></div>`;
    const max=Math.max(1,...you.map(p=>p.active),...ref.map(p=>p.active));
    const w=590,left=34,right=624,top=22,bottom=216;
    const pathFor=(arr)=>arr.map((p,i)=>`${i===0?'M':'L'}${(left+((p.month-1)/(months-1))*w).toFixed(1)} ${(bottom-(p.active/max)*(bottom-top)).toFixed(1)}`).join(' ');
    const grids=[0,0.5,1].map(r=>`<line x1="${left}" y1="${(bottom-r*(bottom-top)).toFixed(1)}" x2="${right}" y2="${(bottom-r*(bottom-top)).toFixed(1)}" stroke="#dce4e2" stroke-dasharray="4 5"/><text x="${left-9}" y="${(bottom-r*(bottom-top)+4).toFixed(1)}" text-anchor="end" fill="#778985" font-size="11">${whole.format(max*r)}</text>`).join('');
    document.getElementById('retChart').innerHTML=`${grids}<path d="${pathFor(ref)}" stroke="#9ba7ad" stroke-width="3" stroke-dasharray="6 6" fill="none"/><path d="${pathFor(you)}" stroke="#b56b70" stroke-width="3.8" stroke-linejoin="round" fill="none"/><circle cx="${right}" cy="${(bottom-(a/max)*(bottom-top)).toFixed(1)}" r="5" fill="#b56b70"/><text x="${left}" y="245" fill="#7e908a" font-size="12">MONTH 1</text><text x="${right}" y="245" fill="#7e908a" font-size="12" text-anchor="end">MONTH ${months}</text>`;
    const gap=a-b;
    document.getElementById('retInsight').innerHTML=`<strong>${gap>0.5?`${whole.format(gap)} more active customers`:gap<-.5?`${whole.format(-gap)} fewer active customers`:'The same active customer count'} at month ${months}</strong><p>With <b>${whole.format(n)} new subscriptions per month</b>, a <b>${(churn*100).toLocaleString('en-NL',{maximumFractionDigits:1})}%</b> churn assumption produces <b>${money.format(a*price)}</b> in modeled monthly revenue. The comparison is <b>${money.format(b*price)}</b> at 10% churn. These are illustrative, not promised results.</p>`;
  };
  fields.forEach(id=>document.getElementById(id).addEventListener('input',renderLab));
  fields.forEach(id=>document.getElementById(id).addEventListener('change',renderLab));
  document.getElementById('retReset').onclick=()=>{document.getElementById('retNew').value=40;document.getElementById('retChurn').value=2;document.getElementById('retPrice').value=150;document.getElementById('retMonths').value=24;renderLab()};
  renderLab();
}
