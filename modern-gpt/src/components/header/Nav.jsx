import logo from "../../assets/logo.png";
export default function Nav() {
  return (
    <div className="flex justify-between container mx-auto mb-20 pt-16">
      <ul className="text-white flex  items-center">
        <li className="m-3">
          <img src={logo} alt="logo" />
        </li>
        <li className="m-3">Home</li>
        <li className="m-3">What is GPT?</li>
        <li className="m-3">Open AI</li>
        <li className="m-3">Case Studies</li>
        <li className="m-3">Library</li>
      </ul>
      <div className="flex items-center">
        <button className="text-white mr-2">Sign in</button>
        <button className="text-white  bg-orange-600 rounded pl-10 pr-10 pt-2 pb-2">
          Sign up
        </button>
      </div>
    </div>
  );
}
