import '../styles/hedear.css';
export default function Header() {
    return (
        <header id='haut'>
            <img src='/logo.png' width={'140'} height={'100'} />
            <div className='links'>
                <ul>
                    <li><a href='#pack'>Pack</a></li>
                    <li><a href='#projet'>Projets</a></li>
                    <li><a href='#contact'>Contactez-Nous</a></li>
                </ul>
            </div>
        </header>
    );
}
