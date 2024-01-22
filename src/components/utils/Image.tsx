const Image = ({ src, alt }: { src: string ; alt: string }) => {
  return <img src={src} alt={alt} className="fabshop-image" loading="lazy" />;
};

export default Image;
