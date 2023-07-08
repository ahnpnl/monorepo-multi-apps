import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$, routeAction$, zod$, z, Form } from '@builder.io/qwik-city';

import styles from './todolist.module.css';

interface ListItemInterface {
    text: string;
}

export const list: ListItemInterface[] = [];

export const useListLoader = routeLoader$(() => {
    return list;
});

export const useAddToListAction = routeAction$(
    (item) => {
        list.push(item);

        return {
            success: true,
        };
    },
    zod$({
        text: z.string().trim().min(1),
    }),
);

export default component$(() => {
    const listLoader = useListLoader();
    const action = useAddToListAction();

    return (
        <>
            <div class="container container-center">
                <h1>
                    <span class="highlight">TODO</span> List
                </h1>
            </div>

            <div
                role="presentation"
                class="ellipsis"
            ></div>

            <div class="container container-center">
                {(listLoader.value.length && (
                    <ul class={styles.list}>
                        {listLoader.value.map((item, index) => (
                            <li key={`items-${index}`}>{item.text}</li>
                        ))}
                    </ul>
                )) || <span class={styles.empty}>No items found</span>}
            </div>

            <div class="container container-center">
                <Form
                    action={action}
                    spaReset
                >
                    <input
                        type="text"
                        name="text"
                        required
                        class={styles.input}
                    />{' '}
                    <button
                        type="submit"
                        class="button-dark"
                    >
                        Add item
                    </button>
                </Form>

                <p class={styles.hint}>PS: This little app works even when JavaScript is disabled.</p>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Qwik Todo List',
};
