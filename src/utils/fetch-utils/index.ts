

const fetchWithErrorHandling = async (url: string, options?: RequestInit) => {
    const res = await fetch(url, options);
    if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData?.message)
        throw new Error(errorData?.message || 'An error occurred');
    }
    return res.json();
};

export default { fetchWithErrorHandling }