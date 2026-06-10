"use client";

/* Phase-1 i18n for the landing's headline-level copy.
   Framing: focus on the CUSTOM ROUTINE / PLAN, not "report" (customers don't grasp "report").
   Translations are DRAFTS — need native review (especially Hindi). */

import { createContext, useContext, useEffect, useState } from "react";

export const LOCALES: [Locale, string][] = [
  ["en", "English"],
  ["fr", "Français"],
  ["es", "Español"],
  ["hi", "हिन्दी"],
];

export type Locale = "en" | "fr" | "es" | "hi";

type Dict = Record<string, string>;

const EN: Dict = {
  "hero.titleA": "Get your skincare routine that",
  "hero.titleB": "actually works",
  "hero.sub": "Skincare is not one-size-fits-all. Our experts analyze your skin & match it with the right products for you.",
  "hero.cta": "Get my custom routine",
  "hero.micro": "1 photo · 2 min · reviewed by Seoul experts",
  "trust.reviews": "1,200+ reviews",
  "team.eyebrow": "MEET YOUR EXPERTS",
  "team.titleA": "Designed by Korean",
  "team.titleB": "skincare experts",
  "team.body": "A team of Korean skincare experts — including Sumin — analyzes your skin and designs a routine made just for you.",
  "team.statSkinsLabel": "skins analyzed",
  "team.statNatsLabel": "nationalities",
  "team.more": "More about us",
  "wyg.eyebrow": "WHAT YOU GET",
  "results.eyebrow": "REAL RESULTS",
  "results.titleA": "Skin that actually",
  "results.titleB": "changed",
  "results.body": "Real customers, real routines — before & after following their 8mirrors plan.",
  "full.eyebrow": "YOUR CUSTOM PLAN",
  "full.titleA": "Everything, in one",
  "full.titleB": "personalized plan",
  "full.body": "Your custom routine and skin guidance, put together into one clear plan — delivered straight to your inbox.",
  "offer.eyebrow": "YOUR CUSTOM ROUTINE",
  "offer.titleA": "Your custom routine,",
  "offer.titleB": "built by experts",
  "offer.save": "60% OFF · SAVE $15",
  "offer.inc1": "A full read of your skin",
  "offer.inc2": "Custom AM & PM routine",
  "offer.inc3": "2 weeks of expert coaching",
  "offer.inc4": "K-beauty products shipped from Seoul",
  "offer.privacyA": "Starts with one photo — we",
  "offer.privacyB": "auto-blur your eyes",
  "offer.privacyC": ", and your photo is never shared or sold.",
  "coach.label": "YOUR 8MIRRORS EXPERTS",
  "bar.delivery": "4–5 day delivery",
  "bar.how": "How it works",
  "bar.cta": "Try it free",
};

const FR: Dict = {
  "hero.titleA": "Une routine de soin qui",
  "hero.titleB": "fonctionne vraiment",
  "hero.sub": "Les soins ne sont pas universels. Nos expertes analysent votre peau et l'associent aux bons produits pour vous.",
  "hero.cta": "Obtenir ma routine",
  "hero.micro": "1 photo · 2 min · revu par nos expertes à Séoul",
  "trust.reviews": "1 200+ avis",
  "team.eyebrow": "NOS EXPERTES",
  "team.titleA": "Conçu par des expertes",
  "team.titleB": "coréennes en soin",
  "team.body": "Une équipe d'expertes coréennes — dont Sumin — analyse votre peau et conçoit une routine faite pour vous.",
  "team.statSkinsLabel": "peaux analysées",
  "team.statNatsLabel": "nationalités",
  "team.more": "En savoir plus",
  "wyg.eyebrow": "CE QUE VOUS OBTENEZ",
  "results.eyebrow": "RÉSULTATS RÉELS",
  "results.titleA": "Une peau vraiment",
  "results.titleB": "transformée",
  "results.body": "De vraies clientes, de vraies routines — avant et après leur plan 8mirrors.",
  "full.eyebrow": "VOTRE PLAN PERSONNALISÉ",
  "full.titleA": "Tout, dans un seul",
  "full.titleB": "plan personnalisé",
  "full.body": "Votre routine sur mesure et vos conseils peau, réunis dans un plan clair — livré dans votre boîte mail.",
  "offer.eyebrow": "VOTRE ROUTINE SUR MESURE",
  "offer.titleA": "Votre routine sur mesure,",
  "offer.titleB": "conçue par des expertes",
  "offer.save": "-60% · ÉCONOMISEZ 15 $",
  "offer.inc1": "Une analyse complète de votre peau",
  "offer.inc2": "Routine personnalisée matin & soir",
  "offer.inc3": "2 semaines de coaching expert",
  "offer.inc4": "Produits K-beauty expédiés de Séoul",
  "offer.privacyA": "Commence par une photo — nous",
  "offer.privacyB": "floutons vos yeux",
  "offer.privacyC": ", et votre photo n'est jamais partagée ni vendue.",
  "coach.label": "VOS EXPERTES 8MIRRORS",
  "bar.delivery": "Livraison 4–5 jours",
  "bar.how": "Comment ça marche",
  "bar.cta": "Essayer gratuitement",
};

const ES: Dict = {
  "hero.titleA": "Una rutina de cuidado que",
  "hero.titleB": "de verdad funciona",
  "hero.sub": "El cuidado de la piel no es igual para todos. Nuestras expertas analizan tu piel y la combinan con los productos ideales para ti.",
  "hero.cta": "Obtener mi rutina",
  "hero.micro": "1 foto · 2 min · revisado por expertas de Seúl",
  "trust.reviews": "1.200+ reseñas",
  "team.eyebrow": "CONOCE A LAS EXPERTAS",
  "team.titleA": "Diseñado por expertas",
  "team.titleB": "coreanas en piel",
  "team.body": "Un equipo de expertas coreanas — incluida Sumin — analiza tu piel y diseña una rutina hecha para ti.",
  "team.statSkinsLabel": "pieles analizadas",
  "team.statNatsLabel": "nacionalidades",
  "team.more": "Más sobre nosotras",
  "wyg.eyebrow": "LO QUE OBTIENES",
  "results.eyebrow": "RESULTADOS REALES",
  "results.titleA": "Una piel que de verdad",
  "results.titleB": "cambió",
  "results.body": "Clientas reales, rutinas reales — antes y después de su plan 8mirrors.",
  "full.eyebrow": "TU PLAN PERSONALIZADO",
  "full.titleA": "Todo, en un solo",
  "full.titleB": "plan personalizado",
  "full.body": "Tu rutina personalizada y tus consejos de piel, reunidos en un plan claro — enviado directo a tu correo.",
  "offer.eyebrow": "TU RUTINA PERSONALIZADA",
  "offer.titleA": "Tu rutina personalizada,",
  "offer.titleB": "creada por expertas",
  "offer.save": "60% DESC. · AHORRA $15",
  "offer.inc1": "Un análisis completo de tu piel",
  "offer.inc2": "Rutina personalizada de día y noche",
  "offer.inc3": "2 semanas de coaching experto",
  "offer.inc4": "Productos K-beauty enviados desde Seúl",
  "offer.privacyA": "Empieza con una foto — nosotras",
  "offer.privacyB": "difuminamos tus ojos",
  "offer.privacyC": ", y tu foto nunca se comparte ni se vende.",
  "coach.label": "TUS EXPERTAS 8MIRRORS",
  "bar.delivery": "Entrega en 4–5 días",
  "bar.how": "Cómo funciona",
  "bar.cta": "Pruébalo gratis",
};

const HI: Dict = {
  "hero.titleA": "ऐसी स्किनकेयर रूटीन जो",
  "hero.titleB": "सच में काम करे",
  "hero.sub": "स्किनकेयर हर किसी के लिए एक जैसी नहीं होती। हमारी विशेषज्ञ आपकी त्वचा का विश्लेषण कर सही प्रोडक्ट्स से उसका मिलान करती हैं।",
  "hero.cta": "मेरी रूटीन पाएँ",
  "hero.micro": "1 फ़ोटो · 2 मिनट · सियोल विशेषज्ञों द्वारा समीक्षित",
  "trust.reviews": "1,200+ समीक्षाएँ",
  "team.eyebrow": "हमारी विशेषज्ञ",
  "team.titleA": "कोरियन स्किनकेयर",
  "team.titleB": "विशेषज्ञों द्वारा डिज़ाइन",
  "team.body": "कोरियन स्किनकेयर विशेषज्ञों की टीम — सुमिन सहित — आपकी त्वचा का विश्लेषण कर आपके लिए ख़ास रूटीन तैयार करती है।",
  "team.statSkinsLabel": "त्वचाओं का विश्लेषण",
  "team.statNatsLabel": "राष्ट्रीयताएँ",
  "team.more": "हमारे बारे में और जानें",
  "wyg.eyebrow": "आपको क्या मिलता है",
  "results.eyebrow": "असली नतीजे",
  "results.titleA": "ऐसी त्वचा जो सच में",
  "results.titleB": "बदल गई",
  "results.body": "असली ग्राहक, असली रूटीन — उनके 8mirrors प्लान के पहले और बाद में।",
  "full.eyebrow": "आपका कस्टम प्लान",
  "full.titleA": "सब कुछ, एक ही",
  "full.titleB": "पर्सनलाइज़्ड प्लान में",
  "full.body": "आपकी कस्टम रूटीन और स्किन गाइडेंस, एक स्पष्ट प्लान में संकलित — सीधे आपके इनबॉक्स में।",
  "offer.eyebrow": "आपकी कस्टम रूटीन",
  "offer.titleA": "आपकी कस्टम रूटीन,",
  "offer.titleB": "विशेषज्ञों द्वारा बनाई गई",
  "offer.save": "60% छूट · $15 बचाएँ",
  "offer.inc1": "आपकी त्वचा का पूरा विश्लेषण",
  "offer.inc2": "कस्टम सुबह व रात की रूटीन",
  "offer.inc3": "2 सप्ताह की विशेषज्ञ कोचिंग",
  "offer.inc4": "सियोल से भेजे गए K-beauty प्रोडक्ट्स",
  "offer.privacyA": "एक फ़ोटो से शुरू — हम",
  "offer.privacyB": "आपकी आँखें धुंधली कर देते हैं",
  "offer.privacyC": ", और आपकी फ़ोटो कभी साझा या बेची नहीं जाती।",
  "coach.label": "आपके 8MIRRORS विशेषज्ञ",
  "bar.delivery": "4–5 दिन में डिलीवरी",
  "bar.how": "यह कैसे काम करता है",
  "bar.cta": "मुफ़्त आज़माएँ",
};

const STRINGS: Record<Locale, Dict> = { en: EN, fr: FR, es: ES, hi: HI };

const Ctx = createContext<{ locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string }>({
  locale: "en",
  setLocale: () => {},
  t: (k) => EN[k] ?? k,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => {
    const saved = localStorage.getItem("8m-locale") as Locale | null;
    if (saved && STRINGS[saved]) setLocale(saved);
  }, []);
  const set = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("8m-locale", l);
  };
  const t = (k: string) => STRINGS[locale][k] ?? EN[k] ?? k;
  return <Ctx.Provider value={{ locale, setLocale: set, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
