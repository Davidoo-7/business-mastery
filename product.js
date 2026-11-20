/* Product discipline: lessons from the Alex Hormozi video transcript supplied on 20 November 2026.
   New examples, diagnostics, exercises and retention calculator are educational applications.
   This is not a transcript or an official Hormozi product. */
const productVideoSource = {
  name:'Alex Hormozi — Products People Keep Buying (supplied transcript)',
  type:'User-supplied video transcript',
  note:'Summarized and paraphrased from the provided transcript. Examples, drills, calculations and caveats are our educational adaptations.'
};

const productLessons = [
  {
    id:'product-customer-surplus',module:'PRODUCT',minutes:8,
    title:'Customer Surplus: Make Value Exceed Price',
    tagline:'People stay when giving up your product feels like losing a great deal.',
    takeaway:'Customer surplus is the value a customer perceives above the price they pay. Improve the value delivered instead of depending only on discounts.',
    source:productVideoSource,
    sections:[
      {title:'The idea behind customer surplus',body:'Hormozi describes customer surplus as the gap between what buyers receive and what they pay. If the benefit feels far greater than the bill, the customer has a reason to stay. Price and value are not the same thing.',example:'People quickly restore a phone or internet subscription when payment fails because the service is useful enough to keep.'},
      {title:'Increase the numerator before lowering the denominator',body:'Reducing price can create a larger perceived surplus, but may destroy the margin required to deliver consistently. Hormozi recommends finding better ways to deliver valuable outcomes at sustainable cost.',example:'Instead of discounting a service, make results clearer, remove customer work, improve reliability, and help customers reach value sooner.'},
      {title:'High value is more meaningful than high ticket',body:'A large price is not automatically expensive when the customer receives even greater value. The useful question is whether the buyer would gladly make the same decision again.'},
      {title:'Avoid confusing surplus with profitability',body:'Customer surplus concerns the customer’s perceived exchange. The company must also have viable unit economics. Delivering huge value at an unsustainable cost is not a durable business.'}
    ],
    question:'Which strategy is most aligned with the customer-surplus principle?',
    answers:['Cut the price until margins disappear.','Increase the outcome, convenience, and reliability relative to the price.','Charge more simply to signal prestige.'],correct:1,
    action:'Write down what buyers pay, the top three outcomes they receive, and one improvement that raises value without an equivalent cost increase.'
  },
  {
    id:'product-never-stop-buying',module:'PRODUCT',minutes:7,
    title:'Build Something Customers Keep Buying',
    tagline:'Acquisition starts growth. Retention is what lets growth compound.',
    takeaway:'The video’s core thesis is to design offers that customers continue to use and renew voluntarily because the value remains compelling.',
    source:productVideoSource,
    sections:[
      {title:'The thought experiment',body:'Count everyone who has ever purchased from your business. Imagine how large recurring revenue could be if each remained active at today’s monthly price. Hormozi uses this to reveal the long-run economic impact of customer loss. It is a thought experiment, not a projection.',example:'If you acquire 40 subscribing customers each month but continually lose existing ones, your active base can eventually plateau. Better retention raises the long-run ceiling.'},
      {title:'Become hard to replace for good reasons',body:'He gives phone service, home internet, streaming and familiar consumer products as examples of things people may be reluctant to discontinue. The objective is enduring usefulness, not locking customers in through hidden fees.'},
      {title:'Retention depends on repeatable delivered value',body:'Customers remain when the product works, continues to solve a problem and feels worth the price. Design delivery, onboarding, support, continued results and improvements around that outcome.'},
      {title:'Important distinction: one-time purchases',body:'This logic applies directly to subscriptions and repeat-purchase businesses. For renovations or another one-off purchase, do not invent unnecessary subscriptions. Instead improve satisfaction, complementary purchases, genuine referrals and reputation over time. That is an application of the principle, not a claim from the video.'}
    ],
    question:'What must be true for customer acquisition to compound effectively?',
    answers:['The business continuously gains customers faster than it loses them.','Every customer signs a contract they cannot cancel.','Marketing spend must rise every month forever.'],correct:0,
    action:'Identify the natural next use, renewal, recommendation or second purchase after customers receive your first promised outcome.'
  },
  {
    id:'product-models-over-methods',module:'PRODUCT',minutes:7,
    title:'Sell a Model, Not Just a Method',
    tagline:'A one-off how-to can end the relationship; an evolving operating model may endure.',
    takeaway:'Hormozi prefers selling an ongoing model that can evolve as tactics change rather than only a one-time method that customers no longer need after learning it.',
    source:productVideoSource,
    sections:[
      {title:'Methods are tools; models are systems',body:'A method teaches one particular way to do something. Once a buyer knows it, the need may end. A model combines many methods into a repeatable operating system that can evolve over time.'},
      {title:'The franchise analogy',body:'The video uses franchises to illustrate the distinction. Customer-acquisition tactics change from email to search or social platforms, while the core franchise operating model continues to create value.',example:'Instead of selling one ad script, a marketing provider can maintain a full acquisition system with measurement, iteration, and operational support.'},
      {title:'Recurring payments need recurring outcomes',body:'A model is not valuable just because it is charged monthly. A recurring price must correspond to recurring, demonstrable value. Otherwise churn simply moves later.'},
      {title:'Choose the right commercial structure',body:'Some products should remain one-time purchases; others naturally support service contracts, software subscriptions, maintenance or memberships. Structure the relationship around the real customer need, not forced billing.'}
    ],
    question:'Why does the video favor models over methods?',
    answers:['A model can include evolving methods and provide ongoing value.','Methods are always illegal to sell.','Models guarantee that no customer will ever cancel.'],correct:0,
    action:'Map your offer: what is a one-time task, what must be maintained, and which changing methods support a lasting customer outcome?'
  },
  {
    id:'product-saas-lens',module:'PRODUCT',minutes:6,
    title:'Borrow the SaaS Lens for Service Businesses',
    tagline:'Think in customer cohorts, retention, repeatability, and ongoing delivered value.',
    takeaway:'Hormozi suggests analyzing service businesses with SaaS-style retention and lifetime-value metrics when the customer relationship genuinely recurs.',
    source:productVideoSource,
    sections:[
      {title:'Software and service can solve the same job',body:'Software-as-a-service automates or supports work that might otherwise be done by people. Hormozi argues that the measurement discipline used in SaaS can help recurring service providers, too.'},
      {title:'Track the ongoing relationship',body:'Useful measures may include active customers, revenue per customer, cancellations, customer churn, revenue churn, customer lifetime value, acquisition cost and gross margin. Metrics only make sense if you define the business model and accounting period.'},
      {title:'Adapt rather than copy',body:'The video says SaaS measures can apply to service. In practice, not every service is recurring, and fulfillment cost, seasonality and contracts differ. Use the same questions about value and retention, but adapt definitions to your model.',example:'A monthly cleaning provider may use monthly customer churn. A window-installation business should prioritize project quality, warranty experience, referrals and legitimate repeat work instead.'}
    ],
    question:'When is monthly customer churn a useful product metric?',
    answers:['For any business with even one sale.','When you have a clearly defined, continuing customer relationship.','Only for software companies.'],correct:1,
    action:'Define how you will recognize a retained customer, a lost customer, and continued value for your actual business model.'
  },
  {
    id:'product-promote-improve-scale',module:'PRODUCT',minutes:8,
    title:'Promotion → Product → Scale',
    tagline:'First earn customers, then earn their loyalty, then increase distribution.',
    takeaway:'The video presents a sequence inspired by Mark Roberge: acquire enough customers to learn, refine retention and value, and only then scale a product that people keep.',
    source:productVideoSource,
    sections:[
      {title:'Stage 1 — Promotion',body:'Get customers into the product so you can observe real usage and outcomes. Pricing should establish meaningful willingness to pay, but the immediate goal is learning—not squeezing every possible dollar from early adopters.'},
      {title:'Stage 2 — Product',body:'Improve the product and customer experience until the value proposition is strong and loss is low. Interview customers, watch usage, study cancellation reasons and improve delivery repeatedly.'},
      {title:'Stage 3 — Scale',body:'When the offer reliably retains customers with viable unit economics, wider promotion becomes more powerful: new cohorts build on those already retained rather than constantly replacing them.'},
      {title:'About the revenue ranges',body:'Hormozi describes approximately $0–1M for promotion and $1–10M for product optimization as illustrative milestones. These are not universal business laws: product quality and retention must be worked on from the beginning, and scaling decisions depend on the economics.'}
    ],
    question:'Why is scaling before solving retention risky?',
    answers:['More leads immediately fix every delivery problem.','Extra acquisition may refill a leaky customer base instead of compounding growth.','You should never promote a new product.'],correct:1,
    action:'Place your offer in the current learning stage and define the evidence required to move forward.'
  },
  {
    id:'product-churn-economics',module:'PRODUCT',minutes:8,
    title:'The Mathematics of Retention',
    tagline:'A small monthly loss can compound into a very different long-run business.',
    takeaway:'At a constant acquisition rate, lower customer churn means a larger active customer base and more recurring revenue over time.',
    source:productVideoSource,
    sections:[
      {title:'Churn is a rate, not just a customer count',body:'Monthly customer churn is the fraction of eligible active customers lost during a month. A business must define who is active, what counts as churn, and when to measure it.'},
      {title:'How cohorts accumulate',body:'For a simplified monthly model: next month’s active customers = current active customers × (1 − churn rate) + newly acquired customers. This makes retention a visible growth multiplier when additions continue.',example:'At 40 new customers a month and zero initial customers, month 24 ends with about 768 customers at 2% churn versus about 368 at 10% churn. Both assume constant monthly additions and a uniform churn rate.'},
      {title:'The 1–2% benchmark in the video',body:'Hormozi describes working toward roughly 1–2% monthly churn instead of 10–20%. Treat this as his target for the kinds of recurring businesses he discusses, not a universal benchmark for every category or customer segment.'},
      {title:'What the idealized model leaves out',body:'Actual companies have upgrades, downgrades, customer acquisition costs, margins, pauses, one-off sales, seasonal effects and different cohort behaviors. A business can also experience flat or declining revenue even with excellent retention if other variables change.'}
    ],
    question:'With constant new customers per month, what does a lower churn rate generally do?',
    answers:['It raises the long-run number of active customers.','It eliminates acquisition costs automatically.','It guarantees infinite profit.'],correct:0,
    action:'Open the Retention Lab and compare 2% versus 10% monthly churn with identical acquisition and pricing assumptions.'
  },
  {
    id:'product-listen-and-iterate',module:'PRODUCT',minutes:7,
    title:'Let Customers Teach You What to Improve',
    tagline:'Retention is designed through observation, not wishful thinking.',
    takeaway:'Repeated interviews, surveys, usage analysis and delivery improvements help reveal why customers stay, disengage, and leave.',
    source:productVideoSource,
    sections:[
      {title:'Listen for the realized outcome',body:'Ask customers what changed after buying, where they became stuck, what they use most, what they never use, and what they would miss if the product disappeared.'},
      {title:'Find the value leaks',body:'Track onboarding friction, time-to-value, underused features, service reliability, support requests and cancellation reasons. Segment the findings; one unhappy cohort can be masked by averages.'},
      {title:'Build useful switching reasons, not traps',body:'The video references improving community connections and customer collateral to make a product stickier. The best form of stickiness is a product that remains genuinely useful, enjoyable and easy to justify at renewal.'},
      {title:'Repeat the loop',body:'Form a hypothesis, ship a targeted improvement, measure retention or realized outcome, then refine. Do the boring work for months and years. The video references an “eight Cs” framework but does not enumerate them, so this course does not invent them.'}
    ],
    question:'Which question best uncovers a value problem?',
    answers:['How can we make cancellation harder to find?','What result did you expect, and where did the experience fall short?','How many new ads can we publish tomorrow?'],correct:1,
    action:'Interview five recent customers: two delighted, two disengaged and one who left. Record concrete improvements and rank them by likely effect on delivered value.'
  }
];

const productCases = {
  'product-customer-surplus':{scenario:'Your subscription is losing customers. Your team proposes a 35% discount. Customers say setup is confusing and the key report arrives late. What do you prioritize?',options:['Fix onboarding and delivery speed, then test whether the restored value justifies the existing price.','Discount immediately without investigating delivery.','Increase the price to make the product look premium.'],correct:0,why:'Discounts cannot reliably repair a poor outcome. Improve realized value and protect sustainable margins.'},
  'product-never-stop-buying':{scenario:'You run a one-off home-renovation company. A consultant tells you to make every customer pay a monthly subscription forever. What is the better response?',options:['Invent a mandatory membership with no ongoing benefit.','Design outstanding delivery, genuine aftercare and referrals; offer recurring services only if there is real continued value.','Stop caring about satisfaction after the job is complete.'],correct:1,why:'Retention principles must fit the purchase cycle. Durable loyalty in a one-time business can mean advocacy and natural future needs.'},
  'product-models-over-methods':{scenario:'You sell a single Facebook ad script. Customers buy it once, use it and leave. What would a legitimate model-based offer look like?',options:['Repackage the exact script every month.','Require a 24-month contract for the same PDF.','Build an ongoing campaign system with updated methods, measurement and optimization that continuously delivers results.'],correct:2,why:'The ongoing model earns renewals through continuing value rather than billing mechanics.'},
  'product-saas-lens':{scenario:'You compare retention of a monthly managed-services business to a single-project installer. How do you evaluate them?',options:['Use monthly subscription churn for both without adjustments.','Define meaningful retention, repeat or referral outcomes separately for each business model.','Ignore all customer outcome data for the installer.'],correct:1,why:'Borrow SaaS rigor when the relationship is recurring, and adapt the metrics when purchases are episodic.'},
  'product-promote-improve-scale':{scenario:'A new SaaS product signs 100 customers in the first month but 25 cancel in the second. The founder wants to triple ad spending. What should happen?',options:['Investigate why the product fails to retain and improve the outcome before accelerating acquisition.','Triple spending immediately because awareness solves churn.','Stop selling entirely without contacting customers.'],correct:0,why:'Promotion gets customers; product improvement earns retention; scaling becomes more valuable when customers stay.'},
  'product-churn-economics':{scenario:'Two services gain the same 40 new subscriptions each month, but one loses 2% of its active base monthly and the other loses 10%. What would you expect after two years?',options:['Both have the same active base because additions are identical.','The 10% churn company has more active customers.','The 2% churn company has substantially more active customers, other things equal.'],correct:2,why:'With the same new additions, lower attrition leaves more of earlier cohorts in the active base.'},
  'product-listen-and-iterate':{scenario:'Your customers rarely use the core feature and renewals are falling. The team wants to add ten new features without speaking to users. What do you do?',options:['Interview customers, inspect activation and usage, identify the value failure, and test targeted changes.','Build ten features first because breadth always raises retention.','Make cancellations invisible.'],correct:0,why:'Product iteration should be grounded in realized customer outcomes, behaviors and feedback.'}
};

const productActions = Object.fromEntries(productLessons.map(lesson=>[lesson.id,lesson.action]));

const productTools = [
  {id:'product-surplus-audit',category:'PRODUCT',title:'Customer Surplus Audit',description:'Diagnose the real value customers receive, the price they pay, and what would make staying effortless.',fields:[
    ['customer','Who is this for?','Choose one real segment, not everyone.'],
    ['outcome','What outcome are they buying?','Name the measurable or strongly felt job-to-be-done.'],
    ['current','Where does the customer experience currently fall short?','Use actual complaints, drop-off, cancellations and feedback.'],
    ['improve','What would meaningfully increase delivered value?','Favor outcomes, ease, speed, reliability, support or certainty over discounting.'],
    ['margin','How will we maintain viable margins?','High value must also be economically sustainable.'],
    ['measure','What evidence will prove the product improved?','Define retention, activation, referrals, repeat purchase or a role-appropriate outcome.']
  ]},
  {id:'retention-experiment',category:'PRODUCT',title:'Retention Improvement Plan',description:'Turn a suspected retention problem into a test with an owner and an outcome.',fields:[
    ['segment','Which customer cohort is slipping?','New customers, long-standing subscribers, specific channels or plan tiers.'],
    ['signal','Where is value leaking?','Churn, delayed value, complaints, low usage, low renewal or cancellations.'],
    ['hypothesis','What is your most plausible root cause?','A falsifiable diagnosis rather than a label.'],
    ['intervention','Which one change will you test?','Choose an action directly connected to the likely value failure.'],
    ['metric','What will you measure, and over what time window?','Use leading signals plus a lagging retention metric.'],
    ['owner','Who owns the experiment and the next decision?','Assign clear accountability.']
  ]}
];

const productVideoNotes = {
  id:'product-retention',title:'Products People Never Stop Buying',
  source:'Alex Hormozi · video transcript supplied in this conversation (20 November 2026)',
  intro:'A product strategy built around customer surplus, low churn and continuing value—not merely more ads, a higher price, or a better sales script.',
  thesis:'The video’s thesis: fortunes are built by products people keep buying, because every new customer can build on the customers who remain.',
  sections:[
    {title:'1. Acquisition is necessary; retention makes it compound',body:'The opening thought experiment asks you to multiply all customers ever sold by today’s average monthly price. The gap between that hypothetical and today’s recurring revenue reveals how much growth can leak through churn. The speaker’s claim is strongest for naturally recurring models.'},
    {title:'2. Customer surplus is the fundamental value equation',body:'Customers stay when they feel they receive substantially more value than they pay for. Lowering price can enlarge the gap, but often reduces margins. Instead make the service more effective, reliable, convenient and valuable.'},
    {title:'3. Prefer models to isolated methods',body:'A method can be purchased and learned once; a continuing model integrates methods and evolves as tactics change. Franchises are the example in the video. A model only merits recurring payment if the customer continues receiving real value.'},
    {title:'4. Promotion → Product → Scale',body:'Hormozi attributes a three-phase sequence to Mark Roberge: sell early to get customers and feedback; refine the product until people retain; scale promotion after the economics and product are strong. The $0–1M and $1–10M examples are indicative, not rules.'},
    {title:'5. Use SaaS-style discipline where appropriate',body:'The video proposes treating recurring services with the analytical rigor of SaaS—tracking customer cohorts, churn, value delivery and lifetime economics. For one-off businesses, translate the principle into quality, repeat need, referrals and aftercare rather than inventing monthly churn.'},
    {title:'6. Churn changes the mathematical ceiling',body:'The video contrasts roughly 1–2% monthly churn with 10–20% in recurring businesses. These are the speaker’s stated objectives and comparison figures, not universal industry targets. The Retention Lab demonstrates the effect with an explicitly simplified simulation.'},
    {title:'7. Product improvement is continuous and empirical',body:'Survey customers, interview those who stayed and those who left, analyze usage, speed up time-to-value and increase the continuing benefit. The speaker emphasizes patient, repetitive improvement. He mentions eight Cs of stickiness without listing them here, so they are not included as if they were specified.'},
    {title:'8. The long-term objective is renewed willingness to pay',body:'The goal is not customer captivity or hiding the exit. It is an experience so valuable that the customer would choose it again. That requires strong delivery and sustainable margins, not just more aggressive selling.'}
  ],
  caveat:'Learning note, not a universal business law. The video focuses on repeatable/recurring businesses; concrete decisions require your own pricing, cost, churn and customer data.',
  lessonIds:['strategy-product-love','product-customer-surplus','product-never-stop-buying','product-models-over-methods','product-saas-lens','product-promote-improve-scale','product-churn-economics','product-listen-and-iterate']
};
