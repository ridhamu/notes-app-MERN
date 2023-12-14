import { Button } from "react-bootstrap";

interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLoginClick: () => void,
}

const NavBarLoggedOutView = ({onSignUpClicked, onLoginClick}: NavBarLoggedOutViewProps) => {
    return ( 
        <>
            <Button onClick={onSignUpClicked}>Sign Up</Button>
            <Button onClick={onLoginClick}>Login</Button>
        </>
     );
}
 
export default NavBarLoggedOutView;