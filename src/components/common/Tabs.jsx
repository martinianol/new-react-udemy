import TabButton from "../TabButton";

const Tabs = ({ children, tabButtons, buttonsContainer = "menu" }) => {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{tabButtons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
