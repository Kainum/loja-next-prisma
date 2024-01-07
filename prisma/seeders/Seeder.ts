export abstract class Seeder {
    
    static async seed (qtd: number): Promise<void> {
        console.log('-------------------------------------------------------------');
        console.log(`Rodando seed da classe ${this.name} para ${qtd} registros.`);
    }
}