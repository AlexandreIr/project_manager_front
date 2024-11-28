export default class Currency{
    static formater (
        value: number,
        location: string = 'pt-BR',
        currency: string = 'BRL',
    ): string {
        return (value ?? 0 ).toLocaleString(location, {
            style:'currency',
            currency,
        })
    }
} 