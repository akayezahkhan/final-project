function Bodypart(props) {
  return <div className="border-black border-2 m-1">
  {props.session.user.name}
  </div>;
}

export default Bodypart;
