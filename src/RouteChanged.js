import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as Viewport from './viewport.js';

function ScrollToTop({ children }) {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        Viewport.init();
    }, [location.pathname]);

    return ( children );
}

export default ScrollToTop;