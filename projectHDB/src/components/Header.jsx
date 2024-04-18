import '../styles/hedear.css';
export default function Header() {
    return (
        <>
            <header id='haut'>
                <img src='/logo.png' className='logo-head' width={'140'} height={'100'} />
                <div className='links'>
                    <ul>
                        <li><a href='#pack'>Pack</a></li>
                        <li><a href='#projet'>Projets</a></li>
                        <li><a href='#contact'>Contactez-Nous</a></li>
                    </ul>
                </div>
            </header>
            <section class="top-nav" id='Up'>
                <div>
                    <img src='/logo.png' className='logo-head' width={'140'} height={'100'} />
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li><a href='#pack'>Pack</a></li>
                    <li><a href='#projet'>Projets</a></li>
                    <li><a href='#contact'>Contactez-Nous</a></li>
                </ul>
            </section>
        </>

    );
}
