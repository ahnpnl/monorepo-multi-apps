import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import styles from './styles.css?inline';
import Footer from '~/components/starter/footer/footer';
import Header from '~/components/starter/header/header';

export default component$(() => {
    useStyles$(styles);

    return (
        <>
            <Header />
            <main>
                <Slot />
            </main>
            <Footer />
        </>
    );
});
