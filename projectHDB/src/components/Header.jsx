import '../styles/hedear.css';
export default function Header() {
    return (
        <header>
            <img src='/logo.png' width={'150'} height={'150'} />
            <div className='links'>
                <ul>
                    <li><a href='#'>Pack</a></li>
                    <li><a href='#'>Projets</a></li>
                </ul>
            </div>
        </header>
    );
}
