import './_logo.scss'
import Image from 'next/image'
import logo from '@/public/logo.svg'

export default function Logo() {
    return (
        <a href='/'>
            <Image
                src={logo}
                className='header--logo'
            />
        </a>
    )
}