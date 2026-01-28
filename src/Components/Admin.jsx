export const Admin = () => {
  const movies = JSON.parse(localStorage.getItem("adminMovies")) || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔐 Admin Panel</h1>

      <h3>Total Movies Added: {movies.length}</h3>

      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>S.No</th>
              <th>Movie Name</th>
              <th>Rating</th>
              <th>Added By (User)</th>
            </tr>
          </thead>

          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.rating}</td>
                <td>{movie.addedBy || "Unknown User"}</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
