export interface ProcessarTurnoInput {
    nomeAtacante: string;
    nomeDefensor: string;
    danoAtaque: number;
    defesaDefensor: number;
    ehGolpeCritico: boolean;
}

export class GerenciadorBatalha {

    processarTurno({
        nomeAtacante,
        nomeDefensor,
        danoAtaque,
        defesaDefensor,
        ehGolpeCritico
    }: ProcessarTurnoInput): string {

        let danoBase = danoAtaque;

        if (ehGolpeCritico) {
            danoBase = danoAtaque * 2;
        }

        const danoAplicado = Math.max(
            0,
            danoBase - defesaDefensor
        );

        const tipoAtaque = ehGolpeCritico
            ? "🔥 CRÍTICO!"
            : "⚔️ Ataque Normal";

        return `[BATALHA] ${nomeAtacante} atacou ${nomeDefensor} (${tipoAtaque}) -> Dano: ${danoAplicado} HP`;
    }
}