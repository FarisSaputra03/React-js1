const Button = (props) => {
  return (
    <div>
      <button 
      onClick={() => props.clicked()}
      >Click Me Bro!</button>
    </div>
  );
};
export default Button;
