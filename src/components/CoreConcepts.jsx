import CoreConcept from "./CoreConcept";
import Section from "./common/Section";

const CoreConcepts = ({ concepts }) => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {concepts.map((concept) => (
          <CoreConcept {...concept} key={concept.id} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
