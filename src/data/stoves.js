// The Fordesh stove range, from the FORDESH AFRICA Clean Cooking brochure (Sept 2026).

const stoves = [
  {
    slug: 'p18',
    model: 'P18',
    name: 'Natural Draft Pellet Stove',
    category: 'Entry Household',
    image: '/images/stove-p18.png',
    summary:
      'Natural draft, no power required. 79.9% efficiency at the lowest price point for mass adoption.',
    tagline: 'Fordesh’s newest clean-cooking stove: efficient, durable and affordable.',
    keyStats: [
      { value: '79.9%', label: 'Thermal efficiency' },
      { value: '80%', label: 'Lower emissions' },
      { value: '2 yrs', label: 'Warranty' },
    ],
    features: [
      {
        title: 'Natural Draft Design',
        text: 'Clean pellet combustion with no fan or power needed, plus a secondary air chamber.',
      },
      {
        title: '79.9% Thermal Efficiency',
        text: 'Efficient combustion cuts cooking time and fuel use in every household.',
      },
      {
        title: '80% Lower Emissions',
        text: 'Reduced harmful smoke, with up to 5 tonnes of CO2 avoided per stove each year.',
      },
      {
        title: 'Built to Last',
        text: '201 stainless body, double-wall 304 chamber and 26cm cast iron top with 6 pot supports.',
      },
      {
        title: 'Easy to Own and Use',
        text: 'Removable ash tray, heat-resistant handles, 5-year lifespan and 2-year warranty.',
      },
    ],
  },
  {
    slug: 'f28',
    model: 'F28',
    name: 'Fan-Assisted Pellet Stove',
    category: 'Premium Household',
    image: '/images/stove-f28.png',
    summary:
      'Fan-assisted combustion for faster heat-up and finer control in higher-volume homes.',
    tagline: 'Our premium forced-draft model, for households that want more control.',
    keyStats: [
      { value: '60%', label: 'Less fuel' },
      { value: '3', label: 'Fan speeds' },
      { value: '5 t', label: 'CO2 cut per year' },
    ],
    features: [
      {
        title: 'Three-Speed Fan Control',
        text: 'An efficient, quiet 5V fan gives three levels of fire power at the turn of a dial.',
      },
      {
        title: '60% Less Fuel',
        text: 'Forced-draft combustion cooks faster and uses far less fuel than traditional cooking.',
      },
      {
        title: '5 Tonnes CO2 Cut',
        text: 'Each stove can cut up to five tonnes of CO2 a year, with all materials recyclable.',
      },
      {
        title: 'Upgraded Build',
        text: 'Stainless body with a cast iron and steel 24.5cm top, six pot supports and stabilising feet.',
      },
      {
        title: 'Portable Design',
        text: 'Foldable heat-resistant handles, 5.5kg shipping weight and a 3-5 year lifespan.',
      },
    ],
  },
  {
    slug: 'm100',
    model: 'M100',
    name: 'Institutional Stove',
    category: 'Institutional',
    image: '/images/stove-m100.png',
    summary:
      'High-capacity cooking for schools, canteens, hospitals and camps serving hundreds of meals daily.',
    tagline: 'Built for schools, clinics and community kitchens cooking at scale.',
    keyStats: [
      { value: '100 L', label: 'Pot capacity' },
      { value: '53.5%', label: 'Thermal efficiency' },
      { value: '5 yrs', label: 'Service life' },
    ],
    features: [
      {
        title: '100-Litre Capacity',
        text: 'A 1.2mm stainless steel pot sized for large-batch institutional cooking.',
      },
      {
        title: '53.5% Thermal Efficiency',
        text: 'Efficient biomass combustion cuts fuel bills for high-volume kitchens.',
      },
      {
        title: 'Chimney-Vented',
        text: 'A four-part 48cm stainless chimney sends smoke outdoors for clean indoor air.',
      },
      {
        title: 'Institutional Build',
        text: 'Stainless steel 430 body with a painted steel door frame and wide fuel feed port.',
      },
      {
        title: 'Long Service Life',
        text: 'Five-year lifespan with proper maintenance, backed by a one-year warranty.',
      },
    ],
  },
]

export default stoves
