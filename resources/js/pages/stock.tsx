import { stock } from "@/routes";

export default function Stock() {
    return <></>;
}

Stock.layout = {
    breadcrumbs: [
        {
            title: 'Stock',
            href: stock(),
        },
    ],
};