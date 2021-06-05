import Button from './Button';

const Header = () => {
    return (
        <div className="header">
            <Button text={"Add"} color="steelblue"/> {/*Only show this button while on main page*/}
            <h2>Diogo Matos' Pastebin</h2>
            <Button text={"Logout"} color="red"/>
        </div>
    )
}

export default Header
