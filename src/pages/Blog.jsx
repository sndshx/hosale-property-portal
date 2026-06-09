import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import PageHero from '../components/PageHero';
import PageTransition from '../components/PageTransition';

const blogs = [
  {
    id: 1,
    img: '/assets/property-1.jpg',
    category: 'Market Trends',
    date: 'June 05, 2026',
    author: 'Admin',
    title: 'Real Estate Market Trends to Watch in 2026',
    desc: 'Discover the latest shifts in property values, mortgage rates, and buyer preferences shaping the housing market this year.',
  },
  {
    id: 2,
    img: '/assets/property-2.jpg',
    category: 'Buying Guide',
    date: 'May 28, 2026',
    author: 'Sarah Mitchell',
    title: '10 Vital Tips for First-Time Homebuyers',
    desc: 'Navigate the complex process of buying your first home with confidence. From budgeting to final inspection, we have you covered.',
  },
  {
    id: 3,
    img: '/assets/property-3.jpg',
    category: 'Home Improvement',
    date: 'May 14, 2026',
    author: 'David Kim',
    title: 'Modern Architecture Trends for Your Next Remodel',
    desc: 'Enhance your living space and increase property value with these contemporary architectural designs and interior styling tips.',
  },
  {
    id: 4,
    img: '/assets/property-4.jpg',
    category: 'Selling Guide',
    date: 'April 30, 2026',
    author: 'Admin',
    title: 'How to Stage Your Home for a Quick Premium Sale',
    desc: 'Maximize offers on your property with proven home staging strategies that capture buyer attention and showcase your space beautifully.',
  },
  {
    id: 5,
    img: '/assets/property-5.jpg',
    category: 'Investment',
    date: 'April 15, 2026',
    author: 'James Reynolds',
    title: 'Top Neighborhoods to Invest in This Quarter',
    desc: 'An in-depth analysis of emerging real estate hotspots offering high rental yields and long-term capital appreciation potential.',
  },
  {
    id: 6,
    img: '/assets/property-2.jpg',
    category: 'Lifestyle',
    date: 'March 22, 2026',
    author: 'Amanda Lee',
    title: 'The Rise of Smart & Sustainable Living Spaces',
    desc: 'Explore how modern homeowners are integrating eco-friendly technology and energy-efficient automation into their residences.',
  },
];

const Blog = () => {
  useEffect(() => {
    ScrollReveal().reveal('.blog__card', {
      distance: '40px',
      origin: 'bottom',
      duration: 900,
      interval: 120,
    });
  }, []);

  return (
    <PageTransition>
      <PageHero
        title="News & Articles"
        subtitle="Stay updated with the latest trends, guides, and expert insights in real estate."
        breadcrumb="Blog"
      />

      <div className="section__container">
        <div className="blog__grid">
          {blogs.map((blog) => (
            <article className="blog__card" key={blog.id}>
              <div
                className="blog__card__img"
                style={{ backgroundImage: `url(${blog.img})` }}
              >
                <span className="blog__category">{blog.category}</span>
              </div>
              <div className="blog__card__body">
                <div className="blog__meta">
                  <span>
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>
                  <span>
                    <i className="ri-user-line"></i> By {blog.author}
                  </span>
                </div>
                <h4>{blog.title}</h4>
                <p>{blog.desc}</p>
                <a href="#" className="blog__read__more" onClick={(e) => e.preventDefault()}>
                  Read More <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
