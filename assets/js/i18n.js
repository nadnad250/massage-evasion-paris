/* ============================================================
   I18N — Massage Évasion Paris
   Dictionnaire FR/EN + applyLang() + auto-translate text nodes
   ============================================================ */
window.STRINGS = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.presta": "Prestations",
    "nav.institut": "Institut",
    "nav.rituel": "Rituel",
    "nav.tarifs": "Tarifs",
    "nav.avis": "Avis",
    "nav.faq": "FAQ",
    "nav.bon": "Bon cadeau",
    "nav.contact": "Contact",
    "nav.book": "Réserver",
    "nav.menu": "Menu",
    "nav.close": "Fermer",
    "nav.gallery": "Galerie",
    "nav.reviews": "Avis",

    // Utility bar
    "util.hours": "7j/7 · 10h — 22h",
    "util.address": "12 rue de Penthièvre, Paris 8ᵉ",
    "util.gift": "Bon cadeau",
    "util.faq": "FAQ",

    // Footer
    "foot.tag": "Une maison de bien-être à Paris. Des mains, une intention, un instant.",
    "foot.navigate": "Naviguer",
    "foot.contact": "Contact",
    "foot.follow": "Suivre",
    "foot.legal": "Mentions légales",
    "foot.privacy": "Confidentialité",
    "foot.rights": "Tous droits réservés",
    "foot.cgu": "CGV",

    // Hero
    "hero.eyebrow": "Massage Évasion Paris",
    "hero.h1a": "Le luxe",
    "hero.h1b": "d'un instant",
    "hero.h1c": "suspendu.",
    "hero.lead": "Soins personnalisés, mains expertes — une parenthèse hors du temps.",
    "hero.cta1": "Réserver un soin",
    "hero.cta2": "Découvrir →",
    "hero.scroll": "Découvrir",
    "hero.meta1": "Paris 8ᵉ",
    "hero.meta1b": "Institut & domicile",
    "hero.meta2": "Ouvert",
    "hero.meta2b": "7j/7 · 10h — 22h",
    "hero.meta3": "Avis",
    "hero.meta3b": "4,9/5 clients",

    // Prestations
    "presta.label": "Prestations",
    "presta.title1": "Six soins,",
    "presta.title2": "une même promesse.",
    "presta.desc": "Chaque massage est pensé comme un rituel sur mesure. Nos praticiens diplômés ajustent pression, huiles et rythme selon vos besoins du jour.",
    "presta.choose": "Choisir ce soin",
    "presta.discover": "Découvrir",

    "p1.title": "Relaxant", "p1.desc": "Pressions douces et enveloppantes, huile chaude aux fleurs d'oranger. L'évasion en version tendresse.", "p1.t1": "Détente profonde", "p1.t2": "Stress",
    "p2.title": "Évasion Signature", "p2.desc": "Notre rituel phare : massage combiné, gommage doux et accès hammam privatif. Trois soins en une parenthèse.", "p2.t1": "Rituel complet", "p2.t2": "Hammam", "p2.t3": "Premium",
    "p3.title": "Deep Tissue", "p3.desc": "Manœuvres profondes pour dénouer les tensions installées. Pour dos chargés et épaules nouées.", "p3.t1": "Tensions", "p3.t2": "Dos & nuque",
    "p4.title": "Sportif léger", "p4.desc": "Drainage et étirements pour relancer la circulation après l'effort. Idéal avant ou après entraînement.", "p4.t1": "Récupération", "p4.t2": "Drainage",
    "p5.title": "Combiné sur-mesure", "p5.desc": "Vous choisissez l'intensité, les zones, les huiles. Nous composons le soin qui vous ressemble.", "p5.t1": "Personnalisé", "p5.t2": "Mix techniques",
    "p6.title": "Duo", "p6.desc": "Deux cabines communicantes, deux praticiens. Partagez l'évasion en duo, en couple ou entre amies.", "p6.t1": "À deux", "p6.t2": "Cadeau idéal",

    "gal.label": "Notre institut", "gal.title1": "Un écrin pensé", "gal.title2": "pour s'évader.", "gal.desc": "Cabines feutrées, bois clair, lumière tamisée, senteurs d'eucalyptus. Tout est pensé pour que l'instant soit le vôtre.", "gal.c1": "Cabine signature", "gal.c2": "Huile chaude", "gal.c3": "Détails parisiens", "gal.c4": "Rituel préparé", "gal.c5": "Lumière douce", "gal.c6": "Geste expert",

    "cine.eyebrow": "Le geste juste", "cine.q1": "Chaque pression,", "cine.q2": "une intention.", "cine.caption": "Huiles tièdes, pressions calibrées, silences choisis. Le soin commence avant même d'entrer en cabine.", "cine.m1": "Huiles bio", "cine.m2": "Praticiens diplômés", "cine.m3": "Rituel sur mesure",

    "rv.label": "Paroles de clients", "rv.title1": "Ce qu'ils emportent", "rv.title2": "avec eux.", "rv.desc": "Plus de 1 240 évasions partagées depuis 2019. Quelques mots cueillis à la sortie.",
    "rs.l1": "Note moyenne", "rs.l2": "Soins réalisés", "rs.l3": "Clients fidélisés", "rs.l4": "D'expérience",

    "bk.label": "Réservation", "bk.title1": "Offrez-vous", "bk.title2": "un moment.", "bk.desc": "Réservation en ligne en moins d'une minute. Confirmation immédiate par email.", "bk.cta": "Confirmer & passer au paiement →", "bk.disclaimer": "Simulation démo — aucune vraie transaction n'est effectuée.",

    "f.first": "Prénom", "f.last": "Nom", "f.email": "Email", "f.phone": "Téléphone", "f.service": "Prestation", "f.date": "Date", "f.time": "Créneau", "f.notes": "Message (optionnel)", "f.cgu": "J'accepte les conditions générales de vente", "rec.label": "Votre soin",

    "c.title1": "Nous trouver", "c.hours": "Tous les jours\n10h00 — 22h00", "c.mapcta": "Itinéraire ↗",

    "pay.eyebrow": "Récapitulatif", "pay.title": "Finaliser votre réservation", "pay.k1": "Prestation", "pay.k2": "Durée", "pay.k3": "Date", "pay.total": "Total", "pay.cta": "Payer & confirmer →", "pay.disclaimer": "Simulation démonstrative — aucune somme ne sera débitée.",
    "ok.eyebrow": "Réservation confirmée", "ok.title": "À très bientôt.", "ok.sub": "Un email de confirmation vient de partir. Nous vous accueillerons avec plaisir pour votre moment d'évasion.", "ok.ref": "Réf. #ME-2026-0431", "ok.close": "Fermer",

    "wa.tt": "Prendre RDV via WhatsApp", "back.top": "Retour en haut",
    "err.required": "Ce champ est requis", "err.email": "Email invalide", "err.phone": "Numéro invalide"
  },

  en: {
    "nav.home": "Home", "nav.presta": "Services", "nav.institut": "Studio", "nav.rituel": "Ritual", "nav.tarifs": "Pricing", "nav.avis": "Reviews", "nav.faq": "FAQ", "nav.bon": "Gift card", "nav.contact": "Contact", "nav.book": "Book",
    "util.hours": "7 days · 10am — 10pm", "util.address": "12 rue de Penthièvre, Paris 8th", "util.gift": "Gift card", "util.faq": "FAQ",
    "nav.menu": "Menu", "nav.close": "Close", "nav.gallery": "Gallery", "nav.reviews": "Reviews",

    "foot.tag": "A wellness maison in Paris. Hands, intention, a moment.", "foot.navigate": "Explore", "foot.contact": "Contact", "foot.follow": "Follow", "foot.legal": "Legal", "foot.privacy": "Privacy", "foot.rights": "All rights reserved", "foot.cgu": "T&Cs",

    "hero.eyebrow": "Massage Évasion Paris",
    "hero.h1a": "The luxury", "hero.h1b": "of one suspended", "hero.h1c": "instant.", "hero.lead": "Bespoke treatments, expert hands — a timeless parenthesis.", "hero.cta1": "Book a treatment", "hero.cta2": "Discover →", "hero.scroll": "Discover",
    "hero.meta1": "Paris 8th",
    "hero.meta1b": "Studio & home visits",
    "hero.meta2": "Open",
    "hero.meta2b": "7 days · 10am — 10pm",
    "hero.meta3": "Reviews",
    "hero.meta3b": "4.9/5 clients",

    "presta.label": "Services", "presta.title1": "Six treatments,", "presta.title2": "one promise.", "presta.desc": "Each massage is a bespoke ritual. Our certified therapists adjust pressure, oils and rhythm to what your body needs today.", "presta.choose": "Choose this treatment", "presta.discover": "Discover",

    "p1.title": "Relaxing", "p1.desc": "Slow enveloping pressures with warm orange-blossom oil. Evasion in its gentlest form.", "p1.t1": "Deep relaxation", "p1.t2": "Stress",
    "p2.title": "Signature Escape", "p2.desc": "Our flagship ritual: combined massage, soft scrub and private hammam access. Three treatments in one parenthesis.", "p2.t1": "Full ritual", "p2.t2": "Hammam", "p2.t3": "Premium",
    "p3.title": "Deep Tissue", "p3.desc": "Deep work to release settled tension. For heavy shoulders and knotted backs.", "p3.t1": "Tension", "p3.t2": "Back & neck",
    "p4.title": "Light Sports", "p4.desc": "Drainage and stretching to restart circulation after effort. Before or after training.", "p4.t1": "Recovery", "p4.t2": "Drainage",
    "p5.title": "Custom Blend", "p5.desc": "You choose intensity, zones and oils. We compose the treatment that suits you.", "p5.t1": "Bespoke", "p5.t2": "Mixed techniques",
    "p6.title": "Duo", "p6.desc": "Two connecting cabins, two therapists. Share the escape — as a couple, or with a friend.", "p6.t1": "For two", "p6.t2": "Perfect gift",

    "gal.label": "Our studio", "gal.title1": "A space designed", "gal.title2": "for escape.", "gal.desc": "Hushed cabins, pale wood, soft light, eucalyptus notes. Everything crafted so the moment becomes yours.", "gal.c1": "Signature cabin", "gal.c2": "Warm oil", "gal.c3": "Paris details", "gal.c4": "Prepared ritual", "gal.c5": "Soft light", "gal.c6": "Expert touch",

    "cine.eyebrow": "The right touch", "cine.q1": "Every pressure,", "cine.q2": "an intention.", "cine.caption": "Warm oils, measured pressure, chosen silences. The treatment begins before you even step into the cabin.", "cine.m1": "Organic oils", "cine.m2": "Certified therapists", "cine.m3": "Bespoke ritual",

    "rv.label": "Client voices", "rv.title1": "What they take", "rv.title2": "with them.", "rv.desc": "Over 1,240 escapes shared since 2019. A few words gathered at the door.",
    "rs.l1": "Average rating", "rs.l2": "Treatments given", "rs.l3": "Returning clients", "rs.l4": "Years of practice",

    "bk.label": "Booking", "bk.title1": "Offer yourself", "bk.title2": "a moment.", "bk.desc": "Online booking in under a minute. Immediate email confirmation.", "bk.cta": "Confirm & proceed to payment →", "bk.disclaimer": "Demo simulation — no real transaction is processed.",

    "f.first": "First name", "f.last": "Last name", "f.email": "Email", "f.phone": "Phone", "f.service": "Treatment", "f.date": "Date", "f.time": "Time", "f.notes": "Message (optional)", "f.cgu": "I accept the terms and conditions", "rec.label": "Your treatment",

    "c.title1": "Find us", "c.hours": "Every day\n10:00 — 22:00", "c.mapcta": "Get directions ↗",

    "pay.eyebrow": "Summary", "pay.title": "Complete your booking", "pay.k1": "Treatment", "pay.k2": "Duration", "pay.k3": "Date", "pay.total": "Total", "pay.cta": "Pay & confirm →", "pay.disclaimer": "Demonstration simulation — no amount will be charged.",
    "ok.eyebrow": "Booking confirmed", "ok.title": "See you very soon.", "ok.sub": "A confirmation email has just left. We'll welcome you warmly for your moment of escape.", "ok.ref": "Ref. #ME-2026-0431", "ok.close": "Close",

    "wa.tt": "Book via WhatsApp", "back.top": "Back to top",
    "err.required": "This field is required", "err.email": "Invalid email", "err.phone": "Invalid number"
  }
};

/* ============================================================
   AUTO-TRANSLATE — dictionnaire FR→EN pour TOUTES les pages
   Permet de traduire les pages sans data-i18n
   Cle = texte FR EXACT (apres trim).  Valeur = texte EN.
   ============================================================ */
window.AUTO_FR_EN = {
  // Skip link & accessibility
  "Aller au contenu": "Skip to content",
  "Menu": "Menu",
  "WhatsApp": "WhatsApp",
  "Retour en haut": "Back to top",

  // Navigation principale
  "Accueil": "Home",
  "Prestations": "Services",
  "Institut": "Studio",
  "Rituel": "Ritual",
  "Tarifs": "Pricing",
  "Avis": "Reviews",
  "FAQ": "FAQ",
  "Contact": "Contact",
  "Réserver": "Book",
  "Bon cadeau": "Gift card",

  // Footer
  "Naviguer": "Explore",
  "Mentions": "Legal",
  "Mentions légales": "Legal notice",
  "Confidentialité": "Privacy",
  "12 rue de Penthièvre, 75008 Paris": "12 rue de Penthièvre, 75008 Paris",
  "Une maison de bien-être à Paris.": "A wellness maison in Paris.",
  "© 2026 Massage Évasion Paris": "© 2026 Massage Évasion Paris",
  "Site démo": "Demo site",

  // ============== AVIS ==============
  "Avis clients": "Client reviews",
  "4,9/5 sur": "4.9/5 across",
  "127 avis vérifiés.": "127 verified reviews.",
  "Plus de 1 240 soins réalisés depuis 2019. Voici, sans filtre, ce qu'on en dit.": "Over 1,240 treatments delivered since 2019. Here is what they say, unfiltered.",
  "Note Google": "Google rating",
  "Avis vérifiés": "Verified reviews",
  "Reviennent": "Return",
  "Recommandent": "Recommend",
  "« Une vraie parenthèse hors du temps. Les mains de Léa sont magiques, je suis ressortie comme neuve. »": "\"A true parenthesis out of time. Léa's hands are magic, I came out feeling brand new.\"",
  "« Mon dos chronique remercie ce deep tissue. Pression parfaite, écoute attentive. Je reviens chaque mois. »": "\"My chronic back thanks this deep tissue. Perfect pressure, attentive listening. I come back every month.\"",
  "« Cadeau d'anniversaire pour ma femme — duo inoubliable. L'institut est à tomber. À refaire. »": "\"Birthday gift for my wife — unforgettable duo. The studio is stunning. Will do again.\"",
  "« Accueil chaleureux, cabines impeccables, soin sur mesure. Je recommande sans hésiter. »": "\"Warm welcome, impeccable cabins, bespoke treatment. I recommend without hesitation.\"",
  "« J'ai testé beaucoup d'instituts à Paris — celui-ci est de très loin le meilleur. Discrétion et professionnalisme. »": "\"I've tried many studios in Paris — this one is by far the best. Discretion and professionalism.\"",
  "« Sofiane a su exactement où aller chercher mes tensions. Je ne suis pas près de changer d'adresse. »": "\"Sofiane knew exactly where to find my tension. I'm not changing address any time soon.\"",
  "« Le hammam privatif après le soin signature, c'est juste fou. On en sort flottant. »": "\"The private hammam after the signature treatment is just crazy. You float out of it.\"",
  "« Praticienne adorable, lieu apaisant, prix justes. Tout y est. »": "\"Lovely therapist, soothing place, fair prices. It's all there.\"",
  "« Très bon massage. Petit bémol sur le délai pour avoir un créneau le samedi — bien anticiper la résa. »": "\"Great massage. Small downside on Saturday slots — best to book ahead.\"",
  "Et vous,": "And you,",
  "quand venez-vous ?": "when are you coming?",
  "Réserver mon soin": "Book my treatment",

  // Reviewer titles (in meta)
  "· Évasion Signature": "· Signature Escape",
  "· Deep Tissue": "· Deep Tissue",
  "· Duo": "· Duo",
  "· Combiné": "· Custom Blend",
  "· Relaxant": "· Relaxing",
  "· Sportif": "· Sports",

  // ============== FAQ ==============
  "Questions fréquentes": "Frequently asked",
  "Tout ce que": "Everything you",
  "vous voulez savoir.": "want to know.",
  "Une question sans réponse ? Écrivez-nous à": "A question with no answer? Write to us at",
  "ou via WhatsApp.": "or via WhatsApp.",
  "Réservation": "Booking",
  "Faut-il réserver à l'avance ?": "Do I need to book ahead?",
  "Nous recommandons de réserver 3 à 5 jours à l'avance, surtout en soirée et le week-end. Pour les forfaits ou les duos, comptez plutôt 1 semaine.": "We recommend booking 3 to 5 days ahead, especially evenings and weekends. For packages or duos, plan a week ahead.",
  "Puis-je réserver par téléphone ?": "Can I book by phone?",
  "Oui, au +33 1 42 25 18 90 du lundi au samedi de 10h à 20h. La réservation en ligne reste plus rapide et confirme immédiatement.": "Yes, at +33 1 42 25 18 90 from Monday to Saturday, 10am to 8pm. Online booking is faster and confirms immediately.",
  "Quelle est la politique d'annulation ?": "What's the cancellation policy?",
  "Annulation gratuite jusqu'à 24h avant. Au-delà, le soin est dû à 50%. En cas de force majeure, aucune charge.": "Free cancellation up to 24h before. After that, 50% of the treatment is due. No charge in case of force majeure.",
  "Puis-je modifier ma réservation ?": "Can I change my booking?",
  "Oui, gratuitement jusqu'à 24h avant le rendez-vous. Contactez-nous par téléphone ou email.": "Yes, free of charge up to 24h before the appointment. Contact us by phone or email.",
  "Soins & techniques": "Treatments & techniques",
  "Quel soin choisir si c'est ma première fois ?": "Which treatment for a first visit?",
  "Le Relaxant est idéal pour découvrir, ou la Signature pour vivre l'expérience complète. Notre équipe vous oriente avec plaisir si vous appelez.": "The Relaxing is ideal to discover, or the Signature for the full experience. Our team gladly guides you if you call.",
  "Vos praticiens sont-ils diplômés ?": "Are your therapists certified?",
  "Oui, tous certifiés (CAP esthétique + formations spécialisées en techniques de massage). Vous pouvez demander un praticien spécifique.": "Yes, all certified (esthetics CAP + specialized massage training). You may request a specific therapist.",
  "Puis-je venir enceinte ?": "Can I come while pregnant?",
  "Oui, à partir du second trimestre, avec un soin spécifiquement adapté. Précisez-le lors de la réservation.": "Yes, from the second trimester, with a specifically adapted treatment. Mention it when booking.",
  "Faites-vous des massages thérapeutiques ?": "Do you offer therapeutic massages?",
  "Nos soins ont une visée bien-être, pas médicale. Pour des troubles spécifiques (sciatique, hernie...), demandez l'avis d'un kinésithérapeute.": "Our treatments are wellness-oriented, not medical. For specific issues (sciatica, hernia...), consult a physiotherapist.",
  "À domicile": "At home",
  "Proposez-vous des soins à domicile ?": "Do you offer home treatments?",
  "Oui, à Paris intra-muros et certaines communes limitrophes (Neuilly, Levallois, Boulogne, Vincennes). Supplément de 25€ par soin.": "Yes, in Paris and some neighbouring towns (Neuilly, Levallois, Boulogne, Vincennes). €25 supplement per treatment.",
  "De quoi avez-vous besoin chez moi ?": "What do you need at my place?",
  "Un espace calme d'environ 6 m², une prise électrique. Notre praticien apporte la table, le linge, les huiles et la musique.": "A quiet space of about 6 m² and a power outlet. Our therapist brings the table, linen, oils and music.",
  "Combien de temps avant l'arrivée du praticien ?": "How long before the therapist arrives?",
  "15 minutes d'installation. Prévoyez d'être disponible 1h30 au total pour un soin de 60 minutes.": "15 minutes setup. Plan to be available for 1h30 total for a 60-minute treatment.",
  "Paiement": "Payment",
  "Quels modes de paiement acceptez-vous ?": "Which payment methods do you accept?",
  "Carte bancaire, Apple Pay, Google Pay, espèces, chèques.": "Card, Apple Pay, Google Pay, cash, cheques.",
  "Acceptez-vous les tickets bien-être ?": "Do you accept wellness vouchers?",
  "Oui : Wedoogift, Glady et Swile bien-être. Présentez le code à l'arrivée.": "Yes: Wedoogift, Glady and Swile wellness. Present the code on arrival.",
  "Puis-je avoir une facture pour ma mutuelle ?": "Can I get an invoice for my insurance?",
  "Nos soins ne sont pas remboursés par la sécurité sociale. Certaines mutuelles couvrent partiellement le bien-être — vérifiez auprès de la vôtre, nous vous fournissons une facture détaillée.": "Our treatments are not reimbursed by social security. Some insurance plans partially cover wellness — check with yours, we provide a detailed invoice.",
  "Une": "Another",
  "autre question ?": "question?",
  "Nous contacter": "Contact us",

  // ============== TARIFS ==============
  "Transparence": "Total",
  "totale.": "transparency.",
  "Aucun frais caché. Les tarifs affichés sont ceux que vous payez. Possibilité de venir en institut ou de nous accueillir à domicile (+25€).": "No hidden fees. Displayed prices are what you pay. In-studio or at-home (+€25).",
  "Forfaits": "Packages",
  "Trois": "Three",
  "formules": "formulas",
  "pour les habitué·es.": "for the regulars.",
  "Pour celles et ceux qui font du soin une habitude. Valables 12 mois, transférables.": "For those who make treatments a habit. Valid 12 months, transferable.",
  "Carte 5 soins": "5-treatment card",
  "5 soins au choix avec 10% de remise. Idéal pour découvrir plusieurs techniques.": "5 treatments of your choice with 10% off. Ideal to discover several techniques.",
  "Commander →": "Order →",
  "★ Le plus choisi": "★ Most chosen",
  "Carte 10 soins": "10-treatment card",
  "10 soins au choix avec 15% de remise. La formule fidélité par excellence.": "10 treatments of your choice with 15% off. The ultimate loyalty formula.",
  "Abonnement mensuel": "Monthly subscription",
  "Soins illimités du lundi au jeudi. Engagement 3 mois minimum.": "Unlimited treatments Monday to Thursday. 3-month minimum commitment.",
  "Offrir un": "Gift a",
  "moment hors du temps.": "moment out of time.",
  "Un bon cadeau personnalisé, livré par email en moins de deux minutes. Valable un an dans toute la maison.": "A personalised gift card, delivered by email in under two minutes. Valid one year across the maison.",
  "Commander un bon cadeau →": "Order a gift card →",
  "Paiement & annulation": "Payment & cancellation",
  "À": "To",
  "savoir": "know",
  ".": ".",
  "Carte bancaire, Apple Pay, Google Pay, espèces, chèques, tickets bien-être (Wedoogift, Glady, Swile bien-être).": "Card, Apple Pay, Google Pay, cash, cheques, wellness vouchers (Wedoogift, Glady, Swile wellness).",
  "Annulation gratuite jusqu'à 24h avant. Au-delà, le soin est dû à 50%. Aucune charge en cas de force majeure (maladie, urgence).": "Free cancellation up to 24h before. After that, 50% of the treatment is due. No charge in case of force majeure (illness, emergency).",
  "Les forfaits sont-ils transférables ?": "Are packages transferable?",
  "Oui, vous pouvez offrir un soin de votre forfait à un proche. Il suffit de nous prévenir lors de la réservation.": "Yes, you can offer a treatment from your package to a loved one. Just let us know when booking.",

  // ============== RITUEL ==============
  "Le rituel": "The ritual",
  "L'art d'un soin,": "The art of a treatment,",
  "en cinq temps.": "in five movements.",
  "Chaque soin est pensé comme une parenthèse complète. Voici comment se déroule votre venue, du seuil de la porte jusqu'à votre prolongation à la maison.": "Each treatment is conceived as a complete parenthesis. Here is how your visit unfolds, from the door to the prolongation at home.",
  "L'accueil": "The welcome",
  "Vous franchissez la porte. Une tisane, une lumière douce, un siège bas. On vous laisse vous poser cinq minutes — le temps de quitter la rue, le téléphone, les pensées en cours. La transition est essentielle.": "You step through the door. A herbal tea, soft light, a low seat. We let you settle for five minutes — time to leave the street, the phone, the running thoughts. The transition is essential.",
  "Le diagnostic": "The diagnosis",
  "Votre praticien échange quelques mots avec vous : tensions du jour, énergie, attentes. Cette écoute conditionne tout — pression, huile choisie, zones travaillées en priorité, rythme global.": "Your therapist exchanges a few words with you: today's tensions, energy, expectations. This listening shapes everything — pressure, chosen oil, priority zones, overall rhythm.",
  "Le soin": "The treatment",
  "Vous vous installez en cabine. Lumière tamisée, musique discrète, chaleur. Le soin commence — pression ajustée en continu, huile chaude, mouvements lents. Vous n'avez plus rien à faire qu'à vous laisser porter.": "You settle into the cabin. Soft light, discreet music, warmth. The treatment begins — pressure continuously adjusted, warm oil, slow movements. All that's left to do is let yourself be carried.",
  "Le retour": "The return",
  "Le soin se termine doucement. On vous laisse seul·e quelques minutes pour reprendre vos esprits. Une infusion vous attend dans le salon — moment important pour ne pas casser l'effet du soin trop vite.": "The treatment ends gently. We leave you alone a few minutes to gather yourself. An infusion awaits in the lounge — an important moment so as not to break the treatment's effect too quickly.",
  "La prolongation": "The prolongation",
  "Votre praticien vous remet quelques conseils personnalisés : étirements, postures, hydratation. L'effet du soin se prolonge plusieurs jours si vous l'accompagnez avec attention.": "Your therapist gives you personalised advice: stretches, postures, hydration. The treatment's effect extends for several days if you support it with care.",
  "Nos huiles": "Our oils",
  "signatures": "signatures",
  "olfactives.": "olfactory.",
  "Toutes nos huiles sont certifiées biologiques, sélectionnées chez des producteurs français. Vous choisissez la vôtre à l'arrivée.": "All our oils are certified organic, sourced from French producers. You choose yours on arrival.",
  "Fleurs d'oranger": "Orange blossom",
  "Notes douces, miellées, légèrement sucrées. Idéale pour les soins relaxants — apaise et enveloppe.": "Soft, honeyed, lightly sweet notes. Ideal for relaxing treatments — soothes and envelops.",
  "Argan & rose": "Argan & rose",
  "Riche, nourrissante, sensuelle. Parfaite pour les peaux sèches et les soins signature.": "Rich, nourishing, sensual. Perfect for dry skin and signature treatments.",
  "Eucalyptus & menthe": "Eucalyptus & mint",
  "Fraîche, tonique, dégageante. Recommandée pour les deep tissue et soins sportifs.": "Fresh, tonic, clearing. Recommended for deep tissue and sports treatments.",
  "À savoir": "Good to know",
  "Quelques": "A few",
  "questions": "practical",
  "pratiques.": "questions.",
  "Que dois-je porter ?": "What should I wear?",
  "Venez comme vous êtes. En cabine, vous vous déshabillez en intimité totale et vous installez sous un drap. Vous gardez vos sous-vêtements si vous le souhaitez.": "Come as you are. In the cabin, you undress in total privacy and settle under a sheet. Keep your underwear on if you wish.",
  "Combien de temps avant le rendez-vous arriver ?": "How early should I arrive?",
  "5 à 10 minutes en avance — le temps d'un thé et d'une transition douce. Inutile d'arriver très en avance, votre cabine vous attend.": "5 to 10 minutes early — time for a tea and a soft transition. No need to arrive very early, your cabin awaits.",
  "Faut-il manger avant ?": "Should I eat before?",
  "Évitez un repas lourd dans les 2h précédant le soin. Une collation légère est parfaite.": "Avoid a heavy meal in the 2h before the treatment. A light snack is perfect.",
  "Que faire après le soin ?": "What to do after?",
  "Hydratez-vous généreusement (eau, tisanes). Évitez le sport intense et l'alcool dans les heures qui suivent.": "Hydrate generously (water, herbal teas). Avoid intense sport and alcohol in the following hours.",
  "Combien de fois par mois venir ?": "How often per month?",
  "Une à deux fois par mois est un rythme idéal pour entretenir l'effet. Certains clients viennent une fois par semaine.": "Once or twice a month is an ideal rhythm to maintain the effect. Some clients come weekly.",
  "Prêt(e) à": "Ready to",
  "commencer ?": "begin?",

  // ============== BON CADEAU ==============
  "Offrir une": "Gift an",
  "évasion.": "escape.",
  "Le cadeau d'un instant suspendu. Personnalisez votre bon, recevez-le par email en 2 minutes, transférez-le à votre destinataire.": "The gift of a suspended instant. Personalise your card, receive it by email in 2 minutes, forward it to your recipient.",
  "Comment ça marche": "How it works",
  "En": "In",
  "trois": "three",
  "étapes.": "steps.",
  "Choisissez le montant": "Choose the amount",
  "De 60€ à 200€ ou montant libre. Toutes les prestations sont accessibles.": "From €60 to €200 or any amount. All treatments are accessible.",
  "Personnalisez le message": "Personalise the message",
  "Ajoutez le prénom du destinataire et un mot personnel. Le bon est nominatif.": "Add the recipient's first name and a personal note. The card is nominative.",
  "Recevez par email": "Receive by email",
  "Bon PDF haute qualité dans votre boîte mail en 2 minutes. À imprimer ou à transférer.": "High-quality PDF card in your inbox in 2 minutes. Print or forward.",
  "Choisir un montant": "Choose an amount",
  "Quatre": "Four",
  "formats": "formats",
  "1 soin Relaxant": "1 Relaxing treatment",
  "1 soin Combiné": "1 Custom Blend treatment",
  "★ Le plus offert": "★ Most gifted",
  "1 Évasion Signature": "1 Signature Escape",
  "Duo ou montant libre": "Duo or any amount",
  "Commander": "Order",
  "Montant (€)": "Amount (€)",
  "Prénom du destinataire": "Recipient's first name",
  "Email du destinataire": "Recipient's email",
  "Message personnel": "Personal message",
  "Votre email (pour la facture)": "Your email (for invoice)",
  "Commander le bon cadeau →": "Order the gift card →",
  "Simulation démonstrative — aucun débit réel.": "Demonstration simulation — no real charge.",
  "Ils ont offert": "They gifted",
  "retours": "feedback",
  ".": ".",
  "« Bon cadeau commandé en 2 min pour la fête des mères. Maman a adoré, l'institut est sublime. »": "\"Gift card ordered in 2 min for Mother's Day. Mum loved it, the studio is sublime.\"",
  "« Cadeau de Noël pour ma femme — surprise totale. Soin signature exceptionnel selon elle. »": "\"Christmas gift for my wife — total surprise. Signature treatment exceptional according to her.\"",
  "« Bon duo offert pour notre anniversaire. Moment inoubliable. À refaire chaque année. »": "\"Duo card for our anniversary. Unforgettable moment. To do again every year.\"",

  // ============== INDEX EXTRAS ==============
  "Découvrir": "Discover",
  "Choisir ce soin": "Choose this treatment",

  // Common chips/labels reused
  "Premium": "Premium",
  "Hammam": "Hammam",
  "Stress": "Stress",
  "Drainage": "Drainage",

  // Stats counter
  "ans": "yrs",
  "Note Google": "Google rating",
  "Note moyenne": "Average rating",
  "Note client": "Client rating",
  "Soins réalisés": "Treatments given",
  "Clients fidélisés": "Returning clients",
  "D'expérience": "Years",
  "Avis vérifiés": "Verified reviews",
  "Reviennent": "Come back",
  "Recommandent": "Recommend"
};

/* ============================================================
   APPLY LANG — applique data-i18n + auto-translate text nodes
   ============================================================ */
(function setupAutoTranslate() {
  // Cache initial FR text content per text node
  const ORIGINAL = new WeakMap();
  let collected = false;

  // Selecteurs a ignorer (pas de traduction)
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA']);
  const SKIP_CLASS = ['lang', 'brand-mark', 'wa-float', 'back-top', 'rs-num-value'];

  function shouldSkip(node) {
    let p = node.parentNode;
    while (p && p.nodeType === 1) {
      if (SKIP_TAGS.has(p.tagName)) return true;
      if (p.hasAttribute && p.hasAttribute('data-i18n')) return true; // gere par STRINGS
      if (p.hasAttribute && p.hasAttribute('data-no-translate')) return true;
      const cls = p.className && typeof p.className === 'string' ? p.className : '';
      if (SKIP_CLASS.some(c => cls.split(/\s+/).indexOf(c) !== -1)) return true;
      p = p.parentNode;
    }
    return false;
  }

  function collectTextNodes(root) {
    const out = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (shouldSkip(n)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = walker.nextNode())) out.push(n);
    return out;
  }

  function snapshotOriginal() {
    if (collected) return;
    collectTextNodes(document.body).forEach(n => {
      if (!ORIGINAL.has(n)) ORIGINAL.set(n, n.nodeValue);
    });
    collected = true;
  }

  function applyAutoTranslate(lang) {
    snapshotOriginal();
    const dict = window.AUTO_FR_EN || {};
    const nodes = collectTextNodes(document.body);
    nodes.forEach(n => {
      const original = ORIGINAL.get(n);
      if (original == null) return;
      if (lang === 'fr') {
        // Restaurer la version FR d'origine
        n.nodeValue = original;
      } else if (lang === 'en') {
        const trimmed = original.trim();
        if (dict[trimmed] != null) {
          // Preserver l'espacement initial/final
          const lead = original.match(/^\s*/)[0];
          const trail = original.match(/\s*$/)[0];
          n.nodeValue = lead + dict[trimmed] + trail;
        }
      }
    });

    // Aussi traduire certains attributs (placeholder, aria-label, title)
    const attrs = ['placeholder', 'aria-label', 'title'];
    document.querySelectorAll('input, textarea, button, a, [aria-label], [title]').forEach(el => {
      attrs.forEach(attr => {
        const val = el.getAttribute(attr);
        if (!val) return;
        const trimmed = val.trim();
        // Cache initial dans dataset
        const cacheKey = '__orig_' + attr.replace('-', '_');
        if (el.dataset[cacheKey] == null) el.dataset[cacheKey] = val;
        if (lang === 'fr') {
          el.setAttribute(attr, el.dataset[cacheKey]);
        } else if (lang === 'en' && dict[trimmed] != null) {
          el.setAttribute(attr, dict[trimmed]);
        }
      });
    });
  }

  window.applyAutoTranslate = applyAutoTranslate;
})();

/**
 * Applique la langue choisie a tous les elements [data-i18n]
 * + auto-translate sur les autres textes via AUTO_FR_EN
 * Persiste le choix dans localStorage
 */
window.applyLang = function(lang) {
  const dict = window.STRINGS[lang] || window.STRINGS.fr;
  document.documentElement.lang = lang;

  // 1) Elements avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[k]) {
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, dict[k]);
      } else {
        el.textContent = dict[k];
      }
    }
  });

  // 2) Auto-translate des textes restants
  if (window.applyAutoTranslate) {
    window.applyAutoTranslate(lang);
  }

  // 3) Etat visuel des boutons FR/EN
  document.querySelectorAll('.lang button').forEach(b => {
    const isOn = b.dataset.lang === lang;
    b.classList.toggle('on', isOn);
    b.setAttribute('aria-pressed', isOn);
  });

  // 4) Persister le choix
  try { localStorage.setItem('me-lang', lang); } catch (e) {}
};

window.getCurrentLang = function() {
  try {
    return localStorage.getItem('me-lang') || 'fr';
  } catch (e) {
    return 'fr';
  }
};
