import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const properties = [
  {
    id: 1,
    img: '/assets/property-1.jpg',
    name: 'Oceanview Villas',
    price: '$1,250,000',
    beds: 5, baths: 6, area: '4000ft',
    location: '784 Coastal Drive, USA',
  },
  {
    id: 2,
    img: '/assets/property-2.jpg',
    name: 'Greenwood Estate',
    price: '$850,000',
    beds: 4, baths: 5, area: '5500ft',
    location: '4521 Oakwood Lane, Austin',
  },
  {
    id: 3,
    img: '/assets/property-3.jpg',
    name: 'Skyline Tower Apartments',
    price: '$2,500,000',
    beds: 6, baths: 7, area: '4500ft',
    location: '2201 West 5th Street, New York',
  },
  {
    id: 4,
    img: '/assets/property-4.jpg',
    name: 'Maplewood Cottage',
    price: '$540,000',
    beds: 4, baths: 5, area: '3500ft',
    location: '980 Maple Street, Denver',
  },
  {
    id: 5,
    img: '/assets/property-5.jpg',
    name: 'Royal Crest Mansion',
    price: '$4,800,000',
    beds: 5, baths: 6, area: '5000ft',
    location: '1789 Kingsway, Beverly Hills',
  },
];

const Property = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      autoplay: { delay: 3500, disableOnInteraction: false },
    });
    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className="section__container property__container" id="property">
      <h2 className="section__header">Latest Property</h2>
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {properties.map((property) => (
            <div className="swiper-slide" key={property.id}>
              <div className="property__card">
                <img src={property.img} alt={property.name} />
                <div className="property__details">
                  <div className="property__details__header">
                    <h4>{property.name}</h4>
                    <h5>{property.price}</h5>
                  </div>
                  <div className="property__amenities">
                    <div><span><i className="ri-hotel-bed-line"></i></span> {property.beds}</div>
                    <div><span><i className="ri-showers-line"></i></span> {property.baths}</div>
                    <div><span><i className="ri-dashboard-fill"></i></span> {property.area}</div>
                  </div>
                  <div className="property__location">
                    <span><i className="ri-map-pin-5-line"></i></span> {property.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Property;
