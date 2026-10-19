import { useState } from 'react'

const team = [
  {
    first: 'Chief Ethelbert',
    last: 'Onuoha',
    post: 'President / Chief Executive Officer',
    image: '/images/ethelbert.jpg',
    bio: [
      'Onuoha Ethelbert is a development professional with cross-disciplinary experience in nonprofit sector management in Africa, particularly in Nigeria and Ghana. He holds a BSc and an MSc in Agricultural Economics, with in-depth knowledge of Monitoring and Evaluation, Climate Change mitigation and adaptation, Agricultural development, project planning, development and management, Community Mobilization and Sensitization, as well as Capacity Building and System Strengthening.',
      'He has been involved in large-scale development programs, especially in the Niger Delta region of Nigeria, and has acquired practical skills in the dynamics and functionalities of sustainable development principles and practices. Onuoha has a knack for harnessing and synchronizing new initiatives for development.',
      'He was a Program Officer with Africare/Nigeria from 1990 to 1993, an international organization committed to improving the quality of life of people living in the rural communities of Africa. He was also the Community Development Consultant for Nigeria Agip Oil Company and TOTALFINAELF from 2002 to 2005.',
      'He is the initiator of FORDESH AFRICA and currently the Regional Consultant for the Niger Delta Development Commission (NDDC). He has served on numerous boards of organizations and participated in a number of workshops and capacity building courses.',
    ],
  },
  {
    first: 'Lorne',
    last: 'Neault',
    post: 'Chief Operations Officer',
    image: '/images/lorne.jpg',
    bio: [
      'Lorne Neault is Chief Operations Officer of Fordesh Africa, an African climate-impact and energy-transition company advancing pellet-driven clean cooking, waste-to-energy, circular-economy infrastructure and wildfire resilience. As an operational leader and shareholder, he has helped develop the company from an ambitious platform into a structured, execution-focused enterprise connecting technology, local supply chains, community participation and institutional partnerships.',
      'In his current role, Lorne leads operational planning, project development, technical coordination and performance accountability across the Fordesh Group. He has been instrumental in translating the company’s vision into practical operating models for clean-cooking deployment, biomass pellet supply, waste-to-energy development and the FireFox Wildfire International service line. His work supports disciplined governance, scalable delivery systems, regulatory readiness and credible engagement with governments, communities, investors and international partners.',
      'Lorne also serves as Acting CEO of FireFox WildFire International. His leadership experience with FireFox, KDM Constructors, Ag Growth International and EMW Industrial has shaped the operational, commercial and technical expertise he brings to Fordesh Africa today. Across these organizations, he gained extensive experience scaling operations, directing large multi-site teams, overseeing complex industrial contracts, developing new business divisions and building inclusive workforce and procurement pathways—capabilities that now underpin his leadership across the Fordesh Group.',
      'Grounded in a Red Seal Construction Electrician certification and advanced energy training, Lorne combines technical understanding with commercial discipline and relationship-based leadership. At Fordesh Africa, he remains focused on building the operational foundation required for responsible growth: clear systems, accountable partnerships and projects that create measurable environmental, social and economic value across Nigeria and the wider African market.',
    ],
  },
  {
    first: 'Prof. Magnus',
    last: 'Kpakol',
    post: 'Vice President, Government Relations',
    image: null, // photo to follow
    bio: [
      'Prof. Kpakol is the Vice President, Government Relations of Fordesh Africa GreenEdge Innovation Ltd. He served as Chief Economic Adviser to former President Olusegun Obasanjo and de facto Minister of National Planning, and was a member of the Federal Executive Council and the National Economic Team.',
      'He later continued in government and remained in the National Economic Team as National Coordinator of the National Poverty Eradication Program (NAPEP). Prior to that, he worked at high levels in Corporate America.',
      'He also served as a professor of economics at the University of Dallas in Texas, and is the Founder and Executive Chairman of the Economic Growth and Development Center (Economic Center) in Dallas, Texas. For years he has combined his interest in teaching with work as a global economic consultant, which he continues in the United States, Canada and Nigeria.',
    ],
  },
  {
    first: 'Alvin',
    last: 'Latos',
    post: 'Director / Vice President',
    image: '/images/alvin.jpg',
    bio: [
      'Alvin has acquired a broad spectrum of knowledge over a lifetime of diverse and challenging projects and initiatives. Contracts and product marketing, design-build projects, manufacturing, processing and value-add projects, as well as direct operations management and consulting, are a few of the background skills Alvin Latos has worked towards.',
      'The establishment of Africa Adanak LTD. and the opportunities within this region are very appealing and noteworthy, based on the huge amount of available resources and the need for products and services in this fast-growing economy. The diversity within Africa, its growing population and its continental geographic location make it an excellent investment and work placement in today’s global economy.',
    ],
  },
  {
    first: 'Rick',
    last: 'Solomon',
    post: 'Director / Vice President',
    image: '/images/rick.jpg',
    bio: [
      'Rick Solomon is a Director / Vice President of Fordesh Africa GreenEdge Innovation Limited, where he supports cleaner, safer, and more accessible cooking solutions across Africa. Fordesh Africa also represents Firefox Wildfire International Inc. throughout the continent, with Rick playing an instrumental role in deploying its wildfire-suppression technology. He brings more than 30 years of experience in field operations, technology deployment, stakeholder engagement, and environmentally responsible solutions.',
      'Rick is also the founder of Firefox Wildfire International Inc., an Alberta-based company focused on aerial fire-control solutions. His work grew from firsthand wildfire response in rural Alberta and includes the development and field deployment of FireGel-based suppression systems designed to help protect forests, homes, and critical infrastructure in the wildland–urban interface.',
    ],
  },
  {
    first: 'Patience',
    last: 'Nneoma Onukagha',
    post: 'Director of Administration',
    image: '/images/patience.jpg',
    bio: [
      'Ms. Patience Nneoma Onukagha is the Director of Administration for FORDESH AFRICA. She holds a Higher National Diploma in Secretarial Administration. She was the Administrative Secretary for Integrated Digital Technology, an international communication company in Port Harcourt, Nigeria.',
      'Mrs. Onukagha is also an Early Child Development practitioner. She holds an Advanced Diploma Certificate in Montessori Teaching Methodology from the Montessori Training Institute, UK.',
      'She is also a Director and Co-founder of FORDESH AFRICA.',
    ],
  },
  {
    first: 'Onu-Ura',
    last: 'Adaji Israel',
    credentials: 'HND, MSc, MBA, ACSA, NCA, ACTI',
    post: 'Country Coordinator',
    image: '/images/onuura.jpg',
    imagePosition: 'center 20%',
    bio: [
      'Onu-Ura Adaji Israel is a seasoned business strategist and management consultant with over 25 years of hands-on experience in startups, financial management, and corporate strategy across multiple sectors, including Health, Oil & Gas, Energy, and Environment.',
      'He is known for his strong passion for building sustainable businesses and his expertise in structuring companies for long-term success. He holds an MBA from the University of East London and an MSc from the University of the Americas.',
    ],
  },
  {
    first: 'Favour',
    last: 'Onuoha',
    post: 'Snr. IT Consultant',
    image: '/images/favour.jpg',
    imagePosition: 'center 20%',
    bio: [
      'Favour Onuoha is the Senior IT Consultant for FORDESH AFRICA. He holds a Diploma in Computer Software Engineering as well as a Certificate in Android Development. He is a Senior Software Developer at aganow and also a content creator.',
      'Favour has over 8 years of experience in coding. He is also a Backend Fintech Engineer with experience working with Core Banking services and SOAP services, and extensive knowledge of building USSD (short codes), SDPs and more.',
      'Favour Onuoha has served on numerous boards and committees and participated in a number of workshops and capacity building courses.',
    ],
  },
  {
    first: 'Progress',
    last: 'Ada Onuoha',
    post: 'Executive Assistant',
    image: '/images/progress.jpg',
    bio: [
      'Progress Ada Onuoha serves as the Executive Assistant at FORDESH AFRICA, where she oversees day-to-day operations, coordinates schedules, and ensures meetings and administrative activities run smoothly. She holds an Advanced Diploma in Business with Computing from IPMC, which has equipped her with a solid blend of business insight and technical expertise.',
      'Before joining FORDESH AFRICA, she worked as a Frontend Developer at Academy Achievers, where she gained valuable experience in web development and digital solutions.',
      'Her unique combination of administrative excellence, business knowledge and technical skills enables her to contribute effectively to organizational growth and efficiency.',
    ],
  },
]

function ProfileCard({ member }) {
  const [open, setOpen] = useState(false)
  const [first, ...rest] = member.bio

  return (
    <div className="box">
      <div className="image">
        {member.image ? (
          <img
            src={member.image}
            alt={`${member.first} ${member.last}`}
            style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
          />
        ) : (
          <div className="avatar-placeholder" role="img" aria-label={`${member.first} ${member.last}`}>
            <i className="fa-solid fa-user"></i>
          </div>
        )}
      </div>

      <div className="content">
        <div className="info">
          <h3 className="title">
            {member.first} <span>{member.last}</span>
          </h3>
          {member.credentials && <span className="credentials">{member.credentials}</span>}
          <span className="post">{member.post}</span>
          <p>{first}</p>
          {open && rest.map((text) => <p key={text}>{text}</p>)}
          {rest.length > 0 && (
            <button
              type="button"
              className="bio-toggle"
              onClick={() => setOpen(!open)}
            >
              {open ? 'Show less' : 'Read full profile'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function Profiles() {
  return (
    <section className="profiles" id="team">
      <div className="title-1">
        <h1 className="heading">
          our <span>team</span>
        </h1>
      </div>

      <div className="box-container">
        {team.map((member) => (
          <ProfileCard member={member} key={`${member.first} ${member.last}`} />
        ))}
      </div>
    </section>
  )
}

export default Profiles
