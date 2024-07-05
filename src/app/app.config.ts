import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private colaboradores = [
    { id: 1, nome: 'João Silva', cargo: 'Desenvolvedor' },
    { id: 2, nome: 'Maria Souza', cargo: 'Designer' },
    { id: 3, nome: 'Pedro Almeida', cargo: 'Analista de Dados' }
  ];

  constructor() { }

  getColaboradores() {
    return this.colaboradores;
  }

  adicionarColaborador(colaborador: any) {
    const novoId = this.colaboradores.length > 0 ? this.colaboradores[this.colaboradores.length - 1].id + 1 : 1;
    colaborador.id = novoId;
    this.colaboradores.push(colaborador);
  }

  editarColaborador(colaborador: any) {
    const index = this.colaboradores.findIndex(c => c.id === colaborador.id);
    if (index !== -1) {
      this.colaboradores[index] = colaborador;
    }
  }

  excluirColaborador(id: number) {
    this.colaboradores = this.colaboradores.filter(c => c.id !== id);
  }
}


