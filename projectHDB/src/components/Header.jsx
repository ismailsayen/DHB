import '../styles/hedear.css';
export default function Header() {
    return (
        <header>
            <img src='/logo.png' width={'140'} height={'100'} />
            <div className='links'>
                <ul>
                    <li><a href='#'>Pack 1</a></li>
                    <li><a href='#'>Projets</a></li>
                    <li><a href='#'>Pack 2</a></li>
                </ul>
            </div>
        </header>
    );
}
