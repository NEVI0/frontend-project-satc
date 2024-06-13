export const currencyFormatter = (value: string | number) => {
    try {
        return Number(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    } catch (error) {
        return 'Error!';
    }
}