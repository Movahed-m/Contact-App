import styles from "../../styles/Main/MainContainer.module.css";

const MainContainer = (props) => {
  const { children, setSearchedContacts, contacts, setIsSearch } = props;
  
  const searchHandler = (event) => {
    const value = event.target.value;
    setSearchedContacts(
      contacts.filter(
        (item) => item.email.includes([value]) || item.phone.includes([value])
      )
    );
    setIsSearch(true);
  };

  return (
    <div className={styles["main"]}>
      <div className={styles["header"]}>
        <h1>
          <a href="../../index.html">Contact App</a>
        </h1>
        <input
          type="search"
          placeholder="🔍 Search bettween Contacts ..."
          onChange={searchHandler}
        />
      </div>
      {children}
    </div>
  );
};

export default MainContainer;
