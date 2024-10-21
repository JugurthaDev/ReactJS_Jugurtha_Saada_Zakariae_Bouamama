import { http, HttpResponse } from 'msw';
import shoesData from './fixtures/shoes.json';

export const handlers = [

    http.get("/api/shoes", async () => HttpResponse.json(shoesData, {status: 200})),

    http.get('/api/shoes/:id', async (req, res, ctx) => {
        const { id } = req.params;
        const shoe = shoesData.find((shoe) => shoe.id === Number(id));

        if (shoe) {
            return HttpResponse.json(shoe, { status: 200 });
        } else {
            return HttpResponse.json({ message: 'Shoe not found' }, { status: 404 });
        }
    }),
];
