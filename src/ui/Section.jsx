function Section({ children, bgColor, height }) {
  return (
    <section style={{ height: height, backgroundColor: bgColor }}>
      {children}
    </section>
  );
}

export default Section;
