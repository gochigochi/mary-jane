import styled from 'styled-components'

// ICON
export const Hamb = styled.button`
    background: transparent;
    border: ${({scrolled}) => scrolled ? '1px solid var(--green)' : '1px solid #ffffff'};
    outline: none;
    cursor: pointer;
    z-index: 800;
    align-self: center;
    margin-right: 10px;
    padding: 4px 9px;
    border-radius: 4px;
    position: relative;
    top: .2rem;

    @media all and (min-width: 1024px) {
        display: none;
    }
`

export const Span = styled.span`
    display: block;
    width: 22px;
    height: 2px;
    background-color:${({scrolled}) => scrolled ? 'var(--green)' : '#fff'};
    margin-block: 5px;
    border-radius: 1px;
    transition: transform .5s, opacity .25s;

    &:nth-child(1) {
        transform: ${({opened}) => opened ? 'translateY(7px) rotate(45deg)' : 'none'};
    }

    &:nth-child(2) {
        opacity: ${({opened}) => opened ? '0' : '1'};
    }

    &:nth-child(3) {
        transform: ${({opened}) => opened ? 'translateY(-7px) rotate(-45deg)' : 'none'};
    }
`

// MENU

export const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--gray-blue);
    max-height: ${({opened}) => opened ? '100rem' : '0rem'};
    overflow: hidden;
    transition: max-height .5s cubic-bezier( 1, 0, 0, 1 );
    box-shadow: var(--soft-shadow);
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 5rem 2rem 0 2rem;
`

export const LinkContainer = styled.div`
    padding: 15px 0;
    line-height: 16px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: white;
    text-align: right;
    max-height: ${({opened}) => opened ? '100rem' : '2.5rem'};
    transition: max-height .5s cubic-bezier( 1, 0, 0, 1 );
    overflow: hidden;
`

export const FakeLink = styled.button`
    line-height: 16px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: ${({opened}) => opened ? "var(--green)" : "#fff"};
    margin-bottom: 1rem;
    cursor: pointer;
`

export const SubLinkContainer = styled.div`
    padding: 15px 0;
    line-height: 16px;
    font-size: .9rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #fff;
    text-align: right;
`

export const DropdownContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
`