// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number; name: string; brand: string; slug: string; image: string; brandLogo: string;
  rating: number; reviewCount: number; promoCode: string; promoPercent: number;
  originalPrice: string; discountPrice: string; affiliateLink: string; origin: string;
  availability: string; productType: string; pros: string[]; cons: string[]; description: string;
}
export interface SiteConfig {
  domain: string; isIndexable?: boolean; siteName: string; brand: string; product: string;
  productCategory: string; productFormat: string; tagline: string; affiliateLink: string;
  promoCode: string; originalPrice: string; discountPrice: string; rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string; breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[]; cons: string[]; faq: { question: string; answer: string }[];
  products: Product[]; tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Calm Gummies Relaxation',
    brand: 'Bien.Health',
    slug: 'bien-health-calm-gummies',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dea03449c2037a9133b1e7_2c7adc3b-125a-4d8f-ba34-21ecf12b00af%20(1).webp',
    brandLogo: '/images/logos/bien-health.svg',
    rating: 8.3,
    reviewCount: 90,
    promoCode: 'lionsmane10',
    promoPercent: 10,
    originalPrice: '49.00€',
    discountPrice: '44.10€',
    affiliateLink: 'https://taap.it/Bien-health-mushglow',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Gummies relaxation sans sucre avec Reishi, Ashwagandha et Safran',
    pros: ['Produit le plus proche de l’intention gummy sommeil', 'Format gummies vegan, sans sucre et sans gluten', 'Angle relaxation + stress + sommeil très clair', 'Marque française facile à positionner en Top 1'],
    cons: ['Lien partenaire orienté gamme Bien.Health, pas toujours fiche Calm directe', 'Moins spécialisé mélatonine qu’un produit sommeil pur', 'Preuves sociales encore limitées'],
    description: 'Bien.Health prend la première place parce que Calm coche le mieux l’intention gummy sommeil : un format gummies, une promesse relaxation claire et une formule orientée Reishi, Ashwagandha et Safran. C’est le meilleur choix conversion pour ce domaine.'
  },
  {
    rank: 2,
    name: 'Pic Gummies Anti-Crise',
    brand: 'Apaise',
    slug: 'apaise-pic-gummies',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6990faa4aa142233084a5b0d_ugc_chall_4.webp',
    brandLogo: '/images/logos/apaise.svg',
    rating: 7.8,
    reviewCount: 100,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '34.90€',
    discountPrice: '31.41€',
    affiliateLink: 'https://apaiseco.com?sca_ref=10604253.dY6oZvhrrB67gA',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Gummies anti-stress pour tension ponctuelle et détente rapide',
    pros: ['Vrai format gummies', 'Très bon angle stress, crise et relâchement', 'Marque française avec promesse émotionnelle forte', 'Bonne alternative si le sommeil est perturbé par le stress'],
    cons: ['Positionnement plus anti-stress que sommeil direct', 'Pas le choix le plus adapté aux réveils nocturnes', 'Produit moins exact que Bien.Health sur le mot-clé sommeil'],
    description: 'Apaise est deuxième car ses gummies répondent au problème racine de beaucoup de mauvaises nuits : tension, stress et difficulté à redescendre. Ce n’est pas un gummy sommeil pur, mais le format et l’usage sont très proches de l’intention.'
  },
  {
    rank: 3,
    name: 'Gummies Champignons Fonctionnels',
    brand: 'Sporelife',
    slug: 'sporelife-gummies',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfe8fbce9c9eb2c1ffee37_lionsmaneextraitmemoire6lionsmaneextraitmemoire.webp',
    brandLogo: '/images/logos/sporelife.svg',
    rating: 8.1,
    reviewCount: 10,
    promoCode: 'LMC',
    promoPercent: 20,
    originalPrice: '29.90€',
    discountPrice: '23.92€',
    affiliateLink: 'https://taap.it/Sporelife-lions-mane',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Gummies aux champignons fonctionnels pour routine bien-être',
    pros: ['Marque très alignée gummies', 'Format gourmand et simple à prendre', 'Bon prix avec code promo', 'Intéressant pour une routine bien-être globale'],
    cons: ['Gamme plus focus, énergie et immunité que sommeil', 'Faible volume d’avis disponible', 'Moins direct si l’utilisateur cherche mélatonine ou endormissement'],
    description: 'Sporelife complète le podium pour son expertise gummies aux champignons. La marque est moins strictement sommeil, mais son format, son prix et son univers adaptogène donnent une alternative crédible pour les lecteurs qui veulent surtout une routine simple.'
  },
  {
    rank: 4,
    name: 'Moon Chews / Astro Dust',
    brand: 'Spacegoods',
    slug: 'spacegoods-moon-chews',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68de5ead07f79ba9b66a5006_rainbow-dust-Spacegoods-90210697_800x800_crop_center.avif',
    brandLogo: '/images/logos/spacegoods.svg',
    rating: 8.6,
    reviewCount: 6,
    promoCode: 'LIONSMANE45665',
    promoPercent: 20,
    originalPrice: '44.95€',
    discountPrice: '35.96€',
    affiliateLink: 'https://taap.it/spacegoods-rainbow-dust',
    origin: '🇬🇧 Royaume-Uni',
    availability: 'En stock',
    productType: 'Gummies champignons et poudre relaxation sommeil selon la gamme',
    pros: ['Marque forte dans les champignons fonctionnels', 'Astro Dust est très cohérent pour relaxation et sommeil', 'Moon Chews apporte le format gummies', 'Bon potentiel conversion avec marque connue'],
    cons: ['Le produit sommeil principal est plutôt une poudre', 'Le lien partenaire est orienté Rainbow Dust', 'Prix plus premium que les options françaises'],
    description: 'Spacegoods mérite sa place car la marque possède un vrai territoire sommeil avec Astro Dust et un format gummies avec Moon Chews. C’est moins exact que Bien.Health, mais très utile pour élargir le comparatif à une marque forte.'
  },
  {
    rank: 5,
    name: 'RESTORE by Night',
    brand: 'Pauser',
    slug: 'pauser-restore-by-night',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69b2015277220e773d991aa7_reset_lifestyle.webp',
    brandLogo: '/images/logos/pauser.svg',
    rating: 8.6,
    reviewCount: 100,
    promoCode: 'LMC10',
    promoPercent: 10,
    originalPrice: '35.00€',
    discountPrice: '31.50€',
    affiliateLink: 'https://pauser.fr/?ref=LMC',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Gélules sommeil avec RelaxPLX®, passiflore et mélatonine',
    pros: ['Très bon produit sommeil', 'Formule documentée avec verveine citronnelle brevetée et mélatonine', 'Fabrication française et positionnement sérieux', 'Excellent choix si le format gummies n’est pas indispensable'],
    cons: ['Ce n’est pas un gummy', 'Moins ludique que les formats à mâcher', 'Positionnement plus cure sérieuse que achat impulsif'],
    description: 'Pauser est placé cinquième uniquement à cause du format. Sur le sommeil pur, RESTORE by Night est l’un des choix les plus sérieux du classement, avec mélatonine, passiflore et RelaxPLX®.'
  },
  {
    rank: 6,
    name: 'Sommeil +',
    brand: 'Mush N Go',
    slug: 'mush-n-go-sommeil-plus',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dd05ab94d90e0a289b2ccc_image%201%20(1).avif',
    brandLogo: '/images/logos/mush-n-go.svg',
    rating: 9.7,
    reviewCount: 170,
    promoCode: 'LMC15',
    promoPercent: 15,
    originalPrice: '39.90€',
    discountPrice: '33.90€',
    affiliateLink: 'https://taap.it/mushngo-brainstorm',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Formule sommeil avec Reishi, Valériane, Mélatonine et Ashwagandha',
    pros: ['Très bon angle sommeil avec Reishi, valériane, mélatonine et ashwagandha', 'Marque française champignons bien alignée', 'Rating partenaire élevé', 'Pertinent pour insomnies légères et réveils nocturnes'],
    cons: ['Le format exact n’est pas positionné comme gummy', 'Lien partenaire orienté Brainstorm', 'Moins direct sur la requête gummy sommeil'],
    description: 'Mush N Go ferme le Top 6 comme renfort sommeil très crédible. La formule Sommeil + est pertinente, mais le format et le lien partenaire sont moins exacts pour une page centrée sur les gummies sommeil.'
  }
];

const config: SiteConfig = {
  domain: 'https://emd-gummy-sommeil.pages.dev',
  isIndexable: false,
  siteName: 'Gummy Sommeil',
  brand: 'Bien.Health',
  product: 'Calm Gummies Relaxation',
  productCategory: 'Gummies sommeil et compléments relaxation',
  productFormat: 'Gummies',
  tagline: 'Le comparatif simple pour choisir des gummies sommeil utiles, gourmands et cohérents avec votre besoin.',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: { name: 'Tim', avatar: '/author-avatar.png', bio: 'Auteur des Avis de Tim, spécialisé dans les comparatifs de compléments alimentaires.' },
  seo: {
    title: 'Meilleur gummy sommeil 2026 : comparatif Top 6',
    description: 'Comparatif des meilleurs gummies sommeil et compléments relaxation : Bien.Health, Apaise, Sporelife, Spacegoods, Pauser et Mush N Go. Avis, prix et codes promo.',
    ogImage: '/og-image.jpg',
  },
  breadcrumbs: [{ label: 'Accueil', href: '/' }],
  quickSummary: {
    assets: ['Bien.Health Calm est notre choix principal pour l’intention gummy sommeil.', 'Apaise et Sporelife couvrent les formats gummies les plus proches.', 'Pauser et Mush N Go renforcent le comparatif sur le sommeil pur.'],
    considerations: ['Tous les produits du Top 6 ne sont pas des gummies sommeil stricts.', 'Vérifier mélatonine, plantes relaxantes, sucre, tolérance et moment de prise.', 'Demander un avis médical en cas de traitement, grossesse, allaitement ou troubles du sommeil persistants.'],
  },
  pros: ['Top 6 pensé pour conversion gummy sommeil', 'Nuance claire entre vrais gummies et produits sommeil non gummies', 'Comparatif utile pour stress, endormissement, réveils nocturnes et routine du soir'],
  cons: ['Le stock exact gummies sommeil est limité', 'Certains liens partenaires pointent vers la gamme ou un produit voisin'],
  faq: [
    { question: 'Quel est le meilleur gummy sommeil ?', answer: 'Notre choix numéro 1 est Bien.Health Calm, car c’est l’option la plus proche de l’intention gummy sommeil : format gummies, promesse relaxation et formule avec Reishi, Ashwagandha et Safran.' },
    { question: 'Les gummies sommeil fonctionnent-ils vraiment ?', answer: 'Ils peuvent aider lorsqu’ils combinent une routine régulière, un bon timing et des actifs cohérents comme mélatonine, passiflore, valériane, reishi ou ashwagandha. Ils ne remplacent pas un avis médical si les troubles du sommeil sont importants.' },
    { question: 'Faut-il choisir mélatonine ou plantes relaxantes ?', answer: 'La mélatonine vise surtout l’endormissement et le rythme veille-sommeil. Les plantes relaxantes sont plus utiles si le problème vient du stress, de la tension ou d’un mental trop actif le soir.' },
    { question: 'Pourquoi certains produits du classement ne sont pas des gummies ?', answer: 'Parce que le stock exact gummy sommeil est limité. Nous gardons les meilleurs vrais gummies en haut du classement, puis nous ajoutons des produits sommeil solides pour aider l’utilisateur à choisir une alternative sérieuse.' },
    { question: 'Quand prendre un gummy sommeil ?', answer: 'En général, il se prend le soir, souvent 30 à 60 minutes avant le coucher selon la formule. Il faut suivre les conseils de la marque et éviter de multiplier les produits contenant de la mélatonine.' },
    { question: 'Qui doit éviter les gummies sommeil ?', answer: 'Les femmes enceintes ou allaitantes, les personnes sous traitement, les enfants et les personnes avec troubles du sommeil persistants doivent demander un avis professionnel avant supplémentation.' },
  ],
  products,
  tocItems: [
    { id: 'introduction', label: 'En bref' },
    { id: 'ranking', label: 'Top 6' },
    { id: 'methodologie', label: 'Méthode' },
    { id: 'choisir', label: 'Comment choisir' },
    { id: 'usages', label: 'Stress ou sommeil' },
    { id: 'prix', label: 'Prix et codes promo' },
    { id: 'verdict', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'comparatif', label: 'Comparatif', slug: '/' },
  ],
};

export default config;
