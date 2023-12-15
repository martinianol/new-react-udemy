import { useState } from "react";
import TabButton from "./TabButton";
import Tabs from "./common/Tabs";
import Section from "./common/Section";

const Examples = ({ examples, concepts }) => {
  const [selectedTab, setSelectedTab] = useState();

  const handleSelect = (tab) => setSelectedTab(tab);

  const tabContent = !selectedTab ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{examples[selectedTab].title}</h3>
      <p>{examples[selectedTab].description}</p>
      <pre>
        <code>{examples[selectedTab].code}</code>
      </pre>
    </div>
  );

  const buttons = concepts.map((item) => (
    <TabButton
      onClick={() => handleSelect(item.title)}
      key={item.id}
      isActive={selectedTab === item.title}
    >
      {item.title}
    </TabButton>
  ));

  return (
    <Section id="examples" title="Examples">
      <Tabs tabButtons={buttons}>{tabContent}</Tabs>
    </Section>
  );
};

export default Examples;
