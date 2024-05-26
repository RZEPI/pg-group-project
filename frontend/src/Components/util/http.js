import {QueryClient} from '@tanstack/react-query';

const BACKEND_URL = 'http://localhost:3000';

export async function fetchQuestion({signal, id})
{
    const response = await fetch(`${BACKEND_URL}/question/${id}`, {signal});
    return await response.json();
}

export async function fetchAllQuestions({signal})
{
    const response = await fetch(`${BACKEND_URL}/question`, {signal});
    return await response.json();
}
export const queryClient = new QueryClient();