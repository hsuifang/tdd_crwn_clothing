const App = () => {
  const categories = [
    { id: 1, title: "Hats" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Sneakers" },
    { id: 4, title: "Womens" },
    { id: 5, title: "Mens" },
  ];

  return (
    <div className="categories-container">
      {categories.map((c) => (
        <div
          className="category-body-container"
          key={c.id}
          data-testid="category"
        >
          <img
            className="background-image"
            src="https://i.ibb.co/cvpntL1/hats.png"
            alt="background-image"
          />
          <h2>{c.title}</h2>
          <p>Shop Now</p>
        </div>
      ))}
    </div>
  );
};

export default App;
