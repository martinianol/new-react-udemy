import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./common/Section";

const Examples = ({ examples, concepts }) => {
  const [selectedTab, setSelectedTab] = useState();

  const handleSelect = (tab) => setSelectedTab(tab);

  const examplesContent = (
    <>
      <menu>
        {concepts.map((concept) => (
          <TabButton
            onClick={() => handleSelect(concept.title)}
            key={concept.id}
            isActive={selectedTab === concept.title}
          >
            {concept.title}
          </TabButton>
        ))}
      </menu>
      {!selectedTab && <p>Please select a topic</p>}
      {selectedTab && (
        <div id="tab-content">
          <h3>{examples[selectedTab].title}</h3>
          <p>{examples[selectedTab].description}</p>
          <pre>
            <code>{examples[selectedTab].code}</code>
          </pre>
        </div>
      )}
    </>
  );

  return (
    <Section id="examples" title="Examples">
      {examplesContent}
    </Section>
  );
};

export default Examples;
