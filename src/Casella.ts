class Casella {
    private esMina: boolean;
    private estaRevelada: boolean;
    private minesAdjacentes: number;

    constructor(esMina: boolean) {
        this.esMina = esMina;
        this.estaRevelada = false;
        this.minesAdjacentes = 0;
    }

    public revelar(): void {
        this.estaRevelada = true;
    }

    public setMinesAdjacentes(count: number): void {
        this.minesAdjacentes = count;
    }

    public esCasellaMina(): boolean {
        return this.esMina;
    }

    public esCasellaRevelada(): boolean {
        return this.estaRevelada;
    }

    public getMinesAdjacentes(): number {
        return this.minesAdjacentes;
    }

    
}