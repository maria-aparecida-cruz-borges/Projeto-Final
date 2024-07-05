import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaboradores-lista',
  templateUrl: './colaboradores-lista.component.html',
  styleUrls: ['./colaboradores-lista.component.css']
})
export class ColaboradoresListaComponent implements OnInit {
  colaboradores: any[];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.colaboradores = this.colaboradorService.getColaboradores();
  }

  onSelectColaborador(colaborador: any) {
    // Aqui você poderia implementar a lógica para selecionar um colaborador
    // e preencher o formulário de edição.
  }

  onExcluirColaborador(id: number) {
    if (confirm('Tem certeza que deseja excluir este colaborador?')) {
      this.colaboradorService.excluirColaborador(id);
      this.colaboradores = this.colaboradorService.getColaboradores(); // Atualiza a lista após exclusão
    }
  }
}