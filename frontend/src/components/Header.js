import Button from './Button';

const Header = () => {
    return (
        <div className="header">
            <Button text={"Add"} color="#2f5d62"/> {/*Only show this button while on main page*/}
            <h2>Pastebin</h2>
            <Button text={"Logout"} color="#000"/>
        </div>
    )
}

export default Header
