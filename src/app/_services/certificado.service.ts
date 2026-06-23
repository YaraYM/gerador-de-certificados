import { Injectable } from '@angular/core';
import { Certificado } from '../Interfaces/certificados';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: Certificado[] = [];

  constructor() { };

  adicionarCertificado(certificado: Certificado) {
    this.certificados.push(certificado);
    console.log(this.certificados);
  }
}
