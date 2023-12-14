export default function CoreConcept({ image, description, title }) {
  //const { image, description, title } = props;
  return (
    <li>
      <img src={image} alt={`${description} image`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
