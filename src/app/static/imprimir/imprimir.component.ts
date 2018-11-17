import { Component, OnInit, OnDestroy, } from '@angular/core';
import { InterventoriaService } from '../../core/services/interventoria.service';
import { Interventoria } from '../../core/models/interventoria.model';
import { Proyecto } from '../../core/models/proyecto.model';
import { FuenteFinanciacionProyecto } from '../../core/models/fuenteFinanciacionProyecto.model';
import { FuenteFinanciacionProyectoService } from '../../core/services/fuenteFinanciacionProyecto.service';
import { ProyectoService } from '../../core/services/proyecto.service';
import { Factura } from '../../core/models/factura.model';
import { FacturaService } from '../../core/services/factura.service';
import { FacturaInterventoriaService } from '../../core/services/facturaInterventoria.service';
import { FacturaInterventoria } from '../../core/models/facturaInterventoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ImprimirService } from '../../core/services/imprimir.service';


@Component({
  selector: 'gp-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.scss']
})
export class ImprimirComponent implements OnInit, OnDestroy {
  id: string;
  interventoria: Interventoria = {};

  fuentesPorProyecto: FuenteFinanciacionProyecto[] = [];
  _proyecto: Proyecto = {
    identificacion: '',
    interventor: {
      nombre: '',
      apellido: ''
    }
  };
  valdiadorInverison = false;

  fechaI: Date;
  fechaF: Date;

  hoy = new Date();


  dias: number;

  diasHoy: number;

  progreso: number;


  proyecto = {
    startDate: this.fechaI,
    endDate: this.fechaF,
    progreso: this.progreso
  };


  inversionTotal: number;
  diferenciaInversion = 0;
  facturasPorProyecto: Factura[] = [];
  facturasPorInterventoria: FacturaInterventoria[] = [];
  facturaValor = 0;
  facturaValorTotal = 0;
  facturasPorFuente = [];

  f: Object;
  sumaFacturas = 0;
  f2: Object;
  f3 = [];
  imprimible = '';


  constructor(
    public interventoriaService: InterventoriaService,
    private _route: ActivatedRoute,
    public fuenteFinanaciacionProyectoService: FuenteFinanciacionProyectoService,
    public proyectoService: ProyectoService,
    public facturaService: FacturaService,
    public facturaInterventoriaService: FacturaInterventoriaService,
    public _imprimir: ImprimirService,
    public router: Router
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getInterventoria(this.id);
    this.checkImprimir();
  }
  ngOnDestroy() {
    this._imprimir.toggleImprimir();
  }
  checkImprimir() {
    if (this._imprimir.imprimir === true) {
    } else {
      this._imprimir.toggleImprimir();
    }
  }
  imprimir() {

    window.print();
    window.close();
  }
  getInterventoria(id) {
    this.interventoriaService.getInterventoriaId(id).subscribe(
      data => {
        this.interventoria = data;
        this.getFuentesPorProyecto(data);
        this.getProyectoContratista(data);
        this.getValidadorInversion();
        this.getFacturaInterventoria(data);
        this.getFacturasPorProyecto(data);
        this.fechaI = new Date(this.interventoria.proyecto.fechaInicio);
        this.fechaF = new Date(this.interventoria.proyecto.fechaFin);
        this.dias = this.diffdias(this.fechaI, this.fechaF);
        this.diasHoy = this.diffdias(this.fechaI, this.hoy);
        this.progreso = (this.diasHoy / this.dias) * 100;
        
      },
      error => console.log(error)
    );
  }

  diffdias(fi: Date, ff: Date) {
    if (ff <= fi) {
      return 0;
    } else {
      return (ff.getTime() - fi.getTime()) / (1000 * 60 * 60 * 24);
    }

  }

  getValidadorInversion() {
    if (this.inversionTotal < this.interventoria.proyecto.inversion) {
      this.valdiadorInverison = true;
      this.diferenciaInversion = this.interventoria.proyecto.inversion - this.inversionTotal;
    }
  }
  getFuentesPorProyecto(interventoria: Interventoria) {

    this.fuenteFinanaciacionProyectoService.getFuenteFinanciacionProyecto(interventoria.proyecto._id).subscribe(
      data => this.fuentesPorProyecto = data,
      error => console.log(error),
      () => {
        this.inversionTotal = 0;
        for (let index = 0; index < this.fuentesPorProyecto.length; index++) {
          this.inversionTotal = this.inversionTotal + this.fuentesPorProyecto[index].inversion;
        }
        this.facturasPorFuete();
      }
    );
  }
  getFacturasPorProyecto(interventoria: Interventoria) {
    this.facturaService.getFactura(interventoria.proyecto._id).subscribe(
      data => this.facturasPorProyecto = data,
      error => console.log(error),
      () => {
        this.facturaValorTotal = 0;
        for (let index = 0; index < this.facturasPorProyecto.length; index++) {
          this.facturaValorTotal = this.facturaValorTotal + this.facturasPorProyecto[index].valor;
        }
      }
    );
  }
  getFacturaInterventoria(interventoria: Interventoria) {
    this.facturaInterventoriaService.getFacturaInterventoria(interventoria._id).subscribe(
      data => this.facturasPorInterventoria = data,
      error => console.log(error),
      () => {
        this.facturaValor = 0;
        for (let index = 0; index < this.facturasPorInterventoria.length; index++) {
          this.facturaValor = this.facturaValor + this.facturasPorInterventoria[index].factura.valor;
        }
      }
    );
  }
  getProyectoContratista(interventoria: Interventoria) {

    this.proyectoService.getProyecto(interventoria.proyecto._id).subscribe(
      data => this._proyecto = data,
      error => console.log(error)
    );
  }


  facturasPorFuete() {

    for (let f = 0; f < this.fuentesPorProyecto.length; f++) {
      const fuente = this.fuentesPorProyecto[f];
      this.f = new Object();
      this.facturaService.getFacturaFuente(fuente.fuenteProyecto._id, this.interventoria.proyecto._id).subscribe(
        data => {
          this.sumaFacturas = 0;
          this.f3 = [];
          for (let index = 0; index < data.length; index++) {
            this.sumaFacturas = this.sumaFacturas + data[index].valor;
            let enInterventoria = false;
            const element = data[index];
            let i = 0;
            this.f2 = new Object();
            // console.log('element' + element._id);

            while (i < this.facturasPorInterventoria.length) {

              const e = this.facturasPorInterventoria[i];
              // console.log(e.factura._id);

              if (e.factura._id === element._id) {
                enInterventoria = true;
                break;
              }
              i++;
            }
            if (enInterventoria === true) {
              this.f2 = {
                factura: element,
                enInterventoria: true
              };
              this.f3.push(this.f2);
            } else {
              this.f2 = {
                factura: element,
                enInterventoria: false
              };
              this.f3.push(this.f2);
            }
          }
          this.f = {
            fuente: fuente,
            facturas: this.f3,
            totalFacturas: this.sumaFacturas
          };
          this.facturasPorFuente.push(this.f);
        },
        error => console.log(error)
      );

    }
    console.log(this.facturasPorFuente);
  }
}


