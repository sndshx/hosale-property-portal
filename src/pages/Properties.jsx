import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import PageHero from '../components/PageHero';
import PageTransition from '../components/PageTransition';

const allProperties = [
  { id: 1, img: '/assets/property-1.jpg', name: 'Oceanview Villas',       price: '$1,250,000', beds: 5, baths: 6, area: '4000ft', location: '784 Coastal Drive, USA',          badge: 'For Sale',  type: 'villa' },
  { id: 2, img: '/assets/property-2.jpg', name: 'Greenwood Estate',        price: '$850,000',   beds: 4, baths: 5, area: '5500ft', location: '4521 Oakwood Lane, Austin',        badge: 'For Sale',  type: 'house' },
  { id: 3, img: '/assets/property-3.jpg', name: 'Skyline Tower Apartments',price: '$2,500,000', beds: 6, baths: 7, area: '4500ft', location: '2201 West 5th St, New York',       badge: 'Featured',  type: 'apartment' },
  { id: 4, img: '/assets/property-4.jpg', name: 'Maplewood Cottage',       price: '$540,000',   beds: 4, baths: 5, area: '3500ft', location: '980 Maple Street, Denver',         badge: 'For Sale',  type: 'house' },
  { id: 5, img: '/assets/property-5.jpg', name: 'Royal Crest Mansion',     price: '$4,800,000', beds: 5, baths: 6, area: '5000ft', location: '1789 Kingsway, Beverly Hills',    badge: 'Luxury',    type: 'villa' },
  { id: 6, img: '/assets/property-1.jpg', name: 'Harbor Point Condo',      price: '$670,000',   beds: 3, baths: 2, area: '2200ft', location: '55 Harbor Blvd, Miami',           badge: 'For Rent',  type: 'apartment' },
  { id: 7, img: '/assets/property-2.jpg', name: 'Pine Ridge Townhouse',    price: '$390,000',   beds: 3, baths: 3, area: '2800ft', location: '17 Pine Ridge Rd, Chicago',       badge: 'For Sale',  type: 'house' },
  { id: 8, img: '/assets/property-3.jpg', name: 'Summit View Penthouse',   price: '$3,100,000', beds: 4, baths: 4, area: '3800ft', location: '900 Summit Ave, Seattle',         badge: 'Luxury',    type: 'apartment' },
  { id: 9, img: '/assets/property-4.jpg', name: 'Clearwater Bungalow',     price: '$295,000',   beds: 2, baths: 2, area: '1800ft', location: '321 Clearwater Dr, Tampa',        badge: 'For Sale',  type: 'house' },
];

const filters = ['all', 'house', 'villa', 'apartment'];

const Properties = () => {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? allProperties
    : allProperties.filter((p) => p.type === active);

  useEffect(() => {
    ScrollReveal().reveal('.prop__card', { distance: '40px', origin: 'bottom', duration: 900, interval: 120 });
  }, [active]);

  return (
    <PageTransition>
      <PageHero
        title="Property Listings"
        subtitle="Browse our curated selection of premium residential and commercial properties."
        breadcrumb="Properties"
      />

      <div className="section__container">
        {/* Filters */}
        <div className="properties__filter">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter__btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="properties__grid">
          {filtered.map((p) => (
            <div className="prop__card" key={p.id}>
              <div className="prop__card__img">
                <img src={p.img} alt={p.name} />
                <span className="prop__badge">{p.badge}</span>
              </div>
              <div className="prop__card__body">
                <h4>{p.name}</h4>
                <div className="prop__price">{p.price}</div>
                <div className="prop__meta">
                  <span><i className="ri-hotel-bed-line"></i> {p.beds} Beds</span>
                  <span><i className="ri-showers-line"></i> {p.baths} Baths</span>
                  <span><i className="ri-dashboard-fill"></i> {p.area}</span>
                </div>
                <div className="prop__location">
                  <i className="ri-map-pin-5-line"></i> {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Properties;
