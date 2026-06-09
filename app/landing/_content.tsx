/* Internalized content for the landing menu pages (drafted from 8-mirrors.com, team voice). */

type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "faq"; q: string; a: string }
  | { type: "images"; urls: string[] }
  | { type: "contact"; items: { label: string; value: string; href?: string }[] };

export type Page = { slug: string; eyebrow: string; title: string; blocks: Block[] };

export const PAGES: Page[] = [
  {
    slug: "about",
    eyebrow: "ABOUT US",
    title: "Your go-to skincare guide",
    blocks: [
      { type: "p", text: "8mirrors takes the overwhelm out of K-beauty — a custom routine designed for your skin type and concerns, backed by expert analysis." },
      { type: "h", text: "Where we started" },
      { type: "p", text: "8mirrors grew out of TheBom Studio in Myeongdong, Seoul, where customers got in-person skin analysis and personalized routines. We saw that when a routine is built for your skin, it works — but results were hard to keep up after leaving Korea, as climate and lifestyle changed. 8mirrors brings that same expert care to an accessible, online experience." },
      { type: "h", text: "What makes us different" },
      { type: "p", text: "We care about real results, not trends. Our experts personally review your photos to read dryness, oiliness, sensitivity, pores, and pigmentation — so every routine is accurate and effective, not a generic product list. We also help you avoid common pitfalls like over-exfoliation, over-hyped viral products, and harsh ingredients." },
      { type: "h", text: "Why customization matters" },
      { type: "p", text: "A routine that truly fits considers your whole picture:" },
      { type: "ul", items: ["Skin type — dry, oily, combination, sensitive", "Current concerns — acne, redness, dark spots", "Where you live and your climate", "Your goals — hydration, anti-aging, brightening", "Allergies or sensitivities"] },
      { type: "p", text: "This reduces wasted spending, lowers the risk of irritation, and builds skincare habits you can sustain." },
    ],
  },
  {
    slug: "what-you-get",
    eyebrow: "WHAT YOU GET",
    title: "What you get",
    blocks: [
      { type: "h", text: "A full skin assessment, tailored to you" },
      { type: "p", text: "Not a basic questionnaire — a comprehensive read of your skin's texture, hydration, sensitivity history, concerns like acne or pigmentation, and lifestyle factors. So recommendations fit your skin, not a trend." },
      { type: "h", text: "Custom AM & PM routines" },
      { type: "p", text: "Two routines, built separately. Your morning routine focuses on protection and preparation for daily environmental stress. Your evening routine focuses on restoration — deeper cleansing, targeted treatments, richer moisturizers, and soothing ingredients that let your skin recover overnight." },
      { type: "h", text: "Global delivery, straight from Seoul" },
      { type: "p", text: "Your products ship worldwide from Seoul, carefully packaged to your door — with access to exclusive Korean skincare, so you stay consistent wherever you are." },
      { type: "h", text: "Why a custom routine" },
      { type: "ul", items: ["Avoid product mismatches and wasted spending", "Skip the trial-and-error", "Save time with a structured routine", "Target your specific concerns", "Get personalized guidance over time"] },
      { type: "h", text: "After you sign up" },
      { type: "ul", items: ["Submit photos and answer a few questions", "Receive personalized recommendations in 5–7 days", "Choose whether to purchase through 8mirrors", "Track your progress over time"] },
    ],
  },
  {
    slug: "how-it-works",
    eyebrow: "HOW IT WORKS",
    title: "How it works",
    blocks: [
      { type: "p", text: "Finding the right routine can feel overwhelming. 8mirrors takes the guesswork out — here's how the custom routine service works." },
      { type: "h", text: "1. Submit your photos and answer a few questions" },
      { type: "p", text: "Send clear photos of your face — no makeup or product. They show your skin's real condition: texture, tone, and concerns like dryness, redness, or breakouts. A few simple questions about your skin type, lifestyle, and goals complete the picture." },
      { type: "h", text: "2. Our experts assess your skin" },
      { type: "p", text: "Our skincare experts personally review every submission, using years of experience to read your skin's unique characteristics — uneven tone, pore size and shape, early signs of aging, and areas prone to irritation. The details automated systems miss." },
      { type: "h", text: "3. Receive your assessment and routine" },
      { type: "p", text: "Within 5–7 days you get a detailed report:" },
      { type: "ul", items: ["A thorough skin analysis from your photos and answers", "Your skin type and key concerns", "A step-by-step custom routine for your needs"] },
      { type: "p", text: "It covers daily habits, product recommendations, and tips to improve your skin over time. You can buy the recommended products directly from 8mirrors — each one chosen to work together as one cohesive system." },
      { type: "h", text: "Why personalized routines matter" },
      { type: "ul", items: ["Address specific concerns effectively", "Avoid unnecessary products and expense", "Build consistent, lasting habits", "See better results, faster"] },
      { type: "h", text: "After you start" },
      { type: "p", text: "Give products time — skin changes gradually, usually over several weeks. As your skin or the season changes, we help adjust your routine." },
    ],
  },
  {
    slug: "before-afters",
    eyebrow: "BEFORE & AFTERS",
    title: "Real results",
    blocks: [
      { type: "p", text: "Personalized routines, documented results. A few real customer transformations:" },
      { type: "images", urls: [
        "https://static.wixstatic.com/media/3987eb_9443f1a81e5b4a8fa363cd389cb30b84~mv2.png",
        "https://static.wixstatic.com/media/3987eb_0648fdd7364c4ec68a39d10d9c46c322~mv2.png",
        "https://static.wixstatic.com/media/3987eb_a255a356d091465e9a69f348f738a808~mv2.png",
        "https://static.wixstatic.com/media/3987eb_a8aa54b09e95438aa8b6ea4d776fb0a7~mv2.png",
        "https://static.wixstatic.com/media/3987eb_01978b53464f4520a332702e96307fcb~mv2.png",
        "https://static.wixstatic.com/media/3987eb_923f48c5fe7e4e328a1a61d439cbeb7d~mv2.png",
        "https://static.wixstatic.com/media/3987eb_35ad2d74101443fb867a6061c40d6fe7~mv2.png",
        "https://static.wixstatic.com/media/3987eb_d89058296c784f2cba0c9b29da7908db~mv2.png",
      ] },
      { type: "h", text: "From dullness to radiance" },
      { type: "p", text: "Starting with redness, acne marks, and uneven tone. After 6 weeks: more even and radiant skin, reduced redness, better hydration, and fewer dark spots — with gentle exfoliation, a ceramide-rich serum, and a panthenol moisturizer." },
      { type: "h", text: "Tackling persistent acne" },
      { type: "p", text: "Within 23 days: a noticeable reduction in acne and redness, smoother texture, less oil, and a brighter tone — using a mild cleanser, soothing toner, and salicylic acid treatments." },
      { type: "h", text: "Aging-skin rejuvenation" },
      { type: "p", text: "A two-phase approach for fine lines and firmness. Phase 1 (36 days) softened fine lines, firmed the skin, and improved hydration. Phase 2 introduced retinoids and higher-concentration actives for stronger results." },
      { type: "h", text: "Reducing pores & restoring glow" },
      { type: "p", text: "With oil-control and hydration-focused products, results appeared in just 19 days — a visible reduction in the look of pores, with improved brightness and texture." },
    ],
  },
  {
    slug: "faqs",
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    blocks: [
      { type: "p", text: "Choosing a skincare routine can be tricky. Here are the questions we hear most about how 8mirrors works and what to expect." },
      { type: "faq", q: "I'm not in South Korea. Can I still get a custom routine?", a: "Yes! This service is made specifically for people who don't live in South Korea but want healthy, glowing skin." },
      { type: "faq", q: "Who is the 8mirrors custom routine for?", a: "Anyone curious about their skin. It's perfect for those just starting their skincare journey, and for those who already have a routine but are frustrated not seeing real improvement." },
      { type: "faq", q: "How long does it take to get my report?", a: "Because each routine is built personally by our experts, please allow 5–7 business days for your skin analysis and custom routine. It's sent to the same email you registered with." },
      { type: "faq", q: "Why is a skin analysis important?", a: "Understanding your skin type is the foundation of an effective routine. It helps you choose compatible products while avoiding unnecessary purchases and potential irritation." },
      { type: "faq", q: "I already have a routine. Will I have to change everything?", a: "No. We evaluate your current products and keep the ones that are compatible with and beneficial to your skin in the revised routine." },
      { type: "faq", q: "What kind of products do you recommend?", a: "Our solutions are built around Korean skincare, which is generally much gentler than Western skincare." },
      { type: "faq", q: "Where can I buy the products in my routine?", a: "Customers get discounted access directly through 8mirrors, with worldwide shipping." },
      { type: "faq", q: "What if my skin changes after the assessment?", a: "We reassess and adjust your routine when your skin shifts due to environmental or physiological factors." },
    ],
  },
  {
    slug: "contact",
    eyebrow: "CONTACT",
    title: "Contact us",
    blocks: [
      { type: "p", text: "We keep it simple. Reach out anytime with questions, feedback, or post-purchase support." },
      { type: "contact", items: [
        { label: "EMAIL", value: "Contact@Haebom.day", href: "mailto:Contact@Haebom.day" },
        { label: "INSTAGRAM", value: "@8mirrors.kr", href: "https://www.instagram.com/8mirrors.kr" },
        { label: "WHATSAPP", value: "Exclusive link for custom-routine customers" },
      ] },
      { type: "p", text: "Please allow 2–3 business days for a response. We're open on weekdays and closed on weekends." },
      { type: "h", text: "WhatsApp support" },
      { type: "p", text: "Reserved for customers who've purchased a custom routine — after purchase, you'll receive a WhatsApp link by email." },
      { type: "ul", items: ["Direct, personalized support from skincare experts", "Quick response times", "Share photos and track your progress", "Confidential, customer-only access"] },
    ],
  },
];

function Block({ b }: { b: Block }) {
  switch (b.type) {
    case "h":
      return <h2 className="font-display text-midnight mt-3" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.25 }}>{b.text}</h2>;
    case "p":
      return <p className="text-[#444]" style={{ fontSize: 16, lineHeight: 1.7 }}>{b.text}</p>;
    case "ul":
      return (
        <ul className="flex flex-col gap-2">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-2.5 text-[#444]" style={{ fontSize: 16, lineHeight: 1.55 }}>
              <span style={{ color: "#62d8f4", fontWeight: 700 }}>•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "faq":
      return (
        <div className="rounded-xl border border-neutral-200 p-4">
          <div className="text-midnight" style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35 }}>{b.q}</div>
          <p className="text-[#444] mt-1.5" style={{ fontSize: 15, lineHeight: 1.6 }}>{b.a}</p>
        </div>
      );
    case "images":
      return (
        <div className="grid grid-cols-2 gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {b.urls.map((u, i) => (
            <img key={i} src={u} alt="Before and after" loading="lazy" className="w-full rounded-lg border border-neutral-200" />
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="flex flex-col gap-4">
          {b.items.map((it, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="text-mid-gray" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>{it.label}</span>
              {it.href ? (
                <a href={it.href} target="_blank" rel="noopener noreferrer" className="text-midnight" style={{ fontSize: 16, fontWeight: 500 }}>{it.value}</a>
              ) : (
                <span className="text-midnight" style={{ fontSize: 16, fontWeight: 500 }}>{it.value}</span>
              )}
            </div>
          ))}
        </div>
      );
  }
}

export function ContentView({ page }: { page: Page }) {
  return (
    <main className="mx-auto bg-white min-h-screen" style={{ maxWidth: 480 }}>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto flex items-center justify-between px-4" style={{ maxWidth: 480, height: 52, background: "#ffffff", borderBottom: "1px solid #eee" }}>
          <a href="/landing" aria-label="Back" className="-ml-2 p-2 flex items-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="8mirrors" style={{ height: 16, width: "auto" }} />
          <span style={{ width: 22 }} />
        </div>
      </header>

      <article className="px-6" style={{ paddingTop: 84, paddingBottom: 72 }}>
        <div className="text-mid-gray" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em" }}>{page.eyebrow}</div>
        <h1 className="font-display text-charcoal mt-2" style={{ fontSize: "clamp(28px, 8vw, 38px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.01em" }}>{page.title}</h1>
        <div className="mt-7 flex flex-col gap-5">
          {page.blocks.map((b, i) => <Block key={i} b={b} />)}
        </div>
      </article>
    </main>
  );
}
