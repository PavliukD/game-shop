import Container from '../container/container'
import './_header.scss'

export default function Header({ children }) {
    return (
        <header>
            {children}
        </header>
        
    )
}