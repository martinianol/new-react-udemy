import TabButton from "../TabButton";

const Tabs = ({ children, tabButtons }) => {
  return (
    <>
      <menu>{tabButtons}</menu>
      {children}
    </>
  );
};

export default Tabs;
