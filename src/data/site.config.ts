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
    name: 'Gummies Sommeil +',
    brand: 'Mush N Go',
    slug: 'mush-n-go-gummies-sommeil-plus',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6963d90cd28268622951b0b4_Frame48099177_1000x1000_crop_center.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dd03c74aa741ba6fbc75d7_Logo%20mush%20n%20go.svg',
    rating: 9.7,
    reviewCount: 170,
    promoCode: 'LMC15',
    promoPercent: 15,
    originalPrice: '29.90€',
    discountPrice: '26.91€',
    affiliateLink: 'https://taap.it/mushngo-sommeil',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Gummies sommeil avec Reishi, Valériane, Mélatonine et Ashwagandha',
    pros: ['Produit très aligné avec l’angle gummies sommeil', 'Formule sommeil avec Reishi, valériane, mélatonine et ashwagandha', 'Marque française champignons très alignée', 'Bon niveau d’avis et forte cohérence avec l’intention'],
    cons: ['Contient mélatonine, à éviter en cumul avec d’autres produits sommeil', 'Formule plus spécialisée à réserver au soir', 'Prix supérieur à certains gummies détente généralistes'],
    description: 'Mush N Go arrive numéro 1 avec Gummies Sommeil +. C’est le produit le plus aligné avec cette recherche : format gummies, promesse sommeil claire, Reishi, valériane, mélatonine et ashwagandha, plus une marque française déjà forte sur les champignons fonctionnels.'
      },
  {
    rank: 2,
    name: 'Gummies Champignons Fonctionnels',
    brand: 'Sporelife',
    slug: 'sporelife-gummies',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfe8fbce9c9eb2c1ffee37_lionsmaneextraitmemoire6lionsmaneextraitmemoire.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfe8c8e633ad0f45fab496_LOGO_TRANSPARENT.avif',
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
    cons: ['Angle plus bien-être global que sommeil pur', 'Faible volume d’avis disponible', 'Moins direct si l’utilisateur cherche mélatonine ou endormissement'],
    description: 'Sporelife passe deuxième parce que la marque propose un vrai format gummies et un univers champignons fonctionnels cohérent avec l’intention. Ce n’est pas le produit sommeil le plus direct, mais c’est la meilleure alternative gummy après Mush N Go.'
      },
  {
    rank: 3,
    name: 'Pic Gummies Anti-Crise',
    brand: 'Apaise',
    slug: 'apaise-pic-gummies',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6990faa4aa142233084a5b0d_ugc_chall_4.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6990fa7cbc741a4d7be1e936_Logo_2026_White_bg.avif',
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
    cons: ['Positionnement plus anti-stress que sommeil direct', 'Pas le choix le plus adapté aux réveils nocturnes', 'Produit moins exact que Mush N Go sur le mot-clé sommeil'],
    description: 'Apaise est troisième car ses gummies répondent au problème racine de beaucoup de mauvaises nuits : tension, stress et difficulté à redescendre. Ce n’est pas un gummy sommeil pur, mais le format et l’usage sont très proches de l’intention.'
      },
  {
    rank: 4,
    name: 'Sleep & Recharge Mints - Neuro',
    brand: 'Neuro Gum',
    slug: 'sleep-recharge-mints-neuro',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69944f150b1bbd69e11494b4_neuro-sleep-recharge-6pack.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/699240e4102cfd81a3280479_Neuro_Logo_Header.avif',
    rating: 8.5,
    reviewCount: 1000,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '36.72€',
    discountPrice: '33.05€',
    affiliateLink: 'https://getneuro.eu/r?id=619hb8',
    origin: '🇺🇸 États-Unis',
    availability: 'En stock',
    productType: 'Pastilles fondantes sommeil avec mélatonine, L-théanine, magnésium, camomille et mélisse',
    pros: ['Format fondant pratique, proche d’un gummy', 'Formule clairement orientée sommeil et recharge nocturne', 'Mélatonine, L-théanine, magnésium, camomille et mélisse', 'Sans sucre, vegan, sans gluten et facile à prendre sans eau'],
    cons: ['Ce sont des pastilles fondantes plutôt que des gummies classiques', 'Présence de mélatonine à éviter en cumul avec d’autres produits sommeil', 'Produit disponible surtout en ligne'],
    description: 'Neuro Gum prend la quatrième place avec Sleep & Recharge Mints, car le produit répond bien à l’intention sommeil : format à laisser fondre, formule nocturne claire, mélatonine, L-théanine, magnésium, camomille et mélisse.'
      },
  {
    rank: 5,
    name: 'RESTORE by Night',
    brand: 'Pauser',
    slug: 'pauser-restore-by-night',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69b2015277220e773d991aa7_reset_lifestyle.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69b20a9d0c7d27678f5e8c4a_logo_blanc%201.svg',
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
      }
];

const config: SiteConfig = {
  domain: 'https://gummy-sommeil.fr',
  isIndexable: true,
  siteName: 'Gummy Sommeil',
  brand: 'Mush N Go',
  product: 'Gummies Sommeil +',
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
    title: 'Meilleur gummy sommeil 2026 : comparatif Top 5',
    description: 'Comparatif des meilleurs gummies sommeil et compléments relaxation : Mush N Go, Sporelife, Apaise, Neuro Gum et Pauser. Avis, prix et codes promo.',
    ogImage: '/og-image.jpg',
  },
  analyticsMeasurementId: 'G-X5P3M1ZCTK',
  breadcrumbs: [{ label: 'Accueil', href: '/' }],
  quickSummary: {
    assets: ['Mush N Go Gummies Sommeil + est notre choix principal pour l’intention gummy sommeil.', 'Sporelife est la meilleure alternative gummies champignons.', 'Apaise, Neuro Gum et Pauser complètent le comparatif selon le profil recherché.'],
    considerations: ['Mush N Go est le choix le plus cohérent pour l’intention gummy sommeil.', 'Vérifier mélatonine, plantes relaxantes, sucre, tolérance et moment de prise.', 'Demander un avis médical en cas de traitement, grossesse, allaitement ou troubles du sommeil persistants.'],
  },
  pros: ['Top 5 pensé pour une recherche gummy sommeil concrète', 'Mush N Go placé en recommandation principale', 'Sporelife positionné comme alternative gummy champignons'],
  cons: ['Le stock exact gummies sommeil est limité', 'Certains produits restent des alternatives proches plutôt que des gummies sommeil stricts'],
  faq: [
    { question: 'Quel est le meilleur gummy sommeil ?', answer: 'Notre choix numéro 1 est Mush N Go Gummies Sommeil +, car c’est le produit le plus cohérent du comparatif : format gummies, promesse sommeil claire et formule avec Reishi, valériane, mélatonine et ashwagandha.' },
    { question: 'Les gummies sommeil fonctionnent-ils vraiment ?', answer: 'Ils peuvent aider lorsqu’ils combinent une routine régulière, un bon timing et des actifs cohérents comme mélatonine, passiflore, valériane, reishi ou ashwagandha. Ils ne remplacent pas un avis médical si les troubles du sommeil sont importants.' },
    { question: 'Faut-il choisir mélatonine ou plantes relaxantes ?', answer: 'La mélatonine vise surtout l’endormissement et le rythme veille-sommeil. Les plantes relaxantes sont plus utiles si le problème vient du stress, de la tension ou d’un mental trop actif le soir.' },
    { question: 'Pourquoi Mush N Go est numéro 1 ?', answer: 'Parce que c’est le produit le plus cohérent pour cette page : format gummies, angle sommeil direct, marque française et formule cohérente avec Reishi, valériane, mélatonine et ashwagandha.' },
    { question: 'Quand prendre un gummy sommeil ?', answer: 'En général, il se prend le soir, souvent 30 à 60 minutes avant le coucher selon la formule. Il faut suivre les conseils de la marque et éviter de multiplier les produits contenant de la mélatonine.' },
    { question: 'Qui doit éviter les gummies sommeil ?', answer: 'Les femmes enceintes ou allaitantes, les personnes sous traitement, les enfants et les personnes avec troubles du sommeil persistants doivent demander un avis professionnel avant supplémentation.' },
  ],
  products,
  tocItems: [
    { id: 'introduction', label: 'En bref' },
    { id: 'ranking', label: 'Top 5' },
    { id: 'methodologie', label: 'Méthode' },
    { id: 'choisir', label: 'Comment choisir' },
    { id: 'usages', label: 'Stress ou sommeil' },
    { id: 'recherches', label: 'Recherches fréquentes' },
    { id: 'prix', label: 'Prix et codes promo' },
    { id: 'verdict', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'comparatif', label: 'Comparatif', slug: '/' },
    { type: 'blog', label: 'Sans mélatonine', slug: '/gummies-sommeil-sans-melatonine/' },
    { type: 'blog', label: 'Mélatonine', slug: '/gummies-melatonine/' },
    { type: 'blog', label: 'Avis', slug: '/gummy-sommeil-avis/' },
  ],
};

export default config;
