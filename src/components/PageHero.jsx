import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, breadcrumb }) => (
  <section className="page__hero">
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <span>/</span>
      <span>{breadcrumb || title}</span>
    </div>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
  </section>
);

export default PageHero;
