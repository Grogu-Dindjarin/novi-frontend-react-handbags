function NavBarButton({event, innerText, isDisabled}) {
    return (
        <button type="button" onClick={event} disabled={isDisabled}>{innerText}</button>
    )
}

export default NavBarButton;