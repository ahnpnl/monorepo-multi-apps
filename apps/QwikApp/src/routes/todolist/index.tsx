import { component$ } from '@builder.io/qwik';
import { type DocumentHead, zod$, z, Form, routeLoader$, globalAction$ } from '@builder.io/qwik-city';

interface ListItemInterface {
    text: string;
}

export const list: ListItemInterface[] = [];

export const useListLoader = routeLoader$(() => {
    return list;
});

export const useAddToListAction = globalAction$(
    (item) => {
        list.push(item);

        return {
            success: true,
        };
    },
    zod$({
        text: z.string(),
    }),
);

export default component$(() => {
    const listLoader = useListLoader();
    const action = useAddToListAction();

    return (
        <>
            <h1>Form Action TODO list</h1>
            <ul>
                {listLoader.value.map((item, idx) => (
                    <li key={idx}>{item.text}</li>
                ))}
            </ul>
            <Form
                action={action}
                spaReset
            >
                <input
                    type="text"
                    name="text"
                    required
                />
                <button type="submit">Add item</button>
            </Form>
            <p>This little app works even when JavaScript is disabled.</p>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Qwik To-Do',
};
