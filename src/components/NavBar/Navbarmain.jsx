import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router";
import useUserContext from "../../UserContext";
import { Link } from "react-router-dom";

const Navbarmain = () => {
  const pageNavigation = useNavigate();
  const userLocalDetails = localStorage.getItem("userDetails");
  const { userDetails, setUserDetails } = useUserContext();
  try {
    const email = userDetails.email;
    console.log(email);
  } catch {
    setUserDetails(JSON.parse(userLocalDetails));
  }
  const logout = () => {
    pageNavigation("/Login");
    setUserDetails({});
    localStorage.removeItem("userDetails");
    window.location.reload();
  };
  return (
    <>
      {userDetails ? (
        <Nav className=" bg-darkTeal py-3 d-flex flex-row justify-content-between">
          <h2 style={{ cursor: "pointer" }} className="ms-3">
            <Link
              className="text-decoration-none text-white"
              to={"/LandingPage"}
            >
              Welcome to DeliverEase
            </Link>
          </h2>
          <div className="d-flex flex-row">
            <p
              style={{ color: "#ffa600" }}
              className="color-ocre h5 align-content-center"
            >
              {userDetails.firstName} {userDetails.lastName}
            </p>
            <Nav.Link
              className="text-white"
              onClick={() => pageNavigation("/OrderListPage")}
            >
              Recent Orders
            </Nav.Link>
            <Nav.Link
              className="text-white"
              onClick={() => pageNavigation("/chat")}
            >
              Chat
            </Nav.Link>
            <Nav.Link
              className="text-white"
              onClick={() => pageNavigation("/mapview/" + userDetails.role)}
            >
              Map
            </Nav.Link>
            {userDetails.role === "Delivery Manager" ? (
              <Nav.Link
                className="text-white"
                onClick={() => pageNavigation("/search/manager")}
              >
                Search Employee
              </Nav.Link>
            ) : (
              <></>
            )}
            <Nav.Link className="text-white" onClick={logout}>
              Log Out
            </Nav.Link>
          </div>
        </Nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbarmain;
