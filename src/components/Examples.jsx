import { useState } from "react";
import TabButton from "./TabButton";

const Examples = ({ examples, concepts }) => {
  const [selectedTab, setSelectedTab] = useState();

  const handleSelect = (tab) => setSelectedTab(tab);

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {concepts.map((concept) => (
          <TabButton
            onSelect={() => handleSelect(concept.title)}
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
    </section>
  );
};

export default Examples;
