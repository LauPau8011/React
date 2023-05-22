//Sukurti Hero komponentą, kuris turės du props:title  ir subtitle.Jei title arba subtitle nepaduotas -h1 arba h2
// elementai net nesusikurs

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default Hero;
