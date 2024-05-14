// redux hooks
import { useDispatch, useSelector } from "react-redux";
// actions and state from Contact Reducer
import {
  contactSelector,
  setShowAddContact,
} from "../Redux/Reducers/contactReducer";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

// render the navbar
const Navbar = () => {
  // to dispatch an action
  const dispatch = useDispatch();

  // function to show add contact section on clicking on button
  const { showAddContact } = useSelector(contactSelector);

  // render the navbar
  return (
    // container
    <nav>
      <Link to="/website" className="title">
        Website
      </Link>
      <ul>
        {/* heading inside the navbar */}
        <li>
          <NavLink className="contact" to="/contact-list">
            Contact List
          </NavLink>
        </li>

        {/* add contact button */}
        {/* visible only on smaller screen  */}
        <button
          className="bg-green-300 rounded p-[2px] md:hidden"
          onClick={() => dispatch(setShowAddContact())}
        >
          {/* set the value of button on condition */}
          {showAddContact ? "Cancel" : "Add Contact"}
        </button>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/map-globe">Map</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
