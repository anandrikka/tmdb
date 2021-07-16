function LandingPage(props) {
  return (
    <div>
      <p>Landing</p>
      <button onClick={() => props.history.push('/movie/123')}></button>
    </div>
  );
}

export default LandingPage;
