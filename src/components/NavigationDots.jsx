const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'consultation', 'about', 'skills', 'prices', 'testimonial', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
