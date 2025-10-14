function Slider(data) {
  return (
    <>
      <input type='range' min='0' max='255' value={data.value} onChange={data.onChange} />
    </>
  );
}
export default Slider;
