const MainContainer = ({
  children,
  setSearchedContacts,
  contacts,
  setIsSearch,
}) => {
  const searchHandler = (event) => {
    const value = event.target.value;
    setSearchedContacts(contacts.filter(item => item.email.includes([value]) || item.phone.includes([value])))
    setIsSearch(true)
  };

  return (
    <div>
      <h1>
        <a href="../../index.html">Contact App</a>
      </h1>
      <input
        type="search"
        placeholder="🔍 Search bettween Contacts ..."
        onChange={searchHandler}
      />
      {children}
    </div>
  );
};

export default MainContainer;
