export const numberFormatter = (value: string | number) => {   
    try {
        return Number(value).toFixed(2).replace('.',',');
    } catch (error) {
        return 'Error!';
    }
}