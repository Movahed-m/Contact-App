const MainContainer = ({ children }) => {
  return (
    <div>
      <h1>
        <a href="../../index.html">Contact App</a>
      </h1>
      <input type="search" placeholder="🔍 Search bettween Contacts ..." />
      {children}
    </div>
  );
};

export default MainContainer;
