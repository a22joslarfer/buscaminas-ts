class Tauler {
    private mida: number;
    private taula: number[][];

    constructor(mida: number) {
        this.mida = mida;
        this.taula = [];

        for (let i = 0; i < mida; i++) {
            this.taula[i] = [];
            for (let j = 0; j < mida; j++) {
                this.taula[i][j] = 0;
            }
        }
    }

    public posarMina(fila: number, columna: number): void {
        if (fila >= 0 && fila < this.mida && columna >= 0 && columna < this.mida) {
            this.taula[fila][columna] = -1;
        }
    }

    public mostrarTauler(): void {
        for (let i = 0; i < this.mida; i++) {
            let fila = "";
            for (let j = 0; j < this.mida; j++) {
                if (this.taula[i][j] === -1) {
                    fila += "* ";
                } else {
                    fila += this.taula[i][j] + " ";
                }
            }
            console.log(fila);
        }
    }
}
