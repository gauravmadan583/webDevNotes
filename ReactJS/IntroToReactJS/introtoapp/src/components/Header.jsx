const Header = ({text}) => {
    return (
        <h1 className="">{text}</h1>
        
    );
}

export const Header2 = (props) => {
    return (
        <h2>{props.text}</h2>
    );
}
export default Header;