
const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
            <div class="container-fluid">
            <a class="navbar-brand marca" href="/">Vamos pa' la playa</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Quienes somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Promociones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Locales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Contacto</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>  
    );
}

export default Navbar;