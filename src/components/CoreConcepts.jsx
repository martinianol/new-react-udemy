import CoreConcept from "./CoreConcept";

const CoreConcepts = ({ concepts }) => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {concepts.map((concept) => (
          <CoreConcept {...concept} key={concept.id} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
