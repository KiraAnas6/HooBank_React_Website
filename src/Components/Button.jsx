const Button = (props) => {
    const {content} = props;
  return (
    <button className="bg-blue-gradient text-black rounded-md px-4  py-2">
      {content}
    </button>
  );
};


export default Button;