function LandingPage(props) {
  return (
    <div>
      <p>Landing</p>
      <button onClick={() => props.history.push('/movie/123')}>
        Movies page
      </button>
    </div>
  );
}

export default LandingPage;
