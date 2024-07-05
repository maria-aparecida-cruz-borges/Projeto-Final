import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-colaborador',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './colaborador.component.html',
  styleUrl: './colaborador.component.css'
})
export class ColaboradorFormularioComponent implements OnInit {{{
  nome: string = '';
  cargo: string = '';
  colaboradorId: number | null = null;

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
  
  }

       const colaborador = { id: this.colaboradorId, nome: this.nome, cargo: this.cargo };
      if (this.colaboradorId !== null) {
        this.colaboradorService.editarColaborador(colaborador);
      } else {
        this.colaboradorService.adicionarColaborador(colaborador);
      }
      this.resetForm();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  resetForm() {
    this.nome = '';
    this.cargo = '';
    this.colaboradorId = null;
  }
}
