function Header(props) {
  console.log(props)
    return (
      <h1>Dek was here, {props.name}, {props.color}</h1>
    )
}

export default Header;