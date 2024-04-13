import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router";
import useUserContext from "../../UserContext";

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
          <h2 className="text-white ms-3">Welcome to DeliverEasy</h2>
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
              onClick={() => pageNavigation("/ChatPage")}
            >
              Chat
            </Nav.Link>
            <Nav.Link
              className="text-white"
              onClick={() => pageNavigation("/StatusDelivery")}
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
