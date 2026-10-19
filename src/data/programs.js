// Content for the Key Program Areas, taken from the FORDESH AFRICA projects profile.
// `summary` is shown on the home page card; the rest fills each program's own page.

const programs = [
  {
    slug: 'climate-change',
    title: 'Climate Change (Adaptation and Mitigation)',
    image: '/images/hd-drought.jpg',
    summary:
      'Working with communities in the Niger Delta to understand how climate change affects them and to build their resilience.',
    overview:
      'FORDESH AFRICA works with communities in the Niger Delta Region of Nigeria to identify how climate change is impacting them, develop ideas for solutions that increase resilience, and equip them with the knowledge, insights and tools to mobilize their communities.',
    highlights: [
      { value: 'Niger Delta', label: 'Focus region in Nigeria' },
      { value: 'Adaptation', label: 'Preparing for climate impacts' },
      { value: 'Mitigation', label: 'Low carbon development' },
    ],
    sections: [
      {
        heading: 'Knowledge and technology',
        points: [
          'Identifying appropriate technologies for adapting to a changing climate, and producing a Reference Guide.',
          'Strengthening local communities’ knowledge of climate-related problems and practical adaptive solutions.',
        ],
      },
      {
        heading: 'Policy and decision-making',
        points: [
          'Ensuring local and national decision-makers mainstream climate change in the design and implementation of development plans.',
        ],
      },
      {
        heading: 'Cleaner technologies',
        points: [
          'Raising awareness of the role clean technologies play in addressing climate change and managing disasters.',
          'Encouraging low carbon development through cleaner technologies in the agriculture sector.',
        ],
      },
      {
        heading: 'Expected results',
        points: [
          'Improved wellbeing and climate resilience of communities, especially marginalized groups such as youth, women and migrants.',
          'More resilient agro-ecosystems through the use of appropriate climate technologies.',
        ],
      },
    ],
  },
  {
    slug: 'ecosystems-nature-based-solutions',
    title: 'Ecosystems & Nature-based Solutions',
    image: '/images/hd-forest.jpg',
    summary:
      'Environmental sustainability is a key, non-negotiable principle in every landscape where we work.',
    overview:
      'Whether in wetlands, drylands, forests, marine or mountain ecosystems, or agricultural landscapes, FORDESH AFRICA’s development programs treat environmental sustainability as a key, non-negotiable principle.',
    highlights: [
      { value: 'SDG 13', label: 'Combating climate change' },
      { value: 'SDG 15', label: 'Protecting life on land' },
      { value: 'People first', label: 'Communities as agents of change' },
    ],
    sections: [
      {
        heading: 'The challenge',
        text: 'Deforestation, forest degradation, biodiversity loss and natural resource depletion are destroying the natural buffer that once protected us from climate extremes. Losing carbon sinks such as forests and wetlands pushes emissions even higher, amplifying natural hazards and making the poorest even more vulnerable.',
      },
      {
        heading: 'Why it matters',
        text: 'Healthy ecosystems are necessary for the survival of humans and other organisms, and for the prosperity and safety of our world. This is why SDG 13 (climate action) and SDG 15 (life on land) are inextricably linked.',
      },
      {
        heading: 'Our approach',
        points: [
          'Putting the poorest and most vulnerable, often women and girls, at the center of solutions as agents of change rather than victims.',
          'Addressing root causes of vulnerability, such as unequal power relations and access to decision-making.',
          'Enabling vulnerable people to identify and implement the adaptation solutions that serve them best.',
        ],
      },
    ],
  },
  {
    slug: 'locally-led-adaptation',
    title: 'Locally Led Adaptation & Resilience',
    image: '/images/hd-greenhouse.jpg',
    summary:
      'Strengthening people’s capacity to deal with shocks, manage risks and transform their lives.',
    overview:
      'FORDESH aims to strengthen poor people’s resilience: their capacity to deal with shocks and stresses, manage risks, and transform their lives in response to new hazards and opportunities.',
    highlights: [
      { value: '~40%', label: 'Of the global population lives with harsh climate realities (IPCC)' },
      { value: 'Ongoing', label: 'Resilience is a process, not a one-off outcome' },
      { value: 'Local', label: 'Communities as decision-makers' },
    ],
    sections: [
      {
        heading: 'The challenge',
        text: 'Sudden shocks and slow-onset changes erode the livelihoods of people living in poverty and undo past development gains. The climate crisis acts as a threat multiplier, affecting conflict, economic justice, gender inequality, health, displacement and food security.',
      },
      {
        heading: 'What we believe',
        points: [
          'Increasing resilience is an ongoing process, not an outcome achieved within a fixed time frame.',
          'Changing the system and addressing root causes of vulnerability and inequity is key.',
          'People of all genders, especially women, must be supported to move out of poverty.',
        ],
      },
      {
        heading: 'Locally led adaptation',
        text: 'FORDESH includes local communities, community-based organizations, citizen groups, local government and local private sector entities as decision-makers in the interventions that affect them, working with and for the most vulnerable people, who have emitted least.',
      },
    ],
  },
  {
    slug: 'climate-smart-agriculture',
    title: 'Climate Smart Agriculture',
    image: '/images/hd-maize-farmer.jpg',
    summary:
      'Helping smallholder farmers adopt climate-smart practices that protect food security and livelihoods.',
    overview:
      'We work with smallholder farmers in rural communities on the different elements of climate-smart agricultural (CSA) systems, balancing near-term food security and livelihood needs with adaptation and mitigation.',
    highlights: [
      { value: 'Smallholders', label: 'Rural farming communities' },
      { value: '3 elements', label: 'Farms, landscapes and farmer services' },
      { value: '5 actions', label: 'To implement the CSA approach' },
    ],
    sections: [
      {
        heading: 'Elements of climate-smart agriculture',
        points: [
          'Managing farms, crops, livestock, aquaculture and fisheries to balance food security with adaptation and mitigation.',
          'Managing ecosystems and landscapes to conserve services vital to food security and agricultural development.',
          'Providing services that help farmers and land managers manage climate risks and take mitigation actions.',
        ],
      },
      {
        heading: 'How we implement CSA',
        points: [
          'Expanding the evidence base on climate effects, vulnerabilities and effective adaptation options.',
          'Supporting enabling policies, plans, investments and coordination across institutions.',
          'Strengthening national and local institutions that empower and motivate farmers.',
          'Enhancing financing by linking climate and agricultural finance, including instruments such as the Green Climate Fund.',
          'Implementing practices at field level, building on farmers’ own knowledge, needs and priorities.',
        ],
      },
    ],
  },
  {
    slug: 'green-technology',
    title: 'Green Technology',
    image: '/images/hd-solar.jpg',
    summary:
      'Encouraging inventors and consumers to adopt cleaner, safer and renewable technologies.',
    overview:
      'We promote the invention and use of green technology by sensitizing and encouraging both the people who create clean technologies and the people who use them.',
    highlights: [
      { value: 'Renewables', label: 'Water, biomass, wind, solar and geothermal' },
      { value: 'Inventors', label: 'Green inventions are good business' },
      { value: 'Consumers', label: 'Lower bills, safer products' },
    ],
    sections: [
      {
        heading: 'The challenge',
        text: 'The world has a fixed amount of natural resources, some already depleted. Discarded batteries and electronics can pollute groundwater and soil with chemicals that cannot be removed, while renewable energy sources are not yet used enough to replace non-renewable ones.',
      },
      {
        heading: 'What we promote',
        points: [
          'Helping inventors see that green inventions and clean technologies are good business.',
          'Helping consumers see that green products can reduce energy bills and are often safer and healthier.',
        ],
      },
    ],
  },
  {
    slug: 'tree-planting-initiative',
    title: 'Tree Planting Initiative',
    image: '/images/hd-tree-planting.jpg',
    summary:
      'Planting 100 million trees across rural communities in Nigeria and Ghana to fight deforestation.',
    overview:
      'Concerned that Africa is the region most affected by climate change and climate-driven disasters, FORDESH is dedicated to building resilience by planting 100 million trees across rural communities in Nigeria and Ghana.',
    highlights: [
      { value: '100M', label: 'Trees to be planted' },
      { value: '2', label: 'Countries: Nigeria and Ghana' },
      { value: 'Rural', label: 'Communities at the heart of the initiative' },
    ],
    sections: [
      {
        heading: 'What trees provide',
        points: [
          'Clean water, clean air and conservation of biodiversity.',
          'Resilient landscapes for climate mitigation and adaptation.',
          'Organic fruits and medicinal products that raise the income of rural families.',
        ],
      },
      {
        heading: 'What the initiative tackles',
        points: [
          'Desertification, drylands and land degradation.',
          'Disasters, poverty and food insecurity.',
          'Forced migration and violence driven by resource scarcity.',
        ],
      },
    ],
  },
  {
    slug: 'biodiversity-conservation',
    title: 'Biodiversity Conservation & Management',
    image: '/images/hd-crane.jpg',
    summary:
      'Protecting natural ecosystems and the services that farming and rural livelihoods depend on.',
    overview:
      'Biodiversity conservation is critical for economic development and poverty alleviation. FORDESH focuses on the five principal pressures on biodiversity and helps farms protect their natural environment.',
    highlights: [
      { value: '70%', label: 'Of the global poor live in rural areas' },
      { value: '50–90%', label: 'Of rural livelihoods come from ecosystem services' },
      { value: '5', label: 'Principal pressures we address' },
    ],
    sections: [
      {
        heading: 'Pressures we address',
        points: [
          'Climate change.',
          'Habitat loss and degradation.',
          'Pollution, including excessive nutrient loading.',
          'Overexploitation and unsustainable use.',
          'Invasive alien species.',
        ],
      },
      {
        heading: 'Our solutions',
        points: [
          'Identify nearby natural ecosystems and protected areas to improve conservation.',
          'Avoid degrading or destroying natural ecosystems, and establish buffer zones.',
          'Maintain and restore non-crop canopy cover and protect large native trees.',
          'Identify protected and endangered species near operations.',
          'Prevent the introduction and spread of alien species.',
        ],
      },
      {
        heading: 'The result',
        text: 'Farms working with FORDESH are able to protect their natural environment and biodiversity, and carry out Environmental and Social Impact Assessments (ESIA).',
      },
    ],
  },
  {
    slug: 'monitoring-and-evaluation',
    title: 'Monitoring and Evaluation',
    icon: 'fa-chart-line',
    summary:
      'Tracking project progress to support learning, transparency and accountability.',
    overview:
      'Monitoring and Evaluation (M&E) provide the only consolidated source of information on project progress. They help actors learn from each other, test assumptions, and turn experience into better policy and practice.',
    highlights: [
      { value: 'Baseline', label: 'Formative evaluations' },
      { value: 'Mid-term', label: 'Evaluations and reviews' },
      { value: 'Impact', label: 'Summative and impact evaluations' },
    ],
    sections: [
      {
        heading: 'Why M&E matters',
        points: [
          'Shows clear, consolidated project progress.',
          'Builds expertise by sharing experience and lessons.',
          'Supports transparency and accountability through reporting.',
        ],
      },
      {
        heading: 'Our experience',
        points: [
          'Project and program monitoring.',
          'Baseline surveys, mid-term reviews, project completion and impact evaluations.',
          'M&E systems: Logical Framework (Log Frame), Results Framework and Logic Model (Theory of Change).',
          'Data collection and analysis.',
        ],
      },
    ],
  },
  {
    slug: 'capacity-building',
    title: 'Capacity Building and System Strengthening',
    image: '/images/workshop.png',
    summary:
      'Strengthening the skills and abilities of people, communities and institutions.',
    overview:
      'FORDESH AFRICA builds the capacity of structures at all levels, strengthening their skills, competences and abilities so they can respond more effectively to their own needs.',
    highlights: [
      { value: 'Stage 1', label: 'Identify capacity gaps' },
      { value: 'Stage 2', label: 'Develop strengthening programs' },
      { value: 'All levels', label: 'People, communities, organizations and governments' },
    ],
    sections: [
      {
        heading: 'Stage 1: Identify the gaps',
        text: 'We identify the capacity gaps that exist in institutions and communities.',
      },
      {
        heading: 'Stage 2: Strengthen',
        text: 'We develop programs that strengthen the skills, competences and abilities of people and communities to overcome the causes of their exclusion and suffering, and that enable organizations and governments to guide their own development.',
      },
    ],
  },
]

export default programs
